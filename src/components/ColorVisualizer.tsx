import React, { useState } from 'react';
import { Palette, Check, Sparkles, MessageCircle, Copy } from 'lucide-react';

interface ColorSwatch {
  name: string;
  code: string;
  hex: string;
  category: string;
  textColor: string;
}

const COLOR_SWATCHES: ColorSwatch[] = [
  // Neutros Cálidos & Lino
  { name: 'Arena de Salta', code: 'UX-104', hex: '#E7DFD5', category: 'Neutros', textColor: '#1E293B' },
  { name: 'Lino Natural', code: 'UX-109', hex: '#DDD4C4', category: 'Neutros', textColor: '#1E293B' },
  { name: 'Blanco Cálido Seda', code: 'UX-101', hex: '#F4EFEB', category: 'Neutros', textColor: '#1E293B' },
  { name: 'Gris Perla Suave', code: 'UX-115', hex: '#D2D7DF', category: 'Neutros', textColor: '#1E293B' },

  // Tierras & Arcillas del Litoral
  { name: 'Terracota Concordia', code: 'UX-240', hex: '#C2634B', category: 'Tierras', textColor: '#FFFFFF' },
  { name: 'Arcilla del Río', code: 'UX-232', hex: '#A85A48', category: 'Tierras', textColor: '#FFFFFF' },
  { name: 'Ocre Dorado', code: 'UX-218', hex: '#D99B38', category: 'Tierras', textColor: '#FFFFFF' },
  { name: 'Canela Tostada', code: 'UX-255', hex: '#8C4D38', category: 'Tierras', textColor: '#FFFFFF' },

  // Verdes & Botánicos
  { name: 'Verde Eucalipto', code: 'UX-312', hex: '#758A7A', category: 'Verdes', textColor: '#FFFFFF' },
  { name: 'Salvia Silvestre', code: 'UX-305', hex: '#97A99A', category: 'Verdes', textColor: '#1E293B' },
  { name: 'Verde Palmar Profundo', code: 'UX-330', hex: '#3B5749', category: 'Verdes', textColor: '#FFFFFF' },
  { name: 'Oliva Suave', code: 'UX-318', hex: '#878C6B', category: 'Verdes', textColor: '#FFFFFF' },

  // Azules & Río Uruguay
  { name: 'Azul Costanera', code: 'UX-412', hex: '#3B6E8C', category: 'Azules', textColor: '#FFFFFF' },
  { name: 'Azul Noche Profundo', code: 'UX-440', hex: '#1E2C3D', category: 'Azules', textColor: '#FFFFFF' },
  { name: 'Celeste Río Uruguay', code: 'UX-402', hex: '#A7C4D4', category: 'Azules', textColor: '#1E293B' },
  { name: 'Gris Tormenta Azulado', code: 'UX-425', hex: '#526371', category: 'Azules', textColor: '#FFFFFF' },
];

export const ColorVisualizer: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<ColorSwatch>(COLOR_SWATCHES[4]); // Terracota Concordia
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(`${selectedColor.name} (${selectedColor.code} - ${selectedColor.hex})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Pintureria Sarmiento Sucursal Salta! Me gustó el color "${selectedColor.name}" (Código Üxell: ${selectedColor.code}). ¿Me podrían preparar este tono o pasarme cotización?`
  );

  return (
    <section id="colores" className="py-20 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-rose-500">
            Sistema Tintométrico Üxell
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Explorador de Paletas & Tendencias
          </h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            Hacé clic en cualquier muestra para previsualizar cómo viste un ambiente real. En Sucursal Salta preparamos estos y miles de tonos personalizados en el momento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Wall Simulation */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-2 shadow-2xl">
              
              {/* Wall Mockup Room with simulated furniture */}
              <div
                className="relative rounded-xl aspect-[16/10] overflow-hidden transition-colors duration-500 flex flex-col justify-between p-6 shadow-inner"
                style={{ backgroundColor: selectedColor.hex }}
              >
                {/* Subtle room lighting gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/20 pointer-events-none" />
                
                {/* Ceiling / Floor perspective simulation */}
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-slate-900/60 backdrop-blur-sm border-t border-slate-700/50 flex items-center justify-between px-4 text-[10px] text-slate-300">
                  <span>Zócalo y piso madera natural</span>
                  <span>Luz diurna 5000K</span>
                </div>

                {/* Overlaid frame art */}
                <div className="relative z-10 w-28 h-36 rounded-lg bg-white/90 shadow-xl border border-white/40 p-2 flex flex-col justify-end">
                  <div className="w-full h-full bg-slate-900/10 rounded flex items-center justify-center text-[10px] font-bold text-slate-700">
                    Üxell Decó
                  </div>
                </div>

                {/* Color Tag Badge on the wall */}
                <div className="relative z-10 self-start bg-slate-950/85 backdrop-blur-md border border-slate-800 rounded-xl p-3 text-left shadow-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/30"
                      style={{ backgroundColor: selectedColor.hex }}
                    />
                    <span className="text-xs font-bold text-white">
                      {selectedColor.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
                    <span>{selectedColor.code}</span>
                    <span>·</span>
                    <span>{selectedColor.hex}</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Color Details Card */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400">Tono seleccionado para preparar:</span>
                <p className="text-sm font-bold text-white">
                  {selectedColor.name} · Código {selectedColor.code}
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="px-3 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? '¡Copiado!' : 'Copiar código'}</span>
                </button>

                <a
                  href={`https://wa.me/5493455200514?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-950/50"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Pedir este color</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Palette Swatches Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Seleccioná una tonalidad Üxell
              </span>
              <span className="text-xs text-rose-400 font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Más de 2.500 colores disponibles en máquina
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {COLOR_SWATCHES.map((swatch) => {
                const isSelected = selectedColor.code === swatch.code;
                return (
                  <button
                    key={swatch.code}
                    type="button"
                    onClick={() => setSelectedColor(swatch)}
                    className={`group relative text-left p-2.5 rounded-xl border transition-all ${
                      isSelected
                        ? 'border-rose-500 bg-slate-900 shadow-lg scale-102 ring-1 ring-rose-500'
                        : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                    }`}
                  >
                    {/* Color chip */}
                    <div
                      className="w-full aspect-[4/3] rounded-lg mb-2 relative overflow-hidden border border-black/10 shadow-sm"
                      style={{ backgroundColor: swatch.hex }}
                    >
                      {isSelected && (
                        <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-slate-950/80 text-white flex items-center justify-center">
                          <Check className="w-3 h-3 text-rose-400" />
                        </div>
                      )}
                    </div>

                    <p className="text-xs font-bold text-white truncate">
                      {swatch.name}
                    </p>
                    <p className="text-[10px] font-mono text-slate-400">
                      {swatch.code}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 text-xs text-slate-400 leading-relaxed">
              💡 <strong>Tip de expertos en Salta 258:</strong> Si traés un trozo de revoque, tela, baldosa o muestra de cortina, escaneamos el tono con espectrofotómetro para lograr la fórmula exacta de pintura Üxell.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
