import React from 'react';
import { Phone, MapPin, MessageCircle, ShieldCheck, Mail } from 'lucide-react';
import { DiamantLogo } from './DiamantLogo';
import { useApp, PageView } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { setCurrentPage } = useApp();

  const handleNav = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040810] border-t border-[#1E60D5]/20 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Col 1 & 2: Brand presentation */}
          <div className="lg:col-span-2 space-y-4">
            <DiamantLogo />
            <p className="text-sm font-semibold text-white mt-3">
              « Votre mobilité, notre expertise »
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Concessionnaire automobile multimarque au Sénégal. Nous accompagnons particuliers, entreprises et institutions dans l’achat, la commande sur-mesure, le financement, la location, le shipping express et le dédouanement de véhicules.
            </p>
            <div className="pt-2 text-neutral-300 text-xs">
              <strong>Gérant :</strong> Demba Diamant
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('accueil')} className="hover:text-white transition-colors cursor-pointer">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('vehicules')} className="hover:text-white transition-colors cursor-pointer">
                  Nos Véhicules
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('commander')} className="hover:text-white transition-colors cursor-pointer">
                  Commander un véhicule
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('location')} className="hover:text-white transition-colors cursor-pointer">
                  Location de véhicules
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('importation')} className="hover:text-white transition-colors cursor-pointer">
                  Importation & Shipping
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('apropos')} className="hover:text-white transition-colors cursor-pointer">
                  À propos du groupe
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Nos Prestations
            </h4>
            <ul className="space-y-2.5 text-neutral-300">
              <li>Vente sur commande</li>
              <li>Financement avec dépôt</li>
              <li>Location court & long terme</li>
              <li>Shipping express</li>
              <li>Dédouanement Port de Dakar</li>
              <li>Immatriculation sénégalaise</li>
            </ul>
          </div>

          {/* Col 5: Contact & Coordinates */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact Direct
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Pikine / Dakar</div>
                  <div className="text-[11px] text-neutral-500">Service disponible sur tout le territoire national</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a
                  href="tel:+221778348543"
                  className="font-mono text-white hover:text-[#38BDF8] transition-colors"
                >
                  +221 77 834 85 43
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/221778348543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#25D366] transition-colors"
                >
                  WhatsApp : +221 77 834 85 43
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('admin')}
                  className="text-[11px] text-neutral-500 hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Portail Administrateur</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © 2026 DIAMANT SERVICES. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4">
            <span>Dakar · Pikine · Sénégal</span>
            <span>·</span>
            <span>Concessionnaire Automobile Multimarque</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
