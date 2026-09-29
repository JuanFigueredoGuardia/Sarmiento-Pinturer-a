import React, { useState } from 'react';
import { SarmientoLogo } from './SarmientoLogo';
import { Phone, Menu, X, Code2, Sparkles, MessageCircle } from 'lucide-react';

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
        <a href="#inicio" className="flex items-center group focus:outline-none">
          <SarmientoLogo className="h-10 w-auto" />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#inicio" className="hover:text-white transition-colors">
            Inicio
          </a>
          <a href="#local" className="hover:text-white transition-colors">
            El Local (Salta 258)
          </a>
          <a href="#productos" className="hover:text-white transition-colors">
            Pinturas Sarmiento
          </a>
          <a href="#calculadora" className="hover:text-white transition-colors">
            Calculadora
          </a>
          <a href="#horarios" className="hover:text-white transition-colors">
            Horarios & Ubicación
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
              href="#local"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white"
            >
              El Local (Salta 258)
            </a>
            <a
              href="#productos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white"
            >
              Pinturas Sarmiento
            </a>
            <a
              href="#calculadora"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white"
            >
              Calculadora de Litros
            </a>
            <a
              href="#horarios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white"
            >
              Horarios & Ubicación
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
            <a
              href="https://wa.me/5493455200514"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Sucursal Salta
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
