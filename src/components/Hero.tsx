import React from 'react';
import { MapPin, Phone, MessageCircle, Truck, Palette, ArrowRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import fotoLocalImg from '../assets/images/foto_real_local_1790613466775.jpg';

interface HeroProps {
  onOpenQuote?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="inicio" className="relative pt-6 pb-16 lg:py-20 overflow-hidden border-b border-slate-800">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Proposition and Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-rose-400 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Pinturería Sarmiento · Sucursal Salta 258, Concordia, Entre Ríos</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] [text-wrap:balance]">
                Pinturería Sarmiento{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">
                  Sucursal Salta
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-slate-200 tracking-tight flex items-center gap-2">
                <span>Expertos en Color</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-300 font-semibold uppercase tracking-wider">
                  Atención de Vecino a Vecino
                </span>
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Encontrá la línea completa de pinturas <strong>Pinturería Sarmiento</strong> en nuestra emblemática esquina de <strong>Salta 258</strong>. 
              Brindamos asesoramiento técnico de oficio para hogares, obras y proyectos comerciales, preparación computarizada de más de 2.500 colores y <strong>servicio de entrega a domicilio</strong> directo en toda Concordia.
            </p>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-1">
              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs mb-1">
                  <Truck className="w-4 h-4 shrink-0" />
                  <span>Entrega a Domicilio</span>
                </div>
                <p className="text-xs text-slate-400">
                  Te llevamos los baldes y materiales a tu casa u obra.
                </p>
              </div>

              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs mb-1">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Salta 258</span>
                </div>
                <p className="text-xs text-slate-400">
                  Esquina con zona de detención y carga cómoda.
                </p>
              </div>

              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-xs mb-1">
                  <Palette className="w-4 h-4 shrink-0" />
                  <span>Color Exacto</span>
                </div>
                <p className="text-xs text-slate-400">
                  Sistema tintométrico digital en el acto.
                </p>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/5493455200514?text=Hola%20Pintureria%20Sarmiento%20Sucursal%20Salta,%20necesito%20un%20presupuesto"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/50 inline-flex items-center gap-2 transition-all transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir Presupuesto por WhatsApp</span>
              </a>

              <a
                href="tel:03455200514"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-500 hover:to-orange-400 text-white shadow-lg shadow-rose-950/40 inline-flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Llamar: 0345 520-0514</span>
              </a>

              <a
                href="#calculadora"
                className="px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors"
              >
                Calcular Litros
              </a>
            </div>

            {/* Micro details */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Lunes a Viernes: 08:00 a 12:00 y 15:30 a 19:30 hs · Sábados: 08:00 a 12:30 hs</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Anchor with the Real Storefront Photo (Sin Alterar) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-900/90 p-2.5 shadow-2xl group transition-all">
              
              <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500/20 via-orange-500/20 to-amber-500/20 rounded-3xl blur-sm -z-10 group-hover:opacity-100 transition-opacity" />

              {/* Photo Container: Pristine presentation of the local photo without altering */}
              <div className="relative aspect-[16/9] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
                <img
                  src={fotoLocalImg}
                  alt="Foto real de Pinturería Sarmiento Sucursal Salta en Salta 258, Concordia, Entre Ríos"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />

                {/* Badge Top: Local Oficial */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/90 backdrop-blur-md text-white border border-slate-700/90 text-xs font-bold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Local Oficial · Salta 258</span>
                  </div>
                </div>

                {/* Badge Top Right: Exclusivo */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600/90 backdrop-blur-md text-white text-xs font-bold shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Local Exclusivo</span>
                  </div>
                </div>

                {/* Bottom Overlay Card with Store Address & Action */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 bg-slate-950/95 backdrop-blur-md border border-slate-800 rounded-xl p-3.5 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">
                        Pinturería Sarmiento
                      </h3>
                      <p className="text-[11px] text-slate-300">
                        Sucursal Salta · Salta 258, Concordia
                      </p>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Salta+258,+Concordia,+Entre+Rios"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-colors inline-flex items-center gap-1 shadow-md"
                    >
                      <MapPin className="w-3 h-3" />
                      <span>Cómo llegar</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Sub-strip with Local Value Proposition */}
              <div className="mt-2.5 px-3 py-2 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Salón de ventas, depósito y atención directa
                </span>
                <span className="text-[11px] text-amber-400 font-semibold">
                  Concordia, E.R.
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
