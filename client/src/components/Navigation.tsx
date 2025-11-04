import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Academics", href: "#academics" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "projects", "academics", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg shadow-lg"
            : "bg-background/60 backdrop-blur-md"
        } rounded-full border border-border px-8 py-3`}
      >
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              data-testid={`link-${item.label.toLowerCase()}`}
              className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${
                activeSection === item.href.substring(1) ||
                (item.href === "/" && activeSection === "")
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover-elevate"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 z-40 bg-background/95 backdrop-blur-lg border border-border rounded-2xl shadow-lg w-[calc(100%-2rem)] max-w-sm">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
                className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors hover-elevate ${
                  activeSection === item.href.substring(1) ||
                  (item.href === "/" && activeSection === "")
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
