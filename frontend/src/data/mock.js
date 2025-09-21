// Mock data for Procufy website
export const mockData = {
  company: {
    name: "Procufy",
    fullName: "Procufy - Procuradores Barcelona",
    description: "Despacho de procuradores en Barcelona, Madrid, Hospitalet, Cornellá del Llobregat, Sant Feliu de Llobregat y Esplugues del Llobregat.",
    tagline: "Especialistas en gestión procesal para letrados",
    location: "Barcelona y Madrid",
    partidos: [
      "Barcelona",
      "Madrid", 
      "Hospitalet",
      "Cornellá del Llobregat",
      "Sant Feliu de Llobregat",
      "Esplugues del Llobregat"
    ]
  },
  
  hero: {
    title: "Especialistas en gestión procesal para letrados",
    subtitle: "Barcelona y Madrid",
    description: "Nuestro despacho de procuradores se dedica a brindar una atención integral y eficaz a los letrados que confían en nosotros para la gestión de sus asuntos judiciales.",
    ctaText: "Contacta"
  },

  about: {
    title: "Procuradores expertos en Barcelona y Madrid",
    description: "Nuestro despacho de procuradores se dedica a brindar una atención integral y eficaz a los letrados que confían en nosotros para la gestión de sus asuntos judiciales. Surgimos de un proyecto con el objetivo de mantener la cercanía y el trato personalizado que caracteriza a un procurador, a pesar de la desterritorialización de la profesión. Nos enfocamos en los Partidos Judiciales de Barcelona, Madrid, Hospitalet, Cornellá del Llobregat, Sant Feliu de Llobregat y Esplugues del Llobregat.",
    features: [
      "Atención personalizada y directa",
      "Implementación de las últimas tecnologías", 
      "Gestión procesal integral",
      "Trato cercano y profesional"
    ]
  },

  stats: [
    { number: "500+", label: "Expedientes gestionados" },
    { number: "15+", label: "Años de experiencia" },
    { number: "6", label: "Partidos judiciales" },
    { number: "100%", label: "Satisfacción cliente" }
  ],

  services: [
    {
      id: 1,
      title: "Cálculo de tasas",
      description: "Cálculo de las tasas judiciales estatales (696) y de las autonómicas en Cataluña. Actualizado a 2025.",
      icon: "Calculator",
      link: "/calculo-tasas"
    },
    {
      id: 2,
      title: "Gestión procesal integral",
      description: "Representación completa en todos los procedimientos judiciales con seguimiento personalizado del expediente.",
      icon: "Scale",
      link: "/gestion-procesal"
    },
    {
      id: 3,
      title: "Notificaciones judiciales",
      description: "Gestión eficaz de todas las notificaciones y comunicaciones con los órganos judiciales.",
      icon: "FileText",
      link: "/notificaciones"
    },
    {
      id: 4,
      title: "Tramitación de expedientes",
      description: "Preparación y presentación de escritos según las indicaciones del letrado en todo momento.",
      icon: "Folder",
      link: "/tramitacion"
    },
    {
      id: 5,
      title: "Cálculo cuenta consignaciones",
      description: "Cálculo del número de cuenta del Juzgado personalizado para cada procedimiento.",
      icon: "CreditCard",
      link: "/consignaciones"
    },
    {
      id: 6,
      title: "Asesoramiento procesal",
      description: "Orientación especializada en procedimientos civiles, mercantiles, penales y contencioso-administrativos.",
      icon: "Users",
      link: "/asesoramiento"
    }
  ],

  blogPosts: [
    {
      id: 1,
      title: "Nuevas normativas procesales 2025 - Actualización importante",
      excerpt: "Principales cambios en la Ley de Enjuiciamiento Civil que afectan a la práctica procesal diaria.",
      date: "15/03/2025",
      category: "Normativas",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop",
      link: "/blog/normativas-procesales-2025"
    },
    {
      id: 2,
      title: "Digitalización de los procedimientos judiciales en Barcelona",
      excerpt: "Cómo la transformación digital está mejorando la eficiencia en los juzgados barceloneses.",
      date: "10/03/2025", 
      category: "Tecnología",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=250&fit=crop",
      link: "/blog/digitalizacion-procedimientos"
    },
    {
      id: 3,
      title: "Guía completa sobre tasas judiciales actualizadas",
      excerpt: "Todas las tasas judiciales vigentes y cómo calcularlas correctamente para evitar retrasos.",
      date: "05/03/2025",
      category: "Guías prácticas", 
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      link: "/blog/tasas-judiciales-actualizadas"
    }
  ],

  team: [
    {
      name: "María García Ruiz",
      position: "Procuradora - Colegiada nº 1234",
      experience: "15 años de experiencia",
      specialties: ["Derecho Civil", "Derecho Mercantil", "Familia"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
      description: "Especialista en procedimientos civiles y mercantiles con amplia experiencia en los juzgados de Barcelona."
    }
  ],

  contact: {
    phone: "+34 932 000 000",
    email: "info@procufy.es", 
    address: "Carrer de Balmes, 123, 08008 Barcelona",
    hours: "Lunes a Viernes: 9:00 - 18:00",
    partidos: [
      "Barcelona",
      "Madrid",
      "Hospitalet", 
      "Cornellá del Llobregat",
      "Sant Feliu de Llobregat",
      "Esplugues del Llobregat"
    ]
  },

  testimonials: [
    {
      id: 1,
      name: "Carlos Mendoza",
      position: "Abogado - Despacho Mendoza & Asociados",
      content: "Excelente servicio y atención personalizada. La gestión de nuestros expedientes es impecable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Ana Martínez",
      position: "Letrada especialista en Familia",
      content: "Profesionalidad y eficiencia en cada procedimiento. Recomiendo Procufy sin dudarlo.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Javier López",
      position: "Abogado Mercantilista",
      content: "La tecnología que utilizan facilita mucho el seguimiento de los casos. Muy recomendable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    }
  ]
};