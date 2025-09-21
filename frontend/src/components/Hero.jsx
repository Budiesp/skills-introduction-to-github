import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Scale } from 'lucide-react';
import { mockData } from '../data/mock';

const Hero = () => {
  const { hero, stats } = mockData;

  return (
    <section id="inicio" className="relative bg-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
            <Scale className="h-4 w-4 mr-2" />
            Despacho de Procuradores
          </div>
          
          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              {hero.title}
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {hero.subtitle}
            </p>
            
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              {hero.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg"
              className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {hero.ctaText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-slate-300 hover:border-slate-800 hover:text-slate-800 px-8 py-4 rounded-md font-semibold transition-all duration-300"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver servicios
            </Button>
          </div>

          {/* Stats */}
          <div className="pt-16">
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-500 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;