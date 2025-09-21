import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';
import { mockData } from '../data/mock';

const Contact = () => {
  const { contact } = mockData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Formulario enviado correctamente. Nos pondremos en contacto con usted en breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Solicitar información
          </h2>
          <p className="text-xl text-slate-600">
            Contacte con nosotros para cualquier consulta sobre nuestros servicios
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Teléfono
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Explíquenos brevemente su consulta..."
                  required
                  className="w-full"
                />
              </div>

              <Button 
                type="submit"
                className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300 w-full sm:w-auto"
              >
                Enviar consulta
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Información de contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-slate-600 mr-3" />
                  <span className="text-slate-700">{contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-slate-600 mr-3" />
                  <span className="text-slate-700">{contact.email}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-slate-600 mr-3" />
                  <span className="text-slate-700">{contact.address}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Partidos Judiciales</h4>
              <div className="grid grid-cols-2 gap-2">
                {contact.partidos.map((partido) => (
                  <span 
                    key={partido}
                    className="px-3 py-2 bg-slate-100 text-slate-700 rounded-md text-sm text-center"
                  >
                    {partido}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;