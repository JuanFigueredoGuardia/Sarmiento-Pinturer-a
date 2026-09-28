import React, { useState } from 'react';
import { Sparkles, Shield, Droplets, Paintbrush, Home, Check, ArrowUpRight, MessageCircle } from 'lucide-react';
import paintHeroImg from '../assets/images/uxell_paint_colors_1790606386903.jpg';

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
      id: 'latex-interior-pro',
      category: 'interior',
      title: 'Látex Interior Üxell Ultra Lavable',
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
      id: 'frentes-muros-elastomerico',
      category: 'exterior',
      title: 'Frentes y Muros Impermeabilizante Üxell',
      badge: 'Protección Clima Extremo',
      description: 'Recubrimiento elástomérico formulado para frentes, medianeras y muros exteriores. Crea una membrana impermeable que acompaña las micro-dilataciones de revoques sin cuartear.',
      features: [
        '100% impermeable al agua de lluvia',
        'Filtro solar UV que preserva el color original',
        'Alta resistencia al tizamiento y a la intemperie',
        'Permeable al vapor de agua (deja respirar la pared)',
      ],
      yieldRate: '8 a 10 m² por litro por mano',
      sizes: ['4L', '10L', '20L'],
      popular: true,
    },
    {
      id: 'membrana-en-pasta-fibrada',
      category: 'impermeabilizante',
      title: 'Membrana en Pasta Fibrada Üxell',
      badge: 'Techos & Terrazas',
      description: 'Impermeabilizante acrílico de alta densidad con fibras sintéticas entrelazadas incorporadas. Máxima elasticidad transitable y hermeticidad ante goteras y humedad.',
      features: [
        'Fibras incorporadas que absorben movimientos térmicos',
        'Disponible en Blanco Térmico, Rojo Teja y Verde Selva',
        'El color blanco reduce hasta 8°C la temperatura del techo',
        'Alta adherencia sobre losas, tejas, chapas y revoques',
      ],
      yieldRate: '1.2 a 1.5 kg/m² para trabajo completo',
      sizes: ['5kg', '10kg', '20kg'],
      popular: true,
    },
    {
      id: 'latex-cielorrasos',
      category: 'interior',
      title: 'Látex Cielorrasos Antihongo Üxell',
      badge: 'Cielorrasos & Baños',
      description: 'Formulado especialmente para evitar condensaciones de vapor y la aparición de hongos en cocinas, baños y dormitorios. Acabado blanco puro mate antirreflejo.',
      features: [
        'Máxima microporosidad que no condensa vapor',
        'Blanco óptico puro de alto poder cubritivo',
        'Poderoso fungicida que frena manchas oscuras',
      ],
      yieldRate: '10 a 12 m² por litro por mano',
      sizes: ['1L', '4L', '10L', '20L'],
    },
    {
      id: 'esmalte-3-en-1',
      category: 'esmaltes',
      title: 'Esmalte Sintético Triple Acción Üxell',
      badge: 'Metales & Herrería',
      description: 'Antióxido, convertidor y esmalte de terminación en un solo paso. Proporciona una película brillante de dureza cerámica de alta durabilidad para portones y rejas.',
      features: [
        'Aplicación directa sobre hierro limpio o ligeramente oxidado',
        'Brillo duradero inalterable ante rayos UV',
        'Acabados: Brillante, Satinado y Negro Forja Mate',
      ],
      yieldRate: '12 a 14 m² por litro por mano',
      sizes: ['0.5L', '1L', '4L'],
    },
    {
      id: 'impregnante-maderas',
      category: 'esmaltes',
      title: 'Impregnante & Protector para Maderas',
      badge: 'Decks, Techos & Aberturas',
      description: 'Protector base solvente que penetra profundamente en la fibra de la madera sin formar película rígida. No descascara ni cuartea con el sol y la lluvia.',
      features: [
        'Repele el agua y contiene filtro UV absorbedor',
        'Fácil repintado sin necesidad de lijar a fondo',
        'Tonos: Roble, Cedro, Caoba, Nogal y Cristal',
      ],
      yieldRate: '14 a 16 m² por litro por mano',
      sizes: ['1L', '4L'],
    },
  ];

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter((p) => p.category === activeTab);

  return (
    <section id="productos" className="py-20 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with media highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8 space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-rose-500">
              Línea Completa Üxell Pinturas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Calidad Profesional para Cada Superficie
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
              Seleccionamos las mejores fórmulas arquitectónicas para el clima del litoral entrerriano. Conoce nuestras soluciones para interior, exterior, impermeabilización y acabados.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 h-28 w-full max-w-sm hidden sm:block">
              <img
                src={paintHeroImg}
                alt="Muestras y paleta de colores Üxell"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-3">
                <span className="text-xs font-semibold text-white">
                  Colores & Acabados Üxell en Sucursal Salta
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Segmented Filter Controls */}
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
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 hover:shadow-xl transition-all relative group"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-rose-400">
                    {prod.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">
                    Üxell Oficial
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">
                  {prod.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                  {prod.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-5">
                  {prod.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Technical specs */}
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

              {/* Action Button */}
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

          {/* Special Service Bento Card: Asesoramiento y Sistema Tintométrico */}
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
                ¿Tenés dudas de cuántos litros comprar o qué impermeabilizante es apto para tu techo? Nuestro equipo de Sucursal Salta visita tu obra o te asesora técnicamente sin costo.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Cálculo exacto de superficie para evitar sobrantes</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Preparación de colores especiales por carta</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Coordinación de envíos en día y horario pactado</span>
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
