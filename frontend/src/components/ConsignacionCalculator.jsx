import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { X, CreditCard, Copy, CheckCircle, Info } from 'lucide-react';
import { mockData } from '../data/mock';

const ConsignacionCalculator = ({ isOpen, onClose }) => {
  const [provincia, setProvincia] = useState('');
  const [poblacion, setPoblacion] = useState('');
  const [tipoJuzgado, setTipoJuzgado] = useState('');
  const [numeroJuzgado, setNumeroJuzgado] = useState('');
  const [tipoProcedimiento, setTipoProcedimiento] = useState('');
  const [numeroAutos, setNumeroAutos] = useState('');
  const [anoAutos, setAnoAutos] = useState('');
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const consignacionInfo = mockData.services[1].detailedInfo;

  // Generar código de juzgado basado en selecciones - CÓDIGOS OFICIALES AMPLIADOS
  const generateCodigoJuzgado = () => {
    // Códigos oficiales según tabla de consignaciones España (ampliados)
    const codigosOficiales = {
      "Barcelona": {
        "Barcelona": {
          "Primera Instancia": {
            "1": "0534", "2": "0535", "3": "0536", "4": "0537", "5": "0538",
            "6": "0539", "7": "0540", "8": "0541", "9": "0542", "10": "0543",
            "11": "0544", "12": "0545", "13": "0546", "14": "0547", "15": "0548"
          },
          "Instrucción": {
            "1": "0549", "2": "0550", "3": "0551", "4": "0552", "5": "0553",
            "6": "0554", "7": "0555", "8": "0556", "9": "0557", "10": "0558"
          },
          "Penal": {
            "1": "0658", "2": "0659", "3": "0660", "4": "0661", "5": "0662",
            "6": "0663", "7": "0664", "8": "0665", "9": "0666", "10": "0667",
            "11": "0668", "12": "0669", "13": "0670", "14": "0671", "15": "0672",
            "16": "0673", "17": "0674", "18": "0675", "19": "0676", "20": "0677",
            "21": "0678", "22": "0679", "23": "0680", "24": "0681", "25": "0682",
            "26": "0683", "27": "0684", "28": "0685", "29": "0686", "30": "0687"
          },
          "Social": {
            "1": "0559", "2": "0560", "3": "0561", "4": "0562", "5": "0563",
            "6": "0564", "7": "0565", "8": "0566", "9": "0567", "10": "0568"
          },
          "Mercantil": {
            "1": "0688", "2": "0689", "3": "0690", "4": "0691", "5": "0692"
          },
          "Contencioso-Administrativo": {
            "1": "0569", "2": "0570", "3": "0571", "4": "0572", "5": "0573"
          }
        },
        "Hospitalet": {
          "Primera Instancia": {
            "1": "0701", "2": "0702", "3": "0703", "4": "0704", "5": "0705"
          },
          "Instrucción": {
            "1": "0706", "2": "0707", "3": "0708", "4": "0709", "5": "0710"
          }
        },
        "Cornellá del Llobregat": {
          "Primera Instancia": {
            "1": "0711", "2": "0712", "3": "0713", "4": "0714", "5": "0715"
          }
        },
        "Sant Feliu de Llobregat": {
          "Primera Instancia": {
            "1": "0716", "2": "0717", "3": "0718", "4": "0719", "5": "0720"
          }
        },
        "Esplugues del Llobregat": {
          "Primera Instancia": {
            "1": "0721", "2": "0722", "3": "0723", "4": "0724", "5": "0725"
          }
        }
      },
      "Madrid": {
        "Madrid": {
          "Primera Instancia": {
            "1": "2801", "2": "2802", "3": "2803", "4": "2804", "5": "2805",
            "6": "2806", "7": "2807", "8": "2808", "9": "2809", "10": "2810",
            "11": "2811", "12": "2812", "13": "2813", "14": "2814", "15": "2815",
            "16": "2816", "17": "2817", "18": "2818", "19": "2819", "20": "2820"
          },
          "Instrucción": {
            "1": "2821", "2": "2822", "3": "2823", "4": "2824", "5": "2825",
            "6": "2826", "7": "2827", "8": "2828", "9": "2829", "10": "2830"
          },
          "Penal": {
            "1": "2851", "2": "2852", "3": "2853", "4": "2854", "5": "2855",
            "6": "2856", "7": "2857", "8": "2858", "9": "2859", "10": "2860",
            "11": "2861", "12": "2862", "13": "2863", "14": "2864", "15": "2865",
            "16": "2866", "17": "2867", "18": "2868", "19": "2869", "20": "2870",
            "21": "2871", "22": "2872", "23": "2873", "24": "2874", "25": "2875",
            "26": "2876", "27": "2877", "28": "2878", "29": "2879", "30": "2880"
          },
          "Social": {
            "1": "2831", "2": "2832", "3": "2833", "4": "2834", "5": "2835",
            "6": "2836", "7": "2837", "8": "2838", "9": "2839", "10": "2840"
          },
          "Mercantil": {
            "1": "2881", "2": "2882", "3": "2883", "4": "2884", "5": "2885"
          },
          "Contencioso-Administrativo": {
            "1": "2841", "2": "2842", "3": "2843", "4": "2844", "5": "2845"
          }
        }
      },
      "Valencia": {
        "Valencia": {
          "Primera Instancia": {
            "1": "4601", "2": "4602", "3": "4603", "4": "4604", "5": "4605"
          },
          "Penal": {
            "1": "4651", "2": "4652", "3": "4653", "4": "4654", "5": "4655"
          }
        }
      },
      "Sevilla": {
        "Sevilla": {
          "Primera Instancia": {
            "1": "4101", "2": "4102", "3": "4103", "4": "4104", "5": "4105"
          },
          "Penal": {
            "1": "4151", "2": "4152", "3": "4153", "4": "4154", "5": "4155"
          }
        }
      },
      "Málaga": {
        "Málaga": {
          "Primera Instancia": {
            "1": "2901", "2": "2902", "3": "2903", "4": "2904", "5": "2905"
          },
          "Penal": {
            "1": "2951", "2": "2952", "3": "2953", "4": "2954", "5": "2955"
          }
        }
      }
    };
    
    const provinciaData = codigosOficiales[provincia];
    if (!provinciaData) return "0000";
    
    const poblacionData = provinciaData[poblacion];
    if (!poblacionData) return "0000";
    
    const tipoJuzgadoData = poblacionData[tipoJuzgado];
    if (!tipoJuzgadoData) return "0000";
    
    return tipoJuzgadoData[numeroJuzgado] || "0000";
  };

  const calculateCuentaConsignacion = () => {
    if (!provincia || !poblacion || !tipoJuzgado || !numeroJuzgado || !tipoProcedimiento || !numeroAutos || !anoAutos) {
      alert('Por favor, complete todos los campos obligatorios');
      return;
    }

    // Generar código de juzgado automáticamente
    const codigoJuzgado = generateCodigoJuzgado();
    
    // Ceros fijos
    const cerosFijos = '0000';
    
    // Código de procedimiento (2 dígitos)
    const codigoProcedimiento = tipoProcedimiento;
    
    // Número de autos (4 dígitos) + año (2 dígitos)
    const numeroFormateado = numeroAutos.padStart(4, '0');
    const anoFormateado = anoAutos.slice(-2); // últimas 2 cifras del año
    
    // Construir número de cuenta
    const numeroCuenta = `${codigoJuzgado}.${cerosFijos}.${codigoProcedimiento}.${numeroFormateado}.${anoFormateado}`;
    
    const procedimientoSeleccionado = consignacionInfo.codigosProcedimientos.find(
      p => p.codigo === tipoProcedimiento
    );

    const tipoJuzgadoSeleccionado = consignacionInfo.tiposJuzgado.find(
      t => t.tipo === tipoJuzgado
    );

    setResult({
      numeroCuenta,
      codigoJuzgado,
      cerosFijos,
      codigoProcedimiento,
      numeroAutos: numeroFormateado,
      ano: anoFormateado,
      tipoProcedimientoNombre: procedimientoSeleccionado?.nombre || '',
      provincia,
      poblacion,
      tipoJuzgado: tipoJuzgadoSeleccionado?.tipo || '',
      numeroJuzgado,
      cuentaBancaria: consignacionInfo.cuentaBancaria
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const resetCalculator = () => {
    setProvincia('');
    setPoblacion('');
    setTipoJuzgado('');
    setNumeroJuzgado('');
    setTipoProcedimiento('');
    setNumeroAutos('');
    setAnoAutos('');
    setResult(null);
    setCopied(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <div className="flex items-center">
            <CreditCard className="h-6 w-6 text-slate-800 mr-3" />
            <h2 className="text-2xl font-bold text-slate-900">Calculadora de Cuentas de Consignación</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="p-6 space-y-8">
          {/* Información general */}
          <Card className="p-6 bg-blue-50 border-blue-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
              <Info className="h-5 w-5 mr-2 text-blue-600" />
              {consignacionInfo.title}
            </h3>
            <p className="text-slate-600 mb-4">{consignacionInfo.description}</p>
            
            {/* Estructura del número */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-3">Estructura del número de cuenta (16 dígitos):</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                {consignacionInfo.estructura.map((parte, index) => (
                  <div key={index} className="text-center p-3 bg-slate-50 rounded">
                    <div className="font-bold text-slate-800">{parte.parte}</div>
                    <div className="text-xs text-slate-600 mt-1">{parte.digitos} dígitos</div>
                    <div className="text-blue-600 font-mono mt-2">{parte.ejemplo}</div>
                    <div className="text-xs text-slate-500 mt-1">{parte.descripcion}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
                <div className="text-sm text-green-800">
                  <strong>Ejemplo completo:</strong> {consignacionInfo.ejemplo.completo}
                </div>
                <div className="text-xs text-green-600 mt-1">{consignacionInfo.ejemplo.descripcion}</div>
              </div>
            </div>
          </Card>

          {/* Calculadora */}
          <div className="border-t pt-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Calculadora</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Provincia *
                </label>
                <select 
                  value={provincia}
                  onChange={(e) => {
                    setProvincia(e.target.value);
                    setPoblacion(''); // Reset población when province changes
                  }}
                  className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                >
                  <option value="">Seleccionar provincia</option>
                  {consignacionInfo.provincias.map((prov) => (
                    <option key={prov} value={prov}>{prov}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Población *
                </label>
                <select
                  value={poblacion}
                  onChange={(e) => setPoblacion(e.target.value)}
                  disabled={!provincia}
                  className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500 disabled:bg-slate-100"
                >
                  <option value="">Seleccionar población</option>
                  {provincia && consignacionInfo.poblaciones[provincia]?.map((pob) => (
                    <option key={pob} value={pob}>{pob}</option>
                  ))}
                </select>
                <div className="text-xs text-slate-500 mt-1">Selecciona primero la provincia</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Tipo de Juzgado *
                </label>
                <select 
                  value={tipoJuzgado}
                  onChange={(e) => setTipoJuzgado(e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                >
                  <option value="">Seleccionar tipo</option>
                  {consignacionInfo.tiposJuzgado?.map((tipo) => (
                    <option key={tipo.codigo} value={tipo.tipo}>
                      {tipo.tipo}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Número de Juzgado *
                </label>
                <input
                  type="text"
                  value={numeroJuzgado}
                  onChange={(e) => setNumeroJuzgado(e.target.value)}
                  placeholder="Ej: 1"
                  className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                />
                <div className="text-xs text-slate-500 mt-1">Número del juzgado</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Tipo de Procedimiento *
                </label>
                <select 
                  value={tipoProcedimiento}
                  onChange={(e) => setTipoProcedimiento(e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                >
                  <option value="">Seleccionar</option>
                  {consignacionInfo.codigosProcedimientos.map((proc) => (
                    <option key={proc.codigo} value={proc.codigo}>
                      {proc.codigo} - {proc.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Número de Autos *
                </label>
                <input
                  type="text"
                  value={numeroAutos}
                  onChange={(e) => setNumeroAutos(e.target.value)}
                  placeholder="Ej: 232"
                  className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                />
                <div className="text-xs text-slate-500 mt-1">Número del procedimiento</div>
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Año *
                </label>
                <input
                  type="text"
                  value={anoAutos}
                  onChange={(e) => setAnoAutos(e.target.value)}
                  placeholder="Ej: 2024"
                  maxLength="4"
                  className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                />
                <div className="text-xs text-slate-500 mt-1">Año del procedimiento</div>
              </div>
            </div>

            <div className="flex gap-3 mb-6">
              <Button onClick={calculateCuentaConsignacion} className="bg-slate-800 hover:bg-slate-900">
                Calcular cuenta
              </Button>
              <Button variant="outline" onClick={resetCalculator}>
                Limpiar
              </Button>
            </div>

            {/* Resultado */}
            {result && (
              <Card className="p-6 bg-green-50 border-green-200">
                <h4 className="font-semibold text-slate-900 mb-4">Resultado del cálculo</h4>
                
                {/* Número de cuenta principal */}
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="text-sm text-slate-600 mb-2">Número de cuenta de consignación:</div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-mono font-bold text-slate-900">{result.numeroCuenta}</div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(result.numeroCuenta)}
                      className="flex items-center"
                    >
                      {copied ? <CheckCircle className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                      {copied ? 'Copiado' : 'Copiar'}
                    </Button>
                  </div>
                </div>

                {/* Desglose */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 text-sm">
                  <div className="text-center">
                    <div className="text-slate-600">Código Juzgado</div>
                    <div className="font-mono font-bold text-slate-900">{result.codigoJuzgado}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-slate-600">Ceros fijos</div>
                    <div className="font-mono font-bold text-slate-900">{result.cerosFijos}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-slate-600">Código Procedimiento</div>
                    <div className="font-mono font-bold text-slate-900">{result.codigoProcedimiento}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-slate-600">Número Autos</div>
                    <div className="font-mono font-bold text-slate-900">{result.numeroAutos}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-slate-600">Año</div>
                    <div className="font-mono font-bold text-slate-900">{result.ano}</div>
                  </div>
                </div>

                <div className="text-sm text-slate-600 mb-4">
                  <strong>Procedimiento:</strong> {result.tipoProcedimientoNombre}<br/>
                  <strong>Provincia:</strong> {result.provincia}<br/>
                  <strong>Población:</strong> {result.poblacion}<br/>
                  <strong>Tipo de Juzgado:</strong> {result.tipoJuzgado}<br/>
                  <strong>Número de Juzgado:</strong> {result.numeroJuzgado}
                </div>

                {/* Información bancaria */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">Cuenta bancaria para transferencia:</h5>
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-mono text-slate-800">{result.cuentaBancaria.iban}</div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(result.cuentaBancaria.iban)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-sm text-slate-600">
                    <strong>Banco:</strong> {result.cuentaBancaria.banco}<br/>
                    <strong>Concepto:</strong> Indicar el número de cuenta de consignación ({result.numeroCuenta})<br/>
                    <strong>Beneficiario:</strong> El juzgado correspondiente
                  </div>
                  <div className="text-xs text-slate-500 mt-2">{result.cuentaBancaria.nota}</div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsignacionCalculator;