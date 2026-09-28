/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { UxellLogo } from './components/UxellLogo';
import { PaintCan3D } from './components/PaintCan3D';
import { Storefront3D } from './components/Storefront3D';
import { negocioData } from './data/negocioData';
import {
  MapPin,
  Phone,
  Clock,
  Truck,
  Navigation,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  ArrowUp,
  Layers,
  ChevronDown,
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effects: Scroll Progress Bar & Dynamic Header & Scroll Reveal
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(scroll);

      setIsScrolled(totalScroll > 30);

      // Reveal on scroll elements
      const reveals = document.querySelectorAll('.reveal-on-scroll');
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.88) {
          el.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute live open/closed status for Concordia, Entre Ríos (America/Argentina/Buenos_Aires)
  const storeStatus = useMemo(() => {
    try {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('es-AR', {
        timeZone: 'America/Argentina/Buenos_Aires',
        hour: 'numeric',
        minute: 'numeric',
        weekday: 'short',
        hour12: false,
      });

      const parts = formatter.formatToParts(now);
      const hourPart = parts.find((p) => p.type === 'hour');
      const minutePart = parts.find((p) => p.type === 'minute');
      const weekdayPart = parts.find((p) => p.type === 'weekday');

      const hour = hourPart ? parseInt(hourPart.value, 10) : 10;
      const minute = minutePart ? parseInt(minutePart.value, 10) : 0;
      const timeInMinutes = hour * 60 + minute;
      const day = weekdayPart ? weekdayPart.value.toLowerCase() : 'lun';

      const isSunday = day.includes('dom');
      const isSaturday = day.includes('sáb') || day.includes('sab');

      if (isSunday) {
        return {
          isOpen: false,
          label: 'Cerrado los domingos',
          detail: 'Reabre lunes 08:00 hs',
        };
      }

      if (isSaturday) {
        if (timeInMinutes >= 480 && timeInMinutes <= 750) {
          return {
            isOpen: true,
            label: 'Abierto ahora',
            detail: 'Sábado hasta 12:30 hs',
          };
        }
        return {
          isOpen: false,
          label: 'Cerrado por la tarde',
          detail: 'Reabre lunes 08:00 hs',
        };
      }

      // Monday to Friday:
      // Morning: 08:00 (480) to 12:00 (720)
      // Afternoon: 15:30 (930) to 19:30 (1170)
      if (timeInMinutes >= 480 && timeInMinutes <= 720) {
        return {
          isOpen: true,
          label: 'Abierto ahora (Turno Mañana)',
          detail: 'Atención hasta las 12:00 p.m.',
        };
      } else if (timeInMinutes > 720 && timeInMinutes < 930) {
        return {
          isOpen: false,
          label: 'Cerrado al mediodía',
          detail: 'Vuelve a abrir hoy a las 3:30 p.m.',
        };
      } else if (timeInMinutes >= 930 && timeInMinutes <= 1170) {
        return {
          isOpen: true,
          label: 'Abierto ahora (Turno Tarde)',
          detail: 'Atención hasta las 7:30 p.m.',
        };
      } else if (timeInMinutes < 480) {
        return {
          isOpen: false,
          label: 'Abre a las 08:00 hs',
          detail: 'Turno mañana hasta 12:00 p.m.',
        };
      } else {
        return {
          isOpen: false,
          label: 'Cerrado por hoy',
          detail: 'Reabre mañana a las 08:00 hs',
        };
      }
    } catch {
      return {
        isOpen: true,
        label: 'Abierto en Sucursal Salta',
        detail: 'Mañana y tarde',
      };
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-rose-600 selection:text-white font-['Plus_Jakarta_Sans',sans-serif] relative overflow-x-hidden">
      
      {/* Scroll Progress Bar across the top */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* 3D Global Ambient Resplendence */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-36 -left-36 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 -right-36 w-96 h-96 bg-rose-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-96 bg-blue-600/10 rounded-full blur-[150px]" />
      </div>

      {/* CABECERA (HEADER) 100% RESPONSIVE CON EFECTO DE SCROLL */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-xl bg-slate-950/95 border-b border-slate-800 shadow-2xl py-3'
            : 'backdrop-blur-md bg-slate-950/80 border-b border-slate-900 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Oficial Üxell Pinturas + Pintureria Sarmiento */}
          <a href="#inicio" className="flex items-center gap-3 group focus:outline-none shrink-0">
            <div className="bg-black border border-slate-800 px-3 py-1.5 rounded-xl flex items-center shadow-lg group-hover:border-slate-700 transition-colors">
              <UxellLogo className="h-8 sm:h-9 w-auto" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-extrabold tracking-tight text-white uppercase group-hover:text-rose-400 transition-colors">
                {negocioData.nombre}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-rose-400 tracking-wide">
                {negocioData.sucursal} · Concordia
              </span>
            </div>
          </a>

          {/* Menú de Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-medium text-slate-300">
            <a href="#inicio" className="hover:text-white transition-colors">
              Inicio
            </a>
            <a href="#local" className="hover:text-white transition-colors">
              El Local (Salta 258)
            </a>
            <a href="#productos" className="hover:text-white transition-colors">
              Pinturas Üxell
            </a>
            <a href="#horarios" className="hover:text-white transition-colors">
              Horarios & Ubicación
            </a>
          </nav>

          {/* Botones de Acción Directa */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Click to Call */}
            <a
              href={negocioData.contacto.telefono_click}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-slate-200 hover:text-white py-2 px-3 rounded-xl border border-slate-800 hover:bg-slate-900 transition-all shadow-sm"
              title="Llamar a Sucursal Salta"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="tabular-nums">{negocioData.contacto.telefono_fijo}</span>
            </a>

            {/* WhatsApp Direct */}
            <a
              href={negocioData.contacto.whatsapp_url}
              target="_blank"
              rel="noreferrer"
              className="whitespace-nowrap inline-flex items-center justify-center px-3.5 sm:px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-950/40 transition-all transform active:scale-95 gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>

        {/* Menú Desplegable Móvil */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 border-t border-slate-800 bg-slate-950/98 backdrop-blur-xl space-y-3 animate-fade-in">
            <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
              <a
                href="#inicio"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white"
              >
                Inicio
              </a>
              <a
                href="#local"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white"
              >
                El Local (Salta 258)
              </a>
              <a
                href="#productos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white"
              >
                Pinturas Üxell
              </a>
              <a
                href="#horarios"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-slate-900 hover:text-white"
              >
                Horarios & Ubicación
              </a>
            </nav>

            <div className="pt-2 border-t border-slate-800 space-y-2">
              <a
                href={negocioData.contacto.telefono_click}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 border border-slate-800"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                Llamar al {negocioData.contacto.telefono_fijo}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* SECCIÓN HERO 3D (PRINCIPAL) */}
      <section id="inicio" className="relative z-10 pt-10 pb-20 lg:py-24 border-b border-slate-800/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Business & Store Presentation */}
            <div className="lg:col-span-7 space-y-6 reveal-on-scroll is-visible">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold text-rose-400 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Distribuidor Oficial {negocioData.distribuidor_oficial} · Trato cordial, oficio y palabra en Concordia</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] [text-wrap:balance]">
                  {negocioData.nombre}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">
                    {negocioData.sucursal}
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 tracking-tight">
                  {negocioData.slogan}
                </p>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Te damos una cálida bienvenida a nuestra esquina tradicional de <strong>{negocioData.direccion.calle} {negocioData.direccion.numero}</strong>. 
                Acá vas a encontrar toda la línea de <strong>{negocioData.distribuidor_oficial}</strong> con el asesoramiento franco y de oficio de quienes estamos todos los días detrás del mostrador. Sacamos cuentas con vos para que no gastes ni un peso de más y te lleves la cantidad justa. Y si andás con los tiempos apretados o no tenés en qué cargarlo, quedate tranquilo: <strong>te alcanzamos el pedido derecho a tu casa o al pie de la obra</strong> en cualquier rincón de Concordia.
              </p>

              {/* 3D Highlight Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-800 shadow-lg hover:border-rose-500/40 transition-all tilt-card-3d">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-xs mb-1">
                    <Truck className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Te Lo Alcanzamos a Casa</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Despreocupate del flete: te arrimamos los tachos y accesorios derecho a la puerta.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-800 shadow-lg hover:border-amber-500/40 transition-all tilt-card-3d">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs mb-1">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{negocioData.direccion.calle} {negocioData.direccion.numero} (La Esquina)</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Frenás el auto cómodo frente al local, cargás sin vueltas y seguís viaje.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-800 shadow-lg hover:border-emerald-500/40 transition-all tilt-card-3d">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-1">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{storeStatus.label}</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {storeStatus.detail}
                  </p>
                </div>

              </div>

              {/* Direct Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href={negocioData.contacto.telefono_click}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 hover:from-rose-500 hover:to-orange-400 text-white shadow-xl shadow-rose-950/40 flex items-center gap-2 transition-all transform active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Llamar al Mostrador: {negocioData.contacto.telefono_fijo}</span>
                </a>

                <a
                  href="#local"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 flex items-center gap-2 transition-colors"
                >
                  <span>Conocé la Esquina & Ubicación</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>

            </div>

            {/* Right Column: 3D Interactive Paint Can */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center reveal-on-scroll">
              <div className="text-center mb-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-rose-400" />
                  Mové el cursor o interactúa con la lata 3D
                </span>
              </div>
              <PaintCan3D />
              <div className="text-center mt-2">
                <span className="text-xs font-semibold text-slate-400">
                  {negocioData.distribuidor_oficial} · Stock oficial en {negocioData.direccion.calle} {negocioData.direccion.numero}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN INFORMACIÓN DEL NEGOCIO Y SALÓN DE VENTAS (EL LOCAL) */}
      <section id="local" className="relative z-10 py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
            <span className="text-xs font-bold tracking-widest uppercase text-rose-500">
              Esquina {negocioData.direccion.calle} {negocioData.direccion.numero} · {negocioData.localidad}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Nuestra Tradicional Esquina & Salón de Ventas
            </h2>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              Vení a conocer nuestro salón de ventas. Ya seas pintor de oficio, profesional de la obra buscando el tono exacto o una familia con ganas de dejar la casa impecable, acá te recibimos mano a mano, con unos buenos mates si pinta la charla y el consejo técnico que te hace ahorrar tiempo y plata.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
            
            {/* Left: 3D Interactive Storefront Card */}
            <div className="lg:col-span-7 reveal-on-scroll">
              <Storefront3D />
            </div>

            {/* Right: 4 Direct Pillars of the Local loaded from JSON */}
            <div className="lg:col-span-5 space-y-4 reveal-on-scroll">
              
              {/* Pillar 1: Dirección */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-md tilt-card-3d">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-0.5">Nuestra Ubicación</h3>
                    <p className="text-xs font-semibold text-slate-200">
                      {negocioData.direccion.calle} {negocioData.direccion.numero}, {negocioData.codigo_postal} {negocioData.direccion.ciudad}, {negocioData.direccion.provincia}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      {negocioData.direccion.interseccion}. Esquina céntrica y bien ubicada para frenar, cargar y seguir viaje.
                    </p>
                    <a
                      href={negocioData.direccion.google_maps_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:underline mt-2"
                    >
                      <span>Abrir en Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Pillar 2: Teléfono */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-md tilt-card-3d">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-0.5">Trato Directo y Sin Vueltas</h3>
                    <p className="text-sm font-bold text-emerald-400">
                      <a href={negocioData.contacto.telefono_click} className="hover:underline tabular-nums">
                        {negocioData.contacto.telefono_fijo}
                      </a>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Peganos un llamado o mandanos un WhatsApp. Te pasamos números al toque, te reservamos el material y te sacamos cualquier duda sobre la marcha.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 3: Horarios de Mañana y Tarde */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-md tilt-card-3d">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-0.5">Horarios de Atención</h3>
                    <p className="text-xs text-slate-300">
                      <strong>Lunes a Viernes:</strong> Mañana {negocioData.horarios.lunes_a_viernes.turno_manana}
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      <strong>Tarde:</strong> {negocioData.horarios.lunes_a_viernes.turno_tarde}
                    </p>
                    <p className="text-[11px] text-amber-400 mt-1 font-semibold">
                      Sábados: {negocioData.horarios.sabados.turno}
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 4: Entrega a Domicilio */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-rose-500/40 transition-all shadow-md tilt-card-3d">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-0.5">Te Lo Acercamos a Casa</h3>
                    <p className="text-xs font-semibold text-rose-300">
                      Envíos en Concordia
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      ¿No tenés espacio en el coche o preferís no cargar peso? Despreocupate: te alcanzamos los tachos, pinceles y rodillos a tu domicilio o a la obra.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECCIÓN PRODUCTOS Y SERVICIOS ÜXELL */}
      <section id="productos" className="relative z-10 py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
            <span className="text-xs font-bold tracking-widest uppercase text-rose-500">
              Líneas Oficiales en Sucursal Salta
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Pinturas {negocioData.distribuidor_oficial}: Fórmulas Nobles que se Bancan el Clima Entrerriano
            </h2>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              Sabemos cómo castiga el sol en verano y la humedad brava del río Uruguay. Por eso trabajamos con productos nobles, con gran poder cubritivo y señorío, que visten las paredes y duran una barbaridad sin descascararse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {negocioData.lineas_uxell.map((linea, index) => {
              const borderColors = [
                'hover:border-purple-500/60',
                'hover:border-rose-500/60',
                'hover:border-amber-500/60',
                'hover:border-emerald-500/60',
              ];
              const tagColors = [
                'text-purple-400',
                'text-rose-400',
                'text-amber-400',
                'text-emerald-400',
              ];

              return (
                <div
                  key={linea.id}
                  className={`p-6 rounded-2xl bg-slate-900 border border-slate-800 ${borderColors[index % 4]} hover:-translate-y-2 transition-all duration-300 shadow-xl flex flex-col justify-between tilt-card-3d reveal-on-scroll`}
                >
                  <div>
                    <span className={`text-[11px] font-bold ${tagColors[index % 4]} uppercase tracking-wider block mb-2`}>
                      {linea.categoria}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {linea.nombre}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {linea.destacado}
                    </p>
                    <div className="space-y-1 text-xs text-slate-400">
                      <p>• Acabado: {linea.acabado}</p>
                      <p>• Rinde: {linea.rendimiento}</p>
                      <p>• Envases: {linea.envases.join(', ')}</p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-800">
                    <a
                      href={`https://wa.me/5493455200514?text=Hola,%20quisiera%20consultar%20por%20${encodeURIComponent(linea.nombre)}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-xs font-bold ${tagColors[index % 4]} hover:underline flex items-center justify-between`}
                    >
                      <span>Consultar stock en Salta 258</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Banner de Sistema Tintométrico en el Local */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-rose-950/30 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 reveal-on-scroll">
            <div className="space-y-2">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                Sistema Tintométrico Computarizado
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                ¿Buscás un color con personalidad? Te preparamos más de 2.500 tonos en el acto
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Traete una muestra, una foto o elegí de la carta oficial Üxell. Con nuestra máquina dosificadora digital le damos justo en la tecla al tono que tenés en la cabeza, para que tus ambientes luzcan con distinción.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a
                href={negocioData.contacto.telefono_click}
                className="whitespace-nowrap px-6 py-3 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{negocioData.contacto.telefono_fijo}</span>
              </a>

              <a
                href={negocioData.contacto.whatsapp_url}
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap px-6 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-950/40"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Mostrador</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN HORARIOS Y UBICACIÓN RESUMEN */}
      <section id="horarios" className="relative z-10 py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-center reveal-on-scroll">
            
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-500">Nuestra Casa</span>
              <p className="text-lg font-bold text-white">{negocioData.direccion.calle} {negocioData.direccion.numero}</p>
              <p className="text-xs text-slate-400">{negocioData.codigo_postal} {negocioData.localidad} · Esquina tradicional</p>
            </div>

            <div className="space-y-1 border-y md:border-y-0 md:border-x border-slate-800 py-4 md:py-0 md:px-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Horarios del Mostrador</span>
              <p className="text-xs text-slate-200">
                <strong>Lunes a Viernes:</strong> Mañana {negocioData.horarios.lunes_a_viernes.turno_manana} · Tarde {negocioData.horarios.lunes_a_viernes.turno_tarde}
              </p>
              <p className="text-xs text-slate-200">
                <strong>Sábados:</strong> {negocioData.horarios.sabados.turno}
              </p>
            </div>

            <div className="space-y-1 md:text-right">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Contacto Directo</span>
              <p className="text-lg font-bold text-white">
                <a href={negocioData.contacto.telefono_click} className="hover:text-emerald-400 tabular-nums">
                  {negocioData.contacto.telefono_fijo}
                </a>
              </p>
              <p className="text-xs text-slate-400">Te lo alcanzamos a domicilio en cualquier rincón de Concordia</p>
            </div>

          </div>
        </div>
      </section>

      {/* PIE DE PÁGINA (FOOTER) */}
      <footer className="relative z-10 bg-black py-16 border-t border-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
            
            {/* Identity */}
            <div className="space-y-3">
              <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl inline-block">
                <UxellLogo className="h-9 w-auto" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-white font-extrabold text-sm uppercase tracking-tight">
                  {negocioData.nombre}
                </h4>
                <p className="text-xs text-rose-400 font-semibold">
                  {negocioData.sucursal} · Concordia, Entre Ríos
                </p>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Distribuidor Oficial <strong>{negocioData.distribuidor_oficial}</strong>. Especialistas en pinturas látex, impermeabilizantes y esmaltes con el oficio, la calidez y la palabra empeñada de siempre.
              </p>
            </div>

            {/* Ubicación */}
            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-white uppercase tracking-wider">Sucursal Salta</h4>
              <p><strong>Dirección:</strong> {negocioData.direccion.calle} {negocioData.direccion.numero}</p>
              <p>{negocioData.codigo_postal} {negocioData.localidad}</p>
              <p><strong>Teléfono:</strong> <a href={negocioData.contacto.telefono_click} className="text-rose-400 hover:underline">{negocioData.contacto.telefono_fijo}</a></p>
              <p className="text-emerald-400 font-medium pt-1">🚚 Te lo alcanzamos a domicilio y a obra</p>
            </div>

            {/* Horarios */}
            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-white uppercase tracking-wider">Horarios Comerciales</h4>
              <p><strong>Lunes a Viernes:</strong></p>
              <p className="text-slate-400">Mañana: {negocioData.horarios.lunes_a_viernes.turno_manana}</p>
              <p className="text-slate-400">Tarde: {negocioData.horarios.lunes_a_viernes.turno_tarde}</p>
              <p className="text-slate-200 pt-1"><strong>Sábados:</strong> {negocioData.horarios.sabados.turno}</p>
            </div>

            {/* Enlaces Directos */}
            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-white uppercase tracking-wider">Trato Directo</h4>
              <p><a href={negocioData.contacto.telefono_click} className="text-slate-300 hover:text-white">→ Peganos un llamado: {negocioData.contacto.telefono_fijo}</a></p>
              <p><a href={negocioData.contacto.whatsapp_url} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-emerald-400">→ Escribinos al WhatsApp</a></p>
              <p><a href={negocioData.direccion.google_maps_url} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-blue-400">→ Cómo llegar con Google Maps</a></p>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 {negocioData.nombre} {negocioData.sucursal} · Concordia, Entre Ríos. Un negocio atendido con orgullo por gente de acá.</p>
            <p>Distribuidor Oficial {negocioData.distribuidor_oficial} Argentina.</p>
          </div>
        </div>
      </footer>

      {/* Floating Speed Actions: WhatsApp and Scroll to Top */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Volver al tope de la página"
          className="p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 backdrop-blur-md shadow-xl transition-all"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        <a
          href={negocioData.contacto.whatsapp_url}
          target="_blank"
          rel="noreferrer"
          aria-label="Contactar por WhatsApp a Sucursal Salta"
          className="flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs font-bold hidden sm:inline">
            WhatsApp Sucursal Salta
          </span>
        </a>
      </div>

    </div>
  );
}
