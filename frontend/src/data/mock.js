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
            },
            "Balmaseda": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "4780", "2": "3573"
              },
              "Servicio Común General": {
                "1": "5262"
              }
            },
            "Barakaldo": {
              "Juzgado de Primera Instancia": {
                "1": "4680", "2": "4686", "3": "4683", "4": "4690", "5": "4795", "6": "3532"
              },
              "Juzgado de Instrucción": {
                "1": "4681", "2": "4682", "3": "4687", "4": "4691"
              },
              "Juzgado de lo Penal": {
                "1": "4807", "2": "4808"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "3": "4144"
              }
            },
            "Bilbao": {
              "Audiencia Provincial": {
                "1": "4701", "2": "4702", "3": "4703", "4": "4704", "5": "4738", "6": "4822"
              },
              "Juzgado de Primera Instancia": {
                "1": "4705", "2": "4706", "3": "4707", "4": "4708", "5": "4709", "6": "4710", "7": "4748", "8": "4749", "9": "4750", "10": "4724", "11": "4725", "12": "4726", "13": "4751", "14": "4809", "15": "5374"
              },
              "Juzgado de Primera Instancia BIS": {
                "11": "5316"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "4765", "2": "4771", "3": "4759", "4": "4772", "5": "3917", "6": "5105"
              },
              "Juzgado de Instrucción": {
                "1": "4711", "2": "4712", "3": "4713", "4": "4714", "5": "4715", "6": "4716", "7": "4727", "8": "4728", "9": "4729", "10": "4730"
              },
              "Juzgado de Menores": {
                "1": "4731", "2": "1756"
              },
              "Juzgado Decano Exclusivo": {
                "1": "4695"
              },
              "Juzgado Ejecutoria Penal": {
                "7": "4868"
              },
              "Juzgado Mercantil": {
                "1": "2195", "2": "2755"
              },
              "Juzgado de lo Penal": {
                "1": "4732", "2": "4733", "3": "4734", "4": "4735", "5": "4736", "6": "4737"
              },
              "Juzgado de lo Social": {
                "1": "4717", "2": "4718", "3": "4719", "4": "4720", "5": "4721", "6": "4722", "7": "4776", "8": "4778", "9": "4783", "10": "2709", "11": "5356"
              },
              "Juzgado de Vigilancia Penitenciaria": {
                "1": "4788"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "2520", "2": "3623"
              },
              "Sección Menores Fiscalía Tribunal Superior Justicia": {
                "1": "1047"
              },
              "Tribunal Superior de Justicia Sala Civil-Penal": {
                "1": "4696"
              },
              "Tribunal Superior de Justicia Sala Contencioso-Administrativo": {
                "1": "4697"
              },
              "Tribunal Superior de Justicia Sala Social": {
                "1": "4699"
              }
            },
            "Durango": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "4760", "2": "4762", "3": "4688", "4": "4850"
              },
              "Servicio Común General": {
                "1": "5260"
              }
            },
            "Gernika-Lumo": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "4768", "2": "4769", "3": "4745", "4": "4863"
              },
              "Servicio Común General": {
                "1": "5261"
              }
            },
            "Getxo": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "4766", "2": "4767", "3": "4790", "4": "4791", "5": "4818", "6": "0701"
              },
              "Servicio Común General": {
                "1": "5044"
              }
            },
            "Azpeitia": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1830", "2": "1832"
              },
              "Servicio Común General": {
                "1": "5257"
              }
            },
            "Bergara": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1872", "2": "1873", "3": "1876", "4": "1877"
              },
              "Servicio Común General": {
                "1": "5258"
              }
            },
            "Donostia-San Sebastián": {
              "Audiencia Provincial": {
                "1": "1844", "2": "1858", "3": "1895"
              },
              "Juzgado de Primera Instancia": {
                "1": "1845", "2": "1846", "3": "1847", "4": "1855", "5": "1833", "6": "1892", "7": "0699", "8": "2812"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "1885", "2": "1886", "3": "3834"
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
          "Burgos": {
            "Aranda de Duero": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1050", "2": "1052"
              }
            },
            "Briviesca": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1056"
              }
            },
            "Burgos": {
              "Audiencia Provincial": {
                "1": "1078", "2": "1079", "3": "1080"
              },
              "Juzgado de Primera Instancia": {
                "1": "1064", "2": "1083", "3": "0855", "4": "4673", "5": "1074", "6": "1075", "7": "3731", "8": "5324"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "1088", "2": "3035"
              },
              "Juzgado de Instrucción": {
                "1": "1076", "2": "1065", "3": "1066", "4": "1082"
              },
              "Juzgado de Menores": {
                "1": "1077"
              },
              "Juzgado Mercantil": {
                "1": "1067"
              },
              "Juzgado de lo Penal": {
                "1": "1081", "2": "1086", "3": "2776"
              },
              "Juzgado de lo Social": {
                "1": "1072", "2": "1073", "3": "1717"
              },
              "Juzgado Togado Militar Territorial": {
                "43": "1055"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "4825"
              },
              "Sección Menores Fiscalía Tribunal Superior Justicia": {
                "1": "1489"
              },
              "Servicio Común General": {
                "1": "1110"
              },
              "Tribunal Superior de Justicia Sala Civil-Penal": {
                "1": "1060"
              },
              "Tribunal Superior de Justicia Sala Contencioso-Administrativo": {
                "1": "1061", "2": "1105"
              },
              "Tribunal Superior de Justicia Sala Social": {
                "1": "1062"
              }
            },
            "Lerma": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1089"
              }
            },
            "Miranda de Ebro": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1093", "2": "1095"
              }
            },
            "Salas de los Infantes": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1097"
              }
            },
            "Villarcayo de Merindad de Castilla la Vieja": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1102", "2": "1059"
              }
            }
          },
          "Cáceres": {
            "Cáceres": {
              "Audiencia Provincial": {
                "1": "1133", "2": "1152"
              },
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1134", "2": "1135", "3": "1136", "4": "1140", "5": "1141", "6": "1829", "7": "4226"
              },
              "Juzgado de Primera Instancia e Instrucción BIS": {
                "5": "5310"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "1187", "2": "2737"
              },
              "Juzgado de Menores": {
                "1": "1147"
              },
              "Juzgado de lo Penal": {
                "1": "1139", "2": "4847"
              },
              "Juzgado de lo Social": {
                "1": "1144", "2": "1143"
              },
              "Sección Menores Fiscalía Audiencia Provincial": {
                "1": "3330"
              },
              "Servicio Común General": {
                "1": "5164"
              },
              "Tribunal Superior de Justicia Sala Civil-Penal": {
                "1": "1154"
              },
              "Tribunal Superior de Justicia Sala Contencioso-Administrativo": {
                "1": "1156"
              },
              "Tribunal Superior de Justicia Sala Social": {
                "1": "1131"
              }
            },
            "Coria": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1149", "2": "1151"
              }
            },
            "Logrosán": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1161"
              }
            },
            "Navalmoral de la Mata": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1165", "2": "1167", "3": "5379"
              }
            },
            "Plasencia": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1169", "2": "1172", "3": "1173", "4": "1175"
              },
              "Juzgado Decano": {
                "1": "1164"
              },
              "Juzgado de lo Penal": {
                "1": "1145"
              },
              "Juzgado de lo Social": {
                "3": "3142"
              }
            },
            "Trujillo": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1179", "2": "1181"
              }
            },
            "Valencia de Alcántara": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1183"
              }
            }
          },
          "Cádiz": {
            "Algeciras": {
              "Audiencia Provincial": {
                "7": "1391"
              },
              "Juzgado de Primera Instancia": {
                "1": "1200", "2": "1201", "3": "1208", "4": "1213", "5": "5400"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "0430", "2": "4983"
              },
              "Juzgado de Instrucción": {
                "1": "1202", "2": "1209", "3": "2094", "4": "2382"
              },
              "Juzgado de Menores": {
                "2": "1114"
              },
              "Juzgado Decano": {
                "1": "8071"
              },
              "Juzgado de lo Penal": {
                "1": "1203", "2": "1211", "3": "1212", "4": "3458"
              },
              "Juzgado de lo Social": {
                "1": "1288", "2": "5404"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "3665"
              },
              "Sección Menores Fiscalía Audiencia Provincial": {
                "1": "0891"
              }
            },
            "Arcos de la Frontera": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1215", "2": "1217", "3": "1218"
              }
            },
            "Barbate": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1219", "2": "1598"
              }
            },
            "Cádiz": {
              "Audiencia Provincial": {
                "1": "1221", "2": "1222", "3": "1223", "4": "1224", "5": "1280"
              },
              "Juzgado de Primera Instancia": {
                "1": "1225", "2": "1236", "3": "1227", "4": "1220", "5": "1235"
              },
              "Juzgado de Primera Instancia BIS": {
                "2": "5287"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "1319", "2": "1263", "3": "1317", "4": "4655"
              },
              "Juzgado de Instrucción": {
                "1": "1237", "2": "1226", "3": "1262", "4": "1232"
              },
              "Juzgado de Menores": {
                "1": "1238"
              },
              "Juzgado Mercantil": {
                "1": "2235"
              },
              "Juzgado de lo Penal": {
                "1": "1239", "2": "1240", "3": "1241", "4": "1588", "5": "2735"
              },
              "Juzgado de lo Social": {
                "1": "1233", "2": "1234", "3": "1282"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "4349"
              },
              "Sección Menores Fiscalía Audiencia Provincial": {
                "1": "1138"
              }
            },
            "Chiclana de la Frontera": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1245", "2": "1247", "3": "1244", "4": "1881", "5": "4972"
              }
            },
            "El Puerto de Santa María": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1272", "2": "1273", "3": "1276", "4": "1305", "5": "3563"
              }
            },
            "Jerez de la Frontera": {
              "Audiencia Provincial": {
                "8": "1465"
              },
              "Juzgado de Primera Instancia": {
                "1": "1259", "2": "1250", "3": "1242", "4": "1257", "5": "1258", "6": "4968", "7": "5401"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "0128"
              },
              "Juzgado de Instrucción": {
                "1": "1249", "2": "2070", "3": "1251", "4": "3292", "5": "4787"
              },
              "Juzgado de Menores": {
                "3": "2723"
              },
              "Juzgado de lo Penal": {
                "1": "1260", "2": "1261", "3": "1295"
              },
              "Juzgado de lo Social": {
                "1": "1255", "2": "1256", "3": "4427"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "4062"
              },
              "Sección Menores Fiscalía Audiencia Provincial": {
                "1": "3079"
              }
            },
            "La Línea de la Concepción": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1266", "2": "1265", "3": "1267", "4": "4980"
              }
            },
            "Puerto Real": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1279", "2": "1302"
              }
            },
            "Rota": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1281", "2": "1269"
              },
              "Juzgado Decano": {
                "1": "8329"
              }
            },
            "San Fernando": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1283", "2": "1284", "3": "1287"
              },
              "Juzgado Togado Militar Territorial": {
                "22": "2035"
              }
            },
            "San Roque": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1297", "2": "1298"
              }
            },
            "Sanlúcar de Barrameda": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1292", "2": "1291", "3": "1294", "4": "2321"
              }
            },
            "Ubrique": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1306"
              }
            }
          },
          "Cantabria": {
            "Castro-Urdiales": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "3896", "2": "1662", "3": "4770"
              }
            },
            "Laredo": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "3842", "2": "3844"
              },
              "Juzgado Decano": {
                "1": "3994"
              }
            },
            "Reinosa": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "3852"
              }
            },
            "San Vicente de la Barquera": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "3883"
              }
            },
            "Santander": {
              "Audiencia Provincial": {
                "1": "3856", "2": "3871", "3": "3882", "4": "3907"
              },
              "Juzgado de Primera Instancia": {
                "1": "3857", "2": "3858", "3": "3859", "4": "3860", "5": "3861", "6": "3869", "7": "3899", "8": "3900", "9": "2107", "10": "5072", "11": "3727"
              },
              "Juzgado de Primera Instancia BIS": {
                "2": "5312"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "3851", "2": "3904", "3": "3903"
              },
              "Juzgado de Instrucción": {
                "1": "3870", "2": "3877", "3": "3847", "4": "3849", "5": "4279"
              },
              "Juzgado de Menores": {
                "1": "3895"
              },
              "Juzgado Decano": {
                "1": "3891"
              },
              "Juzgado Mercantil": {
                "1": "2258"
              },
              "Juzgado de lo Penal": {
                "1": "3893", "2": "3894", "3": "3886", "4": "2761", "5": "4991"
              },
              "Juzgado de lo Penal BIS": {
                "2": "3717"
              },
              "Juzgado de lo Social": {
                "1": "3867", "2": "3868", "3": "3876", "4": "3855", "5": "2778", "6": "5071"
              },
              "Juzgado de Vigilancia Penitenciaria": {
                "1": "5200"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "3455"
              },
              "Sección Menores Fiscalía Tribunal Superior Justicia": {
                "1": "0020"
              },
              "Tribunal Superior de Justicia Sala Civil-Penal": {
                "1": "3873"
              },
              "Tribunal Superior de Justicia Sala Contencioso-Administrativo": {
                "1": "3875"
              },
              "Tribunal Superior de Justicia Sala Social": {
                "1": "3874"
              }
            },
            "Santoña": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "3879", "2": "3897"
              }
            },
            "Solares": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "3846", "2": "3878"
              }
            },
            "Torrelavega": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "3887", "2": "3888", "3": "3889", "4": "3890", "5": "3908", "6": "2729", "7": "5256"
              }
            }
          },
          "Ceuta": {
            "Ceuta": {
              "Audiencia Provincial": {
                "6": "1307"
              },
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1308", "2": "1309", "3": "1313", "4": "1271", "5": "2250", "6": "2907"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "1277", "2": "4388"
              },
              "Juzgado de Menores": {
                "1": "1314"
              },
              "Juzgado de lo Penal": {
                "1": "1315", "2": "1296"
              },
              "Juzgado de lo Social": {
                "1": "1312"
              },
              "Juzgado Togado Militar Territorial": {
                "25": "1347"
              },
              "Sección Menores Fiscalía Audiencia Provincial": {
                "1": "0935"
              },
              "Servicio Común General": {
                "1": "5245"
              }
            }
          },
          "Ciudad Real": {
            "Alcázar de San Juan": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1360", "2": "1362", "3": "4596"
              }
            },
            "Almadén": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1364"
              }
            },
            "Almagro": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1366"
              }
            },
            "Ciudad Real": {
              "Audiencia Provincial": {
                "1": "1376", "2": "1373"
              },
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1377", "2": "1378", "3": "1383", "4": "1385", "5": "1825", "6": "2860", "7": "5145"
              },
              "Juzgado de Primera Instancia e Instrucción BIS": {
                "4": "5307"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "1363", "2": "5138"
              },
              "Juzgado de Menores": {
                "1": "1367"
              },
              "Juzgado de lo Penal": {
                "1": "1415", "2": "1416", "3": "1403"
              },
              "Juzgado de lo Social": {
                "1": "1381", "2": "1382", "3": "1405"
              },
              "Sección Menores Fiscalía Audiencia Provincial": {
                "1": "2072"
              },
              "Servicio Común General": {
                "1": "5165"
              }
            },
            "Daimiel": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1386", "2": "4282"
              }
            },
            "Manzanares": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1392", "2": "1394"
              }
            },
            "Puertollano": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1398", "2": "1399", "3": "1400"
              }
            },
            "Tomelloso": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1408", "2": "1409", "3": "3145"
              }
            },
            "Valdepeñas": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1410", "2": "1412"
              }
            },
            "Villanueva de los Infantes": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1413"
              }
            }
          },
          "Córdoba": {
            "Aguilar de la Frontera": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1420"
              }
            },
            "Baena": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1424"
              }
            },
            "Cabra": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1430", "2": "1432"
              }
            },
            "Córdoba": {
              "Audiencia Provincial": {
                "1": "1434", "2": "1435", "3": "1423"
              },
              "Fiscalía Diligencias Investigación Audiencia Provincial": {
                "1": "3417"
              },
              "Juzgado de Primera Instancia": {
                "1": "1436", "2": "1437", "3": "1438", "4": "1439", "5": "1447", "6": "1427", "7": "1429", "8": "1433", "9": "5150", "10": "4423", "11": "5340"
              },
              "Juzgado de Primera Instancia BIS": {
                "9": "5288"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "1457", "2": "1463", "3": "1714", "4": "2818", "5": "4607"
              },
              "Juzgado de Instrucción": {
                "1": "1440", "2": "1441", "3": "1442", "4": "1448", "5": "1449", "6": "1450", "7": "1451", "8": "5184"
              },
              "Juzgado de Menores": {
                "1": "1453"
              },
              "Juzgado Decano": {
                "1": "3692"
              },
              "Juzgado Mercantil": {
                "1": "2259"
              },
              "Juzgado de lo Penal": {
                "1": "1443", "2": "1454", "3": "1455", "4": "1452", "5": "4295", "6": "4994"
              },
              "Juzgado de lo Social": {
                "1": "1444", "2": "1445", "3": "1446", "4": "1711"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "3406"
              },
              "Sección Menores Fiscalía Audiencia Provincial": {
                "1": "1111"
              }
            },
            "Lucena": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1466", "2": "1468", "3": "1828"
              }
            },
            "Montilla": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1470", "2": "1472"
              }
            },
            "Montoro": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1474", "2": "1475"
              }
            },
            "Peñarroya-Pueblonuevo": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1478", "2": "1480"
              }
            },
            "Posadas": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1482", "2": "1459", "3": "4955"
              }
            },
            "Pozoblanco": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1486", "2": "1488"
              }
            },
            "Priego de Córdoba": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1490"
              }
            },
            "Puente Genil": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1494", "2": "2921"
              }
            }
          },
          "A Coruña": {
            "Arzúa": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1510"
              }
            },
            "Betanzos": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1512", "2": "1514", "3": "1511", "4": "5114"
              }
            },
            "Carballo": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1516", "2": "1518", "3": "3674"
              },
              "Juzgado Decano": {
                "1": "8101"
              }
            },
            "Corcubión": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1520", "2": "1522"
              }
            },
            "A Coruña": {
              "Audiencia Provincial": {
                "1": "1542", "2": "1543", "3": "1524", "4": "1541", "5": "1605", "6": "1505"
              },
              "Juzgado de Primera Instancia": {
                "1": "1525", "2": "1526", "3": "1527", "4": "1536", "5": "1537", "6": "1519", "7": "1523", "8": "1606", "9": "1607", "10": "1641", "11": "2814", "12": "4280", "13": "5095", "14": "5421"
              },
              "Juzgado de Primera Instancia BIS": {
                "7": "5285"
              },
              "Juzgado de Primera Instancia Refuerzo": {
                "1": "5243"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "1599", "2": "1600", "3": "1623", "4": "1624"
              },
              "Juzgado de Instrucción": {
                "1": "1528", "2": "1529", "3": "1530", "4": "1538", "5": "1539", "6": "1540", "7": "3792", "8": "5116"
              },
              "Juzgado de Menores": {
                "1": "1594"
              },
              "Juzgado Decano": {
                "1": "3990"
              },
              "Juzgado Mercantil": {
                "1": "2225", "2": "4656"
              },
              "Juzgado de lo Penal": {
                "1": "1544", "2": "1548", "3": "1549", "4": "1035", "5": "1708", "6": "2722"
              },
              "Juzgado de lo Social": {
                "1": "1531", "2": "1532", "3": "1533", "4": "1534", "5": "4757", "6": "5338"
              },
              "Juzgado Togado Militar Territorial": {
                "41": "1568"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "3722"
              },
              "Sección Menores Fiscalía Tribunal Superior Justicia": {
                "1": "1499"
              },
              "Tribunal Superior de Justicia Sala Civil-Penal": {
                "1": "1546"
              },
              "Tribunal Superior de Justicia Sala Contencioso-Administrativo": {
                "1": "1570", "2": "1517", "3": "1578", "4": "3958"
              },
              "Tribunal Superior de Justicia Sala Social": {
                "1": "1552"
              },
              "Tribunal Militar Territorial": {
                "4": "1508"
              }
            },
            "Ferrol": {
              "Juzgado de Primera Instancia": {
                "1": "1553", "2": "1554", "3": "1555", "4": "1559", "5": "4797", "6": "5325"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "0194"
              },
              "Juzgado de Instrucción": {
                "1": "1560", "2": "1561", "3": "3413"
              },
              "Juzgado Decano": {
                "1": "1603"
              },
              "Juzgado de lo Penal": {
                "1": "1550", "2": "2295"
              },
              "Juzgado de lo Social": {
                "1": "1564", "2": "1501"
              }
            },
            "Muros": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1601"
              }
            },
            "Negreira": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1563"
              }
            },
            "Noia": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1565", "2": "1567"
              }
            },
            "Ordes": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1569", "2": "3838"
              }
            },
            "Padrón": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1575", "2": "3831"
              }
            },
            "Ribeira": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1581", "2": "1582", "3": "1613"
              }
            },
            "Santa Marta de Ortigueira": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1571"
              }
            },
            "Santiago de Compostela": {
              "Audiencia Provincial": {
                "6": "1505"
              },
              "Juzgado de Primera Instancia": {
                "1": "1583", "2": "1500", "3": "1590", "4": "1591", "5": "1592", "6": "4418"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "0076", "2": "3445"
              },
              "Juzgado de Instrucción": {
                "1": "2104", "2": "1584", "3": "2318"
              },
              "Juzgado Decano": {
                "1": "1608"
              },
              "Juzgado de lo Penal": {
                "1": "1585", "2": "1593"
              },
              "Juzgado de lo Social": {
                "1": "1589", "2": "1596", "3": "5076", "4": "5424"
              }
            }
          },
          "Cuenca": {
            "Cuenca": {
              "Audiencia Provincial": {
                "1": "1614"
              },
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1615", "2": "1616", "3": "1620", "4": "3974"
              },
              "Juzgado Contencioso Administrativo": {
                "1": "1622"
              },
              "Juzgado de Menores": {
                "1": "1638"
              },
              "Juzgado de lo Penal": {
                "1": "1621", "2": "4424"
              },
              "Juzgado de lo Social": {
                "1": "1619"
              },
              "Sección Menores Fiscalía Audiencia Provincial": {
                "1": "1129"
              },
              "Servicio Común General": {
                "1": "1640"
              }
            },
            "Motilla del Palancar": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1627", "2": "1629"
              }
            },
            "San Clemente": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1631", "2": "1633"
              }
            },
            "Tarancón": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "1635", "2": "1637"
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
                "1": "0712",
                "2": "0714"
              }
            },
            "Cerdanyola del Vallès": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0718", "2": "0719", "3": "0764", "4": "0826", "5": "0836", "6": "1011", "7": "2359", "8": "4252"
              },
              "Servicio Común General": {
                "1": "5398"
              }
            },
            "Cornellà de Llobregat": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0721", "2": "0722", "3": "0838", "4": "0840"
              },
              "Servicio Común General": {
                "1": "5275"
              }
            },
            "Esplugues de Llobregat": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0724", "2": "0725", "3": "2667"
              }
            },
            "Gavà": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0726", "2": "0727", "3": "0728", "4": "0850", "5": "0851", "6": "1574", "7": "2400", "8": "3611", "9": "4871"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "4253"
              }
            },
            "Granollers": {
              "Juzgado de Primera Instancia": {
                "1": "0729", "2": "0730", "3": "0731", "4": "0738", "5": "0737", "6": "3527", "7": "4962", "8": "5370", "9": "5372"
              },
              "Juzgado de Instrucción": {
                "1": "0732", "2": "0739", "3": "0918", "4": "1558"
              },
              "Juzgado de lo Penal": {
                "1": "1049", "2": "0917", "3": "3540"
              },
              "Juzgado de lo Social": {
                "1": "0402", "2": "1487", "3": "2698"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "4076"
              }
            },
            "L'Hospitalet de Llobregat": {
              "Juzgado de Primera Instancia": {
                "1": "0744", "2": "0753", "3": "0754", "4": "0755", "5": "0756", "6": "0757", "7": "4146", "8": "5412"
              },
              "Juzgado de Instrucción": {
                "1": "0743", "2": "0745", "3": "0746", "4": "0747", "5": "0723"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "3456"
              }
            },
            "Igualada": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0765", "2": "0766", "3": "0769", "4": "1831", "5": "4592"
              },
              "Juzgado Decano": {
                "1": "0966"
              }
            },
            "Manresa": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0772", "2": "0773", "3": "0774", "4": "0776", "5": "0777", "6": "2766", "7": "3959", "8": "5134"
              },
              "Juzgado Decano": {
                "1": "8048"
              },
              "Juzgado de lo Penal": {
                "1": "0685", "2": "1701", "3": "4382"
              },
              "Juzgado de lo Social": {
                "1": "0779"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "4866"
              }
            },
            "Martorell": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0782", "2": "0771", "3": "0780", "4": "1027", "5": "2096", "6": "3677", "7": "4387"
              }
            },
            "Mataró": {
              "Juzgado de Primera Instancia": {
                "1": "0784", "2": "0785", "3": "0787", "4": "0792", "5": "0742", "6": "2720", "7": "3862", "8": "4756", "9": "5387"
              },
              "Juzgado de Instrucción": {
                "1": "0786", "2": "0793", "3": "0794", "4": "0919", "5": "5135"
              },
              "Juzgado Decano": {
                "1": "3427"
              },
              "Juzgado de lo Penal": {
                "1": "1115", "2": "2736"
              },
              "Juzgado de lo Social": {
                "1": "0441", "2": "1483"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "3843"
              }
            },
            "Mollet del Vallès": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0801", "2": "0859", "3": "0860", "4": "0926", "5": "2724"
              }
            },
            "El Prat de Llobregat": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0803", "2": "0804", "3": "0878", "4": "1012", "5": "2075"
              },
              "Servicio Común General": {
                "1": "5265"
              }
            },
            "Rubí": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0806", "2": "0807", "3": "0862", "4": "0864", "5": "1013", "6": "2773", "7": "3766", "8": "4826"
              },
              "Juzgado Decano": {
                "1": "5236"
              }
            },
            "Sabadell": {
              "Juzgado de Primera Instancia": {
                "1": "0808", "2": "0810", "3": "0812", "4": "0818", "5": "0819", "6": "0820", "7": "3569", "8": "4852"
              },
              "Juzgado de Instrucción": {
                "1": "0809", "2": "0811", "3": "0795", "4": "0934", "5": "2999"
              },
              "Juzgado de lo Penal": {
                "1": "0683", "2": "0684", "3": "1617", "4": "4874"
              },
              "Juzgado de lo Social": {
                "1": "1123", "2": "1492", "3": "2767"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "3819"
              }
            },
            "Sant Boi de Llobregat": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0829", "2": "0830", "3": "0831", "4": "0835", "5": "3934", "6": "4967"
              },
              "Servicio Común General": {
                "1": "3984"
              }
            },
            "Sant Feliu de Llobregat": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0841", "2": "0842", "3": "0843", "4": "0847", "5": "0848", "6": "0824", "7": "0825"
              },
              "Juzgado Decano": {
                "1": "0957"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "3938"
              }
            },
            "Santa Coloma de Gramenet": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0853", "2": "0854", "3": "0857", "4": "0858", "5": "0761", "6": "0762"
              },
              "Servicio Común General": {
                "1": "5277"
              }
            },
            "Terrassa": {
              "Juzgado de Primera Instancia": {
                "1": "0865", "2": "0866", "3": "0867", "4": "0821", "5": "0873", "6": "3051", "7": "4170", "8": "5079", "9": "5391"
              },
              "Juzgado de Instrucción": {
                "1": "0874", "2": "0875", "3": "1586", "4": "0868"
              },
              "Juzgado Decano": {
                "1": "5249"
              },
              "Juzgado de lo Penal": {
                "1": "0680", "2": "0978", "3": "4747"
              },
              "Juzgado de lo Social": {
                "1": "0350", "2": "1521"
              },
              "Juzgado de Violencia sobre la Mujer": {
                "1": "4164"
              }
            },
            "Vic": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0885", "2": "0886", "3": "0890", "4": "0532", "5": "3536"
              }
            },
            "Vilafranca del Penedès": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0894", "2": "0896", "3": "1000", "4": "3411", "5": "4987"
              },
              "Servicio Común General": {
                "1": "5313"
              }
            },
            "Vilanova i la Geltrú": {
              "Juzgado de Primera Instancia e Instrucción": {
                "1": "0901", "2": "0902", "3": "0903", "4": "0799", "5": "0800", "6": "0805", "7": "2741", "8": "3739", "9": "4988"
              },
              "Juzgado de lo Penal": {
                "1": "1030", "2": "1821", "3": "3049", "4": "5139"
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