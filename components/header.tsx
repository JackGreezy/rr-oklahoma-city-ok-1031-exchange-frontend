"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/config";

const tools = [
  { name: "Boot Calculator", href: "/tools/boot-calculator" },
  { name: "Exchange Cost Estimator", href: "/tools/exchange-cost-estimator" },
  { name: "Identification Rules Checker", href: "/tools/identification-rules-checker" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = pathname === "/";

  // Handle scroll for transparent header on home page
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Determine header style based on scroll and page
  const headerBg = isHomePage && !scrolled
    ? "bg-transparent"
    : "bg-white/95 backdrop-blur border-b border-gray-100";
  
  const textColor = isHomePage && !scrolled
    ? "text-white"
    : "text-gray-900";

  const logoColor = isHomePage && !scrolled
    ? "text-white"
    : "text-gray-900";

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className={`font-heading text-lg tracking-wider ${logoColor} md:text-xl`}>
            <span className="font-heading">1031 EXCHANGE OKC</span>
            <span className={`mt-0.5 block text-[10px] font-normal tracking-[0.2em] ${isHomePage && !scrolled ? "text-white/70" : "text-gray-500"}`}>
              Oklahoma City 1031 Exchange Solutions
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className={`hidden items-center gap-5 text-sm font-medium xl:gap-7 ${textColor} lg:flex`}>
          <Link 
            className="transition-opacity hover:opacity-70" 
            href="/services"
          >
            Services
          </Link>
          <Link 
            className="transition-opacity hover:opacity-70" 
            href="/service-areas"
          >
            Service Areas
          </Link>
          <Link 
            className="transition-opacity hover:opacity-70" 
            href="/tools"
          >
            Tools
          </Link>
          <Link 
            className="transition-opacity hover:opacity-70" 
            href="/property-types"
          >
            Property Types
          </Link>
          <Link 
            className="transition-opacity hover:opacity-70" 
            href="/blog"
          >
            Blog
          </Link>
          <a
            className={`border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
              isHomePage && !scrolled
                ? "border-white/60 hover:bg-white hover:text-gray-900"
                : "border-gray-300 hover:border-gray-900"
            }`}
            href={PHONE_HREF}
          >
            Call {PHONE_NUMBER}
          </a>
          <Link className="transition-opacity hover:opacity-70" href="/contact">
            Contact
          </Link>
        </nav>

        {/* Menu dots / hamburger */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            type="button"
            className={`p-2 lg:hidden ${textColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-gray-100 bg-white text-gray-900 lg:hidden">
          <nav className="mx-auto max-w-7xl px-6 py-6">
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Services
                </h3>
                <ul className="space-y-2">
                  {servicesData.slice(0, 6).map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={service.route}
                        className="block text-sm text-gray-700 transition-colors hover:text-gray-900"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/services"
                      className="block text-sm font-semibold text-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      View All Services
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Service Areas
                </h3>
                <ul className="space-y-2">
                  {locationsData.slice(0, 6).map((location) => (
                    <li key={location.slug}>
                      <Link
                        href={location.route}
                        className="block text-sm text-gray-700 transition-colors hover:text-gray-900"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/service-areas"
                      className="block text-sm font-semibold text-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      View All Service Areas
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Tools
                </h3>
                <ul className="space-y-2">
                  {tools.map((tool) => (
                    <li key={tool.href}>
                      <Link
                        href={tool.href}
                        className="block text-sm text-gray-700 transition-colors hover:text-gray-900"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {tool.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/property-types"
                      className="block text-sm font-medium text-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Property Types
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="block text-sm font-medium text-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="block text-sm font-medium text-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 grid gap-3">
                  <a
                    href={PHONE_HREF}
                    className="btn-primary w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Call {PHONE_NUMBER}
                  </a>
                  <Link
                    href="/contact"
                    className="btn-outline w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Free Guidance
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
