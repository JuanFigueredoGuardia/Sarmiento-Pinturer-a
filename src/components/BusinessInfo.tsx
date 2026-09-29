import React, { useMemo } from 'react';
import { MapPin, Phone, Clock, Truck, Navigation, CheckCircle2, MessageCircle, ExternalLink } from 'lucide-react';

export const BusinessInfo: React.FC = () => {
  // Compute open/closed status according to Argentina time (UTC-3)
  const storeStatus = useMemo(() => {
    try {
      const now = new Date();
      // Format to Argentina time
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
          message: 'Cerrado los domingos',
          subtext: 'Reabre el lunes a las 08:00 hs',
        };
      }

      if (isSaturday) {
        // Saturday: 8:00 to 12:30 (480 to 750)
        if (timeInMinutes >= 480 && timeInMinutes <= 750) {
          return {
            isOpen: true,
            message: 'Abierto ahora',
            subtext: 'Hoy sábado hasta las 12:30 hs',
          };
        }
        return {
          isOpen: false,
          message: 'Cerrado por la tarde',
          subtext: 'Reabre el lunes a las 08:00 hs',
        };
      }

      // Monday to Friday:
      // Morning: 08:00 (480) to 12:00 (720)
      // Afternoon: 15:30 (930) to 19:30 (1170)
      if (timeInMinutes >= 480 && timeInMinutes <= 720) {
        return {
          isOpen: true,
          message: 'Abierto ahora (Turno mañana)',
          subtext: 'Atención hasta las 12:00 hs',
        };
      } else if (timeInMinutes > 720 && timeInMinutes < 930) {
        return {
          isOpen: false,
          message: 'Cerrado al mediodía',
          subtext: 'Vuelve a abrir hoy a las 15:30 hs',
        };
      } else if (timeInMinutes >= 930 && timeInMinutes <= 1170) {
        return {
          isOpen: true,
          message: 'Abierto ahora (Turno tarde)',
          subtext: 'Atención hasta las 19:30 hs',
        };
      } else if (timeInMinutes < 480) {
        return {
          isOpen: false,
          message: 'Abre hoy a las 08:00 hs',
          subtext: 'Turno mañana hasta las 12:00 hs',
        };
      } else {
        return {
          isOpen: false,
          message: 'Cerrado por hoy',
          subtext: 'Reabre mañana a las 08:00 hs',
        };
      }
    } catch {
      return {
        isOpen: true,
        message: 'Atención en Sucursal Salta',
        subtext: 'Mañana y tarde',
      };
    }
  }, []);

  return (
    <section id="sucursal" className="py-20 bg-slate-900/50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-rose-500">
            Sucursal Salta · Concordia, Entre Ríos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Información del Negocio & Atención
          </h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            Estamos ubicados estratégicamente para brindarte la mejor atención personalizada, stock inmediato y retiro cómodo de materiales.
          </p>
        </div>

        {/* 4 Pillars Grid: Address, Phone, Schedule, Delivery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Dirección */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Dirección Física</h3>
              <p className="text-base font-semibold text-slate-100">Salta 258</p>
              <p className="text-xs text-slate-400 mt-0.5">E3202 Concordia, Entre Ríos</p>
              <p className="text-xs text-slate-500 mt-2">
                Ubicada en esquina céntrica de fácil acceso con zona de detención para carga de baldes y latas.
              </p>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-800">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Salta+258,+Concordia,+Entre+Rios"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Cómo llegar en Google Maps</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Teléfono */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Teléfono Directo</h3>
              <p className="text-base font-semibold text-emerald-400">
                <a href="tel:03455200514" className="hover:underline tabular-nums">
                  0345 520-0514
                </a>
              </p>
              <p className="text-xs text-slate-400 mt-0.5">Línea fija y WhatsApp comercial</p>
              <p className="text-xs text-slate-500 mt-2">
                Consultá disponibilidad de stock, presupuestos al por mayor o solicitá tu pedido por teléfono.
              </p>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-800 flex items-center justify-between">
              <a
                href="tel:03455200514"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
              >
                <span>Llamar ahora</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://wa.me/5493455200514"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-slate-400 hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Card 3: Horarios */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-bold text-white">Horarios</h3>
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                    storeStatus.isOpen
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}
                >
                  {storeStatus.isOpen ? 'Abierto' : 'Cerrado'}
                </span>
              </div>
              
              <div className="space-y-1.5 text-xs text-slate-300 mt-2">
                <p>
                  <strong className="text-white">Mañana:</strong> Abre hasta las <strong>12:00 p.m.</strong>
                </p>
                <p>
                  <strong className="text-white">Tarde:</strong> Vuelve a abrir a las <strong>3:30 p.m.</strong> (hasta las 19:30)
                </p>
                <p className="text-slate-400 pt-1">
                  <strong>Sábados:</strong> 08:00 a 12:30 hs
                </p>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-slate-800">
              <span className="text-[11px] text-amber-400/90 font-medium block">
                {storeStatus.message} · {storeStatus.subtext}
              </span>
            </div>
          </div>

          {/* Card 4: Entrega a Domicilio */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Entrega a Domicilio</h3>
              <p className="text-sm font-semibold text-rose-300">Servicio en Concordia</p>
              <p className="text-xs text-slate-400 mt-0.5">Envíos directos a obra y casas</p>
              <p className="text-xs text-slate-500 mt-2">
                Hacé tu pedido telefónico o por WhatsApp y te lo llevamos rápidamente sin que interrumpas tus tareas de pintura.
              </p>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-800">
              <a
                href="https://wa.me/5493455200514?text=Hola%20Pintureria%20Sarmiento%20Sucursal%20Salta,%20necesito%20coordinar%20una%20entrega%20a%20domicilio%20en%20Concordia"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400 hover:text-rose-300 transition-colors"
              >
                <span>Solicitar flete / entrega</span>
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Interactive Location Showcase Banner */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Punto de Venta Oficial en Concordia</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                ¿Estás cerca de calle Salta 258? Pasá a retirar tu pedido sin demoras
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Contamos con estacionamiento momentáneo para carga pesada de baldes de 20 litros, personal capacitado para cargar tus productos y catálogo de muestras reales Sarmiento para comparar acabados a la luz natural.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Atención a profesionales y particulares</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Todos los medios de pago</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Factura A y B</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Salta+258,+Concordia,+Entre+Rios"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-center text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Navigation className="w-4 h-4 text-blue-400" />
                <span>Abrir GPS / Google Maps</span>
              </a>

              <a
                href="tel:03455200514"
                className="w-full py-3.5 px-4 rounded-xl text-center text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Llamar al 0345 520-0514</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
