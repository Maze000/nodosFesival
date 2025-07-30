import React from 'react';
import { Play, ShoppingCart, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 
          id="hero-title" 
          className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-orbitron mb-6 leading-tight"
        >
          <span className="block relative">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent animate-pulse opacity-75">NODOS</span>
            <span className="relative bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent animate-bounce" style={{ animationDuration: '3s' }}>NODOS</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 via-violet-700 to-indigo-700 bg-clip-text text-transparent opacity-35 animate-ping" style={{ animationDuration: '4s' }}>NODOS</span>
          </span>
          <span className="block text-sm sm:text-lg lg:text-xl font-normal mt-4 text-gray-300 tracking-wider">
            MÚSICA ELECTRÓNICA INCLUSIVA
          </span>
        </h1>

        {/* Subtitle */}
        <div className="mb-8 space-y-4">
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Siente el ritmo, ve con el cuerpo, conecta con la vibración
          </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Un evento para vivir la música en comunidad, donde cada diferencia es una nueva forma de percibir el arte
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Comprar entrada para NODOS"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Comprar Entrada
            </span>
          </button>
          
          <button 
            className="group relative px-8 py-4 border-2 border-magenta-500 text-magenta-400 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-magenta-500 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-magenta-500/25 focus:outline-none focus:ring-2 focus:ring-magenta-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Conocer tecnología de acceso de NODOS"
          >
            <span className="relative flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Tecnología de Acceso
            </span>
          </button>
        </div>

        {/* Sign Language Animation Placeholder */}
        <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 border-2 border-green-500/40 flex items-center justify-center mb-8 animate-pulse">
          <div className="w-8 h-8 bg-green-500 rounded-full animate-ping"></div>
        </div>

        {/* Event Info */}
        <div className="text-center space-y-2">
          <p className="text-gray-400 text-sm sm:text-base">
            <span className="text-orange-500 font-semibold">15 DE MARZO 2025</span> • 
            <span className="text-cyan-400 font-semibold"> CENTRO CULTURAL DIGITAL</span>
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            Un espacio donde la tecnología amplifica cada sentido
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-500 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-magenta-500 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-32 left-40 w-2 h-2 bg-green-500 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-40 right-20 w-4 h-4 bg-orange-500 rounded-full animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default Hero;