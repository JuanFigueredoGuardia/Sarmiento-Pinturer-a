import React, { useRef, useState } from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import storefrontImg from '../assets/images/sarmiento_storefront_1790606374242.jpg';

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

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 15;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35,
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
      className="relative rounded-3xl p-3 bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-700/80 shadow-2xl transition-all duration-200 ease-out"
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

      {/* Main Facade Visual Frame with 3D Depth */}
      <div
        className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-950 border border-slate-700/60 shadow-inner group"
        style={{ transform: 'translateZ(20px)' }}
      >
        <img
          src={storefrontImg}
          alt="Fachada real de Pintureria Sarmiento Sucursal Salta en Salta 258, Concordia"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />

        {/* Ambient Dark Gradient for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

        {/* 3D Floating Tag: Location Pin */}
        <div
          className="absolute top-4 left-4 z-20 transition-transform duration-200"
          style={{ transform: 'translateZ(35px)' }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-700 text-xs font-bold text-white shadow-lg">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            <span>Salta 258 · Concordia</span>
          </div>
        </div>

        {/* 3D Floating Tag: Corner Notice */}
        <div
          className="absolute top-4 right-4 z-20 transition-transform duration-200"
          style={{ transform: 'translateZ(35px)' }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-700 text-xs font-bold text-emerald-400 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Local Abierto al Público</span>
          </div>
        </div>

        {/* Bottom Store Details Overlaid */}
        <div
          className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-slate-950/95 backdrop-blur-md border border-slate-800 shadow-xl space-y-2"
          style={{ transform: 'translateZ(30px)' }}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-base font-extrabold text-white uppercase tracking-tight">
              Pintureria Sarmiento · Sucursal Salta
            </h3>
            <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider">
              Esquina Emblemática
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Fachada comercial en la esquina de Salta 258. Amplio salón de venta con asesoramiento técnico personalizado, depósito con stock permanente de pinturas Üxell y fácil detención para carga de baldes y latas.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-800/80">
            <a
              href="tel:03455200514"
              className="text-emerald-400 font-bold hover:underline flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>0345 520-0514</span>
            </a>
            <a
              href="https://maps.google.com/?q=Salta+258,+Concordia,+Entre+Rios"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 font-bold hover:underline flex items-center gap-1"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Ver en Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
