import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { departmentInfo } from "@/data/departmentData";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "About", href: "/about" },
      { label: "Academics", href: "/academics" },
      { label: "Research", href: "/research" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Notices", href: "/notices" },
      { label: "Placements", href: "/placements" },
      { label: "Labs", href: "/labs" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Alumni", href: "/alumni" },
      { label: "Gallery", href: "/gallery" },
      { label: "Achievements", href: "/achievements" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Department Info */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-md bg-accent flex items-center justify-center font-mono font-bold text-sm text-accent-foreground">
              AI
            </div>
            <div>
              <div className="font-display font-bold text-sm">{departmentInfo.shortName}</div>
              <div className="text-xs opacity-70">{departmentInfo.institutionShort}</div>
            </div>
          </div>
          <div className="space-y-2 text-sm opacity-80">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              {departmentInfo.address}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              {departmentInfo.phone}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              {departmentInfo.email}
            </p>
          </div>
        </div>

        {/* Link Columns */}
        {footerLinks.map((col) => (
          <div key={col.title}>
            <h4 className="font-display font-bold text-sm mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <p className="text-xs opacity-60">
          © {new Date().getFullYear()} {departmentInfo.name}, {departmentInfo.institutionShort}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
