import { PhoneIcon } from "@heroicons/react/24/solid";

export default function StickyCall({ phone }: { phone: string }) {
  const tel = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <a
      href={tel}
      aria-label={`Call ${phone}`}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-gray-900 text-white shadow-2xl transition hover:-translate-y-0.5 hover:bg-black md:hidden"
    >
      <PhoneIcon className="h-6 w-6" />
      <span className="sr-only">Call {phone}</span>
    </a>
  );
}
