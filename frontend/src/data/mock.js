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
          description: "Se devenga cuando la demanda se interponga por una PERSONA JURÍDICA que facture MÁS DE 1.000.000 € anuales, y que además el procedimiento supere la cuantía de 2.000 euros.",
          note: "La STS de 21 de julio de 2016 derogó la vinculación de esta tasa a la cuantía del procedimiento.",
          important: "⚠️ IMPORTANTE: Las empresas que facturen menos de 1.000.000 € anuales NO pagan tasa judicial estatal.",
          reference: "Referencia legal: Artículo 4 y disposición final primera del Real Decreto-ley 1/2015, que modifican la Ley 10/2012."
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
      icon: "CreditCard",
      detailedInfo: {
        title: "Cálculo del Número de Cuenta de Consignación",
        description: "El número de cuenta para consignaciones judiciales en España tiene una estructura fija de 16 dígitos que identifica de manera única cada procedimiento judicial.",
        estructura: [
          { parte: "Código del Juzgado", digitos: 4, descripcion: "Código específico del órgano judicial", ejemplo: "0679" },
          { parte: "Ceros fijos", digitos: 4, descripcion: "Siempre son cuatro ceros", ejemplo: "0000" },
          { parte: "Código del Procedimiento", digitos: 2, descripcion: "Código del tipo de procedimiento", ejemplo: "04" },
          { parte: "Número y Año", digitos: 6, descripcion: "Número de autos + año (últimas 2 cifras)", ejemplo: "023213" }
        ],
        ejemplo: {
          completo: "0679.0000.04.0232.13",
          descripcion: "Procedimiento Ordinario en el Juzgado de lo Penal 22 de Barcelona con número de autos 232/13"
        },
        // Códigos de juzgados organizados por comunidad → población → tipo → número
        codigosJuzgados: {
          "Madrid": {
            "Madrid": {
              "Audiencia Provincial Civil": {
                "1": "2701", "2": "2702", "3": "2703", "4": "2704", "5": "2705",
                "6": "2706", "7": "2707", "8": "2708", "9": "2709", "10": "2710"
              },
              "Audiencia Provincial Penal": {
                "1": "2711", "2": "2712", "3": "2713", "4": "2714", "5": "2715",
                "6": "2716", "7": "2717", "8": "2718", "9": "2719", "10": "2720"
              },
              "Juzgado de Primera Instancia": {
                "1": "2801", "2": "2802", "3": "2803", "4": "2804", "5": "2805",
                "6": "2806", "7": "2807", "8": "2808", "9": "2809", "10": "2810",
                "11": "2811", "12": "2812", "13": "2813", "14": "2814", "15": "2815",
                "16": "2816", "17": "2817", "18": "2818", "19": "2819", "20": "2820"
              },
              "Juzgado de Instrucción": {
                "1": "2821", "2": "2822", "3": "2823", "4": "2824", "5": "2825",
                "6": "2826", "7": "2827", "8": "2828", "9": "2829", "10": "2830"
              },
              "Juzgado de lo Penal": {
                "1": "2851", "2": "2852", "3": "2853", "4": "2854", "5": "2855",
                "6": "2856", "7": "2857", "8": "2858", "9": "2859", "10": "2860",
                "11": "2861", "12": "2862", "13": "2863", "14": "2864", "15": "2865",
                "16": "2866", "17": "2867", "18": "2868", "19": "2869", "20": "2870",
                "21": "2871", "22": "2872", "23": "2873", "24": "2874", "25": "2875"
              },
              "Juzgado de lo Social": {
                "1": "2831", "2": "2832", "3": "2833", "4": "2834", "5": "2835",
                "6": "2836", "7": "2837", "8": "2838", "9": "2839", "10": "2840"
              },
              "Juzgado de lo Mercantil": {
                "1": "2881", "2": "2882", "3": "2883", "4": "2884", "5": "2885"
              },
              "Juzgado Contencioso-Administrativo": {
                "1": "2841", "2": "2842", "3": "2843", "4": "2844", "5": "2845"
              }
            }
          },
          "Cataluña": {
            "Barcelona": {
              "Audiencia Provincial Civil": {
                "1": "0501", "2": "0502", "3": "0503", "4": "0504", "5": "0505"
              },
              "Audiencia Provincial Penal": {
                "1": "0506", "2": "0507", "3": "0508", "4": "0509", "5": "0510"
              },
              "Juzgado de Primera Instancia": {
                "1": "0534", "2": "0535", "3": "0536", "4": "0537", "5": "0538",
                "6": "0539", "7": "0540", "8": "0541", "9": "0542", "10": "0543",
                "11": "0544", "12": "0545", "13": "0546", "14": "0547", "15": "0548"
              },
              "Juzgado de Instrucción": {
                "1": "0549", "2": "0550", "3": "0551", "4": "0552", "5": "0553",
                "6": "0554", "7": "0555", "8": "0556", "9": "0557", "10": "0558"
              },
              "Juzgado de lo Penal": {
                "1": "0658", "2": "0659", "3": "0660", "4": "0661", "5": "0662",
                "6": "0663", "7": "0664", "8": "0665", "9": "0666", "10": "0667",
                "11": "0668", "12": "0669", "13": "0670", "14": "0671", "15": "0672",
                "16": "0673", "17": "0674", "18": "0675", "19": "0676", "20": "0677",
                "21": "0678", "22": "0679", "23": "0680", "24": "0681", "25": "0682"
              }
            },
            "Hospitalet de Llobregat": {
              "Juzgado de Primera Instancia": {
                "1": "0701", "2": "0702", "3": "0703", "4": "0704", "5": "0705"
              },
              "Juzgado de Instrucción": {
                "1": "0706", "2": "0707", "3": "0708", "4": "0709", "5": "0710"
              }
            }
          },
          "Andalucía": {
            "Málaga": {
              "Audiencia Provincial Civil": {
                "1": "2901", "2": "2902", "3": "2903"
              },
              "Juzgado de Primera Instancia": {
                "1": "2921", "2": "2922", "3": "2923", "4": "2924", "5": "2925"
              },
              "Juzgado de lo Penal": {
                "1": "2951", "2": "2952", "3": "2953", "4": "2954", "5": "2955"
              }
            }
          }
        },
        codigosProcedimientos: [
          { codigo: "00", nombre: "Procedimiento sin determinar" },
          { codigo: "01", nombre: "Apelación (Ley 1/2000)" },
          { codigo: "02", nombre: "Juicio verbal inferior a 2.000€" },
          { codigo: "03", nombre: "Juicio verbal superior a 2.000€" },
          { codigo: "04", nombre: "Juicio ordinario" },
          { codigo: "05", nombre: "Ejecución" },
          { codigo: "06", nombre: "Ejecución de bienes hipotecados y pignorados" },
          { codigo: "07", nombre: "Juicio cambiario" },
          { codigo: "08", nombre: "Monitorio" },
          { codigo: "09", nombre: "Diligencias preliminares" },
          { codigo: "10", nombre: "Asuntos civiles indeterminados" },
          { codigo: "11", nombre: "Exhortos civiles" },
          { codigo: "12", nombre: "Apelaciones civiles" },
          { codigo: "13", nombre: "Juicios verbales" },
          { codigo: "14", nombre: "Juicios de cognición" },
          { codigo: "15", nombre: "Declarativos de menor cuantía" },
          { codigo: "16", nombre: "Declarativos de mayor cuantía" },
          { codigo: "17", nombre: "Ejecutivos" },
          { codigo: "18", nombre: "Procedimiento sumario hipotecario" },
          { codigo: "19", nombre: "Procesos del art. 41 Ley Hipotecaria" },
          { codigo: "20", nombre: "Arrendamientos urbanos ordinario" },
          { codigo: "21", nombre: "Arrendamientos urbanos especial" },
          { codigo: "22", nombre: "Desahucios" },
          { codigo: "23", nombre: "Apelaciones desahucios" },
          { codigo: "24", nombre: "Otros procedimientos L.A.U." },
          { codigo: "25", nombre: "Arrendamientos rústicos ordinario" },
          { codigo: "26", nombre: "Arrendamientos rústicos especial" },
          { codigo: "27", nombre: "Otros en materia de arrendamientos" },
          { codigo: "28", nombre: "Impugnaciones propiedad horizontal" },
          { codigo: "29", nombre: "Otros procedimientos propiedad horizontal" },
          { codigo: "30", nombre: "Medidas provisionales" },
          { codigo: "31", nombre: "Juicios de alimentos" },
          { codigo: "32", nombre: "Separaciones" },
          { codigo: "33", nombre: "Divorcios" },
          { codigo: "34", nombre: "Nulidades" },
          { codigo: "35", nombre: "Modificación de medidas judiciales" },
          { codigo: "36", nombre: "Paternidad" },
          { codigo: "37", nombre: "Menores" },
          { codigo: "38", nombre: "Registros civiles" },
          { codigo: "39", nombre: "Otros matrimonial y familia" },
          { codigo: "40", nombre: "Herederos ab intestato" },
          { codigo: "41", nombre: "Testamentaria ab intestato" },
          { codigo: "42", nombre: "Otros en sucesoria" },
          { codigo: "43", nombre: "Interdictos posesorios" },
          { codigo: "44", nombre: "Interdictos de obra nueva" },
          { codigo: "45", nombre: "Interdictos de obra ruinosa" },
          { codigo: "46", nombre: "Retractos" },
          { codigo: "47", nombre: "Apelación penal" },
          { codigo: "48", nombre: "Rollo penal" },
          { codigo: "49", nombre: "Jurisdicción voluntaria" },
          { codigo: "70", nombre: "Asuntos penales indeterminados" },
          { codigo: "71", nombre: "Diligencias penales previas" },
          { codigo: "74", nombre: "Procedimiento abreviado" },
          { codigo: "75", nombre: "Sumarios" },
          { codigo: "76", nombre: "Juicios de faltas" },
          { codigo: "77", nombre: "Apelaciones juicios de faltas" },
          { codigo: "78", nombre: "Ejecutorias penales" },
          { codigo: "79", nombre: "Exhortos penales y comisiones rogatorias" },
          { codigo: "85", nombre: "Recursos contencioso-administrativo" },
          { codigo: "91", nombre: "Medidas cautelares" },
          { codigo: "92", nombre: "Contencioso derechos fundamentales" },
          { codigo: "93", nombre: "Contencioso procedimiento ordinario" },
          { codigo: "94", nombre: "Contencioso procedimiento abreviado" },
          { codigo: "95", nombre: "Ejecuciones contenciosas" }
        ],
        cuentaBancaria: {
          iban: "ES55 0049 3569 9200 0500 1274",
          banco: "Banco Santander",
          nota: "Esta es la cuenta corriente general para todas las consignaciones judiciales en España"
        }
      }
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