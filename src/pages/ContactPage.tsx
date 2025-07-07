import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Users, Mic } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: 'general'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Contactez-nous
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Une question, une suggestion ou envie de participer ? 
          Nous sommes à votre écoute !
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Plusieurs façons de nous joindre
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@podcastpro.fr</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Nous répondons sous 24h
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Téléphone</h3>
                  <p className="text-gray-600">+33 1 42 34 56 78</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Lun-Ven, 9h-18h
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Adresse</h3>
                  <p className="text-gray-600">
                    42 Rue de la Paix<br />
                    75002 Paris, France
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Types */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Selon votre besoin
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="font-medium text-gray-900">Questions générales</p>
                  <p className="text-sm text-gray-600">contact@podcastpro.fr</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mic className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="font-medium text-gray-900">Proposer un sujet</p>
                  <p className="text-sm text-gray-600">redaction@podcastpro.fr</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Partenariats</p>
                  <p className="text-sm text-gray-600">partenaires@podcastpro.fr</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Envoyez-nous un message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                Type de demande
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="general">Question générale</option>
                <option value="guest">Proposer un invité</option>
                <option value="partnership">Partenariat</option>
                <option value="technical">Support technique</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Décrivez votre demande en détail..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Send className="h-5 w-5" />
              <span>Envoyer le message</span>
            </button>
          </form>
        </div>
      </div>

      {/* Social Links */}
      <section className="bg-gray-50 rounded-2xl p-8 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Suivez-nous sur les réseaux sociaux
        </h3>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="sr-only">Twitter</span>
            <div className="h-6 w-6 bg-blue-400 rounded" />
          </a>
          <a
            href="#"
            className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="sr-only">LinkedIn</span>
            <div className="h-6 w-6 bg-blue-600 rounded" />
          </a>
          <a
            href="#"
            className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="sr-only">Instagram</span>
            <div className="h-6 w-6 bg-pink-500 rounded" />
          </a>
          <a
            href="#"
            className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="sr-only">YouTube</span>
            <div className="h-6 w-6 bg-red-500 rounded" />
          </a>
        </div>
      </section>
    </div>
  );
};