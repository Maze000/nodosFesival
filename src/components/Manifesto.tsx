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

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 border-2 border-cyan-500/40 mb-8">
            <Network className="w-10 h-10 text-cyan-400" aria-hidden="true" />
          </div>
          
          <h2 
            id="manifesto-title" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron text-white mb-6"
          >
            <span className="text-cyan-400">MANIFIESTO</span>
            <span className="block text-2xl sm:text-3xl mt-2 text-gray-300">NODOS</span>
          </h2>
        </div>

        {/* Manifesto Points */}
        <div className="space-y-8 mb-16">
          {manifestoPoints.map((point, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{ 
                animationDelay: `${index * 0.2}s` 
              }}
            >
              <div className="flex items-start gap-6">
                {/* Node indicator */}
                <div className={`flex-shrink-0 w-4 h-4 rounded-full mt-2 transition-all duration-500 group-hover:scale-150 ${
                  index % 4 === 0 ? 'bg-cyan-500' :
                  index % 4 === 1 ? 'bg-magenta-500' :
                  index % 4 === 2 ? 'bg-green-500' : 'bg-orange-500'
                }`}>
                  <div className={`w-full h-full rounded-full animate-ping ${
                    index % 4 === 0 ? 'bg-cyan-500' :
                    index % 4 === 1 ? 'bg-magenta-500' :
                    index % 4 === 2 ? 'bg-green-500' : 'bg-orange-500'
                  }`}></div>
                </div>
                
                {/* Text */}
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-500 font-light">
                  {point}
                </p>
              </div>
              
              {/* Connection line to next point */}
              {index < manifestoPoints.length - 1 && (
                <div className="ml-2 mt-4 mb-4">
                  <div className={`w-0.5 h-8 ${
                    index % 4 === 0 ? 'bg-gradient-to-b from-cyan-500 to-transparent' :
                    index % 4 === 1 ? 'bg-gradient-to-b from-magenta-500 to-transparent' :
                    index % 4 === 2 ? 'bg-gradient-to-b from-green-500 to-transparent' : 'bg-gradient-to-b from-orange-500 to-transparent'
                  } opacity-30`}></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final Statement */}
        <div className="text-center bg-gradient-to-r from-black/50 to-black/30 rounded-2xl p-8 sm:p-12 border border-cyan-500/20 backdrop-blur-sm">
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light text-cyan-300 mb-6 italic leading-relaxed">
            "En NODOS, la música no se escucha, se <span className="text-magenta-400 font-semibold">vive</span>. 
            <br className="hidden sm:block" />
            No se ve, se <span className="text-green-400 font-semibold">siente</span>. 
            <br className="hidden sm:block" />
            No se toca, se <span className="text-orange-400 font-semibold">conecta</span>."
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