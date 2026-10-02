import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Shield, ArrowRight } from 'lucide-react';
import { DiamantLogo } from './DiamantLogo';
import { useApp, PageView } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const { currentPage, setCurrentPage } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageView }[] = [
    { label: 'Accueil', page: 'accueil' },
    { label: 'Véhicules', page: 'vehicules' },
    { label: 'Nos services', page: 'services' },
    { label: 'Commander', page: 'commander' },
    { label: 'Location', page: 'location' },
    { label: 'Importation', page: 'importation' },
    { label: 'À propos', page: 'apropos' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNav = (page: PageView) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070D18]/95 backdrop-blur-md border-b border-[#1E60D5]/20 shadow-lg shadow-black/40 py-2.5'
          : 'bg-[#070D18]/80 backdrop-blur-sm border-b border-white/[0.06] py-3.5'
      }`}
    >
      {/* Top micro bar for phone & location */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 hidden lg:flex items-center justify-between text-[11px] text-neutral-400 pb-2 mb-2 border-b border-white/[0.04]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Concessionnaire Multimarque & Commande Internationale · Dakar, Sénégal
          </span>
          <span className="text-neutral-600">|</span>
          <span className="text-neutral-400">Gérant : Demba Diamant</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:+221778348543"
            className="flex items-center gap-1.5 text-white hover:text-[#38BDF8] transition-colors font-mono font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-[#E63946]" />
            <span>+221 77 834 85 43</span>
          </a>
          <button
            onClick={() => handleNav('admin')}
            className={`flex items-center gap-1 text-[11px] transition-colors ${
              currentPage === 'admin' ? 'text-[#D4AF37] font-bold' : 'text-neutral-500 hover:text-neutral-300'
            }`}
            title="Espace Administrateur (Gestion)"
          >
            <Shield className="w-3 h-3" />
            <span>Espace Gestion</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNav('accueil')}
          className="cursor-pointer text-left focus:outline-none"
        >
          <DiamantLogo />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs xl:text-sm font-medium text-neutral-300">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`py-1 transition-colors relative cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'hover:text-[#38BDF8]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1E60D5] to-[#E63946] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+221778348543"
            className="lg:hidden flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-neutral-900 border border-white/10 rounded-lg hover:border-white/20 transition-all font-mono"
          >
            <Phone className="w-3.5 h-3.5 text-[#E63946]" />
            <span>Appel direct</span>
          </a>

          <button
            onClick={() => handleNav('commander')}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1E60D5] to-[#1448A6] hover:from-[#256ee8] hover:to-[#1752bd] transition-all rounded-lg shadow-md shadow-[#1E60D5]/20 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>Commander maintenant</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-300 hover:text-white rounded-lg focus:outline-none"
          aria-label="Menu principal"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#E63946]" /> : <Menu className="w-6 h-6 text-[#38BDF8]" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#1E60D5]/20 bg-[#0A1220]/95 backdrop-blur-xl px-6 py-6 mt-3 flex flex-col gap-3 text-sm animate-fade-in">
          <div className="pb-3 border-b border-white/[0.08] flex items-center justify-between">
            <span className="text-xs text-neutral-400">Pikine / Dakar · Sénégal</span>
            <a
              href="tel:+221778348543"
              className="text-xs font-mono font-bold text-[#38BDF8] flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#E63946]" />
              +221 77 834 85 43
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNav(link.page)}
                  className={`text-left px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#1E60D5]/20 text-[#38BDF8] font-bold border border-[#1E60D5]/40'
                      : 'text-neutral-300 hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
            <button
              onClick={() => handleNav('commander')}
              className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1E60D5] to-[#E63946] rounded-lg text-center shadow-lg"
            >
              Commander un véhicule
            </button>
            <button
              onClick={() => handleNav('admin')}
              className="w-full py-2 text-xs text-neutral-400 hover:text-white flex items-center justify-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Accès Espace Administrateur</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
