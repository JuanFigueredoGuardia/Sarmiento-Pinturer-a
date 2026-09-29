import React, { useState, useId } from 'react';
import { Calculator, Sparkles, MessageCircle, RefreshCw, Check } from 'lucide-react';

interface ProductYield {
  id: string;
  name: string;
  yieldPerLitre: number; // m2 per litre per coat
  description: string;
}

const PRODUCTS: ProductYield[] = [
  {
    id: 'latex-interior',
    name: 'Látex Interior Sarmiento',
    yieldPerLitre: 11,
    description: 'Rendimiento estándar ~11 m²/litro por mano',
  },
  {
    id: 'frentes-muros',
    name: 'Frentes y Muros Exterior',
    yieldPerLitre: 10,
    description: 'Rendimiento ~10 m²/litro por mano',
  },
  {
    id: 'membrana-techos',
    name: 'Membrana Fibrada Techos',
    yieldPerLitre: 3,
    description: 'Consumo ~1.2 a 1.5 kg por m² trabajo final',
  },
  {
    id: 'esmalte-metal',
    name: 'Esmalte Sintético 3 en 1',
    yieldPerLitre: 13,
    description: 'Rendimiento ~12 a 14 m²/litro por mano',
  },
];

export const PaintCalculator: React.FC = () => {
  const [area, setArea] = useState<number>(40);
  const [hands, setHands] = useState<number>(2);
  const [selectedProductId, setSelectedProductId] = useState<string>('latex-interior');
  const [surfaceType, setSurfaceType] = useState<string>('regular');
  const calcId = useId();

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  // Adjust yield based on surface absorption
  let surfaceFactor = 1.0;
  if (surfaceType === 'nueva') surfaceFactor = 0.85; // absorbs more
  if (surfaceType === 'rugosa') surfaceFactor = 0.75; // very textured

  const effectiveYield = selectedProduct.yieldPerLitre * surfaceFactor;
  const calculatedLitres = (area * hands) / effectiveYield;
  const roundedLitres = Math.max(0.5, parseFloat(calculatedLitres.toFixed(1)));

  // Packaging suggestion logic
  const getPackagingSuggestion = (litres: number) => {
    if (litres <= 1) return '1 envase de 1 Litro';
    if (litres <= 4) return '1 lata de 4 Litros';
    if (litres <= 10) return '1 lata de 10 Litros (o 2 de 4L + 2 de 1L)';
    if (litres <= 20) return '1 balde de 20 Litros';
    
    const buckets20 = Math.floor(litres / 20);
    const remainder = litres % 20;

    if (remainder === 0) {
      return `${buckets20} balde(s) de 20 Litros`;
    } else if (remainder <= 4) {
      return `${buckets20} balde(s) de 20L + 1 lata de 4 Litros`;
    } else if (remainder <= 10) {
      return `${buckets20} balde(s) de 20L + 1 lata de 10 Litros`;
    } else {
      return `${buckets20 + 1} baldes de 20 Litros`;
    }
  };

  const handlePreset = (presetArea: number) => {
    setArea(presetArea);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Pintureria Sarmiento Sucursal Salta!\nCalculé en su web que necesito aproximadamente ${roundedLitres} Litros de "${selectedProduct.name}" para pintar ${area} m² (${hands} manos). ¿Me pueden pasar cotización y consultar disponibilidad de entrega a domicilio?`
  );

  return (
    <section id="calculadora" className="py-20 bg-slate-900/60 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-amber-400">
            Herramienta Práctica para Clientes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Calculadora de Litros de Pintura
          </h2>
          <p className="text-slate-400 text-sm mt-2 leading-relaxed">
            Ingresá los metros cuadrados de tus paredes o techos y calculá la cantidad exacta de pintura Sarmiento recomendada para no gastar de más.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Presets */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Atajos rápidos por tipo de ambiente:
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => handlePreset(28)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    Dormitorio chico (~28 m²)
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePreset(42)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    Habitación standard (~42 m²)
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePreset(65)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    Living-Comedor (~65 m²)
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePreset(90)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    Techo / Exterior (~90 m²)
                  </button>
                </div>
              </div>

              {/* Surface Area Input */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor={`${calcId}-area`} className="text-xs font-bold text-slate-200">
                    Superficie a pintar en metros cuadrados (m²)
                  </label>
                  <span className="text-xs font-mono font-bold text-rose-400">
                    {area} m²
                  </span>
                </div>
                <input
                  id={`${calcId}-area`}
                  type="range"
                  min="5"
                  max="250"
                  step="1"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
                <div className="flex items-center gap-3 pt-1">
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={area}
                    onChange={(e) => setArea(Math.max(1, Number(e.target.value)))}
                    className="w-28 bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-white font-mono font-bold text-sm focus:outline-none focus:border-rose-500"
                  />
                  <span className="text-xs text-slate-400">
                    Podés escribir directamente el número exacto.
                  </span>
                </div>
              </div>

              {/* Product Selection */}
              <div>
                <label htmlFor={`${calcId}-product`} className="block text-xs font-bold text-slate-200 mb-2">
                  Tipo de Pintura Sarmiento
                </label>
                <select
                  id={`${calcId}-product`}
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-rose-500"
                >
                  {PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.id}>
                      {prod.name} — {prod.description}
                    </option>
                  ))}
                </select>
              </div>

              {/* Hands / Coats & Surface condition */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={`${calcId}-hands`} className="block text-xs font-bold text-slate-200 mb-2">
                    Manos de pintura
                  </label>
                  <select
                    id={`${calcId}-hands`}
                    value={hands}
                    onChange={(e) => setHands(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-rose-500"
                  >
                    <option value={1}>1 mano (Mantenimiento / Mismo color)</option>
                    <option value={2}>2 manos (Recomendado estándar)</option>
                    <option value={3}>3 manos (Cambio de color o pared nueva)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor={`${calcId}-surface`} className="block text-xs font-bold text-slate-200 mb-2">
                    Estado de la pared
                  </label>
                  <select
                    id={`${calcId}-surface`}
                    value={surfaceType}
                    onChange={(e) => setSurfaceType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-rose-500"
                  >
                    <option value="regular">Pared pintada lisa (Normal)</option>
                    <option value="nueva">Revoque o yeso nuevo (Absorbente)</option>
                    <option value="rugosa">Texturada o ladrillo a la vista</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Right Column: Calculated Output Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-7 text-center space-y-5 shadow-inner">
                
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-semibold text-rose-400">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Estimación de Consumo Sarmiento</span>
                </div>

                <div>
                  <span className="block text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
                    Volumen Requerido
                  </span>
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300 tabular-nums">
                    {roundedLitres} <span className="text-2xl font-bold text-slate-300">Litros</span>
                  </div>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Para cubrir {area} m² con {hands} {hands === 1 ? 'mano' : 'manos'}
                  </span>
                </div>

                {/* Packaging Suggestion */}
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-left space-y-1">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide block">
                    Envases Sugeridos:
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {getPackagingSuggestion(roundedLitres)}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Consultá en Sucursal Salta por latas de 1L, 4L, 10L o baldes de 20L en stock permanente.
                  </p>
                </div>

                {/* Direct Action */}
                <div className="space-y-2 pt-2">
                  <a
                    href={`https://wa.me/5493455200514?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 transform active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Cotizar estos {roundedLitres}L en Salta 258</span>
                  </a>

                  <p className="text-[11px] text-slate-500">
                    * El cálculo es orientativo y puede variar según la mano del pintor y la dilución.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
