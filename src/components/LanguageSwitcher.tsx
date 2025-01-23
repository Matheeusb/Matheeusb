import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt-BR' ? 'en-US' : 'pt-BR';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:bg-cyan-500/20 hover:text-cyan-400"
      aria-label="Toggle language"
    >
      <Languages size={18} />
      <span>{i18n.language === 'pt-BR' ? 'EN' : 'PT'}</span>
    </button>
  );
};

export default LanguageSwitcher;