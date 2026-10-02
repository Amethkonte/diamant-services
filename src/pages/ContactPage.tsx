import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Compass
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ContactPage: React.FC = () => {
  const { submitMessage } = useApp();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Commande de véhicule');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

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
    if (!message.trim()) {
      setError('Veuillez écrire votre message.');
      return;
    }

    setError('');
    submitMessage({
      fullName,
      phone,
      email,
      subject,
      message
    });
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E60D5]/15 border border-[#1E60D5]/30 text-xs text-[#38BDF8] font-semibold tracking-wider uppercase font-mono">
          Échange Direct & Devis Personnalisé
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Contactez DIAMANT SERVICES
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
          Notre gérant Demba Diamant et notre équipe commerciale se tiennent à votre disposition pour vous conseiller et vous accompagner dans votre projet automobile.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Coords & Maps (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card Coords */}
          <div className="p-8 rounded-3xl bg-[#0A1324] border border-[#1E60D5]/30 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold">
                Coordonnées Officielles
              </span>
              <h2 className="text-xl font-bold font-display text-white mt-1">
                DIAMANT SERVICES AUTOMOBILE
              </h2>
              <div className="text-xs text-[#D4AF37] font-semibold mt-0.5">
                Gérant : Demba Diamant
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/[0.08] text-xs sm:text-sm">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#E63946]/10 text-[#E63946] border border-[#E63946]/30 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-neutral-400 text-xs">Téléphone direct (Cliquable)</div>
                  <a
                    href="tel:+221778348543"
                    className="text-white hover:text-[#38BDF8] font-mono font-bold text-base transition-colors"
                  >
                    +221 77 834 85 43
                  </a>
                  <div className="text-[11px] text-neutral-500">Appels & SMS 7j/7</div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 shrink-0">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-neutral-400 text-xs">WhatsApp Professionnel</div>
                  <a
                    href="https://wa.me/221778348543?text=Bonjour%20DIAMANT%20SERVICES%2C%20je%20souhaite%20vous%20contacter."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#25D366] font-mono font-bold text-base transition-colors"
                  >
                    +221 77 834 85 43
                  </a>
                  <div className="text-[11px] text-neutral-500">Réponse rapide garantie</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#1E60D5]/10 text-[#38BDF8] border border-[#1E60D5]/30 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-neutral-400 text-xs">Localisation du Siège</div>
                  <div className="text-white font-semibold">Pikine / Dakar, Sénégal</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    Zone de service : Sénégal et possibilité de service sur tout le territoire national selon les prestations.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Buttons */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+221778348543"
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#E63946] hover:bg-[#d62839] flex items-center justify-center gap-2 transition-all font-mono"
              >
                <Phone className="w-4 h-4" />
                <span>Appeler maintenant</span>
              </a>
              <a
                href="https://wa.me/221778348543"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Message WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Styled Map Card */}
          <div className="p-6 rounded-3xl bg-[#0A1324] border border-[#1E60D5]/20 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#38BDF8]">
                <Compass className="w-4 h-4" />
                <span>Emplacement Géographique</span>
              </div>
              <span className="text-[10px] text-neutral-400 font-mono">Dakar / Pikine · Sénégal</span>
            </div>

            {/* Styled Map frame */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 bg-[#070D18]">
              <iframe
                title="Localisation Diamant Services Pikine Dakar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.749722383823!2d-17.398038!3d14.755499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10cb4620f4c27%3A0x6a2c91cf5604ecda!2sPikine%2C%20Dakar%2C%20Senegal!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2 left-2 bg-[#070D18]/90 backdrop-blur-md px-3 py-1 rounded text-[10px] text-neutral-300 border border-white/10">
                Pikine · Dakar · Sénégal
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#0A1324] border border-[#1E60D5]/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-14 h-14 text-[#25D366] mx-auto animate-bounce" />
              <h3 className="text-2xl font-bold font-display text-white">
                Message envoyé avec succès !
              </h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                Merci <strong>{fullName}</strong>. Votre message a bien été réceptionné par notre gérant Demba Diamant. Nous reviendrons vers vous au <strong>{phone}</strong> dans les plus brefs délais.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#1E60D5] hover:bg-[#256ee8]"
                >
                  Envoyer un autre message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-xl font-bold font-display text-white">
                  Envoyez-nous un Message Direct
                </h2>
                <p className="text-xs text-neutral-400 mt-1">
                  Remplissez ce formulaire et nous prendrons contact avec vous très rapidement.
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
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ex: Cheikh Anta Diop"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                    Email (optionnel)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre.email@domaine.sn"
                    className="w-full bg-[#070D18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#1E60D5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                    Objet de votre demande
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#070D18] border border-white/10 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#1E60D5]"
                  >
                    <option value="Commande de véhicule">Commande de véhicule sur-mesure</option>
                    <option value="Location">Location de véhicule (Court / Long terme)</option>
                    <option value="Shipping et Dédouanement">Shipping Express & Dédouanement</option>
                    <option value="Financement">Financement avec dépôt</option>
                    <option value="Autre demande">Autre demande d'information</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                  Votre Message ou Détail du Projet *
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Décrivez vos besoins, le modèle recherché ou votre calendrier..."
                  className="w-full bg-[#070D18] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#1E60D5]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1E60D5] to-[#1448A6] hover:from-[#256ee8] hover:to-[#1752bd] rounded-xl shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Envoyer le message</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Prise en charge directe par l'équipe de Demba Diamant sous 24h</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
