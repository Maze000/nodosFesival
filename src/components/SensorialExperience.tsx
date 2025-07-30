import React from 'react';
import { Headphones, Eye, Vibrate, Navigation, Volume2, Zap } from 'lucide-react';

const SensorialExperience: React.FC = () => {
  const experiences = [
    {
      icon: Vibrate,
      title: "Chalecos Vibratorios",
      description: "Siente cada beat y bajo través de patrones táctiles sincronizados con la música",
      color: "cyan",
      gradient: "from-cyan-500/20 to-cyan-600/20",
      border: "border-cyan-500/40",
      iconColor: "text-cyan-400"
    },
    {
      icon: Zap,
      title: "Plataformas de Resonancia",
      description: "Pisos especializados que transmiten vibraciones de frecuencias bajas directamente al cuerpo",
      color: "magenta",
      gradient: "from-magenta-500/20 to-magenta-600/20",
      border: "border-magenta-500/40",
      iconColor: "text-magenta-400"
    },
    {
      icon: Eye,
      title: "Visuales Rítmicos 360º",
      description: "Proyecciones inmersivas que traducen cada elemento musical en colores y formas",
      color: "green",
      gradient: "from-green-500/20 to-green-600/20",
      border: "border-green-500/40",
      iconColor: "text-green-400"
    },
    {
      icon: Volume2,
      title: "Audio Espacial 3D",
      description: "Descripción sonora detallada del ambiente y la música para una experiencia completa",
      color: "orange",
      gradient: "from-orange-500/20 to-orange-600/20",
      border: "border-orange-500/40",
      iconColor: "text-orange-400"
    },
    {
      icon: Navigation,
      title: "Rutas Podotáctiles",
      description: "Senderos táctiles que guían de forma segura por todos los espacios del evento",
      color: "cyan",
      gradient: "from-cyan-500/20 to-cyan-600/20",
      border: "border-cyan-500/40",
      iconColor: "text-cyan-400"
    },
    {
      icon: Headphones,
      title: "Audio Inductivo",
      description: "Sistema compatible con audífonos e implantes para una experiencia auditiva optimizada",
      color: "magenta",
      gradient: "from-magenta-500/20 to-magenta-600/20",
      border: "border-magenta-500/40",
      iconColor: "text-magenta-400"
    }
  ];

  return (
    <section 
      id="experiencia" 
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="experiencia-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            id="experiencia-title" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron text-white mb-6"
          >
            <span className="text-cyan-400">EXPERIENCIA</span>
            <span className="block text-2xl sm:text-3xl mt-2 text-gray-300">SENSORIAL</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Tecnología adaptativa que transforma cada frecuencia en una experiencia multisensorial única
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div 
              key={index} 
              className={`group relative p-6 rounded-xl bg-gradient-to-br ${experience.gradient} border ${experience.border} backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${experience.color}-500/20 focus-within:ring-2 focus-within:ring-${experience.color}-500 focus-within:ring-offset-2 focus-within:ring-offset-black`}
              role="article"
              aria-labelledby={`experience-${index}-title`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-black/30 ${experience.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <experience.icon className="w-8 h-8" aria-hidden="true" />
              </div>

              {/* Content */}
              <h3 
                id={`experience-${index}-title`} 
                className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300"
              >
                {experience.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {experience.description}
              </p>

              {/* Hover Effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-${experience.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              
              {/* Demo Button */}
              <button 
                className={`mt-4 text-sm ${experience.iconColor} hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-${experience.color}-500 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1`}
                aria-label={`Ver demo de ${experience.title}`}
              >
                Ver demo →
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
            Cada tecnología está diseñada para amplificar, no limitar. 
            <span className="text-cyan-400 font-semibold"> La música no se escucha solo con los oídos.</span>
          </p>
          <button 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Explorar todas las tecnologías de acceso"
          >
            <Zap className="w-5 h-5" />
            Explorar Tecnologías
          </button>
        </div>
      </div>
    </section>
  );
};

export default SensorialExperience;