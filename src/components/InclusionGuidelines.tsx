import React from 'react';
import { Users, Eye, Volume2, Heart, Accessibility, Shield } from 'lucide-react';

const InclusionGuidelines: React.FC = () => {
  const guidelines = [
    {
      icon: Users,
      title: "Lengua de Señas",
      description: "Intérpretes profesionales de LSE disponibles en todo momento",
      features: [
        "Interpretación simultánea de toda la música",
        "Personal bilingüe LSE-español",
        "Zona preferencial con vista clara",
        "Transmisión en vivo con LSE"
      ],
      color: "cyan"
    },
    {
      icon: Eye,
      title: "Asistencia Visual",
      description: "Guías especializados y tecnología de navegación",
      features: [
        "Perros guía bienvenidos",
        "Asistente personal disponible",
        "Descripciones auditivas detalladas",
        "Rutas podotáctiles en todo el recinto"
      ],
      color: "magenta"
    },
    {
      icon: Volume2,
      title: "Amplificación Auditiva",
      description: "Sistemas compatibles con audífonos e implantes",
      features: [
        "Bucle de inducción magnética",
        "Amplificadores personales",
        "Zona con acústica optimizada",
        "Subtítulos en tiempo real"
      ],
      color: "green"
    },
    {
      icon: Accessibility,
      title: "Movilidad Asistida",
      description: "Espacios y servicios adaptados para sillas de ruedas",
      features: [
        "Plataformas elevadas accesibles",
        "Baños adaptados",
        "Estacionamiento preferencial",
        "Rutas libres de obstáculos"
      ],
      color: "orange"
    },
    {
      icon: Heart,
      title: "Áreas de Descanso",
      description: "Espacios sensoriales de baja estimulación",
      features: [
        "Zona silenciosa disponible",
        "Iluminación regulable",
        "Asientos cómodos",
        "Personal de apoyo especializado"
      ],
      color: "cyan"
    },
    {
      icon: Shield,
      title: "Protocolos de Seguridad",
      description: "Personal capacitado en atención inclusiva",
      features: [
        "Primeros auxilios especializados",
        "Protocolos de emergencia adaptados",
        "Comunicación multimodal",
        "Evacuación asistida"
      ],
      color: "magenta"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: { bg: 'from-cyan-500/20 to-cyan-600/20', border: 'border-cyan-500/40', text: 'text-cyan-400', icon: 'text-cyan-400' },
      magenta: { bg: 'from-magenta-500/20 to-magenta-600/20', border: 'border-magenta-500/40', text: 'text-magenta-400', icon: 'text-magenta-400' },
      green: { bg: 'from-green-500/20 to-green-600/20', border: 'border-green-500/40', text: 'text-green-400', icon: 'text-green-400' },
      orange: { bg: 'from-orange-500/20 to-orange-600/20', border: 'border-orange-500/40', text: 'text-orange-400', icon: 'text-orange-400' }
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section 
      id="inclusion" 
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="inclusion-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            id="inclusion-title" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron text-white mb-6"
          >
            <span className="text-cyan-400">LINEAMIENTOS</span>
            <span className="block text-2xl sm:text-3xl mt-2 text-gray-300">DE INCLUSIÓN</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Estándares de accesibilidad que garantizan una experiencia plena para todas las personas
          </p>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {guidelines.map((guideline, index) => {
            const colorClasses = getColorClasses(guideline.color);
            return (
              <div 
                key={index}
                className={`group p-6 rounded-xl bg-gradient-to-br ${colorClasses.bg} border ${colorClasses.border} backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg focus-within:ring-2 focus-within:ring-${guideline.color}-500 focus-within:ring-offset-2 focus-within:ring-offset-black`}
                role="article"
                aria-labelledby={`guideline-${index}-title`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-black/30 ${colorClasses.icon} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <guideline.icon className="w-8 h-8" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 
                  id={`guideline-${index}-title`} 
                  className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300"
                >
                  {guideline.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
                  {guideline.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2" role="list">
                  {guideline.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="text-sm text-gray-400 flex items-start gap-2"
                      role="listitem"
                    >
                      <div className={`w-2 h-2 rounded-full ${colorClasses.text.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-${guideline.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Commitment Statement */}
        <div className="bg-gradient-to-r from-black/60 to-gray-900/40 rounded-2xl p-8 sm:p-12 border border-cyan-500/20 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold font-orbitron text-white mb-6">
              <span className="text-cyan-400">NUESTRO</span> COMPROMISO
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <blockquote className="text-lg sm:text-xl text-gray-200 italic leading-relaxed">
                "La accesibilidad no es una característica adicional. 
                <span className="text-cyan-400 font-semibold"> Es el diseño base </span> 
                desde el cual construimos cada experiencia."
              </blockquote>
              
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Cada elemento de NODOS ha sido pensado desde la diversidad funcional. 
                  No adaptamos espacios existentes, sino que diseñamos desde cero 
                  <span className="text-magenta-400 font-semibold"> para que cada persona 
                  viva la música de la forma que mejor se adapte a su cuerpo y sentidos</span>.
                </p>
                
                <p className="leading-relaxed">
                  Nuestro equipo incluye personas con capacidades diferentes en todas las fases 
                  de diseño y producción, asegurando que cada decisión esté 
                  <span className="text-green-400 font-semibold"> validada por quienes 
                  realmente utilizarán estos espacios</span>.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 rounded-xl p-6 border border-cyan-500/20">
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">Certificaciones</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    Estándar WCAG 2.1 AA
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    Certificación Universal Design
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    Protocolo de Accesibilidad Cultural
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <button 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Descargar guía completa de accesibilidad"
                >
                  <Shield className="w-5 h-5" />
                  Guía de Accesibilidad
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InclusionGuidelines;