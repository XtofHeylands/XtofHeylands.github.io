import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import stccLogo from "@/assets/stcc.svg";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";
import { FlagIcon } from "@/components/FlagIcons";
import { useTheme } from "@/context/ThemeContext";

const languages: { code: Language; label: string }[] = [
  { code: "NL", label: "Nederlands" },
  { code: "EN", label: "English" },
  { code: "FR", label: "Français" },
  { code: "DE", label: "Deutsch" },
];

interface NavbarProps {
  transparent?: boolean;
}

export function Navbar({ transparent = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  const navLinks = [
    { label: t("nav", "services"), href: "/services" },
    { label: t("nav", "sales"), href: "/sales" },
    { label: t("nav", "about"), href: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`w-full ${transparent ? "absolute top-0 left-0 right-0 z-50" : ""}`}>
      <nav className={`flex items-center justify-between px-8 md:px-12 py-8 ${transparent ? "bg-transparent" : "bg-background"}`}>
        {/* Logo */}
        <Link to="/" className="transition-opacity hover:opacity-70">
          <img
            src={stccLogo}
            alt="STCC Logo"
            className="h-8 w-auto dark:invert"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-foreground transition-colors hover:text-muted-foreground ${
                  isActive(link.href) ? "font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="default" asChild className={transparent ? "bg-transparent border-foreground hover:bg-foreground/10" : ""}>
            <Link to="/contact">{t("nav", "contact")}</Link>
          </Button>

          {/* Theme Toggle */}
          <Button 
            variant="outline" 
            size="default" 
            onClick={toggleTheme}
            className={transparent ? "bg-transparent border-foreground hover:bg-foreground/10" : ""}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5 text-indigo-500" />
            ) : (
              <Sun className="h-5 w-5 text-amber-400" />
            )}
          </Button>

          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="default" className={`gap-2 ${transparent ? "bg-transparent border-foreground hover:bg-foreground/10" : ""}`}>
                <FlagIcon code={currentLang.code} className="w-5 h-4 rounded-sm overflow-hidden" />
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-50 bg-background border border-border shadow-lg">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className="cursor-pointer gap-3"
                >
                  <FlagIcon code={lang.code} className="w-5 h-4 rounded-sm overflow-hidden" />
                  <span>{lang.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col p-8">
          <div className="flex items-center justify-between mb-12">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img src={stccLogo} alt="STCC Logo" className="h-8 w-auto dark:invert" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium hover:text-muted-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-4">
            <Button variant="outline" asChild className="w-full">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                {t("nav", "contact")}
              </Link>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                toggleTheme();
                setMobileMenuOpen(false);
              }}
              className="w-full gap-2"
            >
              {theme === "light" ? (
                <>
                  <Moon className="h-5 w-5 text-indigo-500" />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="h-5 w-5 text-amber-400" />
                  <span>Light Mode</span>
                </>
              )}
            </Button>
          </div>

          <div className="mt-auto flex gap-4 pt-8">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-2 text-sm transition-colors ${
                  language === lang.code
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <FlagIcon code={lang.code} className="w-6 h-5 rounded-sm overflow-hidden" />
                <span>{lang.code}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
