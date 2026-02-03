import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import stccLogo from "@/assets/stcc_logo.svg";
import { useLanguage } from "@/i18n/LanguageContext";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export function Footer() {
  const { t } = useLanguage();

  const sitemapLinks = [
    { label: t("nav", "services"), href: "/services" },
    { label: t("nav", "sales"), href: "/sales" },
    { label: t("nav", "about"), href: "/about" },
  ];

  const legalLinks = [
    { label: t("legal", "privacyPolicy"), href: "/privacy-policy" },
    { label: t("legal", "cookiePolicy"), href: "/cookie-policy" },
    { label: t("legal", "terms"), href: "/terms" },
  ];

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto px-three-units py-five-units">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Logo & Description */}
          <div className="flex flex-col">
            <Link to="/">
              <img src={stccLogo} alt="STCC Logo" className="w-auto max-w-[320px] h-auto mb-4 dark:invert" />
            </Link>
            <p className="text-muted-foreground whitespace-nowrap">
              {t("footer", "description")}
            </p>
          </div>

          {/* Links columns - aligned right */}
          <div className="flex gap-16 md:text-right">
            {/* Sitemap */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Sitemap</h4>
              <ul className="space-y-3">
                {sitemapLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t("legal", "legalTitle")}</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} STCC. {t("footer", "allRightsReserved")}
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
