import React, { useState, useEffect } from 'react';
import { Search, Menu, X, User, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? `backdrop-blur-md ${darkMode ? 'bg-slate-900/90' : 'bg-white/90'} shadow-lg` 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap">
            <img src="/logo.png" alt="SEION Logo" className="h-8 w-8 animate-fadeInUp" style={{ animationDelay: '0.05s' }} />
            <h1 className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'} animate-fadeInUp`} style={{ animationDelay: '0.1s' }}>
              SEION
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-700'
                } animate-fadeInUp`}
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <button className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'
            }`}>
              <Search className={`w-5 h-5 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`} />
            </button>
            
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-slate-300" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-4 py-2 btn-aquamarine text-sm font-medium rounded-lg transition-colors"
            >
              Book Consultation
            </a>

            <button className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'
            }`}>
              <User className={`w-5 h-5 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`} />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'
              }`}
            >
              {isMenuOpen ? (
                <X className={`w-5 h-5 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${
            darkMode ? 'border-slate-700 bg-slate-900/95' : 'border-slate-200 bg-white/95'
          } backdrop-blur-md`}>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                    darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mx-4 mt-2 px-4 py-2 btn-aquamarine text-sm font-medium rounded-lg transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;