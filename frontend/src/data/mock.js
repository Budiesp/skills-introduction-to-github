// Mock data for Procufy website - Simplified version
export const mockData = {
  company: {
    name: "Procufy",
    fullName: "Procufy - Procuradores",
    description: "Despacho de procuradores especializado en gestión procesal integral para letrados.",
    tagline: "Gestión procesal profesional",
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
    title: "Atención integral y personalizada para letrados y clientes",
    subtitle: "Despacho de procuradores en Barcelona y Madrid",
    description: "Tecnología avanzada y trato cercano para optimizar la gestión de sus asuntos judiciales.",
    ctaText: "Solicitar información"
  },

  services: [
    {
      id: 1,
      title: "Cálculo de tasas",
      description: "Cálculo preciso de tasas judiciales estatales y autonómicas actualizadas según normativa vigente.",
      icon: "Calculator",
      detailedInfo: {
        estatales: {
          title: "Cálculo de Tasa Estatal",
          description: "Se devenga siempre que la demanda se interponga por una PERSONA JURÍDICA, y que además el procedimiento supere la cuantía de 2.000 euros.",
          note: "La STS de 21 de julio de 2016 derogó la vinculación de esta tasa a la cuantía del procedimiento."
        },
        autonomicas: {
          title: "Cálculo de Tasa Autonómica",
          description: "La tasa judicial impuesta por la Generalitat de Catalunya se establece como obligatoria en todos los procedimientos iniciados dentro del ámbito territorial catalán.",
          formalName: "Tasa por la prestación de servicios personales y materiales en el ámbito de la Administración de justicia",
          regulation: "Regulada por el Decreto Legislativo 3/2008, de 25 de Junio, y reglamentada por la Orden JUS/303/2014, actualizada por la Ley 5/2017 de 28 de mayo.",
          exceptions: [
            "No pagan las p. jurídicas exentas de IAE conforme a la legislación tributaria",
            "No pagan las p. jurídicas exentas del Impuesto de Sociedades (incluso parcialmente)",
            "No pagan las p. jurídicas beneficiarias de justicia gratuita",
            "No paga la solicitud de declaración de concurso"
          ]
        },
        tabla: [
          { procedimiento: "Monitorio inferior a 2.000 €", estatal: "0 €", autonomica: "68,20 €" },
          { procedimiento: "Monitorio superior a 2.000 €", estatal: "90 €", autonomica: "68,20 €" },
          { procedimiento: "Verbal y cambiario inferior a 2.000 €", estatal: "0 €", autonomica: "102,30 €" },
          { procedimiento: "Verbal y cambiario superior a 2.000 €", estatal: "135 €", autonomica: "102,30 €" },
          { procedimiento: "Ordinario", estatal: "270 €", autonomica: "102,30 €" },
          { procedimiento: "Ejec. de títulos no judiciales", estatal: "190 €", autonomica: "102,30 €" },
          { procedimiento: "Oposición a ejecución", estatal: "190 €", autonomica: "0 €" },
          { procedimiento: "Segunda instancia", estatal: "0 €", autonomica: "136,40 €" }
        ]
      }
    },
    {
      id: 2,
      title: "Número de cuentas de consignación",
      description: "Cálculo del número de cuenta del Juzgado personalizado para cada procedimiento judicial.",
      icon: "CreditCard"
    }
  ],

  stats: [
    { number: "500+", label: "Expedientes" },
    { number: "15+", label: "Años experiencia" },
    { number: "6", label: "Partidos judiciales" }
  ],

  contact: {
    phone: "+34 932 000 000",
    email: "info@procufy.es", 
    address: "Barcelona y Madrid",
    partidos: [
      "Barcelona",
      "Madrid",
      "Hospitalet", 
      "Cornellá del Llobregat",
      "Sant Feliu de Llobregat",
      "Esplugues del Llobregat"
    ]
  }
};