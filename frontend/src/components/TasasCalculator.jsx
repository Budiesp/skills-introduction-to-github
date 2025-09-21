import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { X, Calculator, FileText, AlertCircle } from 'lucide-react';
import { mockData } from '../data/mock';

const TasasCalculator = ({ isOpen, onClose }) => {
  const [selectedProcedure, setSelectedProcedure] = useState('');
  const [cuantia, setCuantia] = useState('');
  const [isPersonaJuridica, setIsPersonaJuridica] = useState(false);
  const [facturacionAnual, setFacturacionAnual] = useState('');
  const [result, setResult] = useState(null);

  const tasasInfo = mockData.services[0].detailedInfo;

  const calculateTasas = () => {
    if (!selectedProcedure) return;
    
    const procedure = tasasInfo.tabla.find(p => p.procedimiento === selectedProcedure);
    if (procedure) {
      let estatales = '0 €';
      let autonomicas = procedure.autonomica;
      
      // Lógica actualizada: Solo pagan tasa estatal las personas jurídicas que:
      // 1. Facturen MÁS de 1.000.000 € anuales
      // 2. El procedimiento supere 2.000 €
      if (isPersonaJuridica) {
        const facturacion = parseFloat(facturacionAnual.replace(/[^\d]/g, '')) || 0;
        const cuantiaNum = parseFloat(cuantia.replace(/[^\d]/g, '')) || 0;
        
        if (facturacion > 1000000 && cuantiaNum > 2000) {
          estatales = procedure.estatal;
        }
      }
      
      setResult({
        procedimiento: selectedProcedure,
        estatales,
        autonomicas,
        total: `${parseFloat(estatales.replace(/[^\d,]/g, '').replace(',', '.')) + parseFloat(autonomicas.replace(/[^\d,]/g, '').replace(',', '.'))} €`,
        exentaEstatal: isPersonaJuridica && parseFloat(facturacionAnual.replace(/[^\d]/g, '')) <= 1000000
      });
    }
  };

  const resetCalculator = () => {
    setSelectedProcedure('');
    setCuantia('');
    setIsPersonaJuridica(false);
    setFacturacionAnual('');
    setResult(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <div className="flex items-center">
            <Calculator className="h-6 w-6 text-slate-800 mr-3" />
            <h2 className="text-2xl font-bold text-slate-900">Calculadora de Tasas Judiciales</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="p-6 space-y-8">
          {/* Información general */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                {tasasInfo.estatales.title}
              </h3>
              <p className="text-slate-600 mb-3">{tasasInfo.estatales.description}</p>
              <p className="text-sm text-slate-500 italic">{tasasInfo.estatales.note}</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-green-600" />
                {tasasInfo.autonomicas.title}
              </h3>
              <p className="text-slate-600 mb-3">{tasasInfo.autonomicas.description}</p>
              <p className="text-xs text-slate-500">{tasasInfo.autonomicas.regulation}</p>
            </Card>
          </div>

          {/* Excepciones */}
          <Card className="p-6 bg-amber-50 border-amber-200">
            <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-amber-600" />
              Excepciones para Tasa Autonómica
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {tasasInfo.autonomicas.exceptions.map((exception, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  {exception}
                </li>
              ))}
            </ul>
          </Card>

          {/* Calculadora */}
          <div className="border-t pt-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Calculadora</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Tipo de procedimiento *
                </label>
                <select 
                  value={selectedProcedure}
                  onChange={(e) => setSelectedProcedure(e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                >
                  <option value="">Seleccionar procedimiento</option>
                  {tasasInfo.tabla.map((procedure, index) => (
                    <option key={index} value={procedure.procedimiento}>
                      {procedure.procedimiento}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Cuantía del procedimiento
                </label>
                <input
                  type="text"
                  value={cuantia}
                  onChange={(e) => setCuantia(e.target.value)}
                  placeholder="Ej: 5.000 €"
                  className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                />
              </div>

              <div className="flex items-center space-x-3 pt-6">
                <input
                  type="checkbox"
                  id="personaJuridica"
                  checked={isPersonaJuridica}
                  onChange={(e) => setIsPersonaJuridica(e.target.checked)}
                  className="h-4 w-4 text-slate-600"
                />
                <label htmlFor="personaJuridica" className="text-sm font-medium text-slate-700">
                  Persona jurídica
                </label>
              </div>
            </div>

            <div className="flex gap-3 mb-6">
              <Button onClick={calculateTasas} className="bg-slate-800 hover:bg-slate-900">
                Calcular tasas
              </Button>
              <Button variant="outline" onClick={resetCalculator}>
                Limpiar
              </Button>
            </div>

            {/* Resultado */}
            {result && (
              <Card className="p-6 bg-green-50 border-green-200">
                <h4 className="font-semibold text-slate-900 mb-4">Resultado del cálculo</h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sm text-slate-600">Tasa Estatal</div>
                    <div className="text-2xl font-bold text-slate-900">{result.estatales}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Tasa Autonómica</div>
                    <div className="text-2xl font-bold text-slate-900">{result.autonomicas}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Total</div>
                    <div className="text-2xl font-bold text-green-600">{result.total}</div>
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Tabla de referencia */}
          <div className="border-t pt-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Tabla de Referencia</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-300 p-3 text-left">Procedimiento</th>
                    <th className="border border-slate-300 p-3 text-center">Tasa Estatal</th>
                    <th className="border border-slate-300 p-3 text-center">Tasa Autonómica</th>
                  </tr>
                </thead>
                <tbody>
                  {tasasInfo.tabla.map((row, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="border border-slate-300 p-3">{row.procedimiento}</td>
                      <td className="border border-slate-300 p-3 text-center font-semibold">{row.estatal}</td>
                      <td className="border border-slate-300 p-3 text-center font-semibold">{row.autonomica}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasasCalculator;