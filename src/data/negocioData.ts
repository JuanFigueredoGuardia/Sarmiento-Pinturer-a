export interface NegocioData {
  nombre: string;
  sucursal: string;
  slogan: string;
  distribuidor_oficial: string;
  localidad: string;
  codigo_postal: string;
  direccion: {
    calle: string;
    numero: string;
    interseccion: string;
    ciudad: string;
    provincia: string;
    pais: string;
    google_maps_url: string;
  };
  contacto: {
    telefono_fijo: string;
    telefono_click: string;
    whatsapp: string;
    whatsapp_url: string;
  };
  horarios: {
    lunes_a_viernes: {
      turno_manana: string;
      turno_tarde: string;
    };
    sabados: {
      turno: string;
    };
    domingos_y_feriados: string;
  };
  servicios_del_local: Array<{
    id: string;
    titulo: string;
    descripcion: string;
  }>;
  lineas_uxell: Array<{
    id: string;
    nombre: string;
    categoria: string;
    acabado: string;
    rendimiento: string;
    envases: string[];
    destacado: string;
  }>;
}

export const negocioData: NegocioData = {
  nombre: "Pintureria Sarmiento",
  sucursal: "Sucursal Salta",
  slogan: "Expertos en Color",
  distribuidor_oficial: "Üxell Pinturas",
  localidad: "Concordia, Entre Ríos, Argentina",
  codigo_postal: "E3202",
  direccion: {
    calle: "Salta",
    numero: "258",
    interseccion: "Salta esq. Carriego / Urquiza",
    ciudad: "Concordia",
    provincia: "Entre Ríos",
    pais: "Argentina",
    google_maps_url: "https://maps.google.com/?q=Salta+258,+Concordia,+Entre+Rios"
  },
  contacto: {
    telefono_fijo: "0345 520-0514",
    telefono_click: "tel:03455200514",
    whatsapp: "+54 9 345 520-0514",
    whatsapp_url: "https://wa.me/5493455200514?text=Hola%20Pintureria%20Sarmiento%20Sucursal%20Salta,%20deseo%20hacer%20una%20consulta"
  },
  horarios: {
    lunes_a_viernes: {
      turno_manana: "Hasta las 12:00 p.m.",
      turno_tarde: "Vuelve a abrir a las 3:30 p.m. (hasta 19:30 hs)"
    },
    sabados: {
      turno: "08:00 a 12:30 hs"
    },
    domingos_y_feriados: "Cerrado los domingos"
  },
  servicios_del_local: [
    {
      id: "entrega_domicilio",
      titulo: "Entrega a Domicilio",
      descripcion: "Reparto de baldes, latas y materiales directo a tu obra o domicilio en toda la ciudad de Concordia."
    },
    {
      id: "asesoramiento_tecnico",
      titulo: "Asesoramiento Técnico Profesional",
      descripcion: "Atención especializada para arquitectos, pintores, contratistas y particulares en la esquina de Salta 258."
    },
    {
      id: "sistema_tintometrico",
      titulo: "Sistema Tintométrico Computarizado",
      descripcion: "Preparación exacta de más de 2.500 tonalidades Üxell en el acto con calibración digital."
    },
    {
      id: "estacionamiento_carga",
      titulo: "Zona de Carga Ágil",
      descripcion: "Espacio de detención vehicular frente al local para carga pesada y rápida de mercadería."
    }
  ],
  lineas_uxell: [
    {
      id: "latex_interior",
      nombre: "Látex Interior Ultra Lavable",
      categoria: "Interiores",
      acabado: "Mate aterciopelado y satinado",
      rendimiento: "10 a 12 m² por litro por mano",
      envases: ["1L", "4L", "10L", "20L"],
      destacado: "Fórmula antihongo de larga duración, lavable con agua y excelente poder cubritivo."
    },
    {
      id: "frentes_muros",
      nombre: "Frentes y Muros Elastomérico",
      categoria: "Exteriores",
      acabado: "Mate protector impermeable",
      rendimiento: "8 a 10 m² por litro por mano",
      envases: ["4L", "10L", "20L"],
      destacado: "Protección contra rayos UV y lluvias torrenciales, sella microfisuras."
    },
    {
      id: "membrana_fibrada",
      nombre: "Membrana en Pasta Fibrada",
      categoria: "Impermeabilizantes",
      acabado: "Transitable elástico",
      rendimiento: "1.2 a 1.5 kg por m² trabajo final",
      envases: ["5kg", "10kg", "20kg"],
      destacado: "Con fibras incorporadas para techos y terrazas, máxima elasticidad."
    },
    {
      id: "esmaltes_maderas",
      nombre: "Esmalte 3 en 1 & Impregnantes",
      categoria: "Metales y Maderas",
      acabado: "Brillante, satinado y mate",
      rendimiento: "12 a 14 m² por litro por mano",
      envases: ["0.5L", "1L", "4L"],
      destacado: "Antióxido, convertidor y esmalte para herrería. Impregnantes con filtro solar."
    }
  ]
};
