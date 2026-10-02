import React, { useState, useEffect } from 'react';
import { Calendar, Users, Fuel, Cog, CheckCircle2, Send, Clock, ShieldCheck, Car } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const RentalPage: React.FC = () => {
  const { rentalVehicles, submitRental, rentalPreFill, setRentalPreFill } = useApp();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState(rentalVehicles[0]?.name || '');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rentalType, setRentalType] = useState<'court' | 'long'>('court');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (rentalPreFill) {
      setSelectedVehicle(rentalPreFill);
      setRentalPreFill(null);
    }
  }, [rentalPreFill, setRentalPreFill]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Veuillez renseigner votre nom complet.');
      return;
    }
    if (!phone.trim()) {
      setError('Veuillez renseigner votre numéro de téléphone.');
      return;
    }
    if (!startDate || !endDate) {
      setError('Veuillez sélectionner les dates de début et de fin de location.');
      return;
    }

    setError('');
    submitRental({
      fullName,
      phone,
      vehicleName: selectedVehicle,
      startDate,
      endDate,
      message: `Type: Location ${rentalType === 'court' ? 'courte durée' : 'longue durée'} — ${message}`
    });
    setSubmitted(true);
  };

  const handleSelectToReserve = (vehName: string) => {
    setSelectedVehicle(vehName);
    const formElem = document.getElementById('rental-form');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E60D5]/15 border border-[#1E60D5]/30 text-xs text-[#38BDF8] font-semibold tracking-wider uppercase font-mono">
          Flotte Premium & Services VIP
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Location de Véhicules à Dakar & Sénégal
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
          Pour vos déplacements d'affaires, réceptions officielles, séjours touristiques ou besoins d'entreprise longue durée. Véhicules prestigieux, climatisés, révisés et entretenus selon les plus hauts standards.
        </p>
      </div>

      {/* 2 Formulas: Courte vs Longue Durée */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`p-8 rounded-3xl border transition-all ${
          rentalType === 'court' 
            ? 'bg-[#0E203C] border-[#1E60D5] shadow-xl' 
            : 'bg-[#0A1324] border-white/10 hover:border-white/20'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider">Formule 01</span>
            <Clock className="w-5 h-5 text-[#38BDF8]" />
          </div>
          <h3 className="text-2xl font-bold font-display text-white mb-2">Location Courte Durée</h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
            Idéal pour vos séjours à Dakar de quelques jours à quelques semaines, réunions professionnelles, délégations diplomatiques et événements privés.
          </p>
          <ul className="space-y-2.5 text-xs text-neutral-300 mb-6">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              <span>Assurance tous risques incluse</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              <span>Option chauffeur bilingue expérimenté disponible</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              <span>Prise en charge aéroport AIBD ou livraison à votre hôtel</span>
            </li>
          </ul>
          <button
            onClick={() => setRentalType('court')}
            className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              rentalType === 'court'
                ? 'bg-[#1E60D5] text-white'
                : 'bg-white/10 text-neutral-300 hover:text-white'
            }`}
          >
            {rentalType === 'court' ? 'Formule sélectionnée' : 'Sélectionner courte durée'}
          </button>
        </div>

        <div className={`p-8 rounded-3xl border transition-all ${
          rentalType === 'long' 
            ? 'bg-[#0E203C] border-[#D4AF37] shadow-xl' 
            : 'bg-[#0A1324] border-white/10 hover:border-white/20'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">Formule 02</span>
            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <h3 className="text-2xl font-bold font-display text-white mb-2">Location Longue Durée (LLD)</h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
            Dédiée aux entreprises, multinationales, ONG et cadres expatriés au Sénégal souhaitant externaliser la gestion et l'entretien de leur flotte automobile.
          </p>
          <ul className="space-y-2.5 text-xs text-neutral-300 mb-6">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Contrats de 6 à 36 mois avec mensualités fixes</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Entretien préventif et véhicule de remplacement immédiat</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Facturation déductible des charges d’exploitation</span>
            </li>
          </ul>
          <button
            onClick={() => setRentalType('long')}
            className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              rentalType === 'long'
                ? 'bg-[#D4AF37] text-black font-semibold'
                : 'bg-white/10 text-neutral-300 hover:text-white'
            }`}
          >
            {rentalType === 'long' ? 'Formule sélectionnée' : 'Sélectionner longue durée'}
          </button>
        </div>
      </div>

      {/* Fleet of Rental Vehicles */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Véhicules Disponibles à la Location
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Sélection de notre parc automobile inspecté et prêt à l'emploi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rentalVehicles.map((veh) => (
            <div
              key={veh.id}
              className="rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20 hover:border-[#1E60D5]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={veh.image}
                    alt={veh.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1E60D5]/90 text-white px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                    {veh.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white font-display mb-2">
                    {veh.name}
                  </h3>

                  <div className="text-lg font-bold text-[#38BDF8] font-mono tabular-nums mb-1">
                    {veh.dailyRate}
                  </div>
                  {veh.monthlyRate && (
                    <div className="text-xs text-neutral-400 font-mono mb-4">
                      {veh.monthlyRate}
                    </div>
                  )}

                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/[0.06] text-[11px] text-neutral-300 text-center">
                    <div className="p-2 rounded bg-white/[0.03]">
                      <Users className="w-3.5 h-3.5 mx-auto text-[#38BDF8] mb-1" />
                      <span>{veh.seats} places</span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.03]">
                      <Cog className="w-3.5 h-3.5 mx-auto text-[#38BDF8] mb-1" />
                      <span>{veh.transmission}</span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.03]">
                      <Fuel className="w-3.5 h-3.5 mx-auto text-[#38BDF8] mb-1" />
                      <span>{veh.fuel}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => handleSelectToReserve(veh.name)}
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#1E60D5] hover:bg-[#256ee8] rounded-xl transition-all cursor-pointer"
                >
                  Réserver ce véhicule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reservation Form */}
      <div id="rental-form" className="max-w-3xl mx-auto bg-[#0A1324] border border-[#1E60D5]/30 rounded-3xl p-6 sm:p-12 shadow-2xl">
        {submitted ? (
          <div className="text-center py-10 space-y-5">
            <CheckCircle2 className="w-16 h-16 text-[#25D366] mx-auto animate-bounce" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Réservation envoyée avec succès !
            </h3>
            <p className="text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed">
              Merci <strong>{fullName}</strong>. Votre demande de réservation pour le modèle <strong>{selectedVehicle}</strong> du {startDate} au {endDate} est transmise au service location. Nous vous confirmons la disponibilité sous peu.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/15"
              >
                Effectuer une autre réservation
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold text-white font-display">
                Demande de Réservation de Location
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Remplissez ce formulaire pour bloquer vos dates sans paiement immédiat.
              </p>
            </div>

            {error && (
              <div className="p-3.5 rounded-xl bg-red-950/50 border border-red-800 text-xs text-red-200">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Nom complet *
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ex: Abdoulaye Diallo"
                  className="w-full bg-[#070D18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#1E60D5]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Numéro de Téléphone *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+221 77 000 00 00"
                  className="w-full bg-[#070D18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#1E60D5] font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                Véhicule souhaité *
              </label>
              <select
                value={selectedVehicle}
                onChange={(e) => setSelectedVehicle(e.target.value)}
                className="w-full bg-[#070D18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#1E60D5]"
              >
                {rentalVehicles.map(v => (
                  <option key={v.id} value={v.name}>{v.name} ({v.dailyRate})</option>
                ))}
                <option value="Autre demande spécifique">Autre demande spécifique</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Date de début *
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-[#070D18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#1E60D5]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Date de fin *
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full bg-[#070D18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#1E60D5]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                Message / Besoins particuliers (Chauffeur, lieu de livraison...)
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ex: Besoin d'un chauffeur pour 3 jours, prise en charge à l'aéroport AIBD..."
                className="w-full bg-[#070D18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#1E60D5]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1E60D5] to-[#1448A6] hover:from-[#256ee8] hover:to-[#1752bd] rounded-xl shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
            >
              <Send className="w-4 h-4" />
              <span>Transmettre ma demande de réservation</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
