import React from 'react';

const FractalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-1 pointer-events-none">
      <div className="absolute inset-0" style={{ filter: 'blur(1px)' }}>
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      </div>
      {/* Líneas curvas diagonales */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 200px 100px at 0% 50%, rgba(168, 85, 247, 0.2), transparent),
            radial-gradient(ellipse 200px 100px at 100% 50%, rgba(124, 58, 237, 0.2), transparent),
            radial-gradient(ellipse 100px 200px at 50% 0%, rgba(99, 102, 241, 0.15), transparent),
            radial-gradient(ellipse 100px 200px at 50% 100%, rgba(139, 92, 246, 0.15), transparent)
          `,
          backgroundSize: '100% 100%'
        }}
      />
      
      {/* Puntos fractales */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.4) 2px, transparent 2px),
            radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.35) 2px, transparent 2px),
            radial-gradient(circle at 30% 80%, rgba(124, 58, 237, 0.4) 2px, transparent 2px),
            radial-gradient(circle at 70% 70%, rgba(99, 102, 241, 0.35) 2px, transparent 2px)
          `,
          backgroundSize: '200px 200px, 250px 250px, 180px 180px, 220px 220px'
        }}
      />
    </div>
  );
};

export default FractalBackground;