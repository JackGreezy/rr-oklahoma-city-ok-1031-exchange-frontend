import Link from "next/link";
import { PHONE_NUMBER, PHONE_HREF, EMAIL } from "@/lib/config";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        {/* Main footer content */}
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left column - Brand info */}
          <div>
            <div className="font-heading text-lg tracking-wider">
              <span>1031 EXCHANGE OKC</span>
              <span className="mt-0.5 block text-[10px] font-normal tracking-[0.2em] text-gray-500">
                Oklahoma City 1031 Exchange Solutions
              </span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-gray-600">
              Free guidance for property owners planning a 1031 exchange, comparing replacement property or looking for a more passive real estate ownership path.
            </p>
            <div className="mt-8 grid gap-3 sm:max-w-sm">
              <a href={PHONE_HREF} className="btn-primary w-full">
                Call {PHONE_NUMBER}
              </a>
              <Link href="/contact?request=properties" className="btn-outline w-full">
                Get a Free Property List
              </Link>
            </div>
          </div>
          
          {/* Middle column - Contact */}
          <div>
            <h3 className="font-heading text-sm uppercase tracking-wider">Contact</h3>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>
                <Link href={PHONE_HREF} className="hover:text-gray-900">
                  {PHONE_NUMBER}
                </Link>
              </p>
              <p>
                <a href={`mailto:${EMAIL}`} className="hover:text-gray-900">
                  {EMAIL}
                </a>
              </p>
            </div>
          </div>
          
          {/* Right column - Links */}
          <div>
            <h3 className="font-heading text-sm uppercase tracking-wider">
              Oklahoma 1031 Exchange Services
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <h4 className="mb-2 text-xs font-semibold text-gray-900">Services</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {servicesData.slice(0, 4).map((service) => (
                    <li key={service.slug}>
                      <Link href={service.route} className="hover:text-gray-900">
                        {service.name.split(" ").slice(0, 3).join(" ")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-xs font-semibold text-gray-900">Property Types</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>
                    <Link href="/property-types/triple-net-nnn" className="hover:text-gray-900">
                      Triple Net (NNN)
                    </Link>
                  </li>
                  <li>
                    <Link href="/property-types/multi-family" className="hover:text-gray-900">
                      Multi-Family
                    </Link>
                  </li>
                  <li>
                    <Link href="/property-types/commercial" className="hover:text-gray-900">
                      Commercial
                    </Link>
                  </li>
                  <li>
                    <Link href="/property-types/industrial" className="hover:text-gray-900">
                      Industrial
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-xs font-semibold text-gray-900">Service Areas</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {locationsData.slice(0, 4).map((location) => (
                    <li key={location.slug}>
                      <Link href={location.route} className="hover:text-gray-900">
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; 2026. 1031 Exchange Oklahoma City.
          </p>
        </div>
      </div>
    </footer>
  );
}
