import React, { useState } from 'react';
import { Sparkles, Shield, Droplets, Paintbrush, Home, Check, ArrowUpRight, MessageCircle } from 'lucide-react';

interface ProductItem {
  id: string;
  category: 'interior' | 'exterior' | 'impermeabilizante' | 'esmaltes' | 'servicio';
  title: string;
  badge: string;
  description: string;
  features: string[];
  yieldRate: string;
  sizes: string[];
  popular?: boolean;
}

export const ProductsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const products: ProductItem[] = [
    {
      id: 'latex-interior-sarmiento',
      category: 'interior',
      title: 'Látex Interior Sarmiento Ultra Lavable',
      badge: 'Línea Hogar & Obra',
      description: 'Látex acrílico de terminación mate aterciopelada y alto poder cubritivo. Formulado con aditivos antihongo de acción prolongada y excelente resistencia al lavado frecuente.',
      features: [
        'Excelente poder cubritivo en 2 manos',
        'Bajo salpicado y nivelación perfecta',
        'Lavable con agua y jabón neutro',
        'Apto sistema tintométrico con miles de tonos',
      ],
      yieldRate: '10 a 12 m² por litro por mano',
      sizes: ['1L', '4L', '10L', '20L'],
      popular: true,
    },
    {
      id: 'frentes-muros-sarmiento',
      category: 'exterior',
      title: 'Frentes y Muros Sarmiento Elastomérico',
      badge: 'Protección Clima Extremo',
      description: 'Recubrimiento elastomérico de alta gama para frentes, medianeras y muros exteriores. Crea una membrana hidrorepelente que acompaña las micro-dilataciones de revoques sin cuartear.',
      features: [
        '100% impermeable al agua de lluvia',
        'Filtro solar UV que preserva el color original',
        'Alta resistencia al tizamiento y al sol entrerriano',
        'Permeable al vapor de agua (deja respirar la pared)',
      ],
      yieldRate: '8 a 10 m² por litro por mano',
      sizes: ['4L', '10L', '20L'],
      popular: true,
    },
    {
      id: 'membrana-pasta-sarmiento',
      category: 'impermeabilizante',
      title: 'Membrana en Pasta Fibrada Sarmiento',
      badge: 'Impermeabilización Definitiva',
      description: 'Impermeabilizante poliuretánico en pasta con fibras elásticas incorporadas. Desarrollado para losas, techos de chapa, canaletas y terrazas transitables.',
      features: [
        'Fibras sintéticas que distribuyen la tensión mecánica',
        'Transitable y resistente a la intemperie',
        'Sella fisuras activas y microgrietas',
        'Excelente elasticidad en frío y calor',
      ],
      yieldRate: '1.2 a 1.5 kg por m² (trabajo terminado)',
      sizes: ['5kg', '10kg', '20kg'],
    },
    {
      id: 'esmaltes-maderas-sarmiento',
      category: 'esmaltes',
      title: 'Esmalte 3 en 1 & Impregnantes Sarmiento',
      badge: 'Herrería & Maderas',
      description: 'Protección integral y belleza para rejas, portones, aberturas y maderas nobles. Antióxido, convertidor y esmalte de alta durabilidad en una sola aplicación.',
      features: [
        'Antióxido y esmalte en un solo paso',
        'Acabados brillante señorial, satinado y mate',
        'Filtro UV contra la intemperie',
        'Impregnantes que nutren la veta de la madera',
      ],
      yieldRate: '12 a 14 m² por litro por mano',
      sizes: ['0.5L', '1L', '4L'],
    },
  ];

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter((p) => p.category === activeTab);

  return (
    <section id="productos" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Línea Oficial Pinturería Sarmiento</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Pinturas & Fórmulas Nobles Sarmiento
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Selección de productos formulados para resistir la humedad y el sol entrerriano. 
              Stock permanente en Salta 258 para retiro inmediato o entrega a domicilio.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-medium">
              ¿Buscás un color específico?
            </span>
            <a
              href="#colores"
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-white text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <Paintbrush className="w-3.5 h-3.5 text-rose-400" />
              <span>Ver Paleta de Colores</span>
            </a>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-slate-900 border border-slate-800 rounded-xl">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Todos los Productos ({products.length})
          </button>
          <button
            onClick={() => setActiveTab('interior')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'interior'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Látex Interiores
          </button>
          <button
            onClick={() => setActiveTab('exterior')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'exterior'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Exteriores / Frentes y Muros
          </button>
          <button
            onClick={() => setActiveTab('impermeabilizante')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'impermeabilizante'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Impermeabilizantes Techos
          </button>
          <button
            onClick={() => setActiveTab('esmaltes')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'esmaltes'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Esmaltes & Maderas
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod, idx) => (
            <div
              key={prod.id}
              className={`bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 hover:shadow-xl transition-all relative group fade-in-up-card stagger-${(idx % 3) + 1}`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-rose-400">
                    {prod.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">
                    Pinturería Sarmiento
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">
                  {prod.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                  {prod.description}
                </p>

                <div className="space-y-2 mb-5">
                  {prod.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800/80 mb-5 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Rendimiento teórico:</span>
                    <span className="font-semibold text-slate-200">{prod.yieldRate}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Presentaciones:</span>
                    <span className="font-mono text-slate-200">{prod.sizes.join(' · ')}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
                <a
                  href={`https://wa.me/5493455200514?text=${encodeURIComponent(
                    `Hola Pintureria Sarmiento Sucursal Salta! Deseo consultar precio y stock de "${prod.title}".`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-emerald-600 transition-colors flex items-center justify-center gap-1.5 group/btn"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:text-white" />
                  <span>Consultar Stock en Salta 258</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-white" />
                </a>
              </div>
            </div>
          ))}

          {/* Special Service Bento Card */}
          <div className="bg-gradient-to-br from-purple-950/30 via-rose-950/20 to-slate-900 border border-purple-500/30 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-400/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Servicio Personalizado
                </span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Asesoramiento Profesional en Obra & Color
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                ¿Tenés dudas de cuántos litros comprar o qué impermeabilizante es apto para tu techo? Nuestro equipo de Pinturería Sarmiento te asesora técnicamente sin costo.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Cálculo exacto de superficie para evitar sobrantes</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Preparación de más de 2.500 colores por carta en minutos</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Coordinación de envíos directos a domicilio en Concordia</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5493455200514?text=Hola%20Pintureria%20Sarmiento,%20necesito%20asesoramiento%20t%C3%A9cnico%20para%20un%20proyecto"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-500 hover:to-rose-500 transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-purple-950/50"
            >
              <Paintbrush className="w-3.5 h-3.5" />
              <span>Hablar con un Asesor Técnico</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
