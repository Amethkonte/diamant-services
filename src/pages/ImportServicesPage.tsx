import React from 'react';
import { 
  Ship, 
  FileText, 
  BadgeCheck, 
  ShieldCheck, 
  ArrowDown, 
  Check, 
  Phone,
  MessageCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ImportServicesPage: React.FC = () => {
  const { setCurrentPage } = useApp();

  const pipelineSteps = [
    {
      step: '01',
      title: 'Commande & Achat',
      desc: 'Sélection et inspection approfondie du véhicule chez nos partenaires à l’étranger (Europe, Dubaï, USA, Asie). Vérification de l’historique et achat sécurisé.',
      icon: Clock,
      color: '#38BDF8'
    },
    {
      step: '02',
      title: 'Expédition & Shipping Express',
      desc: 'Embarquement sous conteneur sécurisé ou navire roulier (Ro-Ro). Suivi maritime avec numéro de connaissement (Bill of Lading).',
      icon: Ship,
      color: '#1E60D5'
    },
    {
      step: '03',
      title: 'Arrivée au Port de Dakar',
      desc: 'Réception physique et débarquement supervisé au Port Autonome de Dakar sous la vigilance de nos agents de transit.',
      icon: ShieldCheck,
      color: '#D4AF37'
    },
    {
      step: '04',
      title: 'Dédouanement Réglementaire',
      desc: 'Calcul et règlement précis des droits et taxes de douane sénégalaise en toute transparence. Zéro mauvaise surprise.',
      icon: FileText,
      color: '#E63946'
    },
    {
      step: '05',
      title: 'Immatriculation & Formalités',
      desc: 'Constitution du dossier de carte grise, contrôle technique et pose des plaques d’immatriculation conformes au Sénégal.',
      icon: BadgeCheck,
      color: '#38BDF8'
    },
    {
      step: '06',
      title: 'Livraison & Remise des Clés',
      desc: 'Lavage de finition, vérification mécanique finale et remise solennelle des clés à notre siège de Pikine ou directement à votre domicile.',
      icon: Check,
      color: '#25D366'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E60D5]/15 border border-[#1E60D5]/30 text-xs text-[#38BDF8] font-semibold tracking-wider uppercase font-mono">
          Transit Maritime & Dédouanement Clé en Main
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Importation & Services Logistiques
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
          Diamant Services prend en charge chaque maillon de la chaîne d’importation. Nous transformons une procédure internationale complexe en une expérience simple, transparente et sécurisée.
        </p>
      </div>

      {/* Hero Visual for Import */}
      <div className="relative rounded-3xl overflow-hidden aspect-[21/9] border border-[#1E60D5]/30 shadow-2xl bg-[#0A1324]">
        <img
          src="/src/assets/images/shipping_import_port_1790952358058.jpg"
          alt="Logistique maritime et dédouanement Port de Dakar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/40 to-transparent" />
        
        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold">
              Hub Logistique · Port Autonome de Dakar
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Acheminement & Dédouanement Sans Faille
            </h3>
          </div>
          <div className="text-xs text-neutral-300 font-mono">
            Réseaux : France · Allemagne · Dubaï · USA
          </div>
        </div>
      </div>

      {/* The 4 Core Import Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20 space-y-3">
          <Ship className="w-8 h-8 text-[#1E60D5]" />
          <h3 className="text-lg font-bold text-white font-display">Shipping Express</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Choix des meilleures lignes maritimes pour minimiser les délais de traversée et garantir la sécurité totale de la cargaison.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20 space-y-3">
          <FileText className="w-8 h-8 text-[#E63946]" />
          <h3 className="text-lg font-bold text-white font-display">Dédouanement</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Déclaration douanière certifiée, respect scrupuleux des barèmes légaux et sortie rapide du port sans surestaries.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20 space-y-3">
          <BadgeCheck className="w-8 h-8 text-[#38BDF8]" />
          <h3 className="text-lg font-bold text-white font-display">Immatriculation</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Obtention de la carte grise sénégalaise et confection de plaques minéralogiques conformes pour une mise en circulation immédiate.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0A1324] border border-[#1E60D5]/20 space-y-3">
          <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
          <h3 className="text-lg font-bold text-white font-display">Accompagnement</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Un interlocuteur dédié chez Diamant Services pour répondre à toutes vos interrogations juridiques, douanières et techniques.
          </p>
        </div>
      </div>

      {/* Visual Step-by-Step Pipeline (Section 9 Requirement) */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0A1324] border border-[#1E60D5]/30 shadow-2xl space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold">
            Parcours de votre véhicule
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Le Processus d’Importation en 6 Étapes
          </h2>
          <p className="text-xs text-neutral-400">
            De la signature du bon de commande jusqu’à la remise des clés au Sénégal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pipelineSteps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-[#070D18] border border-white/[0.08] relative group hover:border-[#1E60D5]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-white">
                      {s.step}
                    </span>
                    <Icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>
                  <h3 className="text-base font-bold text-white font-display mb-2">{s.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{s.desc}</p>
                </div>

                {idx < pipelineSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-2 text-neutral-600">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to action for import assistance */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0C1E3C] to-[#070D18] border border-[#1E60D5]/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold font-display text-white">
            Vous avez déjà acheté un véhicule à l’étranger ?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
            Diamant Services peut prendre en charge uniquement le shipping, le dédouanement et l'immatriculation au Sénégal.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setCurrentPage('contact')}
            className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#1E60D5] hover:bg-[#256ee8] transition-all cursor-pointer"
          >
            Demander un devis transit
          </button>
          <a
            href="https://wa.me/221778348543?text=Bonjour%20DIAMANT%20SERVICES%2C%20je%20souhaite%20un%20devis%20pour%20le%20shipping%20ou%20d%C3%A9douanement."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
