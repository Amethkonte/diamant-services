import React, { useState } from 'react';
import { 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle, 
  Car, 
  Truck, 
  FileText, 
  CreditCard, 
  Ship, 
  BadgeCheck, 
  Award, 
  HeartHandshake, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { DiamantLogo } from '../components/DiamantLogo';
import { useApp } from '../context/AppContext';

export const HomePage: React.FC = () => {
  const { setCurrentPage, vehicles, setSelectedVehicleForModal, setOrderPreFill } = useApp();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const featuredVehicles = vehicles.slice(0, 3);

  const services = [
    {
      id: 'vente-commande',
      title: 'Vente de véhicules sur commande',
      subtitle: 'Véhicules neufs et récents sur-mesure',
      icon: Car,
      color: '#1E60D5',
      desc: 'Accédez à un vaste réseau international (Europe, Dubaï, USA, Asie). Nous sélectionnons et inspectons rigoureusement le modèle correspondant exactement à vos exigences et votre budget.',
      actionLabel: 'Commander ce service',
      targetPage: 'commander' as const
    },
    {
      id: 'financement-depot',
      title: 'Financement avec dépôt',
      subtitle: 'Solutions de paiement adaptées',
      icon: CreditCard,
      color: '#D4AF37',
      desc: 'Facilitez l’acquisition de votre véhicule grâce à des modalités de financement souples avec dépôt initial sécurisé, garantissant clarté et transparence contractuelle.',
      actionLabel: 'Simuler mon financement',
      targetPage: 'contact' as const
    },
    {
      id: 'location-court-long',
      title: 'Location à long ou court terme',
      subtitle: 'Flotte premium pour particuliers et entreprises',
      icon: Truck,
      color: '#38BDF8',
      desc: 'Berlines de standing, SUV 4x4 robustes et véhicules d’affaires disponibles pour vos déplacements à Dakar et partout au Sénégal, avec ou sans chauffeur.',
      actionLabel: 'Découvrir la flotte',
      targetPage: 'location' as const
    },
    {
      id: 'shipping-express',
      title: 'Shipping Express',
      subtitle: 'Fret maritime et logistique sécurisée',
      icon: Ship,
      color: '#1E60D5',
      desc: 'Acheminement sécurisé par voie maritime en conteneur ou roulier (Ro-Ro) jusqu’au Port Autonome de Dakar, avec suivi d’expédition continu à chaque étape.',
      actionLabel: 'Infos shipping',
      targetPage: 'importation' as const
    },
    {
      id: 'dedouanement',
      title: 'Dédouanement complet',
      subtitle: 'Prise en charge douanière intégrale',
      icon: FileText,
      color: '#E63946',
      desc: 'Notre équipe gère l’ensemble des démarches en douane sénégalaise avec rigueur et conformité légale, sans mauvaise surprise ni frais cachés.',
      actionLabel: 'Consulter le processus',
      targetPage: 'importation' as const
    },
    {
      id: 'immatriculation',
      title: 'Immatriculation sénégalaise',
      subtitle: 'Clés en main et carte grise',
      icon: BadgeCheck,
      color: '#38BDF8',
      desc: 'Pose des plaques réglementaires, obtention de la carte grise sénégalaise et formalités administratives pour que votre véhicule soit immédiatement prêt à rouler.',
      actionLabel: 'Demander un devis',
      targetPage: 'contact' as const
    }
  ];

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* ========================================================
          1. HERO SECTION (Deep Blue / High Impact Automotive)
         ======================================================== */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-20 overflow-hidden border-b border-[#1E60D5]/20">
        {/* Background visual asset with rich blue overlay */}
        <div className="absolute inset-0 -z-10 bg-[#070D18]">
          <img
            src="/src/assets/images/hero_diamant_auto_1790952335405.jpg"
            alt="Diamant Services Automobile — Véhicules de prestige à Dakar"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity filter contrast-125"
          />
          {/* Radial and linear dark blue gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070D18] via-[#070D18]/90 to-[#070D18]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-[#070D18]/80" />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#1E60D5]/15 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Main Typography & CTAs (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge inspired by the flyer */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E60D5]/15 border border-[#1E60D5]/30 text-xs text-[#38BDF8] font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#E63946]" />
                <span>Concessionnaire Multimarque & Commande Internationale · Dakar, Sénégal</span>
              </div>

              {/* Title with DIAMANT AUTO MOBILE branding */}
              <div>
                <div className="text-sm font-bold tracking-widest text-[#E63946] uppercase font-mono mb-2">
                  « Votre mobilité, notre expertise »
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.05]">
                  <span className="text-[#38BDF8] block">DIAMANT</span>
                  <span className="text-white">AUTO</span>
                  <span className="text-[#E63946] ml-2">MOBILE</span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-200 mt-4 [text-wrap:balance]">
                  Votre prochaine voiture commence ici.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
                Diamant Services accompagne ses clients au Sénégal dans la commande sur-mesure, l’achat, la location et l’importation clé en main de véhicules de prestige et d’utilitaires fiables.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setCurrentPage('commander')}
                  className="px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1E60D5] via-[#2563EB] to-[#1D4ED8] hover:from-[#256ee8] hover:to-[#1752bd] rounded-xl shadow-lg shadow-[#1E60D5]/30 flex items-center gap-2 cursor-pointer transition-all active:scale-98"
                >
                  <span>Commander un véhicule</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-6 py-4 text-xs sm:text-sm font-medium text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.15] rounded-xl transition-all cursor-pointer"
                >
                  Nous contacter
                </button>

                <a
                  href="https://wa.me/221778348543?text=Bonjour%20DIAMANT%20SERVICES%2C%20je%20souhaite%20des%20renseignements%20sur%20vos%20v%C3%A9hicules."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-4 text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl transition-all flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp direct</span>
                </a>
              </div>

              {/* Direct call & Manager reassurance */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#E63946]" />
                  <a href="tel:+221778348543" className="font-mono text-white hover:text-[#38BDF8] font-semibold">
                    +221 77 834 85 43
                  </a>
                </div>
                <span>·</span>
                <div>
                  <strong className="text-white">Gérant :</strong> Demba Diamant
                </div>
                <span>·</span>
                <div>
                  Pikine / Dakar
                </div>
              </div>
            </div>

            {/* Right Col: Showcase Card with visual fleet (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-[#1E60D5]/30 via-white/[0.05] to-transparent border border-[#1E60D5]/30 shadow-2xl">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-[#0A1324] relative group">
                  <img
                    src="/src/assets/images/showroom_luxury_fleet_1790952347276.jpg"
                    alt="Flotte Diamant Services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-transparent opacity-90" />
                  
                  <div className="absolute bottom-5 left-5 right-5 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#38BDF8] font-bold">
                      FLOTTE DISPONIBLE & EN ARRIVAGE
                    </span>
                    <h3 className="text-lg font-bold text-white font-display">
                      Berlines d’exception, SUV & 4x4 Tout-Terrain
                    </h3>
                    <div className="flex items-center justify-between text-xs text-neutral-300 pt-1 border-t border-white/10">
                      <span>Inspection certifiée</span>
                      <button
                        onClick={() => setCurrentPage('vehicules')}
                        className="text-[#38BDF8] font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        Voir le catalogue →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. SECTION "QUI SOMMES-NOUS ?" (Exact content from flyer)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#1E60D5]/20 shadow-xl bg-[#0A1324] aspect-[4/3]">
              <img
                src="/src/assets/images/hero_diamant_auto_1790952335405.jpg"
                alt="Concessionnaire Diamant Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-transparent opacity-60" />
            </div>
            {/* Overlapping badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 p-4 rounded-xl bg-[#0C1B33] border border-[#1E60D5]/40 shadow-2xl max-w-xs">
              <div className="text-xs text-[#38BDF8] font-bold uppercase tracking-wider">Engagement Qualité</div>
              <div className="text-sm font-semibold text-white mt-1">Sélection rigoureuse & contrôle technique avant chaque livraison.</div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E63946] font-bold font-mono">
              <span>À propos du groupe</span>
              <span aria-hidden="true">·</span>
              <span>Dakar, Sénégal</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
              Qui sommes-nous ?
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
              <p className="p-4 rounded-xl bg-[#0B1527] border-l-4 border-[#1E60D5] text-white font-medium">
                « Le groupe DIAMANT SERVICES est une société privée évoluant dans le commerce de l'automobile, concessionnaire multimarque. Nous sommes une équipe passionnée par l'automobile, dédiée à offrir des solutions de mobilité innovantes et durables. »
              </p>
              <p>
                Fondé et dirigé par <strong>Demba Diamant</strong>, notre établissement s’est forgé une réputation d'intégrité et de professionnalisme auprès d’une clientèle exigeante au Sénégal et dans la sous-région.
              </p>
              <p>
                Que vous recherchiez une berline de luxe pour vos trajets urbains à Dakar, un 4x4 robuste pour le territoire national ou une commande spéciale importée d’Europe, des Émirats ou d'Amérique, nous assurons un accompagnement complet du premier conseil jusqu'à l’immatriculation définitive.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
              <div>
                <div className="text-2xl font-bold text-white font-display">Pikine / Dakar</div>
                <div className="text-xs text-neutral-400 mt-1">Siège & Espace d'exposition</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#38BDF8] font-display">Territoire National</div>
                <div className="text-xs text-neutral-400 mt-1">Service & livraison partout au Sénégal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. BLACK & GOLD CONCIERGERIE SECTION (Image 2 Inspired)
             "Commandez votre voiture en toute sérénité"
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#0F1118] via-[#0A0B0E] to-[#07080A] border border-[#D4AF37]/30 shadow-2xl overflow-hidden">
          {/* Subtle gold ambient glow */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[100px] pointer-events-none" />

          {/* Top Brand Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <div className="flex justify-center">
              <DiamantLogo variant="gold" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight [text-wrap:balance]">
              Commandez votre voiture en toute sérénité
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Un accompagnement d'élite pour l'acquisition de votre prochain véhicule au Sénégal.
            </p>
          </div>

          {/* 3 Gold Medallions (Simple, Sécurisé, Fiable) from Image 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Medallion 1: Simple */}
            <div className="p-6 rounded-2xl bg-black/50 border border-[#D4AF37]/20 text-center space-y-3 group hover:border-[#D4AF37]/50 transition-colors">
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-b from-[#D4AF37] to-[#8C6D1F] p-0.5 flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
                <div className="w-full h-full bg-[#121318] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-[#F3E5AB]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white font-display">Simple</h3>
              <p className="text-xs text-[#D4AF37] font-semibold">
                Processus facile · Devis rapide
              </p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Définissez vos critères en quelques clics. Nous recherchons, négocions et vous transmettons un devis chiffré clair sans démarche complexe.
              </p>
            </div>

            {/* Medallion 2: Sécurisé */}
            <div className="p-6 rounded-2xl bg-black/50 border border-[#D4AF37]/20 text-center space-y-3 group hover:border-[#D4AF37]/50 transition-colors">
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-b from-[#D4AF37] to-[#8C6D1F] p-0.5 flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
                <div className="w-full h-full bg-[#121318] rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#F3E5AB]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white font-display">Sécurisé</h3>
              <p className="text-xs text-[#D4AF37] font-semibold">
                Paiement protégé · Contrat clair
              </p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Chaque transaction est protégée par un contrat commercial transparent. Vos fonds sont sécurisés jusqu'à la remise effective des clés.
              </p>
            </div>

            {/* Medallion 3: Fiable */}
            <div className="p-6 rounded-2xl bg-black/50 border border-[#D4AF37]/20 text-center space-y-3 group hover:border-[#D4AF37]/50 transition-colors">
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-b from-[#D4AF37] to-[#8C6D1F] p-0.5 flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
                <div className="w-full h-full bg-[#121318] rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#F3E5AB]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white font-display">Fiable</h3>
              <p className="text-xs text-[#D4AF37] font-semibold">
                Service pro · Suivi dédié
              </p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Bénéficiez d'un conseiller personnel joignable à tout moment, vous informant en direct du départ bateau, de l'arrivée portuaire et du dédouanement.
              </p>
            </div>
          </div>

          {/* Bottom Bar: Manager & Direct Phone */}
          <div className="pt-8 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
            <div className="text-neutral-300">
              <strong className="text-white">Gérant :</strong> Demba Diamant
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrentPage('commander')}
                className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B89028] hover:brightness-110 shadow-lg cursor-pointer transition-all"
              >
                Lancer une commande en sérénité
              </button>
              <a
                href="tel:+221778348543"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#D4AF37]/40 text-[#F3E5AB] font-mono hover:bg-[#D4AF37]/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                +221 77 834 85 43
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. THE 4 CORE VALUES (From Image 1: Confiance, Qualité, Engagement, Expertise)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono text-[#E63946] font-bold uppercase tracking-widest mb-2">
            Nos Fondements
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
            Quatre Valeurs, Une Seule Promesse.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20 flex flex-col justify-between">
            <div>
              <ShieldCheck className="w-8 h-8 text-[#38BDF8] mb-4" />
              <h3 className="text-lg font-bold text-white font-display mb-1">CONFIANCE</h3>
              <p className="text-xs font-semibold text-[#38BDF8] mb-2">Transparence et fiabilité</p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Une relation fondée sur l'honnêteté, des contrats clairs sans ambiguïté et un respect absolu de nos engagements.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20 flex flex-col justify-between">
            <div>
              <Award className="w-8 h-8 text-[#D4AF37] mb-4" />
              <h3 className="text-lg font-bold text-white font-display mb-1">QUALITÉ</h3>
              <p className="text-xs font-semibold text-[#D4AF37] mb-2">Sélection rigoureuse</p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Chaque véhicule fait l'objet d'un audit technique certifié, d'une traçabilité de son kilométrage et d'un contrôle d'usure.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20 flex flex-col justify-between">
            <div>
              <HeartHandshake className="w-8 h-8 text-[#E63946] mb-4" />
              <h3 className="text-lg font-bold text-white font-display mb-1">ENGAGEMENT</h3>
              <p className="text-xs font-semibold text-[#E63946] mb-2">Votre satisfaction, notre priorité</p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Nous accompagnons chaque client avec dévouement, du choix du modèle jusqu'aux formalités administratives finales.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20 flex flex-col justify-between">
            <div>
              <BadgeCheck className="w-8 h-8 text-[#38BDF8] mb-4" />
              <h3 className="text-lg font-bold text-white font-display mb-1">EXPERTISE</h3>
              <p className="text-xs font-semibold text-[#38BDF8] mb-2">Notre expérience, votre tranquillité</p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Une maîtrise approfondie du marché automobile mondial, des flux logistiques maritimes et des douanes sénégalaises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. SECTION "NOS SERVICES" (Cards with icons & modals)
         ======================================================== */}
      <section id="services-section" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-[#38BDF8] font-bold uppercase tracking-widest mb-2">
              Prestations Automobiles Complètes
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white">
              Nos Services
            </h2>
            <p className="text-sm text-neutral-400 mt-2 max-w-xl">
              De l'achat à l'immatriculation finale, Diamant Services vous offre une prise en charge complète et fluide.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('contact')}
            className="px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#1E60D5] hover:bg-[#256ee8] transition-colors cursor-pointer self-start md:self-auto"
          >
            Demander un devis personnalisé
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => {
            const IconComponent = srv.icon;
            return (
              <div
                key={srv.id}
                className="p-8 rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20 hover:border-[#1E60D5]/60 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/[0.08]"
                      style={{ color: srv.color }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-mono text-neutral-500">
                      SERVICE DIAMANT
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display mb-1 group-hover:text-[#38BDF8] transition-colors">
                    {srv.title}
                  </h3>
                  <div className="text-xs font-medium text-neutral-400 mb-3">
                    {srv.subtitle}
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={() => setCurrentPage(srv.targetPage)}
                    className="text-xs font-bold text-[#38BDF8] group-hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{srv.actionLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          6. FEATURED VEHICLES PREVIEW (With clear notice)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-[#E63946] font-bold uppercase tracking-widest mb-2">
              Catalogue & Disponibilités
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white">
              Aperçu de nos Véhicules
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl">
              Modèles d’exception disponibles immédiatement ou sur commande avec arrivage régulier au Port de Dakar.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('vehicules')}
            className="flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>Voir tout le catalogue ({vehicles.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredVehicles.map((veh) => (
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
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                      veh.status === 'disponible'
                        ? 'bg-emerald-500/90 text-white'
                        : veh.status === 'en_arrivage'
                        ? 'bg-amber-500/90 text-black'
                        : 'bg-blue-600/90 text-white'
                    }`}>
                      {veh.status === 'disponible' ? 'Disponible' : veh.status === 'en_arrivage' ? 'En arrivage' : 'Sur commande'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-1 font-mono">
                    <span>{veh.brand}</span>
                    <span>{veh.year} · {veh.fuel}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-3">
                    {veh.name}
                  </h3>

                  <div className="text-xl font-bold text-[#38BDF8] font-mono tabular-nums mb-4">
                    {veh.price}
                  </div>

                  <div className="text-xs text-neutral-400 line-clamp-2 mb-4">
                    {veh.description}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center gap-2">
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

        {/* Informative note banner */}
        <div className="mt-8 p-4 rounded-xl bg-[#091528] border border-white/[0.06] text-xs text-neutral-400 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>
              Les véhicules présentés ci-dessus servent de références de démonstration pour le concessionnaire. Pour tout modèle spécifique, transmettez vos critères à Demba Diamant.
            </span>
          </div>
          <button
            onClick={() => setCurrentPage('commander')}
            className="text-xs font-semibold text-[#38BDF8] hover:underline cursor-pointer"
          >
            Lancer une recherche personnalisée →
          </button>
        </div>
      </section>

      {/* ========================================================
          7. QUICK CALL-TO-ACTION BANNER
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0C1E3C] via-[#0A172E] to-[#070D18] border border-[#1E60D5]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-mono text-[#E63946] font-bold uppercase tracking-wider">
              Assistance & Devis Rapide
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Besoin d'un devis immédiat ou d'un conseil ?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
              Contactez directement notre gérant Demba Diamant par appel direct ou via WhatsApp pour une prise en charge rapide.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:+221778348543"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#E63946] hover:bg-[#d62839] transition-all shadow-md font-mono"
            >
              <Phone className="w-4 h-4" />
              <span>+221 77 834 85 43</span>
            </a>
            <a
              href="https://wa.me/221778348543?text=Bonjour%20DIAMANT%20SERVICES%2C%20je%20souhaite%20un%20devis%20automobile."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
