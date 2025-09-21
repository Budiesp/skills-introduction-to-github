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
        // Códigos de juzgados organizados por comunidad → población → tipo → número - DATOS REALES OFICIALES COMPLETOS
        codigosJuzgados: {
          "País Vasco": {
            "Amurrio": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0001", "2": "0003"
              },
              "Servicio Común General": {
                "1": "5259"
              }
            },
            "Vitoria-Gasteiz": {
              "Audiencia Provincial": {
                "1": "0008", "2": "0071"
              },
              "Juzgado de Primera Instancia": {
                "1": "0009", "2": "0010", "3": "0011", "4": "0012", 
                "5": "0004", "6": "0072", "7": "0844", "8": "4300"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "0026", "2": "0074", "3": "3837"
              },
              "Juzgado de Instrucción": {
                "1": "0013", "2": "0014", "3": "0015", "4": "0016"
              },
              "Juzgado de Menores": {
                "1": "0022"
              },
              "Juzgado de lo Penal": {
                "1": "0023", "2": "0024"
              },
              "Juzgado de lo Social": {
                "1": "0017", "2": "0018", "3": "0078", "4": "4886"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "2495"
              }
            }
          },
          "Castilla-La Mancha": {
            "Albacete": {
              "Audiencia Provincial": {
                "1": "0031", "2": "0042"
              },
              "Tribunal Superior de Justicia Sala Civil-Penal": {
                "1": "0043"
              },
              "Tribunal Superior de Justicia Sala Contencioso-Administrativo": {
                "1": "0045", "2": "0067"
              },
              "Tribunal Superior de Justicia Sala Social": {
                "1": "0044"
              },
              "Juzgado de Primera Instancia": {
                "1": "0032", "2": "0033", "3": "0041", "4": "0040", 
                "5": "0884", "6": "3220", "7": "5045", "8": "5343"
              },
              "Juzgado de Primera Instancia BIS": {
                "3": "5300"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "0073", "2": "1042"
              },
              "Juzgado de Instrucción": {
                "1": "0034", "2": "0053", "3": "0057"
              },
              "Juzgado de Menores": {
                "1": "0049"
              },
              "Juzgado de lo Penal": {
                "1": "0046", "2": "0047", "3": "3992"
              },
              "Juzgado de lo Social": {
                "1": "0038", "2": "0039", "3": "0048"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "3516"
              }
            },
            "Alcaraz": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0050"
              }
            },
            "Almansa": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0054", "2": "0056"
              }
            },
            "Casas Ibáñez": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0058"
              }
            },
            "Hellín": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0060", "2": "0062", "3": "4862"
              }
            },
            "La Roda": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0064"
              }
            },
            "Villarrobledo": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0068", "2": "2919"
              }
            }
          },
          "Comunidad Valenciana": {
            "Alcoy": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0087", "2": "0088", "3": "0091", "4": "2725"
              }
            },
            "Alicante": {
              "Audiencia Provincial": {
                "1": "0094", "2": "0095", "3": "0096", "4": "0188", 
                "5": "0190", "6": "0264", "7": "0317", "8": "2276", 
                "9": "3575", "10": "5038"
              },
              "Juzgado de Primera Instancia": {
                "1": "0097", "2": "0098", "3": "0099", "4": "0100", 
                "5": "0118", "6": "0102", "7": "0213", "8": "0214", 
                "9": "0219", "10": "0705", "11": "2175", "12": "3793", "13": "5373"
              },
              "Juzgado de Primera Instancia BIS": {
                "5": "5295"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "0271", "2": "0127", "3": "0313", "4": "4611"
              },
              "Juzgado de Instrucción": {
                "1": "0108", "2": "0105", "3": "0119", "4": "0120", 
                "5": "0121", "6": "0216", "7": "0217", "8": "1752", "9": "0314"
              },
              "Juzgado de Menores": {
                "1": "1048", "2": "0334", "3": "2685"
              },
              "Juzgado Mercantil": {
                "1": "2275", "2": "2732"
              },
              "Juzgado de lo Penal": {
                "1": "0110", "2": "0201", "3": "0202", "4": "0203", 
                "5": "0204", "6": "0205", "7": "0260", "8": "4679", "9": "5353"
              },
              "Juzgado de lo Social": {
                "1": "0111", "2": "0112", "3": "0113", "4": "0114", 
                "5": "0115", "6": "0116", "7": "0122"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "2679", "2": "3429"
              }
            },
            "Benidorm": {
              "Juzgado de Primera Instancia": {
                "1": "0132", "2": "0138", "3": "0149", "4": "0703", "5": "5344"
              },
              "Juzgado de Instrucción": {
                "1": "0133", "2": "0134", "3": "0139", "4": "0147"
              },
              "Juzgado de lo Penal": {
                "1": "0309", "2": "0852", "3": "4143"
              },
              "Juzgado de lo Social": {
                "1": "0308"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "3730"
              }
            }
          },
          "Andalucía": {
            "Almería": {
              "Audiencia Provincial": {
                "1": "0222", "2": "0254", "3": "0711"
              },
              "Juzgado de Primera Instancia": {
                "1": "0223", "2": "0224", "3": "0233", "4": "0235", 
                "5": "0241", "6": "0400", "7": "5096", "8": "4963", "9": "5363"
              },
              "Juzgado de Primera Instancia BIS": {
                "7": "5286"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "0277", "2": "0279", "3": "4435", "4": "5354"
              },
              "Juzgado de Instrucción": {
                "1": "0225", "2": "0226", "3": "0234", "4": "0247", "5": "2101", "6": "2393"
              },
              "Juzgado de Menores": {
                "1": "0239"
              },
              "Juzgado Mercantil": {
                "1": "2231"
              },
              "Juzgado de lo Penal": {
                "1": "0236", "2": "0237", "3": "0256", "4": "3506", "5": "4383"
              },
              "Juzgado de lo Social": {
                "1": "0231", "2": "0232", "3": "0238", "4": "2926"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "3721"
              },
              "Juzgado Togado Militar Territorial": {
                "23": "1887"
              }
            },
            "Berja": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0242", "2": "0243"
              }
            },
            "El Ejido": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0250", "2": "0240", "3": "0275", "4": "0698", "5": "2751", "6": "5357"
              },
              "Servicio Común General": {
                "1": "5358"
              }
            },
            "Huércal-Overa": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0251", "2": "0253", "3": "4357"
              }
            },
            "Purchena": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0255"
              }
            },
            "Roquetas de Mar": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0257", "2": "0258", "3": "0274", "4": "3577", "5": "4340", "6": "5349"
              }
            },
            "Vélez-Rubio": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0259"
              }
            },
            "Vera": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0261", "2": "0263", "3": "3533", "4": "5350"
              }
            }
          },
          "Asturias": {
            "Avilés": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "3262", "2": "3263", "3": "3268", "4": "3266", "5": "3267", "6": "2813", "7": "4286"
              },
              "Juzgado de lo Penal": {
                "1": "3318", "2": "4755"
              },
              "Juzgado de lo Social": {
                "1": "3269", "2": "3320"
              }
            },
            "Cangas del Narcea": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "3274"
              }
            },
            "Cangas de Onís": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "3278"
              }
            },
            "Castropol": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "3282"
              }
            },
            "Gijón": {
              "Audiencia Provincial Sede Desplazada": {
                "7": "3380", "8": "0923"
              },
              "Juzgado de Primera Instancia": {
                "1": "3284", "2": "3285", "3": "3286", "4": "3287", "5": "3297", 
                "6": "3298", "7": "3314", "8": "2105", "9": "3275", "10": "3209", 
                "11": "3675", "12": "5411"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "0021"
              },
              "Juzgado de Instrucción": {
                "1": "3288", "2": "3301", "3": "3299", "4": "3300", "5": "4391"
              },
              "Juzgado Mercantil Sede Desplazada": {
                "3": "5039"
              },
              "Juzgado de lo Penal": {
                "1": "3290", "2": "3302", "3": "1693"
              },
              "Juzgado de lo Social": {
                "1": "3294", "2": "3295", "3": "3296", "4": "2768"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "5099"
              }
            },
            "Grado": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "3315", "2": "3317"
              }
            },
            "Infiesto": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "3379"
              }
            },
            "Langreo": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "3319", "2": "3309", "3": "3270"
              },
              "Juzgado de lo Penal": {
                "1": "3405"
              }
            },
            "Llanes": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "3333"
              }
            },
            "Luarca": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "3329"
              }
            },
            "Mieres": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "3337", "2": "3340", "3": "1643"
              },
              "Juzgado de lo Social": {
                "1": "3339"
              }
            },
            "Oviedo": {
              "Audiencia Provincial": {
                "1": "3347", "2": "3368", "3": "3369", "4": "3370", "5": "3310", "6": "3311"
              },
              "Juzgado de Primera Instancia": {
                "1": "3348", "2": "3350", "3": "3351", "4": "3352", "5": "3362", 
                "6": "3277", "7": "0930", "8": "3271", "9": "3839", "10": "4392", "11": "4848"
              }
            }
          },
          "Cataluña": {
            "Arenys de Mar": {
              "Juzgado de lo Penal": {
                "2": "0682"
              }
            },
            "Badalona": {
              "Juzgado de Primera Instancia": {
                "1": "0517", "2": "0518", "3": "0519", "4": "0523", 
                "5": "0528", "6": "0529", "7": "4593", "8": "5369"
              },
              "Juzgado de Instrucción": {
                "1": "0527", "2": "0524", "3": "0525", "4": "0526", "5": "5055"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "3854"
              }
            },
            "Barcelona": {
              "Audiencia Provincial": {
                "1": "0647", "2": "0648", "3": "0649", "4": "0650", "5": "0651", 
                "6": "0652", "7": "0653", "8": "0654", "9": "0655", "10": "0656", 
                "11": "0657", "12": "0658", "13": "0659", "14": "0660", "15": "0661", 
                "16": "0662", "17": "0967", "18": "0970", "19": "0307", "20": "2911", 
                "21": "3736", "22": "4978"
              },
              "Juzgado de Primera Instancia": {
                "1": "0534", "2": "0535", "3": "0536", "4": "0537", "5": "0538", 
                "6": "0539", "7": "0540", "8": "0541", "9": "0542", "10": "0543", 
                "11": "0544", "12": "0545", "13": "0546", "14": "0547", "15": "0548", 
                "16": "0549", "17": "0550", "18": "0551", "19": "0552", "20": "0553", 
                "21": "0554", "22": "0555", "23": "0556", "24": "0612", "25": "0613", 
                "26": "0614", "27": "0615", "28": "0616", "29": "0617", "30": "0618", 
                "31": "0619", "32": "0620", "33": "0621", "34": "0622", "35": "0624", 
                "36": "0626", "37": "0627", "38": "0628", "39": "0629", "40": "0686", 
                "41": "0687", "42": "0688", "43": "0689", "44": "0690", "45": "0945", 
                "46": "0946", "47": "0947", "48": "0948", "49": "0949", "50": "0951", 
                "51": "0973", "52": "0974", "53": "0975", "54": "0976", "55": "0977", 
                "56": "0988", "57": "0989", "58": "0991", "59": "5371"
              },
              "Juzgado de Primera Instancia BIS": {
                "50": "5296"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "0897", "2": "0898", "3": "0904", "4": "0905", "5": "0906", 
                "6": "0909", "7": "0996", "8": "0997", "9": "0910", "10": "0994", 
                "11": "0995", "12": "0911", "13": "0907", "14": "0908", "15": "3970", 
                "16": "3946", "17": "4063"
              },
              "Juzgado de Instrucción": {
                "1": "0557", "2": "0558", "3": "0559", "4": "0560", "5": "0561", 
                "6": "0562", "7": "0563", "8": "0564", "9": "0565", "10": "0566", 
                "11": "0567", "12": "0568", "13": "0569", "14": "0570", "15": "0571", 
                "16": "0572", "17": "0573", "18": "0574", "19": "0630", "20": "0631", 
                "21": "0632", "22": "0633", "23": "0635", "24": "0636", "25": "0637", 
                "26": "0638", "27": "0639", "28": "0640", "29": "0641", "30": "0642", 
                "31": "0691", "32": "0692", "33": "0693"
              },
              "Juzgado de Menores": {
                "1": "0645", "2": "0646", "3": "0933", "4": "1108", "5": "1157", "6": "2174"
              },
              "Juzgado Mercantil": {
                "1": "2238", "2": "2240", "3": "2237", "4": "2239", "5": "3410", 
                "6": "0990", "7": "4342", "8": "4171", "9": "5080", "10": "5133", "11": "5381"
              },
              "Juzgado de lo Penal": {
                "1": "0575", "2": "0576", "3": "0577", "4": "0578", "5": "0579", 
                "6": "0580", "7": "0581", "8": "0667", "9": "0668", "10": "0582", 
                "11": "0583", "13": "0670", "16": "0673", "17": "0674", "18": "0675", 
                "19": "0676", "20": "0677", "22": "0679", "23": "0953", "25": "4604", 
                "26": "4786", "27": "4685", "28": "5074"
              },
              "Juzgado de lo Social": {
                "1": "5201", "2": "5202", "3": "5203", "4": "5204", "5": "0588", 
                "6": "5206", "7": "5207", "8": "0591", "9": "5209", "10": "5210", 
                "11": "5211", "12": "5212", "13": "5213", "14": "5214", "15": "5215", 
                "16": "0599", "17": "0600", "18": "5218", "19": "0602", "20": "0603", 
                "21": "0604", "22": "0605", "23": "0606", "24": "0607", "25": "0608", 
                "26": "5226", "27": "5227", "28": "5228", "29": "0305", "30": "0913", 
                "31": "1008", "32": "1009", "33": "5233"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "2401", "2": "2489", "3": "2697", "4": "3713", "5": "4845"
              },
              "Juzgado Ejecutoria Penal": {
                "12": "0669", "14": "0671", "15": "0672", "21": "0678", "24": "1207"
              },
              "Juzgado Togado Militar Territorial": {
                "31": "1973"
              },
              "Tribunal Superior de Justicia Sala Civil-Penal": {
                "1": "0942"
              },
              "Tribunal Superior de Justicia Sala Contencioso-Administrativo": {
                "1": "0533", "2": "0663", "3": "0664", "4": "0939", "5": "0940"
              },
              "Tribunal Superior de Justicia Sala Social": {
                "1": "0937", "2": "0965", "3": "4676"
              },
              "Tribunal Militar Territorial": {
                "3": "1964"
              }
            },
            "Berga": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0712"
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