import React, { useState } from 'react';
import { Play, Volume2, Eye, Image, Headphones } from 'lucide-react';

const CommunityGallery: React.FC = () => {
  const [activeMedia, setActiveMedia] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'visual' | 'audio' | 'tactile'>('visual');

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: 'Conexión a través de la vibración',
      description: 'Participantes experimentando música a través de chalecos vibratorios en NODOS 2024',
      audioDescription: 'Tres personas sonriendo mientras sienten la música a través de dispositivos táctiles, con luces de colores proyectándose en sus rostros.',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'community'
    },
    {
      id: 2,
      type: 'image',
      title: 'Interpretación visual en vivo',
      description: 'Intérprete de lengua de señas traduciendo los beats en tiempo real',
      audioDescription: 'Una intérprete de lengua de señas iluminada por luces neón, traduciendo dinámicamente la música electrónica con expresiones faciales intensas.',
      image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'accessibility'
    },
    {
      id: 3,
      type: 'video',
      title: 'Experiencia sensorial 360°',
      description: 'Visualización completa del sistema de proyecciones inmersivas',
      audioDescription: 'Video mostrando patrones visuales sincronizados que se mueven al ritmo de la música, creando una experiencia envolvente de luz y sonido.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'technology'
    },
    {
      id: 4,
      type: 'image',
      title: 'Diversidad en el dancefloor',
      description: 'La comunidad NODOS celebrando junta sin barreras',
      audioDescription: 'Multitud diversa bailando, incluyendo personas en sillas de ruedas, con bastones y con diferentes capacidades, todos unidos por la música.',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'community'
    },
    {
      id: 5,
      type: 'image',
      title: 'Tecnología al servicio del arte',
      description: 'Plataformas de resonancia transmitiendo frecuencias bajas',
      audioDescription: 'Primer plano de una plataforma vibratoria con LEDs que pulsan al ritmo de la música, mostrando ondas de energía visual.',
      image: 'https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'technology'
    },
    {
      id: 6,
      type: 'audio',
      title: 'Paisaje sonoro adaptado',
      description: 'Muestra de audio espacial 3D diseñado para navegación auditiva',
      audioDescription: 'Clip de audio que demuestra cómo suena la música cuando está optimizada para personas con discapacidad visual.',
      image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'accessibility'
    }
  ];

  const categories = [
    { id: 'all', label: 'Todo', count: galleryItems.length },
    { id: 'community', label: 'Comunidad', count: galleryItems.filter(item => item.category === 'community').length },
    { id: 'technology', label: 'Tecnología', count: galleryItems.filter(item => item.category === 'technology').length },
    { id: 'accessibility', label: 'Accesibilidad', count: galleryItems.filter(item => item.category === 'accessibility').length }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

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
    setActiveMedia(activeMedia === id ? null : id);
  };

  return (
    <section 
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="gallery-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            id="gallery-title" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron text-white mb-6"
          >
            <span className="text-cyan-400">COMUNIDAD</span>
            <span className="block text-2xl sm:text-3xl mt-2 text-gray-300">NODOS</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Momentos reales de conexión, tecnología y música sin barreras
          </p>
        </div>

        {/* View Mode Selector */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button 
            onClick={() => setViewMode('visual')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black ${
              viewMode === 'visual' 
                ? 'bg-cyan-500 text-black' 
                : 'bg-gray-800 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/10'
            }`}
            aria-pressed={viewMode === 'visual'}
            aria-label="Modo visual - Ver imágenes y videos"
          >
            <Eye className="w-4 h-4" />
            Visual
          </button>
          
          <button 
            onClick={() => setViewMode('audio')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black ${
              viewMode === 'audio' 
                ? 'bg-green-500 text-black' 
                : 'bg-gray-800 text-green-400 border border-green-500/40 hover:bg-green-500/10'
            }`}
            aria-pressed={viewMode === 'audio'}
            aria-label="Modo audio - Escuchar descripciones sonoras"
          >
            <Volume2 className="w-4 h-4" />
            Audio
          </button>
          
          <button 
            onClick={() => setViewMode('tactile')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-magenta-500 focus:ring-offset-2 focus:ring-offset-black ${
              viewMode === 'tactile' 
                ? 'bg-magenta-500 text-black' 
                : 'bg-gray-800 text-magenta-400 border border-magenta-500/40 hover:bg-magenta-500/10'
            }`}
            aria-pressed={viewMode === 'tactile'}
            aria-label="Modo táctil - Experiencia con vibración"
            title="Activa la vibración del dispositivo"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 12h20" />
              <path d="M6 8v8" />
              <path d="M10 4v16" />
              <path d="M14 4v16" />
              <path d="M18 8v8" />
            </svg>
            Táctil
          </button>
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
              aria-label={`Filtrar por ${category.label} (${category.count} elementos)`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => {
            const TypeIcon = getTypeIcon(item.type);
            return (
              <div 
                key={item.id}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/30 border border-gray-600/30 transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer focus-within:ring-2 focus-within:ring-cyan-500 focus-within:ring-offset-2 focus-within:ring-offset-black"
                onClick={() => handleMediaInteraction(item.id)}
                role="button"
                tabIndex={0}
                aria-expanded={activeMedia === item.id}
                aria-labelledby={`media-${item.id}-title`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleMediaInteraction(item.id);
                  }
                }}
              >
                {/* Media Container */}
                <div className="relative h-64 overflow-hidden">
                  {viewMode === 'visual' && (
                    <img 
                      src={item.image} 
                      alt={viewMode === 'audio' ? item.audioDescription : item.description}
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
                    <div className="w-full h-full bg-gradient-to-br from-magenta-500/20 to-magenta-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-16 h-16 text-magenta-400 mx-auto mb-4 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 12h20" />
                          <path d="M6 8v8" />
                          <path d="M10 4v16" />
                          <path d="M14 4v16" />
                          <path d="M18 8v8" />
                        </svg>
                        <p className="text-magenta-400 font-semibold">Vibración Activa</p>
                      </div>
                    </div>
                  )}

                  {/* Media Type Indicator */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center text-cyan-400 border border-cyan-500/40">
                    <TypeIcon className="w-5 h-5" />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 
                    id={`media-${item.id}-title`} 
                    className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300"
                  >
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {viewMode === 'audio' ? item.audioDescription : item.description}
                  </p>

                  {/* Interaction Prompt */}
                  <div className={`text-sm transition-all duration-500 ${
                    activeMedia === item.id ? 'text-cyan-400' : 'text-gray-500 group-hover:text-cyan-400'
                  }`}>
                    {viewMode === 'visual' && 'Click para ampliar'}
                    {viewMode === 'audio' && 'Click para reproducir descripción'}
                    {viewMode === 'tactile' && 'Click para activar vibración'}
                  </div>
                </div>

                {/* Active State Indicator */}
                {activeMedia === item.id && (
                  <div className="absolute inset-0 rounded-xl border-2 border-cyan-500 bg-cyan-500/10"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Experience Quote */}
        <div className="text-center bg-gradient-to-r from-black/60 to-gray-900/40 rounded-2xl p-8 sm:p-12 border border-cyan-500/20 backdrop-blur-sm">
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light text-cyan-300 mb-6 italic leading-relaxed">
            "Ver la música, escuchar la imagen"
          </blockquote>
          
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            En NODOS exploramos todas las formas posibles de experimentar el arte. 
            Cada sentido es una puerta de entrada a la experiencia musical.
          </p>

          <button 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-magenta-500 to-magenta-600 text-white font-semibold rounded-lg hover:from-magenta-600 hover:to-magenta-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-magenta-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Ver galería completa de la comunidad NODOS"
          >
            <Image className="w-5 h-5" />
            Ver Galería Completa
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityGallery;