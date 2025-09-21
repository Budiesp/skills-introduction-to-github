import React, { useState } from 'react';
import { Calculator, CreditCard } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../data/mock';
import TasasCalculator from './TasasCalculator';

const iconMap = {
  Calculator: Calculator,
  CreditCard: CreditCard,
};

const Services = () => {
  const { services } = mockData;
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const handleServiceClick = (service) => {
    if (service.title === 'Cálculo de tasas') {
      setIsCalculatorOpen(true);
    }
  };

  return (
    <>
      <section id="servicios" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Nuestros servicios
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ofrecemos una gestión procesal integral con la máxima profesionalidad y eficiencia
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={service.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-slate-800" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  {service.title === 'Cálculo de tasas' && (
                    <Button 
                      onClick={() => handleServiceClick(service)}
                      className="bg-slate-800 hover:bg-slate-900 text-white"
                    >
                      Abrir calculadora
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      <TasasCalculator 
        isOpen={isCalculatorOpen} 
        onClose={() => setIsCalculatorOpen(false)} 
      />
    </>
  );
};

export default Services;