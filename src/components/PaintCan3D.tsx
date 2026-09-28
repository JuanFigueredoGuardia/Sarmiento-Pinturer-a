import React, { useState, useEffect, useRef } from 'react';
import { UxellLogo } from './UxellLogo';

export const PaintCan3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: -10, y: 15 });
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let autoAngle = 15;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      const targetX = Math.max(-25, Math.min(25, -deltaY * 20));
      const targetY = Math.max(-45, Math.min(45, deltaX * 35));

      setRotation({ x: targetX, y: targetY });
      setIsInteracting(true);
    };

    const handleMouseLeave = () => {
      setIsInteracting(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Subtle gentle floating orbit when idle
    const idleLoop = () => {
      if (!isInteracting) {
        autoAngle += 0.4;
        setRotation((prev) => ({
          x: -8 + Math.sin(autoAngle * 0.03) * 6,
          y: Math.sin(autoAngle * 0.02) * 20,
        }));
      }
      animationFrameId = requestAnimationFrame(idleLoop);
    };

    animationFrameId = requestAnimationFrame(idleLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInteracting]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[340px] h-[380px] mx-auto flex items-center justify-center select-none"
      style={{ perspective: '1200px' }}
    >
      {/* 3D Ambient Floor Shadow */}
      <div
        className="absolute bottom-6 w-56 h-12 bg-black/60 rounded-full blur-xl pointer-events-none transition-all duration-300"
        style={{
          transform: `scale(${1 + Math.abs(rotation.y) * 0.005}) rotateX(80deg)`,
        }}
      />

      {/* 3D Can Object Container */}
      <div
        className="relative w-52 h-72 transition-transform duration-150 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {/* Top Rim / Chrome Ring (3D Lid) */}
        <div
          className="absolute -top-3 left-0 right-0 h-10 rounded-full border-2 border-slate-300 shadow-lg"
          style={{
            transform: 'translateZ(10px) rotateX(90deg)',
            background: 'radial-gradient(ellipse at center, #f1f5f9 0%, #cbd5e1 50%, #64748b 100%)',
            boxShadow: 'inset 0 2px 6px rgba(255,255,255,0.8), 0 4px 10px rgba(0,0,0,0.5)',
          }}
        >
          {/* Inner paint preview inside can opening */}
          <div
            className="absolute inset-1.5 rounded-full"
            style={{
              background: 'radial-gradient(circle, #e11d48 0%, #be123c 60%, #881337 100%)',
            }}
          />
        </div>

        {/* Can Metal Handle Ring */}
        <div
          className="absolute -top-6 -left-3 -right-3 h-28 rounded-t-full border-[3px] border-slate-400/80 pointer-events-none"
          style={{
            transform: 'translateZ(25px) rotateX(-20deg)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          }}
        />

        {/* Can Body (Main Cylinder Front Plate) */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-slate-700/80 flex flex-col justify-between p-5 text-white"
          style={{
            transform: 'translateZ(15px)',
            background: 'linear-gradient(135deg, #090d16 0%, #0f172a 40%, #1e1b4b 100%)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          }}
        >
          {/* Specular metallic light reflection streak */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 transition-transform duration-100"
            style={{
              background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.4) 45%, transparent 60%)',
              transform: `translateX(${rotation.y * 3}px)`,
            }}
          />

          {/* Top of can label */}
          <div className="relative z-10 flex items-center justify-between border-b border-slate-700/60 pb-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400">
              LÍNEA PREMIUM
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              CONT. NETO 20L
            </span>
          </div>

          {/* Center Brand Identity (Üxell Pinturas Logo) */}
          <div className="relative z-10 my-auto py-2 text-center">
            <UxellLogo className="h-14 w-auto mx-auto drop-shadow-md" />
            <div className="mt-2 text-xs font-bold text-slate-100 uppercase tracking-wide">
              Látex Acrílico Profesional
            </div>
            <div className="text-[10px] text-rose-300 font-medium">
              Ultra Lavable · Máximo Poder Cubritivo
            </div>
          </div>

          {/* Bottom of can label with Sarmiento Sucursal Salta */}
          <div className="relative z-10 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[10px]">
            <span className="font-extrabold text-white uppercase tracking-tight">
              Pintureria Sarmiento
            </span>
            <span className="text-rose-400 font-bold">
              Salta 258
            </span>
          </div>
        </div>

        {/* 3D Depth Sides (Simulated Cylinder Depth) */}
        <div
          className="absolute inset-y-1 -left-2 w-4 rounded-l-2xl pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.8), transparent)',
            transform: 'rotateY(-60deg) translateZ(-5px)',
          }}
        />
        <div
          className="absolute inset-y-1 -right-2 w-4 rounded-r-2xl pointer-events-none"
          style={{
            background: 'linear-gradient(to left, rgba(0,0,0,0.8), transparent)',
            transform: 'rotateY(60deg) translateZ(-5px)',
          }}
        />

        {/* Bottom Chrome Base Ring */}
        <div
          className="absolute -bottom-2 left-1 right-1 h-6 rounded-b-xl border-t border-slate-600"
          style={{
            transform: 'translateZ(5px)',
            background: 'linear-gradient(to bottom, #475569 0%, #1e293b 100%)',
          }}
        />
      </div>
    </div>
  );
};
