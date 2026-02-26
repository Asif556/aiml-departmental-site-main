import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { navLinks, departmentInfo } from "@/data/departmentData";
import uemLogo from "@/assets/UEM_LOGO.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-card border-b border-border transition-shadow duration-200 ${
        scrolled ? "shadow-md backdrop-blur-sm bg-card/95" : ""
      }`}
    >
      <div className="flex items-center h-[68px]">
        {/* Logos at extreme left */}
        <div className="flex items-center gap-2 pl-2 shrink-0">
          <img src="/IEM.png" alt="IEM Logo" className="h-10 w-auto" />
          <img src={uemLogo} alt="UEM Logo" className="h-8 w-auto" />
        </div>

        {/* Rest of navbar in container */}
        <div className="flex items-center justify-center h-full flex-1">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="px-2 h-9 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-mono font-bold text-xs">
              CSE(AI)
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-sm text-foreground leading-tight">{departmentInfo.shortName}</div>
              <div className="text-[11px] text-muted-foreground">{departmentInfo.institutionShort}</div>
            </div>
          </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={link.href}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.href || location.pathname.startsWith(link.href + "/")
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>
              {link.children && openDropdown === link.label && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-primary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-md hover:bg-secondary transition-colors" aria-label="Search">
            <Search className="w-5 h-5 text-foreground/60" />
          </button>
          <button
            className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[68px] bg-card z-40 overflow-y-auto">
          <div className="p-6 space-y-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.href}
                  className="block py-3 px-4 text-base font-medium text-foreground hover:bg-secondary rounded-md"
                  onClick={() => !link.children && setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 border-l-2 border-border pl-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
