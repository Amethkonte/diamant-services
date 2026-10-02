import React, { useState } from 'react';
import { 
  Car, 
  FileText, 
  Users, 
  MessageSquare, 
  Plus, 
  Trash2, 
  Check, 
  Clock, 
  ShieldAlert, 
  ChevronRight,
  TrendingUp,
  Search,
  ArrowUpRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Vehicle, VehicleStatus, FuelType, TransmissionType, BodyType } from '../types';

export const AdminPage: React.FC = () => {
  const { 
    vehicles, 
    orders, 
    rentals, 
    messages, 
    addVehicle, 
    deleteVehicle, 
    setCurrentPage 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'dashboard' | 'vehicles' | 'orders' | 'rentals' | 'messages'>('dashboard');
  const [showAddModal, setShowAddModal] = useState(false);

  // New vehicle form state
  const [newVehName, setNewVehName] = useState('');
  const [newVehBrand, setNewVehBrand] = useState('Toyota');
  const [newVehModel, setNewVehModel] = useState('');
  const [newVehYear, setNewVehYear] = useState(2024);
  const [newVehPrice, setNewVehPrice] = useState('35 000 000 FCFA');
  const [newVehStatus, setNewVehStatus] = useState<VehicleStatus>('disponible');
  const [newVehFuel, setNewVehFuel] = useState<FuelType>('Essence');
  const [newVehTrans, setNewVehTrans] = useState<TransmissionType>('Automatique');
  const [newVehMileage, setNewVehMileage] = useState('15 000 km');
  const [newVehBody, setNewVehBody] = useState<BodyType>('SUV');
  const [newVehDesc, setNewVehDesc] = useState('Véhicule en parfait état.');

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVehName.trim()) return;

    addVehicle({
      name: newVehName,
      brand: newVehBrand,
      model: newVehModel || newVehName,
      year: Number(newVehYear),
      price: newVehPrice,
      status: newVehStatus,
      fuel: newVehFuel,
      transmission: newVehTrans,
      mileage: newVehMileage,
      bodyType: newVehBody,
      image: '/src/assets/images/hero_diamant_auto_1790952335405.jpg',
      isExample: false,
      features: ['Climatisation tropicalisée', 'Carnet d’entretien complet', 'Garantie Diamant'],
      description: newVehDesc
    });

    setShowAddModal(false);
    setNewVehName('');
    setNewVehModel('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] font-semibold uppercase">
            <span>Espace Privé Administrateur</span>
            <span>·</span>
            <span>Demba Diamant</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
            Tableau de Bord & Gestion Commerciale
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage('accueil')}
            className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-white/[0.06] rounded-lg transition-colors"
          >
            Retour au site public
          </button>
        </div>
      </div>

      {/* Admin Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0A1324] border border-[#1E60D5]/20 rounded-xl">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            activeTab === 'dashboard' ? 'bg-[#1E60D5] text-white shadow' : 'text-neutral-400 hover:text-white'
          }`}
        >
          Vue d'ensemble
        </button>
        <button
          onClick={() => setActiveTab('vehicles')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'vehicles' ? 'bg-[#1E60D5] text-white shadow' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Car className="w-3.5 h-3.5" />
          <span>Gestion des Véhicules ({vehicles.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'orders' ? 'bg-[#1E60D5] text-white shadow' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Commandes reçues ({orders.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('rentals')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'rentals' ? 'bg-[#1E60D5] text-white shadow' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          <span>Locations ({rentals.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('messages')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'messages' ? 'bg-[#1E60D5] text-white shadow' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Messages Contact ({messages.length})</span>
        </button>
      </div>

      {/* TAB 1: DASHBOARD STATS */}
      {activeTab === 'dashboard' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20 space-y-2">
              <div className="flex items-center justify-between text-neutral-400 text-xs">
                <span>Véhicules en catalogue</span>
                <Car className="w-4 h-4 text-[#38BDF8]" />
              </div>
              <div className="text-3xl font-bold text-white font-mono">{vehicles.length}</div>
              <div className="text-[11px] text-neutral-400">Prêts pour exposition publique</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20 space-y-2">
              <div className="flex items-center justify-between text-neutral-400 text-xs">
                <span>Commandes de clients</span>
                <FileText className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div className="text-3xl font-bold text-white font-mono">{orders.length}</div>
              <div className="text-[11px] text-emerald-400">Dossiers actifs à traiter</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20 space-y-2">
              <div className="flex items-center justify-between text-neutral-400 text-xs">
                <span>Demandes de location</span>
                <Clock className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white font-mono">{rentals.length}</div>
              <div className="text-[11px] text-neutral-400">Courte & longue durée</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20 space-y-2">
              <div className="flex items-center justify-between text-neutral-400 text-xs">
                <span>Messages entrants</span>
                <MessageSquare className="w-4 h-4 text-[#E63946]" />
              </div>
              <div className="text-3xl font-bold text-white font-mono">{messages.length}</div>
              <div className="text-[11px] text-neutral-400">Formulaire contact web</div>
            </div>
          </div>

          {/* Quick overview of latest orders */}
          <div className="p-6 rounded-2xl bg-[#0A1324] border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white font-display">
                Dernières demandes de commandes enregistrées
              </h3>
              <button
                onClick={() => setActiveTab('orders')}
                className="text-xs text-[#38BDF8] hover:underline"
              >
                Voir tout ({orders.length}) →
              </button>
            </div>

            {orders.length === 0 ? (
              <p className="text-xs text-neutral-500 py-4">Aucune commande pour le moment.</p>
            ) : (
              <div className="divide-y divide-white/5">
                {orders.slice(0, 3).map((ord) => (
                  <div key={ord.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="font-bold text-white">{ord.fullName}</span>
                      <span className="text-neutral-400 ml-2">({ord.phone})</span>
                      <div className="text-neutral-400 mt-0.5">
                        Véhicule : <strong className="text-[#38BDF8]">{ord.brand} {ord.model}</strong> · Budget : {ord.budget}
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#1E60D5]/20 text-[#38BDF8] text-[10px] font-bold uppercase self-start sm:self-auto">
                      {ord.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: VEHICLES MANAGEMENT */}
      {activeTab === 'vehicles' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white font-display">
              Catalogue de Véhicules ({vehicles.length})
            </h3>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#1E60D5] hover:bg-[#256ee8] flex items-center gap-1.5 shadow cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Ajouter un véhicule</span>
            </button>
          </div>

          <div className="rounded-2xl bg-[#0A1324] border border-white/10 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#070D18] text-neutral-400 uppercase font-mono border-b border-white/10">
                  <tr>
                    <th className="p-4">Véhicule</th>
                    <th className="p-4">Marque & Année</th>
                    <th className="p-4">Prix</th>
                    <th className="p-4">Statut</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300">
                  {vehicles.map((v) => (
                    <tr key={v.id} className="hover:bg-white/[0.02]">
                      <td className="p-4 flex items-center gap-3">
                        <img src={v.image} alt={v.name} className="w-12 h-8 rounded object-cover" />
                        <div>
                          <div className="font-bold text-white">{v.name}</div>
                          <div className="text-[10px] text-neutral-500">{v.bodyType} · {v.transmission}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div>{v.brand} {v.model}</div>
                        <div className="text-[10px] text-neutral-500 font-mono">{v.year}</div>
                      </td>
                      <td className="p-4 font-mono font-bold text-white">
                        {v.price}
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          v.status === 'disponible' ? 'bg-emerald-500/20 text-emerald-400' :
                          v.status === 'en_arrivage' ? 'bg-amber-500/20 text-amber-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {v.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => deleteVehicle(v.id)}
                          className="p-1.5 rounded text-red-400 hover:bg-red-500/10 transition-colors"
                          title="Supprimer ce véhicule"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: ORDERS MANAGEMENT */}
      {activeTab === 'orders' && (
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white font-display">
            Gestion des Commandes de Véhicules ({orders.length})
          </h3>

          <div className="space-y-4">
            {orders.map((ord) => (
              <div key={ord.id} className="p-6 rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20 shadow-lg space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <div>
                    <span className="text-xs font-mono text-[#38BDF8] font-bold">{ord.id}</span>
                    <h4 className="text-base font-bold text-white mt-0.5">{ord.fullName}</h4>
                    <div className="text-xs text-neutral-400 flex items-center gap-3">
                      <span>Tél : <strong className="text-white font-mono">{ord.phone}</strong></span>
                      {ord.email && <span>Email : {ord.email}</span>}
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded bg-[#1E60D5]/20 text-[#38BDF8] text-xs font-bold uppercase self-start sm:self-auto">
                    {ord.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded bg-white/[0.02]">
                    <div className="text-neutral-500">Véhicule recherché</div>
                    <div className="font-bold text-white">{ord.brand} {ord.model}</div>
                  </div>
                  <div className="p-3 rounded bg-white/[0.02]">
                    <div className="text-neutral-500">Type & Année</div>
                    <div className="font-bold text-white">{ord.vehicleType} ({ord.targetYear})</div>
                  </div>
                  <div className="p-3 rounded bg-white/[0.02]">
                    <div className="text-neutral-500">Budget prévu</div>
                    <div className="font-bold text-emerald-400 font-mono">{ord.budget}</div>
                  </div>
                  <div className="p-3 rounded bg-white/[0.02]">
                    <div className="text-neutral-500">Provenance souhaitée</div>
                    <div className="font-bold text-white">{ord.originCountry}</div>
                  </div>
                </div>

                {ord.message && (
                  <div className="p-3 rounded bg-[#070D18] text-xs text-neutral-300">
                    <strong className="text-neutral-400">Message / Remarques :</strong> {ord.message}
                  </div>
                )}

                <div className="flex items-center gap-2 pt-2">
                  <a
                    href={`https://wa.me/${ord.phone.replace(/[^0-9]/g, '')}?text=Bonjour%20${encodeURIComponent(ord.fullName)}%2C%20Demba%20Diamant%20vous%20contacte%20suite%20%C3%A0%20votre%20demande%20de%20commande.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a]"
                  >
                    Répondre sur WhatsApp
                  </a>
                  <a
                    href={`tel:${ord.phone}`}
                    className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-white/10 hover:bg-white/15"
                  >
                    Appeler le client
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: RENTALS */}
      {activeTab === 'rentals' && (
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white font-display">
            Réservations de Location ({rentals.length})
          </h3>

          {rentals.length === 0 ? (
            <div className="p-8 text-center bg-[#0A1324] rounded-2xl border border-white/10 text-neutral-400 text-xs">
              Aucune réservation de location enregistrée pour l'instant. Les soumissions depuis la page Location apparaîtront ici.
            </div>
          ) : (
            <div className="space-y-3">
              {rentals.map((r) => (
                <div key={r.id} className="p-4 rounded-xl bg-[#0A1324] border border-white/10 text-xs flex flex-col sm:flex-row justify-between gap-3">
                  <div>
                    <div className="font-bold text-white text-sm">{r.fullName} ({r.phone})</div>
                    <div className="text-[#38BDF8] font-semibold mt-0.5">Véhicule : {r.vehicleName}</div>
                    <div className="text-neutral-400 mt-1">Du {r.startDate} au {r.endDate}</div>
                    {r.message && <div className="text-neutral-500 mt-1 italic">{r.message}</div>}
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <a href={`tel:${r.phone}`} className="px-3 py-1.5 rounded bg-white/10 text-white font-semibold">
                      Appeler
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 5: MESSAGES */}
      {activeTab === 'messages' && (
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white font-display">
            Messages de Contact ({messages.length})
          </h3>

          {messages.length === 0 ? (
            <div className="p-8 text-center bg-[#0A1324] rounded-2xl border border-white/10 text-neutral-400 text-xs">
              Aucun message de contact pour l'instant.
            </div>
          ) : (
            <div className="space-y-3">
              {messages.map((m) => (
                <div key={m.id} className="p-4 rounded-xl bg-[#0A1324] border border-white/10 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{m.fullName}</span>
                    <span className="text-neutral-500">{m.createdAt}</span>
                  </div>
                  <div className="text-neutral-400">Tél : {m.phone} {m.email && `· Email : ${m.email}`}</div>
                  <div className="text-[#38BDF8] font-semibold">Objet : {m.subject}</div>
                  <div className="p-3 rounded bg-[#070D18] text-neutral-300">{m.message}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ADD VEHICLE MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative max-w-xl w-full bg-[#0A1324] border border-[#1E60D5]/30 rounded-2xl p-6 max-h-[90vh] overflow-y-auto text-white">
            <h3 className="text-xl font-bold font-display mb-4">Ajouter un véhicule au catalogue</h3>
            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-400 mb-1">Nom affiché du véhicule *</label>
                <input
                  type="text"
                  required
                  value={newVehName}
                  onChange={(e) => setNewVehName(e.target.value)}
                  placeholder="Ex: Mercedes-Benz E300 AMG"
                  className="w-full bg-[#070D18] border border-white/10 rounded-lg p-2.5 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 mb-1">Marque</label>
                  <input
                    type="text"
                    value={newVehBrand}
                    onChange={(e) => setNewVehBrand(e.target.value)}
                    className="w-full bg-[#070D18] border border-white/10 rounded-lg p-2.5 text-white"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Modèle</label>
                  <input
                    type="text"
                    value={newVehModel}
                    onChange={(e) => setNewVehModel(e.target.value)}
                    placeholder="Ex: Classe E"
                    className="w-full bg-[#070D18] border border-white/10 rounded-lg p-2.5 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 mb-1">Année</label>
                  <input
                    type="number"
                    value={newVehYear}
                    onChange={(e) => setNewVehYear(Number(e.target.value))}
                    className="w-full bg-[#070D18] border border-white/10 rounded-lg p-2.5 text-white"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Prix ou mention</label>
                  <input
                    type="text"
                    value={newVehPrice}
                    onChange={(e) => setNewVehPrice(e.target.value)}
                    placeholder="Ex: 35 000 000 FCFA"
                    className="w-full bg-[#070D18] border border-white/10 rounded-lg p-2.5 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-neutral-400 mb-1">Statut</label>
                  <select
                    value={newVehStatus}
                    onChange={(e) => setNewVehStatus(e.target.value as any)}
                    className="w-full bg-[#070D18] border border-white/10 rounded-lg p-2.5 text-white"
                  >
                    <option value="disponible">Disponible à Dakar</option>
                    <option value="en_arrivage">En arrivage</option>
                    <option value="sur_commande">Sur commande</option>
                  </select>
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Carburant</label>
                  <select
                    value={newVehFuel}
                    onChange={(e) => setNewVehFuel(e.target.value as any)}
                    className="w-full bg-[#070D18] border border-white/10 rounded-lg p-2.5 text-white"
                  >
                    <option value="Essence">Essence</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Hybride">Hybride</option>
                  </select>
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Boîte</label>
                  <select
                    value={newVehTrans}
                    onChange={(e) => setNewVehTrans(e.target.value as any)}
                    className="w-full bg-[#070D18] border border-white/10 rounded-lg p-2.5 text-white"
                  >
                    <option value="Automatique">Automatique</option>
                    <option value="Manuelle">Manuelle</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Description courte</label>
                <textarea
                  rows={2}
                  value={newVehDesc}
                  onChange={(e) => setNewVehDesc(e.target.value)}
                  className="w-full bg-[#070D18] border border-white/10 rounded-lg p-2.5 text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-lg bg-white/10 text-neutral-300"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#1E60D5] text-white font-bold"
                >
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
