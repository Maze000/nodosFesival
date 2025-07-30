import React from 'react';
import { Network } from 'lucide-react';

const Manifesto: React.FC = () => {
  const manifestoPoints = [
    "Este no es un evento para personas con discapacidad.",
    "Es un evento para todos, hecho desde la diversidad.",
    "Aquí, las diferencias no se toleran, se celebran.",
    "La música no tiene límites. Tampoco nosotros.",
    "Cada cuerpo percibe el ritmo de forma única.",
    "La tecnología amplifica, no define nuestras capacidades."
  ];

  return (
    <section 
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="manifesto-title"
    >
      {/* Background Network Animation */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <g className="animate-pulse-slow">
            {/* Network nodes */}
            <circle cx="200" cy="150" r="4" fill="#00E0FF" opacity="0.6">
              <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="500" cy="100" r="3" fill="#DE3EFF" opacity="0.5">
              <animate attributeName="r" values="3;6;3" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="800" cy="200" r="5" fill="#00FF88" opacity="0.7">
              <animate attributeName="r" values="5;10;5" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="1000" cy="150" r="3" fill="#FF4500" opacity="0.6">
              <animate attributeName="r" values="3;7;3" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="300" cy="400" r="4" fill="#00E0FF" opacity="0.5">
              <animate attributeName="r" values="4;8;4" dur="2.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="700" cy="450" r="3" fill="#DE3EFF" opacity="0.6">
              <animate attributeName="r" values="3;6;3" dur="3.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="900" cy="500" r="4" fill="#00FF88" opacity="0.5">
              <animate attributeName="r" values="4;9;4" dur="3.8s" repeatCount="indefinite" />
            </circle>

            {/* Network connections */}
            <line x1="200" y1="150" x2="500" y2="100" stroke="#00E0FF" strokeWidth="1" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
            </line>
            <line x1="500" y1="100" x2="800" y2="200" stroke="#DE3EFF" strokeWidth="1" opacity="0.2">
              <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.5s" repeatCount="indefinite" />
            </line>
            <line x1="800" y1="200" x2="1000" y2="150" stroke="#00FF88" strokeWidth="1" opacity="0.4">
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite" />
            </line>
            <line x1="300" y1="400" x2="700" y2="450" stroke="#FF4500" strokeWidth="1" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4.2s" repeatCount="indefinite" />
            </line>
            <line x1="700" y1="450" x2="900" y2="500" stroke="#00E0FF" strokeWidth="1" opacity="0.2">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.8s" repeatCount="indefinite" />
            </line>
            <line x1="200" y1="150" x2="300" y2="400" stroke="#DE3EFF" strokeWidth="1" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4.5s" repeatCount="indefinite" />
            </line>
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-12">
            {/* Animated background rings */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
              <div className="w-32 h-32 rounded-full border-2 border-cyan-500/20"></div>
            </div>
            <div className="absolute inset-2 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
              <div className="w-28 h-28 rounded-full border border-magenta-500/30"></div>
            </div>
            
            {/* Central icon container */}
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/10 via-magenta-500/10 to-green-500/10 border-2 border-cyan-500/40 backdrop-blur-sm flex items-center justify-center">
              <Network className="w-16 h-16 text-cyan-400 animate-pulse" aria-hidden="true" />
              
              {/* Floating particles */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-magenta-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-1 w-1 h-1 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
          
          <h2 
            id="manifesto-title" 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-orbitron text-white mb-8 tracking-wide"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-magenta-400 to-green-400 bg-clip-text text-transparent animate-pulse">
              MANIFIESTO
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl mt-4 text-gray-300 font-light tracking-widest">
              NODOS
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Redefiniendo los límites de la experiencia musical
          </p>
        </div>

        {/* Enhanced Manifesto Points */}
        <div className="grid gap-8 mb-20">
          {manifestoPoints.map((point, index) => {
            const colors = [
              { bg: 'from-cyan-500/10 to-cyan-500/5', border: 'border-cyan-500/30', text: 'text-cyan-400', dot: 'bg-cyan-500' },
              { bg: 'from-yellow-500/10 to-yellow-500/5', border: 'border-yellow-500/30', text: 'text-yellow-400', dot: 'bg-yellow-500' },
              { bg: 'from-green-500/10 to-green-500/5', border: 'border-green-500/30', text: 'text-green-400', dot: 'bg-green-500' },
              { bg: 'from-orange-500/10 to-orange-500/5', border: 'border-orange-500/30', text: 'text-orange-400', dot: 'bg-orange-500' },
              { bg: 'from-purple-500/10 to-purple-500/5', border: 'border-purple-500/30', text: 'text-purple-400', dot: 'bg-purple-500' },
              { bg: 'from-blue-500/10 to-blue-500/5', border: 'border-blue-500/30', text: 'text-blue-400', dot: 'bg-blue-500' }
            ];
            const color = colors[index % colors.length];
            
            return (
              <div 
                key={index} 
                className={`group relative bg-gradient-to-r ${color.bg} rounded-2xl p-8 border ${color.border} backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-${color.text.split('-')[1]}-500/20`}
                style={{ 
                  animationDelay: `${index * 0.15}s` 
                }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className={`absolute top-4 right-4 w-16 h-16 border ${color.border} rounded-full animate-spin`} style={{ animationDuration: '10s' }}></div>
                  <div className={`absolute bottom-4 left-4 w-12 h-12 border ${color.border} rounded-full animate-pulse`}></div>
                </div>
                
                <div className="relative flex items-start gap-6">
                  {/* Enhanced node indicator */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-8 h-8 rounded-full ${color.dot} flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-180`}>
                      <div className={`w-3 h-3 rounded-full bg-white/80 animate-pulse`}></div>
                    </div>
                    <div className={`absolute inset-0 w-8 h-8 rounded-full ${color.dot} animate-ping opacity-20`}></div>
                  </div>
                  
                  {/* Enhanced text */}
                  <div className="flex-1">
                    <p className={`text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed group-hover:${color.text} transition-colors duration-500 font-light`}>
                      {point}
                    </p>
                    
                    {/* Decorative line */}
                    <div className={`mt-4 h-0.5 w-0 bg-gradient-to-r ${color.bg.replace('/10', '/50').replace('/5', '/20')} group-hover:w-full transition-all duration-700`}></div>
                  </div>
                  
                  {/* Number indicator */}
                  <div className={`text-6xl font-bold ${color.text} opacity-10 group-hover:opacity-30 transition-opacity duration-500`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                {/* Connection line to next point */}
                {index < manifestoPoints.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-0.5 h-8 bg-gradient-to-b ${color.bg.replace('from-', 'from-').replace('/10', '/50')} to-transparent opacity-50`}></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Statement */}
        <div className="relative text-center bg-gradient-to-r from-black/50 to-black/30 rounded-2xl p-8 sm:p-12 border border-cyan-500/20 backdrop-blur-sm overflow-hidden">
          {/* Fractal Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="fractal-pattern"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  {/* Fractal tree structure */}
                  <g stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cyan-400">
                    <path d="M50,90 L50,60 M50,60 L35,40 M50,60 L65,40 M35,40 L25,25 M35,40 L40,25 M65,40 L60,25 M65,40 L75,25" />
                    <path d="M25,25 L20,15 M25,25 L28,15 M40,25 L38,15 M40,25 L42,15 M60,25 L58,15 M60,25 L62,15 M75,25 L73,15 M75,25 L77,15" />
                  </g>
                  {/* Additional fractal elements */}
                  <g stroke="currentColor" strokeWidth="0.3" fill="none" className="text-magenta-400/50">
                    <circle cx="20" cy="20" r="2" />
                    <circle cx="80" cy="20" r="2" />
                    <circle cx="20" cy="80" r="2" />
                    <circle cx="80" cy="80" r="2" />
                    <circle cx="50" cy="50" r="1.5" />
                  </g>
                  {/* Connecting lines */}
                  <g stroke="currentColor" strokeWidth="0.2" fill="none" className="text-green-400/30">
                    <path d="M20,20 L50,50 L80,20 M20,80 L50,50 L80,80" />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#fractal-pattern)" />
            </svg>
          </div>
          
          {/* Animated geometric overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-magenta-400 rotate-12 animate-pulse"></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-green-400 -rotate-45 animate-bounce" style={{ animationDuration: '3s' }}></div>
          </div>

          <blockquote className="relative z-10 text-xl sm:text-2xl lg:text-3xl font-light text-cyan-300 mb-6 leading-relaxed">
            <div className="relative">
              <div className="absolute inset-0 text-cyan-400 opacity-30 animate-pulse blur-sm">
                &gt; EN NODOS, LA MÚSICA NO SE ESCUCHA, SE <span className="text-magenta-400 font-semibold">[VIVE]</span>.
                <br className="hidden sm:block" />
                &gt; NO SE VE, SE <span className="text-green-400 font-semibold">[SIENTE]</span>.
                <br className="hidden sm:block" />
                &gt; NO SE TOCA, SE <span className="text-orange-400 font-semibold">[CONECTA]</span>.
              </div>
              <div className="relative z-10">
                &gt; EN NODOS, LA MÚSICA NO SE ESCUCHA, SE <span className="text-magenta-400 font-semibold animate-pulse">[VIVE]</span>.
                <br className="hidden sm:block" />
                &gt; NO SE VE, SE <span className="text-green-400 font-semibold animate-pulse">[SIENTE]</span>.
                <br className="hidden sm:block" />
                &gt; NO SE TOCA, SE <span className="text-orange-400 font-semibold animate-pulse">[CONECTA]</span>.
              </div>
            </div>
          </blockquote>
          
          <p className="text-gray-400 text-base sm:text-lg">
            Bienvenido a la red. Ya eres parte del pulso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;