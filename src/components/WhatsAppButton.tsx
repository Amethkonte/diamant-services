import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const WhatsAppButton: React.FC = () => {
  const { currentPage } = useApp();
  const [showTooltip, setShowTooltip] = useState(false);

  // Context-specific WhatsApp pre-filled message
  let defaultMessage = "Bonjour DIAMANT SERVICES, je souhaite avoir des informations concernant vos services automobiles.";
  if (currentPage === 'commander') {
    defaultMessage = "Bonjour DIAMANT SERVICES, je souhaite avoir des informations concernant la commande d'un véhicule.";
  } else if (currentPage === 'location') {
    defaultMessage = "Bonjour DIAMANT SERVICES, je souhaite avoir des informations concernant la location d'un véhicule.";
  } else if (currentPage === 'vehicules') {
    defaultMessage = "Bonjour DIAMANT SERVICES, je viens de consulter votre catalogue et souhaite des détails sur la disponibilité d'un véhicule.";
  } else if (currentPage === 'importation') {
    defaultMessage = "Bonjour DIAMANT SERVICES, je souhaite des renseignements sur le shipping express et le dédouanement de véhicule au Sénégal.";
  }

  const whatsappUrl = `https://wa.me/221778348543?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip hint */}
      {showTooltip && (
        <div className="mb-2 p-3 bg-[#0A192F] border border-[#25D366]/40 rounded-xl shadow-2xl text-xs max-w-xs text-white relative animate-fade-in">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-neutral-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-semibold text-[#25D366] flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            Diamant Services en direct
          </div>
          <p className="text-neutral-300 text-[11px] leading-tight">
            Discutez immédiatement avec Demba Diamant sur WhatsApp pour toute demande urgente.
          </p>
        </div>
      )}

      {/* Floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Contacter Diamant Services sur WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current text-white" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide uppercase">
          WhatsApp Direct
        </span>
      </a>
    </div>
  );
};
