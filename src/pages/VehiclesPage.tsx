import React, { useState, useMemo } from 'react';
import { Search, Filter, RotateCcw, ArrowRight, ShieldCheck, PlusCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BodyType, TransmissionType, VehicleStatus } from '../types';

export const VehiclesPage: React.FC = () => {
  const { vehicles, setSelectedVehicleForModal, setCurrentPage, setOrderPreFill } = useApp();

  // Filter states
  const [search, setSearch] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedBodyType, setSelectedBodyType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedTransmission, setSelectedTransmission] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(60000000);

  // Dynamic brands list
  const brands = useMemo(() => {
    const list = Array.from(new Set(vehicles.map(v => v.brand)));
    return ['all', ...list];
  }, [vehicles]);

  const bodyTypes: { label: string; value: string }[] = [
    { label: 'Tous types', value: 'all' },
    { label: 'Berline', value: 'Berline' },
    { label: 'SUV', value: 'SUV' },
    { label: '4x4', value: '4x4' },
    { label: 'Coupé', value: 'Coupé' },
  ];

  const filteredVehicles = useMemo(() => {
    return vehicles.filter(v => {
      // Search text
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchesName = v.name.toLowerCase().includes(q);
        const matchesBrand = v.brand.toLowerCase().includes(q);
        const matchesModel = v.model.toLowerCase().includes(q);
        if (!matchesName && !matchesBrand && !matchesModel) return false;
      }

      // Brand
      if (selectedBrand !== 'all' && v.brand !== selectedBrand) return false;

      // Body Type
      if (selectedBodyType !== 'all' && v.bodyType !== selectedBodyType) return false;

      // Status
      if (selectedStatus !== 'all' && v.status !== selectedStatus) return false;

      // Transmission
      if (selectedTransmission !== 'all' && v.transmission !== selectedTransmission) return false;

      // Price filter if priceNumeric exists
      if (v.priceNumeric && v.priceNumeric > maxPrice) return false;

      return true;
    });
  }, [vehicles, search, selectedBrand, selectedBodyType, selectedStatus, selectedTransmission, maxPrice]);

  const resetFilters = () => {
    setSearch('');
    setSelectedBrand('all');
    setSelectedBodyType('all');
    setSelectedStatus('all');
    setSelectedTransmission('all');
    setMaxPrice(60000000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      {/* Header */}
      <div className="border-b border-[#1E60D5]/20 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="text-xs font-mono text-[#38BDF8] font-bold uppercase tracking-widest mb-2">
            Showroom & Importations
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Nos Véhicules
          </h1>
          <p className="text-sm text-neutral-300 mt-2 max-w-2xl">
            Découvrez nos modèles disponibles au Sénégal ou commandables sur-mesure depuis nos réseaux d'approvisionnement internationaux.
          </p>
        </div>

        <button
          onClick={() => setCurrentPage('commander')}
          className="px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1E60D5] to-[#1448A6] hover:brightness-110 shadow-lg flex items-center gap-2 cursor-pointer self-start md:self-auto"
        >
          <span>Commander un modèle non listé</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Demonstration disclaimer notice */}
      <div className="p-4 rounded-xl bg-[#0C1B33] border border-[#1E60D5]/30 text-xs text-neutral-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-[#38BDF8] shrink-0" />
          <span>
            <strong>Mention transparence :</strong> Les fiches ci-dessous sont des exemples de démonstration illustrant la diversité des marques proposées par DIAMANT SERVICES. Vous pouvez demander n'importe quelle marque ou modèle précis via notre formulaire de commande.
          </span>
        </div>
        <button
          onClick={() => setCurrentPage('admin')}
          className="text-[11px] text-[#D4AF37] hover:underline whitespace-nowrap flex items-center gap-1 font-semibold"
        >
          <PlusCircle className="w-3.5 h-3.5" />
          <span>Gérer le catalogue (Admin)</span>
        </button>
      </div>

      {/* Filters Bar */}
      <div className="p-6 rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20 shadow-xl space-y-5">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher par marque, modèle (ex: Mercedes, Prado, Velar)..."
              className="w-full bg-[#070D18] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#1E60D5]"
            />
          </div>

          {/* Reset button */}
          <button
            onClick={resetFilters}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/10 hover:border-white/20 text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Réinitialiser</span>
          </button>
        </div>

        {/* Dropdown Filters Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          {/* Brand */}
          <div>
            <label className="block text-neutral-400 font-medium mb-1">Marque</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full bg-[#070D18] border border-white/10 rounded-lg p-2 text-white focus:outline-none focus:border-[#1E60D5]"
            >
              <option value="all">Toutes les marques</option>
              {brands.filter(b => b !== 'all').map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* Body Type */}
          <div>
            <label className="block text-neutral-400 font-medium mb-1">Carrosserie</label>
            <select
              value={selectedBodyType}
              onChange={(e) => setSelectedBodyType(e.target.value)}
              className="w-full bg-[#070D18] border border-white/10 rounded-lg p-2 text-white focus:outline-none focus:border-[#1E60D5]"
            >
              {bodyTypes.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          {/* Status / Availability */}
          <div>
            <label className="block text-neutral-400 font-medium mb-1">Disponibilité</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full bg-[#070D18] border border-white/10 rounded-lg p-2 text-white focus:outline-none focus:border-[#1E60D5]"
            >
              <option value="all">Tous statuts</option>
              <option value="disponible">Disponible à Dakar</option>
              <option value="en_arrivage">En arrivage maritime</option>
              <option value="sur_commande">Sur commande</option>
            </select>
          </div>

          {/* Transmission */}
          <div>
            <label className="block text-neutral-400 font-medium mb-1">Transmission</label>
            <select
              value={selectedTransmission}
              onChange={(e) => setSelectedTransmission(e.target.value)}
              className="w-full bg-[#070D18] border border-white/10 rounded-lg p-2 text-white focus:outline-none focus:border-[#1E60D5]"
            >
              <option value="all">Toutes boîtes</option>
              <option value="Automatique">Automatique</option>
              <option value="Manuelle">Manuelle</option>
            </select>
          </div>
        </div>
      </div>

      {/* Vehicles Grid */}
      {filteredVehicles.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-2xl bg-[#0A1324] border border-white/10 space-y-4">
          <p className="text-neutral-400 text-sm">
            Aucun véhicule ne correspond exactement à vos critères actuels.
          </p>
          <button
            onClick={resetFilters}
            className="px-5 py-2.5 text-xs font-bold text-white bg-[#1E60D5] rounded-lg"
          >
            Effacer les filtres
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((veh) => (
            <div
              key={veh.id}
              className="rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20 hover:border-[#1E60D5]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Visual */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={veh.image}
                    alt={veh.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                      veh.status === 'disponible'
                        ? 'bg-emerald-500/90 text-white'
                        : veh.status === 'en_arrivage'
                        ? 'bg-amber-500/90 text-black'
                        : 'bg-blue-600/90 text-white'
                    }`}>
                      {veh.status === 'disponible' ? 'Disponible à Dakar' : veh.status === 'en_arrivage' ? 'En arrivage' : 'Sur commande'}
                    </span>
                  </div>

                  {veh.isExample && (
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-neutral-300">
                      Exemple Démo
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-1 font-mono">
                    <span className="text-[#38BDF8] font-bold uppercase">{veh.brand}</span>
                    <span>{veh.year} · {veh.fuel}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-2 group-hover:text-[#38BDF8] transition-colors">
                    {veh.name}
                  </h3>

                  <div className="text-xl font-bold text-white font-mono tabular-nums mb-3">
                    {veh.price}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-400 mb-4 p-2.5 rounded-lg bg-neutral-950/60 border border-white/[0.04]">
                    <div>Boîte : <strong className="text-white">{veh.transmission}</strong></div>
                    <div>Kilométrage : <strong className="text-white">{veh.mileage}</strong></div>
                  </div>

                  <p className="text-xs text-neutral-400 line-clamp-2">
                    {veh.description}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 flex items-center gap-2 border-t border-white/[0.04]">
                <button
                  onClick={() => setSelectedVehicleForModal(veh)}
                  className="flex-1 py-2.5 text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] rounded-lg transition-colors cursor-pointer text-center"
                >
                  Voir les détails
                </button>
                <button
                  onClick={() => {
                    setOrderPreFill({ brand: veh.brand, model: veh.model });
                    setCurrentPage('commander');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#1E60D5] hover:bg-[#256ee8] rounded-lg transition-colors cursor-pointer"
                >
                  Commander
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
