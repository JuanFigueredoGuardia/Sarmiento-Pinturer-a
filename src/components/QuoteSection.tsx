import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Phone, Truck, ShieldCheck } from 'lucide-react';

export const QuoteSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Látex Interior Sarmiento');
  const [delivery, setDelivery] = useState('concordia');
  const [area, setArea] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const deliveryText =
      delivery === 'concordia'
        ? 'Sí, con entrega a domicilio en Concordia'
        : 'Retiro personalmente en Sucursal Salta 258';

    const text = `Hola Pintureria Sarmiento Sucursal Salta! Solicito presupuesto:
• Nombre: ${name}
• Teléfono/WhatsApp: ${phone}
• Tipo de Producto: ${category}
• Metros o cantidad: ${area ? `${area} m²` : 'A definir'}
• Modalidad: ${deliveryText}
• Detalle adicional: ${message || 'Sin observaciones'}`;

    const url = `https://wa.me/5493455200514?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="presupuesto" className="py-20 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-rose-500">
            Respuesta Rápida
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Pedir Presupuesto sin Compromiso
          </h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            Te cotizamos al instante con los mejores precios por volumen, promociones de Pinturería Sarmiento y coordinación de entrega a domicilio.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">¡Solicitud Generada con Éxito!</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Se abrió tu conversación de WhatsApp con Sucursal Salta. Si no abrió automáticamente, podés hacer clic abajo o llamarnos al <strong>0345 520-0514</strong>.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://wa.me/5493455200514"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Abrir WhatsApp de Sucursal Salta
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300"
                >
                  Nueva cotización
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quote-name" className="block text-xs font-semibold text-slate-300 mb-2">
                    Nombre y Apellido *
                  </label>
                  <input
                    id="quote-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej: Marcelo Fernández"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-rose-500 placeholder-slate-600"
                  />
                </div>

                <div>
                  <label htmlFor="quote-phone" className="block text-xs font-semibold text-slate-300 mb-2">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej: 345 4123456"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-rose-500 placeholder-slate-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="quote-category" className="block text-xs font-semibold text-slate-300 mb-2">
                    Línea de Producto
                  </label>
                  <select
                    id="quote-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-rose-500"
                  >
                    <option value="Látex Interior Sarmiento">Látex Interior Sarmiento</option>
                    <option value="Frentes y Muros Exterior">Frentes y Muros Exterior</option>
                    <option value="Membrana Fibrada Techos">Membrana Fibrada Techos</option>
                    <option value="Esmalte Sintético 3 en 1">Esmalte Sintético 3 en 1</option>
                    <option value="Impregnante Maderas">Impregnante para Maderas</option>
                    <option value="Pintura Piletas">Pintura para Piletas</option>
                    <option value="Presupuesto Obra Completa">Presupuesto Obra Completa</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quote-area" className="block text-xs font-semibold text-slate-300 mb-2">
                    Metros cuadrados o Litros
                  </label>
                  <input
                    id="quote-area"
                    type="text"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="Ej: 45 m² o 20 Litros"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-rose-500 placeholder-slate-600"
                  />
                </div>

                <div>
                  <label htmlFor="quote-delivery" className="block text-xs font-semibold text-slate-300 mb-2">
                    Tipo de Entrega
                  </label>
                  <select
                    id="quote-delivery"
                    value={delivery}
                    onChange={(e) => setDelivery(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-rose-500"
                  >
                    <option value="concordia">Entrega a domicilio (Concordia)</option>
                    <option value="retiro">Retiro en Salta 258</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="quote-message" className="block text-xs font-semibold text-slate-300 mb-2">
                  Detalles del proyecto o accesorios requeridos
                </label>
                <textarea
                  id="quote-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ej: Necesito saber si tienen rodillo antigota, lija al agua y si tienen color gris perla en stock..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-rose-500 placeholder-slate-600"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-500 hover:to-orange-400 text-white font-bold text-sm rounded-xl shadow-lg shadow-rose-950/40 flex items-center justify-center gap-2 transition-all transform active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Presupuesto a Sucursal Salta</span>
                </button>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Atención directa sin intermediarios</span>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
