import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/booking", label: "Book Now" },
  { href: "/referral", label: "Referral Program" },
  { href: "/contact", label: "Contact" },
];

const serviceAreas = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Vaughan",
  "Markham",
  "Richmond Hill",
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <span className="font-heading font-bold text-2xl text-gradient-hero">
                JMR
              </span>
              <span className="font-sans font-light tracking-[0.3em] uppercase text-background/60 text-[10px]">
                Cleaning
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Because every corner deserves <span className="text-primary font-semibold">CARE</span>.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading text-lg mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area} className="text-background/70 text-sm flex items-center gap-2">
                  <MapPin size={14} className="text-primary" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+14165551234"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center">
                    <Phone size={16} />
                  </div>
                  (416) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@jmrcleaning.ca"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center">
                    <Mail size={16} />
                  </div>
                  hello@jmrcleaning.ca
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} JMR Cleaning. All rights reserved.
          </p>
          <p className="text-background/50 text-sm italic">
            Because every corner deserves <span className="text-primary">CARE</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
