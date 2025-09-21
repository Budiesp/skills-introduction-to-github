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

  // Generar código de juzgado basado en selecciones
  const generateCodigoJuzgado = () => {
    const provinciasCodigos = {
      "Barcelona": "05",
      "Madrid": "28",
      "Valencia": "46", 
      "Sevilla": "41",
      "Málaga": "29",
      "Bilbao": "48",
      "Alicante": "03",
      "Córdoba": "14",
      "Valladolid": "47",
      "Granada": "18"
    };
    
    const tipoJuzgadoCodigo = consignacionInfo.tiposJuzgado.find(t => t.tipo === tipoJuzgado)?.codigo || "05";
    const provCodigo = provinciasCodigos[provincia] || "08";
    const numJuzgado = numeroJuzgado.padStart(2, '0');
    
    return `${provCodigo}${tipoJuzgadoCodigo.slice(-1)}${numJuzgado}`;
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Código del Juzgado *
                </label>
                <input
                  type="text"
                  value={codigoJuzgado}
                  onChange={(e) => setCodigoJuzgado(e.target.value)}
                  placeholder="Ej: 534"
                  className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                />
                <div className="text-xs text-slate-500 mt-1">4 dígitos del órgano judicial</div>
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
                  <strong>Procedimiento:</strong> {result.tipoProcedimientoNombre}
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