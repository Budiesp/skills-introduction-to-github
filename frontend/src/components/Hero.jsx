import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Scale, MapPin } from 'lucide-react';
import { mockData } from '../data/mock';

const Hero = () => {
  const { hero, company } = mockData;

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Scale className="h-4 w-4 mr-2" />
                Despacho de Procuradores
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                {hero.title}
              </h1>
              
              <div className="flex items-center text-xl text-slate-600">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                {hero.subtitle}
              </div>
              
              <p className="text-lg text-slate-600 max-w-2xl">
                {hero.description}
              </p>
            </div>

            {/* Service Areas */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                Partidos Judiciales
              </h3>
              <div className="flex flex-wrap gap-2">
                {company.partidos.map((partido) => (
                  <span 
                    key={partido}
                    className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm border border-slate-200 shadow-sm"
                  >
                    {partido}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl group"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {hero.ctaText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Servicios
              </Button>
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div className="lg:text-right">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-slate-800 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Scale className="h-8 w-8 text-blue-600" />
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900">PROCUFY</div>
                      <div className="text-sm text-slate-600">Procuradores</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Expedientes gestionados:</span>
                      <span className="font-semibold text-slate-900">500+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Años de experiencia:</span>
                      <span className="font-semibold text-slate-900">15+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Partidos judiciales:</span>
                      <span className="font-semibold text-slate-900">6</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Satisfacción cliente:</span>
                      <span className="font-semibold text-green-600">100%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-slate-200 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;