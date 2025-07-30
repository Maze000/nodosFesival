import React, { useState } from 'react';
import { Calendar, Clock, Users, BookOpen, Mic, Headphones } from 'lucide-react';

const WorkshopsAndTalks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const workshops = [
    {
      id: 1,
      title: "Creación Musical para Personas Sordas",
      type: "workshop",
      duration: "2 horas",
      capacity: "15 personas",
      level: "Principiante",
      description: "Aprende a componer música electrónica utilizando visualización de ondas, vibración y patrones rítmicos visuales.",
      instructor: "DJ NEON PULSE",
      date: "14 Mar 2025",
      time: "14:00 - 16:00",
      accessibility: ["LSE", "Material táctil", "Vibración"],
      color: "cyan"
    },
    {
      id: 2,
      title: "Accesibilidad en la Cultura Electrónica",
      type: "talk",
      duration: "45 min",
      capacity: "100 personas",
      level: "Todos los niveles",
      description: "Mesa redonda sobre cómo la música electrónica puede ser más inclusiva y accesible para todas las comunidades.",
      instructor: "Panel de Expertos",
      date: "15 Mar 2025",
      time: "11:00 - 11:45",
      accessibility: ["LSE", "Audio descripción", "Subtítulos"],
      color: "magenta"
    },
    {
      id: 3,
      title: "Diseño Sonoro Multicanal",
      type: "workshop",
      duration: "3 horas",
      capacity: "20 personas",
      level: "Intermedio",
      description: "Técnicas avanzadas para crear paisajes sonoros que funcionen en sistemas de audio espacial y vibratório.",
      instructor: "ECHO WAVES",
      date: "14 Mar 2025",
      time: "16:30 - 19:30",
      accessibility: ["Audio descriptivo", "Material braille", "Equipo adaptado"],
      color: "green"
    },
    {
      id: 4,
      title: "Tecnología Asistiva en Vivo",
      type: "demo",
      duration: "30 min",
      capacity: "50 personas",
      level: "Todos los niveles",
      description: "Demostración en vivo de chalecos vibratorios, plataformas de resonancia y otros dispositivos de acceso sensorial.",
      instructor: "Equipo Técnico NODOS",
      date: "15 Mar 2025",
      time: "13:00 - 13:30",
      accessibility: ["Experiencia táctil", "LSE", "Audio descripción"],
      color: "orange"
    },
    {
      id: 5,
      title: "Producción Musical Inclusiva",
      type: "workshop",
      duration: "2.5 horas",
      capacity: "12 personas",
      level: "Avanzado",
      description: "Cómo producir tracks pensando en múltiples formas de percepción sensorial desde el proceso creativo.",
      instructor: "DIGITAL SOUL",
      date: "16 Mar 2025",
      time: "10:00 - 12:30",
      accessibility: ["Software adaptado", "LSE", "Material táctil"],
      color: "cyan"
    },
    {
      id: 6,
      title: "Experiencias Immersivas Accesibles",
      type: "talk",
      duration: "1 hora",
      capacity: "80 personas",
      level: "Todos los niveles",
      description: "Cómo diseñar experiencias de VR y AR que sean accesibles para personas con diversas discapacidades.",
      instructor: "FRACTAL FLOW",
      date: "16 Mar 2025",
      time: "15:00 - 16:00",
      accessibility: ["Demo VR adaptado", "LSE", "Audio descripción"],
      color: "magenta"
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos', icon: BookOpen },
    { id: 'workshop', label: 'Talleres', icon: Users },
    { id: 'talk', label: 'Charlas', icon: Mic },
    { id: 'demo', label: 'Demos', icon: Headphones }
  ];

  const filteredWorkshops = selectedCategory === 'all' 
    ? workshops 
    : workshops.filter(workshop => workshop.type === selectedCategory);

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: { bg: 'from-cyan-500/20 to-cyan-600/20', border: 'border-cyan-500/40', text: 'text-cyan-400' },
      magenta: { bg: 'from-magenta-500/20 to-magenta-600/20', border: 'border-magenta-500/40', text: 'text-magenta-400' },
      green: { bg: 'from-green-500/20 to-green-600/20', border: 'border-green-500/40', text: 'text-green-400' },
      orange: { bg: 'from-orange-500/20 to-orange-600/20', border: 'border-orange-500/40', text: 'text-orange-400' }
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'workshop': return Users;
      case 'talk': return Mic;
      case 'demo': return Headphones;
      default: return BookOpen;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'workshop': return 'Taller';
      case 'talk': return 'Charla';
      case 'demo': return 'Demo';
      default: return 'Actividad';
    }
  };

  return (
    <section 
      id="talleres" 
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="workshops-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            id="workshops-title" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron text-white mb-6"
          >
            <span className="text-cyan-400">TALLERES</span>
            <span className="block text-2xl sm:text-3xl mt-2 text-gray-300">Y CHARLAS</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Aprende, experimenta y conecta con la comunidad que está redefiniendo la música electrónica
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button 
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black ${
                selectedCategory === category.id
                  ? 'bg-cyan-500 text-black'
                  : 'bg-gray-800 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/10'
              }`}
              aria-pressed={selectedCategory === category.id}
              aria-label={`Filtrar por ${category.label}`}
            >
              <category.icon className="w-5 h-5" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredWorkshops.map((workshop) => {
            const colorClasses = getColorClasses(workshop.color);
            const TypeIcon = getTypeIcon(workshop.type);
            
            return (
              <div 
                key={workshop.id}
                className={`group p-6 sm:p-8 rounded-xl bg-gradient-to-br ${colorClasses.bg} border ${colorClasses.border} backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg focus-within:ring-2 focus-within:ring-${workshop.color}-500 focus-within:ring-offset-2 focus-within:ring-offset-black`}
                role="article"
                aria-labelledby={`workshop-${workshop.id}-title`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 ${colorClasses.text} text-sm font-semibold`}>
                    <TypeIcon className="w-4 h-4" />
                    {getTypeLabel(workshop.type)}
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="w-4 h-4" />
                      {workshop.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {workshop.time}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 
                  id={`workshop-${workshop.id}-title`} 
                  className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300"
                >
                  {workshop.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
                  {workshop.description}
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Instructor:</span>
                    <p className={`${colorClasses.text} font-semibold`}>{workshop.instructor}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Duración:</span>
                    <p className="text-gray-300">{workshop.duration}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Capacidad:</span>
                    <p className="text-gray-300">{workshop.capacity}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Nivel:</span>
                    <p className="text-gray-300">{workshop.level}</p>
                  </div>
                </div>

                {/* Accessibility Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Accesibilidad:</h4>
                  <div className="flex flex-wrap gap-2">
                    {workshop.accessibility.map((feature, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/40"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button 
                  className={`w-full py-3 bg-gradient-to-r ${colorClasses.bg} border ${colorClasses.border} text-white font-semibold rounded-lg hover:bg-black/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-${workshop.color}-500 focus:ring-offset-2 focus:ring-offset-black`}
                  aria-label={`Reservar lugar en ${workshop.title}`}
                >
                  Reservar Lugar
                </button>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-${workshop.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-black/60 to-gray-900/40 rounded-2xl p-8 sm:p-12 border border-cyan-500/20 backdrop-blur-sm">
          <h3 className="text-2xl sm:text-3xl font-bold font-orbitron text-white mb-6">
            <span className="text-cyan-400">PROGRAMA</span> COMPLETO
          </h3>
          
          <p className="text-gray-400 mb-6 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Descarga el programa completo con horarios detallados, requisitos técnicos 
            y información de accesibilidad para cada actividad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Ver programa completo de talleres y charlas"
            >
              <BookOpen className="w-5 h-5" />
              Ver Programa Completo
            </button>
            
            <button 
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-magenta-500 text-magenta-400 font-semibold rounded-lg hover:bg-magenta-500 hover:text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-magenta-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Reservar múltiples actividades"
            >
              <Users className="w-5 h-5" />
              Reservar Múltiples
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsAndTalks;