import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = ({ className = "", compact = false, fullWidth = false }) => {
  const { language, languages, setLanguage, t } = useLanguage();
  return (
    <div className={`language-switcher ${compact ? "language-switcher--compact" : ""} ${fullWidth ? "language-switcher--full" : ""} ${className}`} role="group" aria-label={t.nav.languageSwitcherLabel}>
      {languages.map((option) => <button key={option.code} type="button" onClick={() => setLanguage(option.code)} aria-pressed={option.code === language} aria-label={option.name} title={option.name} className={option.code === language ? "is-active" : ""}>{option.label}</button>)}
    </div>
  );
};

export default LanguageSwitcher;
