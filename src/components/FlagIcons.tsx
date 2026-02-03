import { Language } from "@/i18n/translations";

interface FlagIconProps {
  className?: string;
}

export const BelgiumFlag = ({ className = "w-5 h-4" }: FlagIconProps) => (
  <svg viewBox="0 0 20 15" className={className} aria-hidden="true">
    <rect x="0" y="0" width="6.67" height="15" fill="#000000" />
    <rect x="6.67" y="0" width="6.67" height="15" fill="#FFD90C" />
    <rect x="13.33" y="0" width="6.67" height="15" fill="#F31830" />
  </svg>
);

export const UKFlag = ({ className = "w-5 h-4" }: FlagIconProps) => (
  <svg viewBox="0 0 20 15" className={className} aria-hidden="true">
    <rect width="20" height="15" fill="#012169" />
    <path d="M0,0 L20,15 M20,0 L0,15" stroke="#FFFFFF" strokeWidth="2.5" />
    <path d="M0,0 L20,15 M20,0 L0,15" stroke="#C8102E" strokeWidth="1.5" />
    <path d="M10,0 V15 M0,7.5 H20" stroke="#FFFFFF" strokeWidth="4" />
    <path d="M10,0 V15 M0,7.5 H20" stroke="#C8102E" strokeWidth="2.5" />
  </svg>
);

export const FranceFlag = ({ className = "w-5 h-4" }: FlagIconProps) => (
  <svg viewBox="0 0 20 15" className={className} aria-hidden="true">
    <rect x="0" y="0" width="6.67" height="15" fill="#002395" />
    <rect x="6.67" y="0" width="6.67" height="15" fill="#FFFFFF" />
    <rect x="13.33" y="0" width="6.67" height="15" fill="#ED2939" />
  </svg>
);

export const GermanyFlag = ({ className = "w-5 h-4" }: FlagIconProps) => (
  <svg viewBox="0 0 20 15" className={className} aria-hidden="true">
    <rect x="0" y="0" width="20" height="5" fill="#000000" />
    <rect x="0" y="5" width="20" height="5" fill="#DD0000" />
    <rect x="0" y="10" width="20" height="5" fill="#FFCC00" />
  </svg>
);

export const FlagIcon = ({ code, className }: { code: Language; className?: string }) => {
  switch (code) {
    case "NL":
      return <BelgiumFlag className={className} />;
    case "EN":
      return <UKFlag className={className} />;
    case "FR":
      return <FranceFlag className={className} />;
    case "DE":
      return <GermanyFlag className={className} />;
    default:
      return null;
  }
};
