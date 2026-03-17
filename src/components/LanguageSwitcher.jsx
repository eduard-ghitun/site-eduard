import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = ({ className = "", compact = false, fullWidth = false }) => {
  const { language, languages, setLanguage, t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-[rgba(121,255,172,0.14)] bg-[rgba(8,13,11,0.82)] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] ${fullWidth ? "w-full" : ""} ${className}`}
      role="group"
      aria-label={t.nav.languageSwitcherLabel}
    >
      {languages.map((option) => {
        const isActive = option.code === language;

        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            aria-pressed={isActive}
            aria-label={option.name}
            title={option.name}
            className={`inline-flex min-h-10 items-center justify-center rounded-full px-3 text-xs font-semibold tracking-[0.14em] transition sm:px-3.5 ${
              compact ? "min-h-9 px-2.5 text-[0.68rem] sm:px-3" : ""
            } ${
              fullWidth ? "flex-1" : ""
            } ${
              isActive
                ? "border border-[rgba(121,255,172,0.28)] bg-[rgba(121,255,172,0.12)] text-[color:var(--neon)] shadow-[0_0_16px_rgba(92,255,154,0.08)]"
                : "text-[color:var(--muted)] hover:bg-[rgba(121,255,172,0.06)] hover:text-[color:var(--text)]"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
