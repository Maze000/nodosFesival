import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Video, Send, Users, Accessibility, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    accessibilityNeeds: '',
    communicationPreference: 'email',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      title: 'Email',
      description: 'Respuesta en menos de 24 horas',
      value: 'accesibilidad@nodos.es',
      color: 'cyan',
      accessible: 'Compatible con lectores de pantalla'
    },
    {
      id: 'whatsapp',
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat directo y mensajes de voz',
      value: '+34 600 123 456',
      color: 'green',
      accessible: 'Mensajes de texto y audio'
    },
    {
      id: 'videocall',
      icon: Video,
      title: 'Videollamada LSE',
      description: 'Consulta con intérprete de lengua de señas',
      value: 'Programar cita',
      color: 'magenta',
      accessible: 'Lengua de señas española'
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Llamada',
      description: 'Atención telefónica personalizada',
      value: '+34 900 654 321',
      color: 'orange',
      accessible: 'Audio claro y pausado'
    }
  ];

  const accessibilityOptions = [
    'Discapacidad visual',
    'Discapacidad auditiva',
    'Discapacidad motriz',
    'Discapacidad cognitiva',
    'Sensibilidad sensorial',
    'Múltiples discapacidades',
    'Sin discapacidad',
    'Prefiero no especificar'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Aquí iría la lógica de envío del formulario
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: { bg: 'from-cyan-500/20 to-cyan-600/20', border: 'border-cyan-500/40', text: 'text-cyan-400' },
      green: { bg: 'from-green-500/20 to-green-600/20', border: 'border-green-500/40', text: 'text-green-400' },
      magenta: { bg: 'from-magenta-500/20 to-magenta-600/20', border: 'border-magenta-500/40', text: 'text-magenta-400' },
      orange: { bg: 'from-orange-500/20 to-orange-600/20', border: 'border-orange-500/40', text: 'text-orange-400' }
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  if (isSubmitted) {
    return (
      <section 
        id="contacto" 
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-title"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-2xl p-12 border border-green-500/40">
            <div className="w-20 h-20 rounded-full bg-green-500/30 flex items-center justify-center mx-auto mb-6">
              <Send className="w-10 h-10 text-green-400" />
            </div>
            
            <h2 className="text-3xl font-bold font-orbitron text-white mb-4">
              ¡Mensaje Enviado!
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Gracias por contactarnos. Nuestro equipo de accesibilidad responderá 
              a través de tu método de comunicación preferido en menos de 24 horas.
            </p>
            
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              Enviar Otro Mensaje
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="contacto" 
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            id="contact-title" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron text-white mb-6"
          >
            <span className="text-cyan-400">CONTACTO</span>
            <span className="block text-2xl sm:text-3xl mt-2 text-gray-300">MULTIMODAL</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Elige la forma de comunicación que mejor se adapte a tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Users className="w-6 h-6 text-cyan-400" />
              Formas de Contacto
            </h3>
            
            <div className="space-y-6">
              {contactMethods.map((method) => {
                const colorClasses = getColorClasses(method.color);
                return (
                  <div 
                    key={method.id}
                    className={`group p-6 rounded-xl bg-gradient-to-br ${colorClasses.bg} border ${colorClasses.border} transition-all duration-300 hover:scale-105 cursor-pointer focus-within:ring-2 focus-within:ring-${method.color}-500 focus-within:ring-offset-2 focus-within:ring-offset-black`}
                    role="button"
                    tabIndex={0}
                    aria-label={`Contactar por ${method.title}: ${method.description}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-black/30 flex items-center justify-center ${colorClasses.text} group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {method.title}
                        </h4>
                        <p className="text-gray-300 text-sm mb-2">
                          {method.description}
                        </p>
                        <p className={`${colorClasses.text} font-semibold mb-2`}>
                          {method.value}
                        </p>
                        <div className="flex items-center gap-2">
                          <Accessibility className="w-4 h-4 text-green-400" />
                          <span className="text-xs text-gray-400">
                            {method.accessible}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Office Info */}
            <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl border border-gray-600/30">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                Oficina de Accesibilidad
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Centro Cultural Digital</p>
                <p>Av. de la Innovación 123</p>
                <p>28001 Madrid, España</p>
                <p className="text-green-400 font-semibold mt-3">
                  Lun - Vie: 9:00 - 18:00h
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Send className="w-6 h-6 text-cyan-400" />
              Formulario Accesible
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tu nombre completo"
                  aria-describedby="name-help"
                />
                <p id="name-help" className="text-xs text-gray-500 mt-1">
                  Como prefieres que te llamemos
                </p>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="+34 600 000 000"
                />
              </div>

              {/* Accessibility Needs */}
              <div>
                <label htmlFor="accessibilityNeeds" className="block text-sm font-semibold text-gray-300 mb-2">
                  Necesidades de accesibilidad
                </label>
                <select
                  id="accessibilityNeeds"
                  name="accessibilityNeeds"
                  value={formData.accessibilityNeeds}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  aria-describedby="accessibility-help"
                >
                  <option value="">Selecciona una opción</option>
                  {accessibilityOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <p id="accessibility-help" className="text-xs text-gray-500 mt-1">
                  Nos ayuda a adaptar nuestra respuesta a tus necesidades
                </p>
              </div>

              {/* Communication Preference */}
              <div>
                <fieldset>
                  <legend className="block text-sm font-semibold text-gray-300 mb-3">
                    Preferencia de comunicación *
                  </legend>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="communicationPreference"
                        value="email"
                        checked={formData.communicationPreference === 'email'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-cyan-500 focus:ring-cyan-500"
                      />
                      <span className="text-gray-300">Email</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="communicationPreference"
                        value="whatsapp"
                        checked={formData.communicationPreference === 'whatsapp'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-cyan-500 focus:ring-cyan-500"
                      />
                      <span className="text-gray-300">WhatsApp</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="communicationPreference"
                        value="videocall"
                        checked={formData.communicationPreference === 'videocall'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-cyan-500 focus:ring-cyan-500"
                      />
                      <span className="text-gray-300">Videollamada con LSE</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="communicationPreference"
                        value="phone"
                        checked={formData.communicationPreference === 'phone'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-cyan-500 focus:ring-cyan-500"
                      />
                      <span className="text-gray-300">Llamada telefónica</span>
                    </label>
                  </div>
                </fieldset>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  aria-describedby="message-help"
                />
                <p id="message-help" className="text-xs text-gray-500 mt-1">
                  Describe tu consulta o necesidades específicas
                </p>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Quiero ser parte del pulso
              </button>
            </form>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-black/60 to-gray-900/40 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">
            <span className="text-cyan-400">¿Listo para</span> conectar?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            NODOS no es solo un evento, es una comunidad que crece con cada nueva conexión. 
            <span className="text-cyan-400 font-semibold"> Tu voz importa, tu experiencia cuenta.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;