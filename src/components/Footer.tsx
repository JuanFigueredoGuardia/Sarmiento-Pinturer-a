import React from 'react';
import { SarmientoLogo } from './SarmientoLogo';
import { MapPin, Phone, Clock, Truck, ShieldCheck, Heart, Code2, MessageCircle } from 'lucide-react';
import { negocioData } from '../data/negocioData';

interface FooterProps {
  onOpenCode: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCode, onOpenQuote }) => {
  return (
    <footer id="contacto" className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <SarmientoLogo className="h-10 w-auto" />
            <p className="text-xs leading-relaxed text-slate-400">
              Especialistas en pinturas látex para interior y exterior, impermeabilizantes elastoméricos, membranas de techo, esmaltes y colorimetría computarizada. Tradición, oficio y atención personalizada en Concordia.
            </p>
            <div className="flex items-center gap-2 text-xs text-rose-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Calidad Garantizada · Atendido por Gente de Acá</span>
            </div>
          </div>

          {/* Col 2: Dirección y Contacto */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Sucursal Salta
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Salta 258</strong><br />
                  E3202 Concordia, Entre Ríos, Argentina
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 pt-1">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={negocioData.contacto.telefono_click} className="hover:text-white font-semibold tabular-nums">
                  {negocioData.contacto.telefono_fijo}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300 pt-1">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Entrega a domicilio en toda Concordia</span>
              </div>
            </div>
          </div>

          {/* Col 3: Horarios de Atención */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Horarios Comerciales
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <p className="text-slate-300 font-semibold">Lunes a Viernes:</p>
                <p className="text-slate-400">Mañana: hasta las 12:00 p.m.</p>
                <p className="text-slate-400">Tarde: 3:30 p.m. a 19:30 hs</p>
              </div>
              <div className="pt-1">
                <p className="text-slate-300 font-semibold">Sábados:</p>
                <p className="text-slate-400">08:00 a 12:30 hs</p>
              </div>
              <p className="text-[11px] text-rose-400/90 pt-1">
                Domingos y Feriados cerrado
              </p>
            </div>
          </div>

          {/* Col 4: Acciones & Enlaces */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Atención & Enlaces
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenQuote}
                  className="text-left text-slate-300 hover:text-rose-400 transition-colors"
                >
                  → Solicitar Presupuesto Online
                </button>
              </li>
              <li>
                <a
                  href={negocioData.contacto.whatsapp_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp (+54 9 345 520-0514)</span>
                </a>
              </li>
              <li>
                <a
                  href={negocioData.direccion.google_maps_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  → Ver en Google Maps (Salta 258)
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenCode}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-rose-300 hover:bg-slate-800 transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Ver Código HTML de 1 solo archivo</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Pinturería Sarmiento Sucursal Salta. La marca que viste tus proyectos.</p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>Salta 258 · Concordia, Entre Ríos</span>
            <span>·</span>
            <span>Tel: 0345 520-0514</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
