import React from 'react';
import { CheckCircle, Users, Shield, Clock, Star } from 'lucide-react';
import { mockData } from '../data/mock';

const About = () => {
  const { about, stats } = mockData;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            {about.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="prose prose-lg text-slate-600">
              <p>{about.description}</p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {about.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Value propositions */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="font-semibold text-slate-900">Trato Personalizado</div>
                  <div className="text-sm text-slate-600">Atención directa y cercana</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <Shield className="h-8 w-8 text-green-600" />
                <div>
                  <div className="font-semibold text-slate-900">Máxima Confianza</div>
                  <div className="text-sm text-slate-600">Seguridad en cada gestión</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
                <Clock className="h-8 w-8 text-orange-600" />
                <div>
                  <div className="font-semibold text-slate-900">Agilidad Procesal</div>
                  <div className="text-sm text-slate-600">Rapidez en la tramitación</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                <Star className="h-8 w-8 text-purple-600" />
                <div>
                  <div className="font-semibold text-slate-900">Excelencia</div>
                  <div className="text-sm text-slate-600">Calidad profesional</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-slate-50 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional info card */}
            <div className="bg-gradient-to-br from-blue-600 to-slate-800 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Nuestro Compromiso</h3>
              <p className="text-blue-100 mb-6">
                Mediante la implementación de las últimas tecnologías, buscamos facilitar la gestión procesal de los asuntos tanto para los letrados como para los clientes, sin descuidar nuestra atención personalizada y directa.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm">Disponible 24/7 para urgencias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;