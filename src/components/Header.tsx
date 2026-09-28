import React, { useState } from 'react';
import { UxellLogo } from './UxellLogo';
import { Phone, Menu, X, Code2, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
  onOpenCode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote, onOpenCode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/90 border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark & Logo */}
        <a href="#inicio" className="flex items-center gap-3.5 group focus:outline-none">
          <div className="bg-black/80 border border-slate-800/90 px-2.5 py-1.5 rounded-xl shadow-md flex items-center group-hover:border-slate-700 transition-all">
            <UxellLogo className="h-9 w-auto" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold tracking-tight text-white uppercase group-hover:text-rose-400 transition-colors">
              Pintureria Sarmiento
            </span>
            <span className="text-xs font-semibold text-rose-400/90 tracking-wide">
              Sucursal Salta · Concordia
            </span>
          </div>
        </a>

        {/* Zone 2: 4-6 Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#inicio" className="hover:text-white transition-colors">
            Inicio
          </a>
          <a href="#sucursal" className="hover:text-white transition-colors">
            Sucursal Salta
          </a>
          <a href="#productos" className="hover:text-white transition-colors">
            Productos Üxell
          </a>
          <a href="#calculadora" className="hover:text-white transition-colors">
            Calculadora
          </a>
          <a href="#colores" className="hover:text-white transition-colors">
            Colores
          </a>
          <a href="#contacto" className="hover:text-white transition-colors">
            Contacto
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="tel:03455200514"
            className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white py-2 px-3 rounded-lg border border-slate-800 hover:bg-slate-900 transition-all"
            title="Llamar a Sucursal Salta: 0345 520-0514"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span className="tabular-nums">0345 520-0514</span>
          </a>

          <button
            onClick={onOpenCode}
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white py-2 px-3 rounded-lg border border-slate-800 hover:bg-slate-900 transition-all"
            title="Ver código fuente en un solo archivo HTML para copiar"
          >
            <Code2 className="w-3.5 h-3.5 text-rose-400" />
            <span className="hidden sm:inline">Código HTML</span>
          </button>

          <button
            onClick={onOpenQuote}
            type="button"
            className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 hover:from-rose-500 hover:to-orange-400 rounded-lg shadow-lg shadow-rose-950/40 transition-all transform active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5 hidden sm:inline" />
            Pedir Presupuesto
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white"
            >
              Inicio
            </a>
            <a
              href="#sucursal"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white"
            >
              Sucursal Salta (Salta 258)
            </a>
            <a
              href="#productos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white"
            >
              Productos Üxell
            </a>
            <a
              href="#calculadora"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white"
            >
              Calculadora de Litros
            </a>
            <a
              href="#colores"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white"
            >
              Paleta de Colores
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white"
            >
              Contacto & Horarios
            </a>
          </nav>

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <a
              href="tel:03455200514"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 border border-slate-800"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              Llamar al 0345 520-0514
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
