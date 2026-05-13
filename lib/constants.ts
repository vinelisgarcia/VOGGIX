export const brand = {
  name: "Voggix",
  tagline: "Conecta. Organiza. Haz crecer.",
  description:
    "Plataforma todo en uno para reservas, gestión y crecimiento de negocios de servicios.",
  colors: {
    blue: "#2563EB",
    violet: "#8B5CF6",
    pink: "#EC4899",
    cyan: "#22D3EE",
    navy: "#0F172A",
    cloud: "#F8FAFC"
  },
  email: "hola@voggix.com",
  whatsappDisplay: "+1 829 764 7616",
  whatsappNumber: "18297647616",
  whatsappHref:
    "https://wa.me/18297647616?text=Hola%20Voggix%2C%20quiero%20digitalizar%20mi%20negocio.",
  // TODO: Reemplazar por la URL real de la aplicación cuando esté disponible.
  loginUrl: "/login"
};

export const navItems = [
  { label: "Para negocios", href: "#para-negocios" },
  { label: "Verticales", href: "#verticales" },
  { label: "Studio", href: "#studio" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" }
];

export const heroMicroBenefits = [
  "Reservas online",
  "Clientes",
  "Gestión",
  "Promoción",
  "Presencia digital"
];

export const painPoints = [
  {
    title: "Citas perdidas",
    text: "Clientes escriben y nadie responde a tiempo."
  },
  {
    title: "Agenda desordenada",
    text: "Reservas duplicadas, cambios manuales y poca visibilidad."
  },
  {
    title: "No-shows",
    text: "Ausencias por falta de recordatorios claros."
  },
  {
    title: "Presencia débil",
    text: "Depender solo de Instagram limita la confianza y el alcance."
  }
];

export const verticals = [
  {
    key: "barber",
    name: "Voggix Barber",
    shortName: "Barber",
    color: "#10B981",
    surface: "#ECFDF5",
    dark: "#064E3B",
    iconLabel: "Tijeras de barbería",
    heroTitle: "Agenda por barbero, servicios recurrentes y días llenos.",
    heroText:
      "Reservas por profesional, duración por servicio, clientes frecuentes y promociones para horarios con baja ocupación.",
    heroMetric: "24 cortes hoy",
    text: "Gestiona barberías, barberos, servicios y clientes recurrentes.",
    cta: "Ver más"
  },
  {
    key: "dental",
    name: "Voggix Dental",
    shortName: "Dental",
    color: "#2563EB",
    surface: "#EFF6FF",
    dark: "#1E3A8A",
    iconLabel: "Diente dental",
    heroTitle: "Citas confirmadas, doctores organizados y menos ausencias.",
    heroText:
      "Agenda por doctor, recordatorios, confirmaciones y seguimiento para clínicas que necesitan orden real.",
    heroMetric: "18 citas confirmadas",
    text: "Organiza citas, recordatorios y seguimiento para clínicas dentales.",
    cta: "Ver más"
  },
  {
    key: "tattoo",
    name: "Voggix Tattoo",
    shortName: "Tattoo",
    color: "#111827",
    surface: "#F3F4F6",
    dark: "#030712",
    iconLabel: "Máquina de tatuaje",
    heroTitle: "Convierte consultas en sesiones reservadas.",
    heroText:
      "Portafolio, brief previo, depósito opcional, agenda por artista y seguimiento de sesiones.",
    heroMetric: "7 briefs listos",
    text: "Convierte consultas en sesiones reservadas y muestra tu portafolio.",
    cta: "Ver más"
  },
  {
    key: "beauty",
    name: "Voggix Beauty",
    shortName: "Beauty",
    color: "#D4A13C",
    surface: "#FFFBEB",
    dark: "#92400E",
    iconLabel: "Perfil beauty",
    heroTitle: "Servicios por duración, paquetes y clientas recurrentes.",
    heroText:
      "Salones, spas, uñas, estilistas y beauty pros con reservas claras y seguimiento comercial.",
    heroMetric: "32 reservas beauty",
    text: "Impulsa salones, spas, uñas, estilistas y beauty pros.",
    cta: "Ver más"
  },
  {
    key: "studio",
    name: "Voggix Studio",
    shortName: "Studio",
    color: "#2563EB",
    surface: "#EEF2FF",
    dark: "#172554",
    iconLabel: "Código web",
    heroTitle: "Tu web, identidad y reservas conectadas.",
    heroText:
      "Landing, web premium, marca, WhatsApp, Google Business Profile y reservas conectadas desde el primer día.",
    heroMetric: "Web lista para reservar",
    text: "Crea tu web, identidad visual y presencia digital conectada a reservas.",
    cta: "Conocer Studio"
  }
] as const;

export const features = [
  {
    title: "Reservas online",
    text: "Tus clientes reservan 24/7 desde cualquier dispositivo."
  },
  {
    title: "Agenda inteligente",
    text: "Controla servicios, horarios, disponibilidad y equipo."
  },
  {
    title: "Gestión de clientes",
    text: "Historial, preferencias, notas y seguimiento en un solo perfil."
  },
  {
    title: "Recordatorios automáticos",
    text: "Reduce ausencias con recordatorios y confirmaciones."
  },
  {
    title: "Reportes y métricas",
    text: "Entiende qué vende más, cuándo y con qué clientes."
  },
  {
    title: "Promoción digital",
    text: "Ofertas, campañas y herramientas para atraer clientes."
  },
  {
    title: "Perfil profesional",
    text: "Servicios, fotos, horarios, ubicación y botón de reservar."
  },
  {
    title: "Presencia web con Studio",
    text: "Web profesional conectada a reservas, WhatsApp, Google y redes."
  }
];

export const steps = [
  {
    title: "Crea tu perfil",
    text: "Agrega tu negocio, servicios, horarios, precios, equipo y fotos."
  },
  {
    title: "Recibe reservas",
    text: "Tus clientes eligen servicio, fecha y hora desde tu perfil o página web."
  },
  {
    title: "Haz crecer tu negocio",
    text: "Gestiona clientes, reduce ausencias, promociona servicios y mide resultados."
  }
];

export const studioServices = [
  {
    title: "Páginas web",
    text: "Sitios rápidos, modernos y optimizados para convertir visitas en reservas."
  },
  {
    title: "Identidad visual",
    text: "Logo, colores, tipografía y presencia profesional."
  },
  {
    title: "Presencia digital",
    text: "SEO local, redes, Google y conexión directa con tus clientes."
  }
];

export const pricingPlans = [
  {
    name: "Voggix Verticales",
    eyebrow: "Barber, Dental, Beauty y Tattoo",
    price: "20 USD",
    cadence: "/mes por centro",
    description: "Tarifa plana para operar reservas, agenda y clientes sin límites artificiales.",
    cta: "Solicitar activación",
    featured: false,
    items: [
      "Reservas ilimitadas",
      "Agenda, equipo y servicios",
      "Clientes e historial",
      "Recordatorios y perfil profesional"
    ]
  },
  {
    name: "Verticales + pagos",
    eyebrow: "Cobros dentro de Voggix",
    price: "35 USD",
    cadence: "/mes total",
    description: "Para negocios que quieren procesar pagos desde la propia plataforma.",
    cta: "Activar pagos",
    featured: true,
    items: [
      "Todo el plan vertical",
      "Procesamiento de pagos",
      "Confirmación de reserva",
      "Flujo preparado para depósitos"
    ]
  },
  {
    name: "Studio Web Básica",
    eyebrow: "Presencia digital inicial",
    price: "250 USD",
    cadence: "pago único",
    description: "Landing profesional conectada a reservas, WhatsApp, Google y redes.",
    cta: "Cotizar básica",
    featured: false,
    items: [
      "Landing de conversión",
      "Copy base y estructura",
      "Integración con WhatsApp",
      "Conexión a reservas"
    ]
  },
  {
    name: "Studio Web Premium",
    eyebrow: "Marca y web más completa",
    price: "350 USD",
    cadence: "pago único",
    description: "Web premium para negocios que necesitan una presencia más sólida y diferenciada.",
    cta: "Cotizar premium",
    featured: false,
    items: [
      "Web con más secciones",
      "Dirección visual premium",
      "SEO local base",
      "Reservas, WhatsApp y redes"
    ]
  }
];

export const customPricingNote = {
  title: "Casos grandes y proyectos especiales",
  text: "Clínicas, cadenas, multi-sedes, integraciones, automatizaciones o proyectos de marca avanzados se cotizan aparte.",
  cta: "Hablar con ventas"
};

export const useCases = [
  {
    title: "Barberías",
    text: "Agenda por barbero, servicios recurrentes y promociones para días flojos."
  },
  {
    title: "Clínicas dentales",
    text: "Confirmación de citas, recordatorios y mejor organización por doctor."
  },
  {
    title: "Estudios tattoo",
    text: "Portafolio, consultas previas y reservas de sesiones."
  },
  {
    title: "Beauty pros",
    text: "Paquetes, servicios por duración y seguimiento a clientas frecuentes."
  }
];

export const faqs = [
  {
    question: "¿Voggix es solo una app de reservas?",
    answer:
      "No. Voggix combina reservas, agenda, gestión de clientes, promoción digital y presencia web con Voggix Studio."
  },
  {
    question: "¿Puedo usar Voggix si mi negocio hoy solo usa WhatsApp?",
    answer:
      "Sí. La idea es ayudarte a pasar de mensajes manuales a una experiencia más profesional y organizada."
  },
  {
    question: "¿Voggix Studio crea páginas web?",
    answer:
      "Sí. Studio puede crear landing pages, webs completas, identidad visual y presencia digital conectada con reservas."
  },
  {
    question: "¿Los colores de cada vertical se mantienen?",
    answer:
      "Sí. Barber usa verde, Dental azul, Tattoo negro, Beauty dorado y Studio azul."
  }
];

export const businessTypeOptions = [
  "Barbería",
  "Clínica dental",
  "Estudio tattoo",
  "Salón / beauty",
  "Necesito web / Studio",
  "Otro"
];
