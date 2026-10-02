import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  FileCheck, 
  Truck, 
  Search, 
  MessageCircle,
  Phone
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const OrderPage: React.FC = () => {
  const { submitOrder, orderPreFill, setOrderPreFill } = useApp();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [budget, setBudget] = useState('');
  const [vehicleType, setVehicleType] = useState('Berline');
  const [targetYear, setTargetYear] = useState('2023 - 2025');
  const [originCountry, setOriginCountry] = useState('Europe (France / Allemagne)');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (orderPreFill) {
      if (orderPreFill.brand) setBrand(orderPreFill.brand);
      if (orderPreFill.model) setModel(orderPreFill.model);
      setOrderPreFill(null);
    }
  }, [orderPreFill, setOrderPreFill]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Veuillez renseigner votre nom complet.');
      return;
    }
    if (!phone.trim()) {
      setError('Veuillez renseigner votre numéro de téléphone (Sénégal ou International).');
      return;
    }
    if (!brand.trim()) {
      setError('Veuillez indiquer la marque souhaitée.');
      return;
    }
    if (!model.trim()) {
      setError('Veuillez préciser le modèle souhaité.');
      return;
    }

    setError('');
    submitOrder({
      fullName,
      phone,
      email,
      brand,
      model,
      budget: budget || 'À définir avec le conseiller',
      vehicleType,
      targetYear,
      originCountry,
      message
    });

    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    return `Bonjour DIAMANT SERVICES, voici ma demande de commande de véhicule :
- Nom : ${fullName}
- Téléphone : ${phone}
- Véhicule : ${brand} ${model} (${vehicleType})
- Année : ${targetYear}
- Budget : ${budget || 'À étudier'}
- Origine : ${originCountry}
- Détails : ${message || 'Aucune précision'}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Title & Slogan */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs text-[#F3E5AB] font-semibold tracking-wider uppercase font-mono">
          Service de commande personnalisé · Concessionnaire multimarque
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Commandez votre véhicule en toute sérénité
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
          Nous trouvons le véhicule exact de vos rêves auprès de nos fournisseurs certifiés en Europe, à Dubaï, aux USA ou en Asie, et gérons l'intégralité du shipping et du dédouanement jusqu'à Dakar.
        </p>
      </div>

      {/* 4 Steps Process */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            step: '01',
            title: 'Choisissez votre véhicule',
            desc: 'Indiquez-nous la marque, le modèle, vos options prioritaires et votre budget cible.',
            icon: Search,
            color: '#38BDF8'
          },
          {
            step: '02',
            title: 'Envoyez votre demande',
            desc: 'Remplissez le formulaire en ligne ou écrivez directement à Demba Diamant sur WhatsApp.',
            icon: FileCheck,
            color: '#1E60D5'
          },
          {
            step: '03',
            title: 'Recevez votre devis',
            desc: 'Nous vous transmettons une offre chiffrée clé en main (véhicule, fret maritime, douane et carte grise).',
            icon: ShieldCheck,
            color: '#D4AF37'
          },
          {
            step: '04',
            title: 'Suivez jusqu’à la livraison',
            desc: 'Suivez le transport en direct et recevez votre véhicule prêt à rouler avec ses plaques sénégalaises.',
            icon: Truck,
            color: '#E63946'
          }
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-6 rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20 relative shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-neutral-500">ÉTAPE {item.step}</span>
                <Icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <h3 className="text-base font-bold text-white font-display mb-2">{item.title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto bg-[#0A1324] border border-[#1E60D5]/30 rounded-3xl p-6 sm:p-12 shadow-2xl">
        {submitted ? (
          <div className="text-center py-10 space-y-5">
            <CheckCircle2 className="w-16 h-16 text-[#25D366] mx-auto animate-bounce" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Demande enregistrée avec succès !
            </h3>
            <p className="text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed">
              Merci <strong>{fullName}</strong>. Votre dossier de commande pour <strong>{brand} {model}</strong> a bien été transmis à Demba Diamant. Nous étudions votre requête et vous contacterons sous 24h ouvrées.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/221778348543?text=${encodeURIComponent(getWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Envoyer aussi sur WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setBrand('');
                  setModel('');
                  setMessage('');
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/15"
              >
                Nouvelle commande
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold text-white font-display">
                Formulaire de Commande Personnalisée
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Renseignez vos critères et recevez une estimation complète sous 24 heures.
              </p>
            </div>

            {error && (
              <div className="p-3.5 rounded-xl bg-red-950/50 border border-red-800 text-xs text-red-200">
                {error}
              </div>
            )}

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Nom complet *
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ex: Ibrahima Sow"
                  className="w-full bg-[#070D18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#1E60D5]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Téléphone (Sénégal ou International) *
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
                Adresse Email (optionnelle)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre.email@domaine.sn"
                className="w-full bg-[#070D18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#1E60D5]"
              />
            </div>

            {/* Vehicle Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Marque souhaitée *
                </label>
                <input
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="Ex: Toyota, Mercedes-Benz, Range Rover..."
                  className="w-full bg-[#070D18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#1E60D5]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Modèle souhaité *
                </label>
                <input
                  type="text"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="Ex: Prado TX-L, Classe E, Velar, RAV4..."
                  className="w-full bg-[#070D18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#1E60D5]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Type de véhicule
                </label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full bg-[#070D18] border border-white/10 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#1E60D5]"
                >
                  <option value="Berline">Berline</option>
                  <option value="SUV">SUV</option>
                  <option value="4x4">4x4 Tout-Terrain</option>
                  <option value="Coupé">Coupé Sport</option>
                  <option value="Pickup">Pickup</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Année souhaitée
                </label>
                <select
                  value={targetYear}
                  onChange={(e) => setTargetYear(e.target.value)}
                  className="w-full bg-[#070D18] border border-white/10 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#1E60D5]"
                >
                  <option value="Neuf 2025/2026">Neuf 2025 / 2026</option>
                  <option value="2023 - 2025">2023 - 2025</option>
                  <option value="2020 - 2022">2020 - 2022</option>
                  <option value="2018 - 2020">2018 - 2020</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Budget estimé (FCFA)
                </label>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="Ex: 35 000 000 FCFA"
                  className="w-full bg-[#070D18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#1E60D5] font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                Provenance / Pays d'origine souhaité
              </label>
              <select
                value={originCountry}
                onChange={(e) => setOriginCountry(e.target.value)}
                className="w-full bg-[#070D18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#1E60D5]"
              >
                <option value="Europe (France / Allemagne / Belgique)">Europe (France / Allemagne / Belgique)</option>
                <option value="Dubaï (Émirats Arabes Unis)">Dubaï (Émirats Arabes Unis)</option>
                <option value="USA / Canada">USA / Canada</option>
                <option value="Corée du Sud / Asie">Corée du Sud / Asie</option>
                <option value="Indifférent / Meilleure opportunité">Indifférent / Meilleure opportunité</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                Précisions, équipements indispensables ou remarques
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ex: Cuir beige indispensable, toit panoramique, livraison impérative avant fin décembre..."
                className="w-full bg-[#070D18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#1E60D5]"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-4 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1E60D5] to-[#1448A6] hover:from-[#256ee8] hover:to-[#1752bd] rounded-xl shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
            >
              <Send className="w-4 h-4" />
              <span>Envoyer ma demande de commande</span>
            </button>

            <div className="flex items-center justify-center gap-6 text-[11px] text-neutral-500 pt-2">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Données confidentielles</span>
              <span>·</span>
              <span>Devis gratuit sans engagement</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
