import React from 'react';
import { X, Check, MessageCircle, ArrowRight, ShieldCheck, Fuel, Gauge, Calendar, Cog } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const VehicleModal: React.FC = () => {
  const { selectedVehicleForModal, setSelectedVehicleForModal, setCurrentPage, setOrderPreFill } = useApp();

  if (!selectedVehicleForModal) return null;

  const vehicle = selectedVehicleForModal;

  const handleOrder = () => {
    setOrderPreFill({ brand: vehicle.brand, model: vehicle.model });
    setSelectedVehicleForModal(null);
    setCurrentPage('commander');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = `Bonjour DIAMANT SERVICES, je suis intéressé par le véhicule : ${vehicle.brand} ${vehicle.model} (${vehicle.year}) au prix de ${vehicle.price}. Est-il disponible ?`;
  const whatsappUrl = `https://wa.me/221778348543?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative max-w-4xl w-full bg-[#0A1324] border border-[#1E60D5]/30 rounded-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto shadow-2xl text-white">
        {/* Close Button */}
        <button
          onClick={() => setSelectedVehicleForModal(null)}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-2">
          <span className="text-[#38BDF8] font-bold uppercase">{vehicle.brand}</span>
          <span className="text-neutral-500">·</span>
          <span className="text-neutral-300">{vehicle.bodyType}</span>
          <span className="text-neutral-500">·</span>
          <span className="text-neutral-400">Année {vehicle.year}</span>
          {vehicle.isExample && (
            <span className="px-2 py-0.5 rounded text-[10px] bg-neutral-800 text-neutral-400 border border-white/10 ml-2">
              Modèle de Démonstration
            </span>
          )}
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
          {vehicle.name}
        </h3>

        {/* Price and Status banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#0F203C] border border-[#1E60D5]/20 mb-6">
          <div>
            <div className="text-[11px] text-neutral-400 uppercase tracking-wider">Tarif indicatif</div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
              {vehicle.price}
            </div>
          </div>
          <div>
            <span className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 ${
              vehicle.status === 'disponible'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : vehicle.status === 'en_arrivage'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
            }`}>
              <span className="w-2 h-2 rounded-full bg-current" />
              {vehicle.status === 'disponible' ? 'Disponible à Dakar' : vehicle.status === 'en_arrivage' ? 'En transit maritime' : 'Disponible sur commande'}
            </span>
          </div>
        </div>

        {/* Vehicle Image */}
        <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-6 bg-neutral-900 border border-white/10">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#38BDF8] shrink-0" />
            <div>
              <div className="text-[10px] text-neutral-400 uppercase">Année</div>
              <div className="text-xs sm:text-sm font-bold text-white font-mono">{vehicle.year}</div>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center gap-3">
            <Fuel className="w-5 h-5 text-[#38BDF8] shrink-0" />
            <div>
              <div className="text-[10px] text-neutral-400 uppercase">Carburant</div>
              <div className="text-xs sm:text-sm font-bold text-white">{vehicle.fuel}</div>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center gap-3">
            <Cog className="w-5 h-5 text-[#38BDF8] shrink-0" />
            <div>
              <div className="text-[10px] text-neutral-400 uppercase">Boîte</div>
              <div className="text-xs sm:text-sm font-bold text-white">{vehicle.transmission}</div>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center gap-3">
            <Gauge className="w-5 h-5 text-[#38BDF8] shrink-0" />
            <div>
              <div className="text-[10px] text-neutral-400 uppercase">Kilométrage</div>
              <div className="text-xs sm:text-sm font-bold text-white font-mono">{vehicle.mileage}</div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-2">Présentation du modèle</h4>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {vehicle.description}
          </p>
        </div>

        {/* Features list */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-3">Équipements & Options incluses</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
            {vehicle.features?.map((feat: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 p-2 rounded bg-white/[0.02]">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Assurance badges */}
        <div className="p-4 rounded-xl bg-[#070D18] border border-white/[0.08] flex items-center gap-3 mb-6 text-xs text-neutral-300">
          <ShieldCheck className="w-6 h-6 text-[#D4AF37] shrink-0" />
          <div>
            <strong className="text-white">Garantie & Sérénité Diamant Services :</strong> Véhicules inspectés, traçabilité certifiée et accompagnement complet dédouanement & immatriculation au Sénégal.
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/[0.08]">
          <button
            onClick={handleOrder}
            className="w-full sm:flex-1 py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1E60D5] to-[#1448A6] hover:from-[#256ee8] hover:to-[#1752bd] rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <span>Commander ce modèle</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-3.5 px-5 text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Échanger sur WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
