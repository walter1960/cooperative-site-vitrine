import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Coins, 
  Landmark, 
  CreditCard, 
  PiggyBank, 
  Smartphone, 
  ArrowRight, 
  CheckCircle, 
  Calculator, 
  Phone, 
  Mail, 
  MapPin, 
  FileText, 
  Users, 
  Lock, 
  ChevronRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'simulator' | 'products' | 'join'>('simulator');
  
  // Simulator state
  const [loanAmount, setLoanAmount] = useState<number>(3000000);
  const [durationMonths, setDurationMonths] = useState<number>(24);
  const [rate, setRate] = useState<number>(6.5);

  const monthlyPayment = Math.round((loanAmount * (1 + (rate / 100) * (durationMonths / 12))) / durationMonths);
  const totalRepayment = monthlyPayment * durationMonths;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-emerald-500 selection:text-white">
      
      {/* Top Corporate Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-slate-400 font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> Siège Social & Agences Ouvertes 07h30 - 17h00</span>
            <span className="hidden md:flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-400" /> Assistance : +228 22 26 21 01</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-mono text-[11px]">
              Agrément SFD • Normes BCEAO
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-900/30">
              <Building2 className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="text-lg font-black tracking-wider text-white block">COOPEC</span>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold block">Coopérative d'Épargne et de Crédit</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#produits" className="hover:text-emerald-400 transition-colors">Produits & Épargne</a>
            <a href="#credits" className="hover:text-emerald-400 transition-colors">Prêts & Financements</a>
            <a href="#simulateur" className="hover:text-emerald-400 transition-colors">Simulateur</a>
            <a href="#adhesion" className="hover:text-emerald-400 transition-colors">Devenir Sociétaire</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="http://localhost:5173" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-900/20"
            >
              <span>Accès Espace Logiciel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 px-6 border-b border-slate-800/80">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[130px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Système Sécurisé • Épargne & Crédit aux Membres</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Faites grandir vos projets avec une coopérative <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">solide et solidaire</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal">
              Accédez à des livrets d'épargne rémunérés, des avances sur salaire, des financements de projets d'habitat et de véhicules avec une gestion 100% transparente.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#simulateur"
                className="px-7 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-emerald-950/50 flex items-center gap-2"
              >
                <span>Simuler un Financement</span>
                <Calculator className="w-4 h-4" />
              </a>

              <a 
                href="#adhesion"
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold rounded-xl text-sm transition-all"
              >
                Guide d'Adhésion
              </a>
            </div>

            {/* Key Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/80 max-w-lg font-mono">
              <div>
                <div className="text-2xl font-black text-white">99.8%</div>
                <div className="text-xs text-slate-500 font-sans mt-0.5">Sécurité des Dépôts</div>
              </div>
              <div>
                <div className="text-2xl font-black text-emerald-400">6.5%</div>
                <div className="text-xs text-slate-500 font-sans mt-0.5">Taux Avantageux</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">24h - 48h</div>
                <div className="text-xs text-slate-500 font-sans mt-0.5">Décaissement Rapide</div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual: Virtual Member Smart Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Carte Sociétaire Intelligente</span>
                <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">Active</span>
              </div>

              {/* Card Rendering */}
              <div className="relative aspect-[1.586/1] rounded-2xl p-5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white border border-slate-700/80 flex flex-col justify-between shadow-xl">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-xs uppercase tracking-wider">COOPEC NATIONALE</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">SMART-ID</span>
                </div>

                <div className="my-auto flex justify-between items-center">
                  <div className="w-10 h-7 rounded bg-gradient-to-tr from-amber-400 to-yellow-200 border border-amber-300 shadow-sm" />
                  <span className="font-mono text-xs font-bold text-slate-300">MAT-8821</span>
                </div>

                <div>
                  <div className="font-mono text-xs tracking-widest text-slate-200 font-semibold">4532 •••• 0200 2250</div>
                  <div className="flex justify-between items-end mt-1 pt-1 border-t border-slate-800 text-[10px]">
                    <span className="font-bold text-white uppercase">ADHERENT SOCIETAIRE</span>
                    <span className="text-emerald-400 font-mono">VAL: 12/29</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Livret d'Épargne Associé :</span>
                  <span className="font-mono text-white font-bold">25121100A0200225</span>
                </div>
                <div className="flex justify-between">
                  <span>Parts Sociales Libérées :</span>
                  <span className="font-mono text-emerald-400 font-bold">100% Conforme</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Products & Financial Services */}
      <section id="produits" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase font-bold text-emerald-400 tracking-widest block">Nos Solutions Coopératives</span>
          <h2 className="text-3xl font-black text-white">Des produits pensés pour chaque étape de votre vie</h2>
          <p className="text-sm text-slate-400">Des services financiers simples, équitables et conformes aux meilleures normes prudentielles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 hover:border-emerald-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <PiggyBank className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Livret d'Épargne & Tontine</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Constituez votre épargne en toute sécurité avec des versements libres ou programmés par retenue à la source.
            </p>
            <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
              <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Disponibilité immédiate des fonds</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Zéro frais de tenue de compte</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 hover:border-emerald-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
              <Landmark className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Prêts Salariés & Équipement</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bénéficiez d'avances sur salaires, de prêts scolaires et de financements d'équipements aux taux les plus bas.
            </p>
            <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
              <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-teal-400" /> Respect de la quotité cessible (33%)</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-teal-400" /> Échéancier d'amortissement transparent</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 hover:border-emerald-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Coins className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Financement de Projets d'Avenir</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Construction de logement, acquisition de véhicules et projets agricoles accompagnés par votre coopérative.
            </p>
            <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
              <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-amber-400" /> Durée de 12 à 60 mois</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-amber-400" /> Examen rapide en comité de crédit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Financial Simulator */}
      <section id="simulateur" className="py-20 px-6 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold text-emerald-400 tracking-widest block">Calculateur en Ligne</span>
            <h2 className="text-3xl font-black text-white">Simulez votre mensualité en temps réel</h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-slate-400">Montant Souhaité</span>
                  <span className="font-mono text-white text-sm font-bold">{loanAmount.toLocaleString('fr-FR')} F.CFA</span>
                </div>
                <input 
                  type="range"
                  min="200000"
                  max="15000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-slate-400">Durée de Remboursement</span>
                  <span className="font-mono text-white text-sm font-bold">{durationMonths} Mois</span>
                </div>
                <input 
                  type="range"
                  min="6"
                  max="60"
                  step="6"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-slate-400">Taux d'Intérêt Annuel</span>
                  <span className="font-mono text-emerald-400 text-sm font-bold">{rate} %</span>
                </div>
                <input 
                  type="range"
                  min="4.5"
                  max="12.0"
                  step="0.5"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>
            </div>

            {/* Results Box */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block">Mensualité Estimée</span>
                <div className="text-3xl font-black font-mono text-emerald-400 mt-1">
                  {monthlyPayment.toLocaleString('fr-FR')} F.CFA
                </div>
                <span className="text-[11px] text-slate-400 block mt-1">Par mois pendant {durationMonths} mois</span>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-800 text-xs text-slate-400 font-medium">
                <div className="flex justify-between">
                  <span>Total Capital + Intérêts :</span>
                  <span className="font-mono text-white font-bold">{totalRepayment.toLocaleString('fr-FR')} F</span>
                </div>
                <div className="flex justify-between">
                  <span>Coût Total du Crédit :</span>
                  <span className="font-mono text-emerald-400 font-bold">{(totalRepayment - loanAmount).toLocaleString('fr-FR')} F</span>
                </div>
              </div>

              <a 
                href="#adhesion"
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-center rounded-xl text-xs transition-all shadow-md"
              >
                Déposer une Demande d'Adhésion
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-bold text-slate-300">COOPEC • Coopérative d'Épargne et de Crédit</span>
            <p className="text-[11px] text-slate-500 mt-0.5">Système Comptable SYSCOA-SFD • Normes Prudentielles BCEAO</p>
          </div>
          <div>
            © {new Date().getFullYear()} Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
