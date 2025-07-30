import React, { useState } from 'react';
import { MapPin, Zap, Volume2, Eye, Navigation, Users, Vibrate } from 'lucide-react';

const EventMap: React.FC = () => {
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const [isHighContrast, setIsHighContrast] = useState(false);

  const zones = [
    {
      id: 'vibratoria',
      name: 'Zona Vibratoria',
      description: 'Área equipada con plataformas de resonancia y chalecos táctiles',
      icon: Vibrate,
      color: 'cyan',
      position: { x: 20, y: 30, width: 25, height: 20 }
    },
    {
      id: 'sensorial',
      name: 'Zona Sensorial Baja',
      description: 'Espacio de descanso con estímulos controlados',
      icon: Eye,
      color: 'green',
      position: { x: 60, y: 25, width: 20, height: 15 }
    },
    {
      id: 'escenario',
      name: 'Escenario Principal',
      description: 'Con visuales 360° y sistema de audio espacial',
      icon: Zap,
      color: 'magenta',
      position: { x: 35, y: 10, width: 30, height: 15 }
    },
    {
      id: 'accesible',
      name: 'Ruta Accesible',
      description: 'Senderos podotáctiles y señalización en braille',
      icon: Navigation,
      color: 'orange',
      position: { x: 10, y: 55, width: 80, height: 5 }
    },
    {
      id: 'lse',
      name: 'Stand LSE',
      description: 'Interpretación en lengua de señas española',
      icon: Users,
      color: 'cyan',
      position: { x: 70, y: 45, width: 15, height: 15 }
    },
    {
      id: 'audio',
      name: 'Zona Audio Descriptivo',
      description: 'Área con descripciones sonoras detalladas',
      icon: Volume2,
      color: 'green',
      position: { x: 15, y: 70, width: 20, height: 15 }
    }
  ];

  const Vibrate = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 12h20" />
      <path d="M6 8v8" />
      <path d="M10 4v16" />
      <path d="M14 4v16" />
      <path d="M18 8v8" />
    </svg>
  );

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: { bg: 'bg-cyan-500/30', border: 'border-cyan-500', text: 'text-cyan-400' },
      magenta: { bg: 'bg-magenta-500/30', border: 'border-magenta-500', text: 'text-magenta-400' },
      green: { bg: 'bg-green-500/30', border: 'border-green-500', text: 'text-green-400' },
      orange: { bg: 'bg-orange-500/30', border: 'border-orange-500', text: 'text-orange-400' }
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section 
      id="mapa" 
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="map-title"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            id="map-title" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron text-white mb-6"
          >
            <span className="text-cyan-400">MAPA</span>
            <span className="block text-2xl sm:text-3xl mt-2 text-gray-300">DEL EVENTO</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Navegación espacial diseñada para máxima accesibilidad y experiencia inmersiva
          </p>

          {/* Controls */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button 
              onClick={() => setIsHighContrast(!isHighContrast)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black ${
                isHighContrast 
                  ? 'bg-cyan-500 text-black' 
                  : 'bg-gray-800 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/10'
              }`}
              aria-pressed={isHighContrast}
              aria-label="Activar modo alto contraste"
            >
              <Eye className="w-4 h-4 inline mr-2" />
              Alto Contraste
            </button>
            
            <button 
              className="px-4 py-2 rounded-lg font-semibold bg-gray-800 text-green-400 border border-green-500/40 hover:bg-green-500/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Activar descripción auditiva del mapa"
            >
              <Volume2 className="w-4 h-4 inline mr-2" />
              Audio Descripción
            </button>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm mb-12">
          <div className="relative w-full h-96 sm:h-[500px]">
            {/* Map Background */}
            <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 ${
              isHighContrast ? 'bg-white border-black' : 'bg-gray-800/30 border-gray-600/50'
            }`}>
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>
            </div>

            {/* Zone Areas */}
            {zones.map((zone) => {
              const colorClasses = getColorClasses(zone.color);
              return (
                <div
                  key={zone.id}
                  className={`absolute cursor-pointer transition-all duration-300 rounded-lg border-2 ${
                    activeZone === zone.id 
                      ? `${colorClasses.bg} ${colorClasses.border} scale-105 z-10` 
                      : `bg-gray-700/30 border-gray-500/30 hover:${colorClasses.bg} hover:${colorClasses.border}`
                  } ${isHighContrast ? 'border-4 border-black bg-white' : ''}`}
                  style={{
                    left: `${zone.position.x}%`,
                    top: `${zone.position.y}%`,
                    width: `${zone.position.width}%`,
                    height: `${zone.position.height}%`
                  }}
                  onClick={() => setActiveZone(activeZone === zone.id ? null : zone.id)}
                  onMouseEnter={() => setActiveZone(zone.id)}
                  onMouseLeave={() => setActiveZone(null)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${zone.name}: ${zone.description}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveZone(activeZone === zone.id ? null : zone.id);
                    }
                  }}
                >
                  {/* Zone Icon */}
                  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeZone === zone.id 
                      ? 'bg-black/70 text-white scale-125' 
                      : `bg-black/50 ${colorClasses.text}`
                  } ${isHighContrast ? 'bg-black text-white' : ''}`}>
                    <zone.icon className="w-4 h-4" />
                  </div>

                  {/* Zone Label */}
                  {activeZone === zone.id && (
                    <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap z-20 ${
                      isHighContrast 
                        ? 'bg-black text-white border border-white' 
                        : `bg-black/90 text-white border ${colorClasses.border}`
                    }`}>
                      {zone.name}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Entrance Marker */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-cyan-400">
              <MapPin className="w-6 h-6" />
              <span className="text-sm font-semibold">ENTRADA</span>
            </div>
          </div>
        </div>

        {/* Zone Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((zone) => {
            const colorClasses = getColorClasses(zone.color);
            return (
              <div 
                key={zone.id}
                className={`p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                  activeZone === zone.id 
                    ? `${colorClasses.bg} ${colorClasses.border} shadow-lg scale-105` 
                    : 'bg-gray-800/30 border-gray-600/30 hover:bg-gray-700/30'
                }`}
                role="article"
                aria-labelledby={`zone-${zone.id}-title`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  activeZone === zone.id ? 'bg-black/30' : 'bg-gray-700/50'
                } ${colorClasses.text}`}>
                  <zone.icon className="w-6 h-6" />
                </div>
                
                <h3 
                  id={`zone-${zone.id}-title`} 
                  className="text-lg font-semibold text-white mb-2"
                >
                  {zone.name}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {zone.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 p-6 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-xl border border-cyan-500/20">
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            <span className="text-cyan-400 font-semibold">Nota de Accesibilidad:</span> Todo el recinto cuenta con 
            iluminación adaptativa, señalización en braille, y personal especializado en cada zona.
          </p>
          <button 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Descargar mapa accesible en PDF"
          >
            <MapPin className="w-5 h-5" />
            Descargar Mapa PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventMap;