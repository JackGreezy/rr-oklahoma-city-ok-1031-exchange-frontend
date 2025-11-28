import { NextRequest, NextResponse } from "next/server";
import { getBrand } from '@/lib/brand';
import { sendCustomerConfirmation, sendInternalNotifications } from '@/lib/email/sendgrid';

async function verifyTurnstileToken(token: string): Promise<boolean> {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    console.warn("TURNSTILE_SECRET_KEY not set, skipping verification");
    return true;
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

async function sendToZapier(formData: any) {
  if (!process.env.ZAPIER_WEBHOOK_URL) {
    console.warn("Zapier webhook not configured, skipping");
    return;
  }

  try {
    await fetch(process.env.ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  } catch (error) {
    console.error("Zapier webhook error:", error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { turnstileToken, ...formData } = body;

    // Verify Turnstile token
    if (turnstileToken) {
      const isValid = await verifyTurnstileToken(turnstileToken);
      if (!isValid) {
        return NextResponse.json({ error: "Invalid security verification" }, { status: 400 });
      }
    }

    // Send to Zapier webhook
    await sendToZapier({
      ...formData,
      timestamp: new Date().toISOString(),
    });

    // Send emails via SendGrid template
    const brand = getBrand();
    const lead = {
      name: String(formData.name || ''),
      email: String(formData.email || ''),
      phone: formData.phone ? String(formData.phone).replace(/\D/g, '') : undefined,
      phone_plain: formData.phone ? String(formData.phone).replace(/\D/g, '') : undefined,
      projectType: String(formData.projectType || '1031 Exchange Project'),
      property: formData.property ? String(formData.property) : undefined,
      estimatedCloseDate: formData.estimatedCloseDate ? String(formData.estimatedCloseDate) : undefined,
      city: formData.city ? String(formData.city) : undefined,
      company: formData.company ? String(formData.company) : undefined,
      timeline: formData.timeline ? String(formData.timeline) : undefined,
      message: formData.message ? String(formData.message) : (formData.details ? String(formData.details) : undefined),
    };

    const brandWithDate = {
      ...brand,
      submitted_date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };

    try {
      await Promise.all([
        sendCustomerConfirmation(brandWithDate, lead),
        sendInternalNotifications(brandWithDate, lead),
      ]);
      console.log('SendGrid emails sent successfully to:', formData.email);
    } catch (error) {
      console.error("SendGrid email failed", error);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
