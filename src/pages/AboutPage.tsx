import React from 'react';
import { ShieldCheck, Award, HeartHandshake, BadgeCheck, Compass, Eye, Target, UserCheck, Phone, MessageCircle } from 'lucide-react';
import { DiamantLogo } from '../components/DiamantLogo';
import { useApp } from '../context/AppContext';

export const AboutPage: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-20">
      {/* Header with Noir / Bleu / Doré luxury feel */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="flex justify-center mb-2">
          <DiamantLogo variant="gold" />
        </div>
        <div className="text-xs font-mono text-[#D4AF37] font-semibold uppercase tracking-widest">
          Maison Automobile · Dakar, Sénégal
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
          L’Excellence Automobile au Sénégal
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
          « Le groupe DIAMANT SERVICES est une société privée évoluant dans le commerce de l'automobile, concessionnaire multimarque. Nous sommes une équipe passionnée par l'automobile, dédiée à offrir des solutions de mobilité innovantes et durables. »
        </p>
      </div>

      {/* Presentation & Leadership Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#0A0B0E] p-8 space-y-6 text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#8C6D1F] p-1 flex items-center justify-center shadow-xl">
              <div className="w-full h-full rounded-full bg-[#0A0B0E] flex items-center justify-center">
                <UserCheck className="w-10 h-10 text-[#F3E5AB]" />
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-bold">
                Direction Générale
              </div>
              <h2 className="text-2xl font-bold font-display text-white mt-1">
                Demba Diamant
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Gérant & Fondateur · Diamant Services
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-neutral-300 text-left space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-500">Siège :</span>
                <span className="text-white font-medium">Pikine / Dakar</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Rayonnement :</span>
                <span className="text-white font-medium">Sénégal & Sous-Région</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Téléphone :</span>
                <a href="tel:+221778348543" className="text-[#38BDF8] font-mono font-bold">+221 77 834 85 43</a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/221778348543"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B89028] hover:brightness-110 flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Contacter la direction</span>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-mono text-[#E63946] font-bold uppercase tracking-widest">
            Notre Parcours & Ambition
          </div>
          <h3 className="text-3xl font-bold font-display text-white">
            Une Passion Authentique au Service de Votre Mobilité.
          </h3>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Créé avec la conviction que l'acquisition d'un véhicule doit être une expérience sereine, valorisante et rigoureuse, Diamant Services s'est imposé comme un acteur clé du secteur automobile dakarois.
          </p>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Grâce à un réseau international rodé, nous importons des véhicules certifiés et récents depuis les plus grands marchés mondiaux : Allemagne, France, Émirats Arabes Unis (Dubaï), États-Unis et Corée du Sud. Chaque voiture qui transite par nos soins fait l’objet d’un suivi minutieux, de l’achat initial jusqu'à la remise des clés avec plaques sénégalaises.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20">
              <h4 className="text-base font-bold text-white font-display mb-1">Multimarque Certifié</h4>
              <p className="text-xs text-neutral-400">
                Mercedes-Benz, Land Rover, Toyota, Ford, Acura, BMW, Hyundai et bien d'autres constructeurs majeurs.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20">
              <h4 className="text-base font-bold text-white font-display mb-1">Réseau Clé en Main</h4>
              <p className="text-xs text-neutral-400">
                Achat, transport maritime, dédouanement, immatriculation et livraison partout sur le territoire sénégalais.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision, Mission, Engagement */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl bg-[#0A1324] border border-[#1E60D5]/20 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#1E60D5]/10 border border-[#1E60D5]/30 flex items-center justify-center text-[#38BDF8]">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-display text-white">Notre Mission</h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Démocratiser l'accès à des véhicules de qualité supérieure au Sénégal en garantissant la transparence des prix, la sécurité des paiements et un dédouanement irréprochable.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#0A1324] border border-[#D4AF37]/20 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-display text-white">Notre Vision</h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Être le partenaire automobile de référence au Sénégal pour quiconque recherche l'assurance d'un achat serein, d'une commande sans risque et d'un service après-livraison attentif.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#0A1324] border border-[#E63946]/20 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#E63946]/10 border border-[#E63946]/30 flex items-center justify-center text-[#E63946]">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-display text-white">Notre Engagement</h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Votre satisfaction intégrale. Nous ne faisons aucun compromis sur la sécurité mécanique de nos véhicules ni sur la rigueur légale de nos démarches administratives.
          </p>
        </div>
      </div>

      {/* Values detailed */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#070D18] border border-white/[0.08] space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold">
            Piliers Éthiques
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Nos Quatre Principes Cardinaux
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-[#0A1324] border border-white/5 space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#38BDF8] mx-auto" />
            <h3 className="text-base font-bold text-white font-display">CONFIANCE</h3>
            <p className="text-xs text-[#38BDF8] font-semibold">Transparence et fiabilité</p>
            <p className="text-xs text-neutral-400">
              Des devis sans coûts dissimulés, des délais annoncés respectés et une honnêteté totale sur l'état du véhicule.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0A1324] border border-white/5 space-y-3">
            <Award className="w-8 h-8 text-[#D4AF37] mx-auto" />
            <h3 className="text-base font-bold text-white font-display">QUALITÉ</h3>
            <p className="text-xs text-[#D4AF37] font-semibold">Sélection rigoureuse</p>
            <p className="text-xs text-neutral-400">
              Examen des rapports Carfax/AutoDNA, contrôle des organes de sécurité et des historiques d'entretien.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0A1324] border border-white/5 space-y-3">
            <HeartHandshake className="w-8 h-8 text-[#E63946] mx-auto" />
            <h3 className="text-base font-bold text-white font-display">ENGAGEMENT</h3>
            <p className="text-xs text-[#E63946] font-semibold">Votre satisfaction, notre priorité</p>
            <p className="text-xs text-neutral-400">
              Un suivi individualisé du début à la fin, avec le gérant joignable directement à chaque étape.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0A1324] border border-white/5 space-y-3">
            <BadgeCheck className="w-8 h-8 text-[#38BDF8] mx-auto" />
            <h3 className="text-base font-bold text-white font-display">EXPERTISE</h3>
            <p className="text-xs text-[#38BDF8] font-semibold">Notre expérience, votre tranquillité</p>
            <p className="text-xs text-neutral-400">
              Connaissance fine de la logistique portuaire de Dakar et de la réglementation douanière sénégalaise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
