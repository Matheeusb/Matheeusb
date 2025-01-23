import { NavLink } from 'react-router-dom';
import { Home, User, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold text-cyan-400">
              MB
            </NavLink>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink to="/" className={({isActive}) => `nav-link flex items-center gap-2 ${isActive ? 'active' : ''}`}>
              <Home size={18} />
              <span>{t('nav.home')}</span>
            </NavLink>
            <NavLink to="/profile" className={({isActive}) => `nav-link flex items-center gap-2 ${isActive ? 'active' : ''}`}>
              <User size={18} />
              <span>{t('nav.profile')}</span>
            </NavLink>
            <NavLink to="/blog" className={({isActive}) => `nav-link flex items-center gap-2 ${isActive ? 'active' : ''}`}>
              <BookOpen size={18} />
              <span>{t('nav.blog')}</span>
            </NavLink>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;