import React, { useRef, useState } from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, ShieldCheck, Sparkles, Truck, CheckCircle2, MessageCircle } from 'lucide-react';
import { negocioData } from '../data/negocioData';

export const Storefront3D: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-3xl p-5 bg-gradient-to-b from-slate-800/90 to-slate-900 border border-slate-700/80 shadow-2xl transition-all duration-200 ease-out"
      style={{
        perspective: '1200px',
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glare specular overlay */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 z-30"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 60%)`,
        }}
      />

      <div className="relative space-y-5" style={{ transform: 'translateZ(15px)' }}>
        
        {/* Top Header Card */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-rose-950/40">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-extrabold text-white tracking-tight uppercase">
                  Pinturería Sarmiento
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30 uppercase">
                  Sucursal Salta
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                {negocioData.direccion.calle} {negocioData.direccion.numero} · {negocioData.direccion.interseccion}
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-emerald-500/40 text-xs font-bold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Atención de Vecino a Vecino</span>
          </div>
        </div>

        {/* Interactive Location Showcase Hub (Sin imagen artificial) */}
        <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-200 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Nuestra Esquina Tradicional & Punto de Encuentro
            </span>
            <span className="text-[11px] font-mono text-slate-400">Concordia, Entre Ríos</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Nuestro local en Salta 258 está preparado para brindarte la mejor experiencia de compra. 
            Contamos con salón de ventas con asesoramiento mano a mano, depósito permanente de mercadería, 
            sistema tintométrico computarizado para preparar tus colores al instante y espacio de carga cómodo 
            frente al local para retirar latas y tachos pesados sin complicaciones.
          </p>

          {/* 3 Key Operational Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs fade-in-up-pronounced stagger-1">
              <div className="text-rose-400 font-bold mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Salón & Mostrador</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Atención franca, mates y el mejor consejo de oficio.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs fade-in-up-pronounced stagger-2">
              <div className="text-amber-400 font-bold mb-1 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" />
                <span>Zona de Carga</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Parás sobre Salta 258, cargás los tachos y seguís viaje.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs fade-in-up-pronounced stagger-3">
              <div className="text-blue-400 font-bold mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Envío a Domicilio</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Te lo llevamos a la puerta de tu casa o al pie de la obra.
              </p>
            </div>
          </div>
        </div>

        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs">
          <a
            href={negocioData.direccion.google_maps_url}
            target="_blank"
            rel="noreferrer"
            className="flex-1 min-w-[200px] py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-center flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <Navigation className="w-4 h-4" />
            <span>Cómo Llegar en Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={negocioData.contacto.whatsapp_url}
            target="_blank"
            rel="noreferrer"
            className="flex-1 min-w-[200px] py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Escribinos al WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
