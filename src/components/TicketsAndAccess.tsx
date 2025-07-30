import React, { useState } from 'react';
import { Ticket, Users, Heart, Shield, Check, Info } from 'lucide-react';

const TicketsAndAccess: React.FC = () => {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  const ticketTypes = [
    {
      id: 'general',
      name: 'General',
      price: 45,
      originalPrice: null,
      description: 'Acceso completo al evento con todas las tecnologías adaptativas',
      features: [
        'Acceso a todos los escenarios',
        'Tecnologías de accesibilidad incluidas',
        'Talleres y charlas',
        'Área de descanso sensorial'
      ],
      accessibility: [
        'Chalecos vibratorios disponibles',
        'Audio descripción',
        'LSE en escenarios principales',
        'Rutas podotáctiles'
      ],
      color: 'cyan',
      popular: false
    },
    {
      id: 'accesible',
      name: 'Accesible',
      price: 35,
      originalPrice: 45,
      description: 'Entrada con descuento para personas con credencial de discapacidad',
      features: [
        'Acceso completo como entrada general',
        'Asistente personal disponible',
        'Zona preferencial',
        'Servicios especializados prioritarios'
      ],
      accessibility: [
        'Personal de apoyo especializado',
        'Área reservada con mejor visibilidad',
        'Acceso prioritario a servicios',
        'Equipamiento adaptativo premium'
      ],
      color: 'green',
      popular: true
    },
    {
      id: 'asistente',
      name: 'Asistente',
      price: 20,
      originalPrice: null,
      description: 'Para acompañantes que brindan apoyo esencial',
      features: [
        'Acceso completo al recinto',
        'Capacitación rápida en tecnologías',
        'Identificación como personal de apoyo',
        'Comunicación directa con equipo NODOS'
      ],
      accessibility: [
        'Briefing de accesibilidad',
        'Comunicación con coordinadores',
        'Acceso a áreas de apoyo',
        'Kit de herramientas básicas'
      ],
      color: 'orange',
      popular: false
    }
  ];

  const discounts = [
    {
      title: "Credencial de Discapacidad",
      discount: "22% descuento",
      description: "Presenta tu credencial y accede al precio inclusivo",
      icon: Shield
    },
    {
      title: "Estudiantes",
      discount: "15% descuento",
      description: "Con credencial estudiantil vigente",
      icon: Users
    },
    {
      title: "Grupos (4+ personas)",
      discount: "20% descuento",
      description: "Compra grupal con diferentes tipos de entrada",
      icon: Heart
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: { 
        bg: 'from-cyan-500/20 to-cyan-600/20', 
        border: 'border-cyan-500/40', 
        text: 'text-cyan-400',
        button: 'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700'
      },
      green: { 
        bg: 'from-green-500/20 to-green-600/20', 
        border: 'border-green-500/40', 
        text: 'text-green-400',
        button: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
      },
      orange: { 
        bg: 'from-orange-500/20 to-orange-600/20', 
        border: 'border-orange-500/40', 
        text: 'text-orange-400',
        button: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
      }
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section 
      id="entradas" 
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="tickets-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            id="tickets-title" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron text-white mb-6"
          >
            <span className="text-cyan-400">ENTRADAS</span>
            <span className="block text-2xl sm:text-3xl mt-2 text-gray-300">Y ACCESOS</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Precios inclusivos diseñados para que la economía no sea una barrera de acceso
          </p>
        </div>

        {/* Ticket Types */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {ticketTypes.map((ticket) => {
            const colorClasses = getColorClasses(ticket.color);
            return (
              <div 
                key={ticket.id}
                className={`group relative p-6 sm:p-8 rounded-xl bg-gradient-to-br ${colorClasses.bg} border ${colorClasses.border} backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  ticket.popular ? 'ring-2 ring-green-500/50' : ''
                } focus-within:ring-2 focus-within:ring-${ticket.color}-500 focus-within:ring-offset-2 focus-within:ring-offset-black`}
                role="article"
                aria-labelledby={`ticket-${ticket.id}-title`}
              >
                {/* Popular Badge */}
                {ticket.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                    MÁS ELEGIDA
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <h3 
                    id={`ticket-${ticket.id}-title`} 
                    className="text-2xl font-bold font-orbitron text-white mb-2"
                  >
                    {ticket.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-2 mb-3">
                    {ticket.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        €{ticket.originalPrice}
                      </span>
                    )}
                    <span className={`text-3xl sm:text-4xl font-bold ${colorClasses.text}`}>
                      €{ticket.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {ticket.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Incluye:</h4>
                  <ul className="space-y-2" role="list">
                    {ticket.features.map((feature, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-2 text-sm text-gray-300"
                        role="listitem"
                      >
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Accessibility Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    Accesibilidad:
                  </h4>
                  <ul className="space-y-2" role="list">
                    {ticket.accessibility.map((feature, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-2 text-sm text-gray-300"
                        role="listitem"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Purchase Button */}
                <button 
                  className={`w-full py-3 bg-gradient-to-r ${colorClasses.button} text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-${ticket.color}-500 focus:ring-offset-2 focus:ring-offset-black`}
                  onClick={() => setSelectedTicket(ticket.id)}
                  aria-label={`Comprar entrada ${ticket.name} por €${ticket.price}`}
                >
                  <Ticket className="w-5 h-5 inline mr-2" />
                  Comprar Entrada
                </button>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-${ticket.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Discounts Section */}
        <div className="bg-gradient-to-r from-black/60 to-gray-900/40 rounded-2xl p-8 sm:p-12 border border-cyan-500/20 backdrop-blur-sm mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold font-orbitron text-white mb-8 text-center">
            <span className="text-cyan-400">DESCUENTOS</span> DISPONIBLES
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {discounts.map((discount, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl border border-gray-600/30"
                role="article"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <discount.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{discount.title}</h4>
                    <span className="text-green-400 font-bold text-sm">{discount.discount}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {discount.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-xl p-6 border border-orange-500/40 mb-12">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-orange-400 mb-2">Información Importante</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Las entradas incluyen acceso a TODAS las tecnologías adaptativas sin costo adicional</li>
                <li>• Los descuentos requieren presentación de credencial válida en el evento</li>
                <li>• Las entradas de asistente requieren compra junto con entrada principal</li>
                <li>• Política de reembolso flexible para situaciones de accesibilidad imprevistas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold font-orbitron text-white mb-6">
            <span className="text-cyan-400">¿TIENES</span> DUDAS?
          </h3>
          
          <p className="text-gray-400 mb-8 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Nuestro equipo de accesibilidad está disponible para ayudarte a elegir 
            la mejor opción según tus necesidades específicas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Contactar equipo de accesibilidad"
            >
              <Users className="w-5 h-5" />
              Consultar Accesibilidad
            </button>
            
            <button 
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-magenta-500 text-magenta-400 font-semibold rounded-lg hover:bg-magenta-500 hover:text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-magenta-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Ver preguntas frecuentes sobre entradas"
            >
              <Info className="w-5 h-5" />
              Preguntas Frecuentes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketsAndAccess;