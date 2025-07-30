import React, { useState } from 'react';
import { Volume2, Eye, Users, Headphones } from 'lucide-react';

const Artists: React.FC = () => {
  const [activeArtist, setActiveArtist] = useState<number | null>(null);

  const artists = [
    {
      name: "SYNTH STORM",
      genre: "Techno Inclusivo",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Pionero en la creación de sets adaptados para experiencia multisensorial",
      accessibility: ["Visual beats", "Vibración sincronizada", "Audio descriptivo"],
      icons: [Eye, Vibrate, Volume2],
      gradient: "from-cyan-500/30 to-blue-600/30"
    },
    {
      name: "NEON PULSE",
      genre: "Electronic Fusion",
      image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Artista sordo que crea música a través de patrones visuales y vibracionales",
      accessibility: ["Lengua de señas", "Proyecciones 360°", "Frecuencias táctiles"],
      icons: [Users, Eye, Headphones],
      gradient: "from-magenta-500/30 to-purple-600/30"
    },
    {
      name: "ECHO WAVES",
      genre: "Ambient Tech",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Especialista en paisajes sonoros espaciales diseñados para navegación auditiva",
      accessibility: ["Audio espacial 3D", "Navegación sonora", "Descripciones detalladas"],
      icons: [Volume2, Headphones, Eye],
      gradient: "from-green-500/30 to-teal-600/30"
    },
    {
      name: "QUANTUM BEAT",
      genre: "Bass Heavy",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Maestro de las frecuencias bajas y la experiencia vibratoria corporal",
      accessibility: ["Plataformas resonantes", "Chalecos vibratorios", "Bajos intensificados"],
      icons: [Vibrate, Volume2, Users],
      gradient: "from-orange-500/30 to-red-600/30"
    },
    {
      name: "DIGITAL SOUL",
      genre: "Progressive House",
      image: "https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Fusiona elementos tradicionales con tecnología adaptativa innovadora",
      accessibility: ["Interpretación visual", "Bucle inductivo", "Contraste adaptativo"],
      icons: [Eye, Headphones, Users],
      gradient: "from-purple-500/30 to-pink-600/30"
    },
    {
      name: "FRACTAL FLOW",
      genre: "Experimental Electronic",
      image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Artista con discapacidad visual que crea experiencias sonoras inmersivas",
      accessibility: ["Navegación táctil", "Audio detallado", "Secuencias hápticas"],
      icons: [Volume2, Vibrate, Headphones],
      gradient: "from-teal-500/30 to-cyan-600/30"
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

  return (
    <section 
      id="artistas" 
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="artists-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            id="artists-title" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron text-white mb-6"
          >
            <span className="text-cyan-400">ARTISTAS</span>
            <span className="block text-2xl sm:text-3xl mt-2 text-gray-300">DEL EVENTO</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Músicos pioneros que rompen barreras y redefinen la experiencia electrónica
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${artist.gradient} border border-cyan-500/20 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer focus-within:ring-2 focus-within:ring-cyan-500 focus-within:ring-offset-2 focus-within:ring-offset-black`}
              onMouseEnter={() => setActiveArtist(index)}
              onMouseLeave={() => setActiveArtist(null)}
              onClick={() => setActiveArtist(activeArtist === index ? null : index)}
              role="button"
              tabIndex={0}
              aria-expanded={activeArtist === index}
              aria-labelledby={`artist-${index}-name`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveArtist(activeArtist === index ? null : index);
                }
              }}
            >
              {/* Artist Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={`${artist.name} - ${artist.genre}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                  loading="lazy"
                />
                
                {/* Glitch Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-magenta-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Accessibility Icons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {artist.icons.map((Icon, iconIndex) => (
                    <div 
                      key={iconIndex}
                      className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center text-cyan-400 border border-cyan-500/40"
                      title={artist.accessibility[iconIndex]}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Artist Info */}
              <div className="p-6">
                <h3 
                  id={`artist-${index}-name`} 
                  className="text-xl sm:text-2xl font-bold font-orbitron text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300"
                >
                  {artist.name}
                </h3>
                
                <p className="text-cyan-400 font-semibold mb-3 text-sm sm:text-base">
                  {artist.genre}
                </p>
                
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  {artist.description}
                </p>

                {/* Accessibility Features */}
                <div className={`space-y-2 transition-all duration-500 overflow-hidden ${
                  activeArtist === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Características de Accesibilidad:</h4>
                  <ul className="space-y-1">
                    {artist.accessibility.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="text-xs text-gray-400 flex items-center gap-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Show More Button */}
                <button 
                  className="mt-4 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
                  aria-label={`Ver más información sobre ${artist.name}`}
                >
                  {activeArtist === index ? 'Ver menos' : 'Ver más'} →
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-magenta-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
            Cada artista aporta una perspectiva única sobre cómo experimentar la música. 
            <span className="text-cyan-400 font-semibold"> Descubre nuevas formas de sentir el ritmo.</span>
          </p>
          <button 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-magenta-500 to-magenta-600 text-white font-semibold rounded-lg hover:from-magenta-600 hover:to-magenta-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-magenta-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Ver programa completo de artistas"
          >
            <Users className="w-5 h-5" />
            Ver Programa Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Artists;