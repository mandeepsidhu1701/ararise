import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Destinations", href: "/destinations" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === "/";
  const showLightText = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-card transition-all",
              showLightText ? "bg-white/20 backdrop-blur-sm" : "bg-gradient-hero"
            )}>
              <span className="text-primary-foreground font-display font-bold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-display font-bold text-xl leading-tight transition-colors",
                showLightText ? "text-white" : "text-primary"
              )}>
                AraRise
              </span>
              <span className={cn(
                "text-xs font-medium leading-tight transition-colors",
                showLightText ? "text-white/80" : "text-muted-foreground"
              )}>
                A Pathway to Support
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "relative font-medium text-sm transition-colors",
                  location.pathname === link.href
                    ? showLightText ? "text-white" : "text-primary"
                    : showLightText ? "text-white/90 hover:text-white" : "text-foreground hover:text-primary"
                )}
              >
                {link.name}
                {location.pathname === link.href && (
                  <span className={cn(
                    "absolute -bottom-1 left-0 right-0 h-0.5 rounded-full",
                    showLightText ? "bg-white" : "bg-secondary"
                  )} />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" className={cn(showLightText && "text-white hover:text-white hover:bg-white/10")} asChild>
              <a href="tel:+64000000000" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
            </Button>
            <Button variant="secondary" size="default" asChild>
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              showLightText ? "hover:bg-white/10" : "hover:bg-muted"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={cn("w-6 h-6", showLightText ? "text-white" : "text-foreground")} />
            ) : (
              <Menu className={cn("w-6 h-6", showLightText ? "text-white" : "text-foreground")} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-card rounded-2xl p-4 shadow-card space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "block px-4 py-3 rounded-xl font-medium transition-colors",
                  location.pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-border mt-2">
              <Button variant="secondary" className="w-full" asChild>
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}