export const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pintureria Sarmiento Sucursal Salta | Üxell Pinturas Concordia</title>
  <meta name="description" content="Página oficial de Pintureria Sarmiento Sucursal Salta en Concordia, Entre Ríos. Distribuidor oficial de Üxell Pinturas. Entrega a domicilio, asesoramiento profesional y presupuestos." />
  
  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              blue: '#1E40AF',
              navy: '#0F172A',
              accent: '#E11D48',
              orange: '#EA580C',
              purple: '#9333EA',
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
          }
        }
      }
    }
  </script>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .paint-gradient {
      background: linear-gradient(90deg, #7E22CE 0%, #C026D3 25%, #E11D48 50%, #EA580C 75%, #FBBF24 100%);
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 antialiased selection:bg-rose-600 selection:text-white">

  <!-- CABECERA (HEADER) -->
  <header class="sticky top-0 z-50 backdrop-blur-md bg-slate-950/90 border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      
      <!-- Zona 1: Logo Oficial Üxell Pinturas + Sarmiento -->
      <a href="#inicio" class="flex items-center gap-3 group focus:outline-none">
        <div class="bg-black border border-slate-800 px-3 py-1.5 rounded-lg flex items-center shadow-inner">
          <svg class="h-9 w-auto" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="headerWave" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#7E22CE" />
                <stop offset="30%" stopColor="#C026D3" />
                <stop offset="55%" stopColor="#E11D48" />
                <stop offset="80%" stopColor="#EA580C" />
                <stop offset="100%" stopColor="#FBBF24" />
              </linearGradient>
            </defs>
            <g fill="#FFFFFF">
              <circle cx="53" cy="22" r="6.5" />
              <circle cx="75" cy="22" r="6.5" />
              <path d="M43 35 H55 V57 C55 62 58 65 64 65 C70 65 73 62 73 57 V35 H85 V57 C85 68 77 75 64 75 C51 75 43 68 43 57 Z" />
              <path d="M93 42 H106 L118 57 L130 42 H143 L126 62 L144 82 H131 L118 66 L105 82 H92 L110 62 Z" />
              <path d="M150 61 C150 49 159 41 172 41 C184 41 192 49 192 61 V64 H162 C163 70 167 74 174 74 C180 74 184 71 187 68 L193 74 C188 80 181 83 173 83 C159 83 150 74 150 61 Z M181 57 C181 52 177 48 171 48 C166 48 162 52 162 57 Z" />
              <rect x="200" y="35" width="12" height="47" rx="1.5" />
              <rect x="219" y="35" width="12" height="47" rx="1.5" />
            </g>
            <text x="137" y="96" text-anchor="middle" class="font-semibold text-[11px] fill-slate-300" letter-spacing="0.4em">PINTURAS</text>
            <path d="M34 104 C70 98, 120 97, 160 102 C200 107, 240 114, 286 111 C260 117, 210 116, 170 111 C130 106, 80 105, 34 104 Z" fill="url(#headerWave)" />
          </svg>
        </div>
        <div class="hidden sm:block">
          <span class="text-sm font-bold tracking-tight text-white block uppercase">Pintureria Sarmiento</span>
          <span class="text-xs text-rose-400 font-medium block">Sucursal Salta · Concordia</span>
        </div>
      </a>

      <!-- Zona 2: Enlaces de Navegación -->
      <nav class="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
        <a href="#inicio" class="hover:text-white transition-colors">Inicio</a>
        <a href="#productos" class="hover:text-white transition-colors">Productos Üxell</a>
        <a href="#calculadora" class="hover:text-white transition-colors">Calculadora</a>
        <a href="#sucursal" class="hover:text-white transition-colors">Sucursal Salta</a>
        <a href="#contacto" class="hover:text-white transition-colors">Contacto</a>
      </nav>

      <!-- Zona 3: CTA Principal -->
      <div class="flex items-center gap-3">
        <a href="tel:03455200514" class="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white py-2 px-3 rounded-lg border border-slate-800 hover:bg-slate-900 transition-colors">
          <svg class="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          0345 520-0514
        </a>
        <a href="#presupuesto" class="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-rose-600 to-orange-500 rounded-lg shadow-lg shadow-rose-950/40 hover:from-rose-500 hover:to-orange-400 transition-all transform active:scale-95">
          Pedir Presupuesto
        </a>
      </div>
    </div>
  </header>

  <!-- SECCIÓN HERO (PRINCIPAL) -->
  <section id="inicio" class="relative overflow-hidden pt-12 pb-20 lg:py-24 border-b border-slate-800">
    <div class="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-700 via-rose-700 to-transparent"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Texto Hero -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-rose-400">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Distribuidor Oficial Üxell Pinturas · Concordia, E.R.
          </div>
          
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Pintureria Sarmiento <span class="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">Sucursal Salta</span>
            <span class="block text-2xl sm:text-3xl font-medium text-slate-300 mt-2">Expertos en Color</span>
          </h1>

          <p class="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Tu pinturería de confianza en la esquina de <strong>Salta 258</strong>. Asesoramiento técnico personalizado en obra, sistema tintométrico para preparar cualquier tono al instante y toda la línea de máxima calidad <strong>Üxell Pinturas</strong>.
          </p>

          <!-- Beneficios Rápidos -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div class="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
              <span class="text-xs text-rose-400 font-bold block">🚚 ENTREGA INMEDIATA</span>
              <span class="text-xs text-slate-300">Envíos a domicilio en Concordia</span>
            </div>
            <div class="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
              <span class="text-xs text-amber-400 font-bold block">📍 SALTA 258</span>
              <span class="text-xs text-slate-300">Fácil acceso y estacionamiento</span>
            </div>
            <div class="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
              <span class="text-xs text-purple-400 font-bold block">✨ COLOR A MEDIDA</span>
              <span class="text-xs text-slate-300">Sistema tintométrico Üxell</span>
            </div>
          </div>

          <!-- Botones CTA -->
          <div class="flex flex-wrap items-center gap-4 pt-4">
            <a href="https://wa.me/5493455200514?text=Hola%20Pintureria%20Sarmiento%20Sucursal%20Salta,%20deseo%20pedir%20un%20presupuesto" target="_blank" class="px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/50 flex items-center gap-2 transition-all">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.066-2.227-.57-1.833-.761-3.003-2.614-3.095-2.736-.092-.121-.749-.997-.749-1.901 0-.905.474-1.349.643-1.533.169-.184.37-.23.493-.23.123 0 .247 0 .356.006.115.006.269-.043.421.322.158.38.54 1.319.588 1.415.048.096.08.209.016.337-.064.127-.096.208-.192.32-.096.112-.202.25-.289.336-.096.096-.197.201-.085.393.112.192.498.822 1.069 1.331.733.653 1.352.855 1.544.951.192.096.304.08.417-.048.112-.129.481-.562.61-.754.128-.193.257-.16.433-.096.177.064 1.124.53 1.317.626.193.096.321.144.369.225.048.08.048.466-.096.871z"/></svg>
              Presupuesto vía WhatsApp
            </a>
            <a href="#calculadora" class="px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all">
              Calcular Litros de Pintura
            </a>
          </div>

        </div>

        <!-- Tarjeta Visual / Fachada -->
        <div class="lg:col-span-5">
          <div class="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 p-2 shadow-2xl">
            <!-- Representación estética de la esquina Salta 258 -->
            <div class="relative h-80 rounded-xl overflow-hidden bg-slate-950 flex flex-col justify-end p-6 border border-slate-800/80">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10"></div>
              
              <!-- Decoración geométrica que evoca la esquina emblemática de Pintureria Sarmiento -->
              <div class="absolute inset-0 opacity-40 bg-[linear-gradient(45deg,#1E40AF_0%,#3B82F6_50%,#9333EA_100%)]"></div>
              
              <div class="relative z-20 space-y-2">
                <span class="inline-block px-2.5 py-1 rounded bg-rose-600 text-white text-xs font-bold uppercase tracking-wider">
                  Sucursal Salta 258
                </span>
                <h3 class="text-xl font-bold text-white">Esquina emblemática en Concordia</h3>
                <p class="text-xs text-slate-300">
                  Ubicación estratégica, fácil acceso vehicular y retiro rápido de materiales para pintores, arquitectos y particulares.
                </p>
                <div class="pt-2 flex items-center justify-between text-xs text-slate-300 border-t border-slate-800">
                  <span>📞 0345 520-0514</span>
                  <a href="#sucursal" class="text-rose-400 font-semibold hover:underline">Ver mapa y horarios →</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- SECCIÓN INFORMACIÓN DEL NEGOCIO Y SUCURSAL -->
  <section id="sucursal" class="py-16 bg-slate-900/50 border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-xs font-bold tracking-widest uppercase text-rose-500 mb-2">Información del Negocio</h2>
        <p class="text-3xl font-extrabold text-white tracking-tight">Sucursal Salta · Tu punto de encuentro</p>
        <p class="text-sm text-slate-400 mt-2">Visítanos o solicita envío a cualquier barrio de Concordia, Entre Ríos.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Tarjeta Dirección -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-slate-700 transition-all">
          <div class="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <h3 class="text-lg font-bold text-white mb-1">Dirección</h3>
          <p class="text-sm font-semibold text-slate-200">Salta 258</p>
          <p class="text-xs text-slate-400">E3202 Concordia, Entre Ríos</p>
          <a href="https://maps.google.com/?q=Salta+258,+Concordia,+Entre+Rios" target="_blank" class="inline-block mt-4 text-xs font-bold text-blue-400 hover:text-blue-300">
            Abrir en Google Maps →
          </a>
        </div>

        <!-- Tarjeta Teléfono -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-slate-700 transition-all">
          <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          </div>
          <h3 class="text-lg font-bold text-white mb-1">Teléfono Directo</h3>
          <p class="text-sm font-semibold text-slate-200">
            <a href="tel:03455200514" class="hover:underline">0345 520-0514</a>
          </p>
          <p class="text-xs text-slate-400">Llamadas y presupuestos al instante</p>
          <a href="tel:03455200514" class="inline-block mt-4 text-xs font-bold text-emerald-400 hover:text-emerald-300">
            Llamar ahora →
          </a>
        </div>

        <!-- Tarjeta Horarios -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-slate-700 transition-all">
          <div class="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h3 class="text-lg font-bold text-white mb-1">Horarios de Atención</h3>
          <p class="text-xs text-slate-300"><strong>Mañana:</strong> Hasta las 12:00 p.m.</p>
          <p class="text-xs text-slate-300 mt-1"><strong>Tarde:</strong> Vuelve a abrir 3:30 p.m. (hasta 19:30)</p>
          <p class="text-xs text-amber-400 font-medium mt-2">Sábados: 08:00 a 12:30 hs</p>
        </div>

        <!-- Tarjeta Entrega a Domicilio -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-slate-700 transition-all">
          <div class="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>
          </div>
          <h3 class="text-lg font-bold text-white mb-1">Entrega a Domicilio</h3>
          <p class="text-sm font-semibold text-slate-200">Envíos en Concordia</p>
          <p class="text-xs text-slate-400">Despachamos latas, rodillos y materiales directo a tu obra o vivienda.</p>
          <a href="#presupuesto" class="inline-block mt-4 text-xs font-bold text-rose-400 hover:text-rose-300">
            Coordinar entrega →
          </a>
        </div>

      </div>

    </div>
  </section>

  <!-- SECCIÓN PRODUCTOS Y SERVICIOS ÜXELL -->
  <section id="productos" class="py-20 border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span class="text-xs font-bold tracking-widest uppercase text-rose-500">Línea Oficial Üxell</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Pinturas & Soluciones Técnicas
          </h2>
          <p class="text-slate-400 text-sm mt-2 max-w-xl">
            Pinturas formuladas con polímeros de última generación para máxima durabilidad, rendimiento por metro cuadrado y poder cubritivo.
          </p>
        </div>
        <div class="mt-4 md:mt-0">
          <span class="text-xs text-slate-400">Presentaciones: 1L · 4L · 10L · 20L</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Categoría 1: Látex Interiores -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-rose-500/50 transition-all flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-semibold px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-850">Línea Hogar & Obra</span>
              <span class="text-xs text-slate-400">Interior</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Látex Interior Üxell</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Acabado mate y satinado aterciopelado. Excelente nivelación, lavabilidad superior, bajo olor y aditivos antihongo de acción prolongada.
            </p>
            <ul class="text-xs text-slate-400 space-y-2 mb-6">
              <li class="flex items-center gap-2">✓ Rendimiento: 10 a 12 m² por litro y por mano</li>
              <li class="flex items-center gap-2">✓ Máximo poder cubritivo en blanco y tinturas</li>
              <li class="flex items-center gap-2">✓ Secado rápido: 2 a 3 horas entre manos</li>
            </ul>
          </div>
          <a href="https://wa.me/5493455200514?text=Hola,%20quisiera%20consultar%20precio%20de%20Látex%20Interior%20Üxell" target="_blank" class="w-full py-2.5 text-center text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors">
            Cotizar Látex Interior
          </a>
        </div>

        <!-- Categoría 2: Exteriores, Frentes y Muros -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-rose-500/50 transition-all flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-semibold px-2.5 py-1 rounded bg-rose-950 text-rose-300 border border-rose-850">Protección UV</span>
              <span class="text-xs text-slate-400">Exterior</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Frentes y Muros Üxell</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Pintura acrílica elastomérica formulada para resistir las inclemencias climáticas de Entre Ríos, lluvias intensas y radiación solar extrema.
            </p>
            <ul class="text-xs text-slate-400 space-y-2 mb-6">
              <li class="flex items-center gap-2">✓ Membrana elástica que sella microfisuras</li>
              <li class="flex items-center gap-2">✓ Pigmentos inalterables con filtro UV</li>
              <li class="flex items-center gap-2">✓ Alta resistencia a la formación de algas y hongos</li>
            </ul>
          </div>
          <a href="https://wa.me/5493455200514?text=Hola,%20quisiera%20consultar%20precio%20de%20Frentes%20y%20Muros%20Üxell" target="_blank" class="w-full py-2.5 text-center text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors">
            Cotizar Frentes y Muros
          </a>
        </div>

        <!-- Categoría 3: Membranas e Impermeabilizantes -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-rose-500/50 transition-all flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-semibold px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-850">Impermeabilización</span>
              <span class="text-xs text-slate-400">Techos y Terrazas</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Membrana en Pasta Fibrada</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Recubrimiento impermeabilizante con fibras sintéticas incorporadas. Crea una película transitable, elástica y 100% estanca contra filtraciones.
            </p>
            <ul class="text-xs text-slate-400 space-y-2 mb-6">
              <li class="flex items-center gap-2">✓ No requiere tela en reparaciones convencionales</li>
              <li class="flex items-center gap-2">✓ Disponible en Blanco, Rojo Teja y Verde</li>
              <li class="flex items-center gap-2">✓ Reduce la temperatura interior en techos blancos</li>
            </ul>
          </div>
          <a href="https://wa.me/5493455200514?text=Hola,%20quisiera%20consultar%20precio%20de%20Membrana%20Fibrada%20Üxell" target="_blank" class="w-full py-2.5 text-center text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors">
            Cotizar Membrana Fibrada
          </a>
        </div>

        <!-- Categoría 4: Esmaltes Sintéticos & Antióxido -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-rose-500/50 transition-all flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-semibold px-2.5 py-1 rounded bg-blue-950 text-blue-300 border border-blue-850">Metales & Maderas</span>
              <span class="text-xs text-slate-400">Herrería</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Esmalte 3 en 1 Üxell</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Antióxido, convertidor y esmalte de terminación en una sola aplicación. Brillo espejo y máxima protección anticorrosiva para portones, rejas y aberturas.
            </p>
            <ul class="text-xs text-slate-400 space-y-2 mb-6">
              <li class="flex items-center gap-2">✓ Acabados Brillante, Satinado y Mate</li>
              <li class="flex items-center gap-2">✓ Aplicación directa sobre metal ligeramente oxidado</li>
              <li class="flex items-center gap-2">✓ Alta dureza superficial resistente a rayones</li>
            </ul>
          </div>
          <a href="https://wa.me/5493455200514?text=Hola,%20quisiera%20consultar%20precio%20de%20Esmaltes%20Üxell" target="_blank" class="w-full py-2.5 text-center text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors">
            Cotizar Esmaltes
          </a>
        </div>

        <!-- Categoría 5: Maderas, Impregnantes & Cetol -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-rose-500/50 transition-all flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-semibold px-2.5 py-1 rounded bg-orange-950 text-orange-300 border border-orange-850">Protección Madera</span>
              <span class="text-xs text-slate-400">Decks y Techos</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Impregnantes & Barnices</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              No cuartea ni descascara. Penetra en los poros de la madera permitiendo que respire y repeliendo el agua y los hongos de intemperie.
            </p>
            <ul class="text-xs text-slate-400 space-y-2 mb-6">
              <li class="flex items-center gap-2">✓ Tonos naturales: Caoba, Nogal, Roble, Cedro y Cristal</li>
              <li class="flex items-center gap-2">✓ Fácil mantenimiento sin necesidad de lijar a fondo</li>
            </ul>
          </div>
          <a href="https://wa.me/5493455200514?text=Hola,%20quisiera%20consultar%20precio%20de%20Protectores%20para%20Madera" target="_blank" class="w-full py-2.5 text-center text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors">
            Cotizar Maderas
          </a>
        </div>

        <!-- Categoría 6: Asesoramiento Profesional & Tintométrico -->
        <div class="bg-gradient-to-br from-purple-950/40 via-rose-950/40 to-slate-900 border border-rose-500/30 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-semibold px-2.5 py-1 rounded bg-rose-500 text-white">Servicio Exclusivo</span>
              <span class="text-xs text-rose-300 font-semibold">En Sucursal Salta</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Sistema Tintométrico</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              ¿Buscás un color exacto para combinar con tus muebles o fachada? En nuestra sucursal de Salta 258 preparamos al instante más de 2.500 tonalidades.
            </p>
            <ul class="text-xs text-slate-300 space-y-2 mb-6">
              <li class="flex items-center gap-2">✓ Fórmulas exactas repetibles en cualquier momento</li>
              <li class="flex items-center gap-2">✓ Asesoramiento técnico en obra sin cargo</li>
            </ul>
          </div>
          <a href="https://wa.me/5493455200514?text=Hola,%20necesito%20asesoramiento%20sobre%20colores%20en%20Sucursal%20Salta" target="_blank" class="w-full py-2.5 text-center text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-xl transition-colors shadow-lg">
            Consultar con un Experto
          </a>
        </div>

      </div>

    </div>
  </section>

  <!-- CALCULADORA DE LITROS INTERACTIVA -->
  <section id="calculadora" class="py-20 bg-slate-900/40 border-b border-slate-800">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-2xl mx-auto mb-10">
        <span class="text-xs font-bold tracking-widest uppercase text-amber-400">Herramienta Práctica</span>
        <h2 class="text-3xl font-extrabold text-white tracking-tight mt-1">Calculadora de Pintura</h2>
        <p class="text-sm text-slate-400 mt-2">Calculá cuántos litros de pintura Üxell necesitás para tu proyecto en Concordia.</p>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div class="space-y-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1">Metros cuadrados totales (m²)</label>
              <input type="number" id="calcArea" value="40" min="1" max="1000" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white font-bold focus:outline-none focus:border-rose-500" />
              <span class="text-[11px] text-slate-500">Ejemplo: Una habitación de 4x4m con altura de 2.6m tiene ~40m² de paredes.</span>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1">Cantidad de manos recomendadas</label>
              <select id="calcHands" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-rose-500">
                <option value="2" selected>2 manos (Recomendado estándar)</option>
                <option value="3">3 manos (Cambio brusco de color / Pared nueva)</option>
                <option value="1">1 mano (Mantenimiento leve)</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1">Tipo de producto Üxell</label>
              <select id="calcType" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-rose-500">
                <option value="11" selected>Látex Interior (Rinde ~11 m²/L)</option>
                <option value="10">Frentes y Muros Exterior (Rinde ~10 m²/L)</option>
                <option value="3">Membrana en Pasta Techos (Rinde ~3 m²/L por mano)</option>
                <option value="12">Esmalte Sintético (Rinde ~12 m²/L)</option>
              </select>
            </div>
          </div>

          <!-- Resultado del cálculo -->
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-6 text-center space-y-4">
            <span class="text-xs text-slate-400 uppercase font-semibold">Litros Estimados Requeridos</span>
            <div class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">
              <span id="resultLitros">7.3</span> Litros
            </div>
            <p id="resultPackaging" class="text-xs text-slate-300">
              Recomendación: <strong>1 lata de 10L</strong> o <strong>2 latas de 4L</strong>
            </p>
            <div class="pt-2">
              <a id="btnOrderCalc" href="#" target="_blank" class="inline-block w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg">
                Pedir estos litros por WhatsApp
              </a>
            </div>
            <p class="text-[10px] text-slate-500">
              * El rendimiento real puede variar según la rugosidad y absorción de la superficie.
            </p>
          </div>

        </div>
      </div>

    </div>
  </section>

  <!-- FORMULARIO DE PRESUPUESTO DIRECTO -->
  <section id="presupuesto" class="py-20 border-b border-slate-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center mb-10">
        <span class="text-xs font-bold tracking-widest uppercase text-rose-500">Atención Personalizada</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">Pedir Presupuesto sin Compromiso</h2>
        <p class="text-slate-400 text-sm mt-2">
          Completá los datos y te responderemos inmediatamente desde Sucursal Salta con los mejores precios y promociones.
        </p>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
        <form id="quoteForm" class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-2">Tu Nombre completo</label>
              <input type="text" id="quoteName" required placeholder="Ej: Juan Pérez" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 placeholder-slate-600 text-sm" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-2">Teléfono / WhatsApp</label>
              <input type="tel" id="quotePhone" required placeholder="Ej: 345 1234567" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 placeholder-slate-600 text-sm" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-2">Tipo de Pintura o Proyecto</label>
              <select id="quoteCategory" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 text-sm">
                <option value="Látex Interior">Látex Interior Üxell</option>
                <option value="Frentes y Muros Exterior">Frentes y Muros Exterior</option>
                <option value="Impermeabilizante Techos">Impermeabilizante / Membrana</option>
                <option value="Esmalte Sintético">Esmalte Sintético / Herrería</option>
                <option value="Pintura para Piletas">Pintura para Piletas</option>
                <option value="Maderas / Barnices">Maderas / Barnices</option>
                <option value="Presupuesto Integral de Obra">Presupuesto Integral de Obra</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-2">¿Necesita Entrega a Domicilio?</label>
              <select id="quoteDelivery" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 text-sm">
                <option value="Sí, entrega en Concordia">Sí, con entrega en Concordia</option>
                <option value="No, retiro en Salta 258">No, retiro por Sucursal Salta 258</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-2">Detalles del pedido o metros cuadrados aproximados</label>
            <textarea id="quoteMessage" rows="3" placeholder="Contanos qué querés pintar, metros aproximados o si necesitás rodillos, pinceles o enduido..." class="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 placeholder-slate-600 text-sm"></textarea>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-4">
            <button type="submit" class="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-500 hover:to-orange-400 text-white font-bold text-sm rounded-xl shadow-lg shadow-rose-950/50 transition-all flex items-center justify-center gap-2">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.066-2.227-.57-1.833-.761-3.003-2.614-3.095-2.736-.092-.121-.749-.997-.749-1.901 0-.905.474-1.349.643-1.533.169-.184.37-.23.493-.23.123 0 .247 0 .356.006.115.006.269-.043.421.322.158.38.54 1.319.588 1.415.048.096.08.209.016.337-.064.127-.096.208-.192.32-.096.112-.202.25-.289.336-.096.096-.197.201-.085.393.112.192.498.822 1.069 1.331.733.653 1.352.855 1.544.951.192.096.304.08.417-.048.112-.129.481-.562.61-.754.128-.193.257-.16.433-.096.177.064 1.124.53 1.317.626.193.096.321.144.369.225.048.08.048.466-.096.871z"/></svg>
              Enviar a Sucursal Salta por WhatsApp
            </button>
            <span class="text-xs text-slate-400">Respuesta promedio en menos de 15 minutos en horario comercial.</span>
          </div>
        </form>
      </div>

    </div>
  </section>

  <!-- PIE DE PÁGINA (FOOTER) -->
  <footer id="contacto" class="bg-black py-16 border-t border-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
        
        <!-- Columna 1: Marca & Identidad -->
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <span class="font-extrabold text-white text-lg tracking-tight uppercase">Pintureria Sarmiento</span>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed">
            Sucursal Salta en Concordia, Entre Ríos. Distribuidor Oficial de pinturas y recubrimientos arquitectónicos de alta gama <strong>Üxell Pinturas</strong>.
          </p>
          <div class="h-1 w-24 paint-gradient rounded-full"></div>
        </div>

        <!-- Columna 2: Sucursal Salta -->
        <div class="space-y-3">
          <h4 class="text-xs font-bold text-white uppercase tracking-wider">Sucursal Salta</h4>
          <p class="text-xs text-slate-300">
            <strong>Dirección:</strong><br />
            Salta 258, E3202 Concordia, Entre Ríos
          </p>
          <p class="text-xs text-slate-300">
            <strong>Teléfono:</strong><br />
            <a href="tel:03455200514" class="text-rose-400 hover:underline">0345 520-0514</a>
          </p>
        </div>

        <!-- Columna 3: Horarios de Atención -->
        <div class="space-y-3">
          <h4 class="text-xs font-bold text-white uppercase tracking-wider">Horarios Comerciales</h4>
          <ul class="text-xs text-slate-300 space-y-1.5">
            <li><strong>Lunes a Viernes:</strong></li>
            <li class="text-slate-400">08:00 a 12:00 hs</li>
            <li class="text-slate-400">15:30 a 19:30 hs</li>
            <li class="pt-1"><strong>Sábados:</strong></li>
            <li class="text-slate-400">08:00 a 12:30 hs</li>
          </ul>
        </div>

        <!-- Columna 4: Servicios Destacados -->
        <div class="space-y-3">
          <h4 class="text-xs font-bold text-white uppercase tracking-wider">Servicios</h4>
          <ul class="text-xs text-slate-400 space-y-1.5">
            <li>• Envíos rápidos a domicilio en Concordia</li>
            <li>• Sistema tintométrico computadorizado</li>
            <li>• Presupuestos para obras y consorcios</li>
            <li>• Asesoramiento técnico profesional</li>
          </ul>
        </div>

      </div>

      <!-- Barra Inferior de Copyright -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© 2026 Pintureria Sarmiento Sucursal Salta. Todos los derechos reservados. Concordia, Entre Ríos.</p>
        <p class="text-[11px]">Distribuidor Oficial Üxell Pinturas Argentina.</p>
      </div>

    </div>
  </footer>

  <!-- SCRIPT INTERNO PARA CALCULADORA Y FORMULARIO -->
  <script>
    function updateCalculator() {
      const area = parseFloat(document.getElementById('calcArea').value) || 0;
      const hands = parseFloat(document.getElementById('calcHands').value) || 2;
      const yieldPerLitre = parseFloat(document.getElementById('calcType').value) || 11;
      
      const totalLitres = ((area * hands) / yieldPerLitre).toFixed(1);
      document.getElementById('resultLitros').textContent = totalLitres;

      let packageText = '';
      const num = parseFloat(totalLitres);
      if (num <= 1) {
        packageText = 'Recomendación: 1 envase de 1L';
      } else if (num <= 4) {
        packageText = 'Recomendación: 1 lata de 4L';
      } else if (num <= 10) {
        packageText = 'Recomendación: 1 lata de 10L';
      } else if (num <= 20) {
        packageText = 'Recomendación: 1 balde de 20L';
      } else {
        const baldes = Math.floor(num / 20);
        const resto = (num % 20).toFixed(0);
        packageText = 'Recomendación: ' + baldes + ' balde(s) de 20L' + (resto > 0 ? ' + ' + resto + 'L adicionales' : '');
      }
      document.getElementById('resultPackaging').innerHTML = packageText;

      const whatsappText = encodeURIComponent(
        'Hola Pintureria Sarmiento Sucursal Salta! Necesito consultar precio para ' + 
        totalLitres + ' litros de pintura (' + area + ' m² con ' + hands + ' manos).'
      );
      document.getElementById('btnOrderCalc').href = 'https://wa.me/5493455200514?text=' + whatsappText;
    }

    document.getElementById('calcArea').addEventListener('input', updateCalculator);
    document.getElementById('calcHands').addEventListener('change', updateCalculator);
    document.getElementById('calcType').addEventListener('change', updateCalculator);
    updateCalculator();

    // Formulario de presupuesto a WhatsApp
    document.getElementById('quoteForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('quoteName').value;
      const phone = document.getElementById('quotePhone').value;
      const category = document.getElementById('quoteCategory').value;
      const delivery = document.getElementById('quoteDelivery').value;
      const message = document.getElementById('quoteMessage').value;

      const text = encodeURIComponent(
        'Hola Pintureria Sarmiento Sucursal Salta! Solicito presupuesto:\\n' +
        '• Nombre: ' + name + '\\n' +
        '• Teléfono: ' + phone + '\\n' +
        '• Producto: ' + category + '\\n' +
        '• Entrega: ' + delivery + '\\n' +
        '• Detalle: ' + (message || 'Sin detalle adicional')
      );

      window.open('https://wa.me/5493455200514?text=' + text, '_blank');
    });
  </script>
</body>
</html>`;
