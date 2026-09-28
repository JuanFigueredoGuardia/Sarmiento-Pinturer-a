import React from 'react';
import { MapPin, Phone, Clock, Truck, ShieldCheck, Palette, ArrowRight, MessageCircle } from 'lucide-react';
import storefrontImg from '../assets/images/sarmiento_storefront_1790606374242.jpg';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="inicio" className="relative overflow-hidden pt-10 pb-20 lg:py-24 border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition and Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-rose-400 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Distribuidor Oficial Üxell Pinturas · Concordia, Entre Ríos</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] [text-wrap:balance]">
                Pintureria Sarmiento{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">
                  Sucursal Salta
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-slate-200 tracking-tight">
                Expertos en Color
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Encontrá la línea completa de pinturas <strong>Üxell</strong> en nuestra emblemática esquina de <strong>Salta 258</strong>. 
              Brindamos asesoramiento técnico para hogares, obras y comercios, preparación de colores a medida y <strong>servicio de entrega a domicilio</strong> en toda la ciudad.
            </p>

            {/* Quick trust metrics and highlights (No pill boxes, clean structural items) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-1">
              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs mb-1">
                  <Truck className="w-4 h-4 shrink-0" />
                  <span>Entrega a Domicilio</span>
                </div>
                <p className="text-xs text-slate-400">
                  Envíos directos a tu casa u obra en Concordia.
                </p>
              </div>

              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs mb-1">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Salta 258</span>
                </div>
                <p className="text-xs text-slate-400">
                  Esquina estratégica, fácil carga y retiro.
                </p>
              </div>

              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-xs mb-1">
                  <Palette className="w-4 h-4 shrink-0" />
                  <span>Color Exacto</span>
                </div>
                <p className="text-xs text-slate-400">
                  Sistema tintométrico Üxell de última generación.
                </p>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="https://wa.me/5493455200514?text=Hola%20Pintureria%20Sarmiento%20Sucursal%20Salta,%20necesito%20un%20presupuesto"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/50 inline-flex items-center gap-2 transition-all transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir Presupuesto por WhatsApp</span>
              </a>

              <button
                onClick={onOpenQuote}
                type="button"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-500 hover:to-orange-400 text-white shadow-lg shadow-rose-950/40 inline-flex items-center gap-2 transition-all"
              >
                <span>Cotizar en Línea</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#calculadora"
                className="px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors"
              >
                Calcular Litros
              </a>
            </div>

            {/* Micro details: phone and schedule summary */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>Atención telefónica:</span>
                <a href="tel:03455200514" className="text-slate-200 font-semibold hover:text-white tabular-nums">
                  0345 520-0514
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>Horarios: 08:00 a 12:00 y 15:30 a 19:30 hs</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Anchor with Storefront Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 p-2 shadow-2xl group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950">
                <img
                  src={storefrontImg}
                  alt="Fachada de Pintureria Sarmiento Sucursal Salta en Concordia, Entre Ríos"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                {/* Overlaid location badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-md text-xs font-bold bg-slate-950/80 backdrop-blur-md text-white border border-slate-700/80 shadow-md">
                    Salta 258 · Concordia
                  </span>
                </div>

                {/* Bottom details card inside the image frame */}
                <div className="absolute bottom-4 left-4 right-4 z-10 bg-slate-950/90 backdrop-blur-md border border-slate-800/90 rounded-xl p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Sucursal Salta
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Abierto hoy
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Esquina de calle Salta y Carriego/Urquiza. Amplio stock permanente de pinturas Üxell.
                  </p>
                  <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400 border-t border-slate-800">
                    <span>Atención de mañana y tarde</span>
                    <a href="#sucursal" className="text-rose-400 hover:text-rose-300 font-semibold">
                      Cómo llegar →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
