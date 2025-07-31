import React, { useState } from 'react';
import { Play, Volume2, Eye, Image, Headphones } from 'lucide-react';

const CommunityGallery: React.FC = () => {
  const [activeMedia, setActiveMedia] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'visual' | 'audio' | 'tactile'>('visual');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: 'Conexión a través de la vibración',
      description: 'Participantes experimentando música a través de chalecos vibratorios en NODOS 2024',
      audioDescription: 'Tres personas sonriendo mientras sienten la música a través de dispositivos táctiles...',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'community'
    },
    {
      id: 2,
      type: 'image',
      title: 'Interpretación visual en vivo',
      description: 'Intérprete de lengua de señas traduciendo los beats en tiempo real',
      audioDescription: 'Una intérprete de lengua de señas iluminada por luces neón...',
      image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'accessibility'
    },
    {
      id: 3,
      type: 'video',
      title: 'Experiencia sensorial 360°',
      description: 'Visualización completa del sistema de proyecciones inmersivas',
      audioDescription: 'Video mostrando patrones visuales sincronizados...',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'technology'
    },
    {
      id: 4,
      type: 'image',
      title: 'Diversidad en el dancefloor',
      description: 'La comunidad NODOS celebrando junta sin barreras',
      audioDescription: 'Multitud diversa bailando, incluyendo personas en sillas de ruedas...',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'community'
    },
    {
      id: 5,
      type: 'image',
      title: 'Tecnología al servicio del arte',
      description: 'Plataformas de resonancia transmitiendo frecuencias bajas',
      audioDescription: 'Primer plano de una plataforma vibratoria con LEDs...',
      image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'technology'
    },
    {
      id: 6,
      type: 'audio',
      title: 'Paisaje sonoro adaptado',
      description: 'Muestra de audio espacial 3D diseñado para navegación auditiva',
      audioDescription: 'Clip de audio que demuestra cómo suena la música...',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'accessibility'
    }
  ];

  const categories = [
    { id: 'all', label: 'Todo', count: galleryItems.length },
    { id: 'community', label: 'Comunidad', count: galleryItems.filter(item => item.category === 'community').length },
    { id: 'technology', label: 'Tecnología', count: galleryItems.filter(item => item.category === 'technology').length },
    { id: 'accessibility', label: 'Accesibilidad', count: galleryItems.filter(item => item.category === 'accessibility').length }
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Play;
      case 'audio': return Headphones;
      default: return Image;
    }
  };

  const handleMediaInteraction = (id: number) => {
    const isActive = activeMedia === id;
    setActiveMedia(isActive ? null : id);

    if (!isActive && viewMode === 'tactile') {
      // Simula vibración del dispositivo
      if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
      }
    }

    if (!isActive && viewMode === 'audio') {
      // Aquí podrías reproducir una descripción con un <audio> dinámico
      console.log('Reproducir descripción de audio para ID:', id);
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="gallery-title">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="gallery-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron text-white mb-6">
            <span className="text-cyan-400">COMUNIDAD</span>
            <span className="block text-2xl sm:text-3xl mt-2 text-gray-300">NODOS</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Momentos reales de conexión, tecnología y música sin barreras
          </p>
        </div>

        {/* View Mode Selector */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {[
            { mode: 'visual', label: 'Visual', icon: <Eye className="w-4 h-4" /> },
            { mode: 'audio', label: 'Audio', icon: <Volume2 className="w-4 h-4" /> },
            {
              mode: 'tactile', label: 'Táctil', icon: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h20" />
                  <path d="M6 8v8" />
                  <path d="M10 4v16" />
                  <path d="M14 4v16" />
                  <path d="M18 8v8" />
                </svg>
              )
            }
          ].map(({ mode, label, icon }) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${
                viewMode === mode
                  ? `bg-${mode === 'audio' ? 'green' : mode === 'tactile' ? 'fuchsia' : 'cyan'}-500 text-black`
                  : `bg-gray-800 text-${mode === 'audio' ? 'green' : mode === 'tactile' ? 'fuchsia' : 'cyan'}-400 border border-${mode === 'audio' ? 'green' : mode === 'tactile' ? 'fuchsia' : 'cyan'}-500/40 hover:bg-${mode === 'audio' ? 'green' : mode === 'tactile' ? 'fuchsia' : 'cyan'}-500/10`
              }`}
              aria-pressed={viewMode === mode}
              aria-label={`Modo ${label.toLowerCase()}`}
            >
              {icon}
              {label}
            </button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black ${
                selectedCategory === category.id
                  ? 'bg-cyan-500 text-black'
                  : 'bg-gray-800 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/10'
              }`}
              aria-pressed={selectedCategory === category.id}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => {
            const TypeIcon = getTypeIcon(item.type);
            return (
              <button
                key={item.id}
                type="button"
                className="group relative overflow-hidden text-left rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/30 border border-gray-600/30 transition-all duration-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
                onClick={() => handleMediaInteraction(item.id)}
                aria-expanded={activeMedia === item.id}
              >
                <div className="relative h-64 overflow-hidden">
                  {viewMode === 'visual' && (
                    <img
                      src={item.image}
                      alt={item.description}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                      loading="lazy"
                    />
                  )}

                  {viewMode === 'audio' && (
                    <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <Volume2 className="w-16 h-16 text-green-400 mx-auto mb-4 animate-pulse" />
                        <p className="text-green-400 font-semibold">Audio Descripción</p>
                      </div>
                    </div>
                  )}

                  {viewMode === 'tactile' && (
                    <div className="w-full h-full bg-gradient-to-br from-fuchsia-500/20 to-fuchsia-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-16 h-16 text-fuchsia-400 mx-auto mb-4 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 12h20" />
                          <path d="M6 8v8" />
                          <path d="M10 4v16" />
                          <path d="M14 4v16" />
                          <path d="M18 8v8" />
                        </svg>
                        <p className="text-fuchsia-400 font-semibold">Vibración Activa</p>
                      </div>
                    </div>
                  )}

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center text-cyan-400 border border-cyan-500/40">
                    <TypeIcon className="w-5 h-5" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {viewMode === 'audio' ? item.audioDescription : item.description}
                  </p>
                  <div className={`text-sm transition-all duration-500 ${
                    activeMedia === item.id ? 'text-cyan-400' : 'text-gray-500 group-hover:text-cyan-400'
                  }`}>
                    {viewMode === 'visual' && 'Click para ampliar'}
                    {viewMode === 'audio' && 'Click para reproducir descripción'}
                    {viewMode === 'tactile' && 'Click para activar vibración'}
                  </div>
                </div>

                {activeMedia === item.id && (
                  <div className="absolute inset-0 rounded-xl border-2 border-cyan-500 bg-cyan-500/10" />
                )}
              </button>
            );
          })}
        </div>

        {/* Quote */}
        <div className="text-center bg-gradient-to-r from-black/60 to-gray-900/40 rounded-2xl p-8 sm:p-12 border border-cyan-500/20 backdrop-blur-sm">
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light text-cyan-300 mb-6 italic leading-relaxed">
            "Ver la música, escuchar la imagen"
          </blockquote>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            En NODOS exploramos todas las formas posibles de experimentar el arte.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 text-white font-semibold rounded-lg hover:from-fuchsia-600 hover:to-fuchsia-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-black">
            <Image className="w-5 h-5" />
            Ver Galería Completa
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityGallery;
