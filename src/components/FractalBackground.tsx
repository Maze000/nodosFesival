import React from 'react';

const FractalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 opacity-30">
        <svg
          className="w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="fractal-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E0FF" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#DE3EFF" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#00FF88" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="fractal-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF4500" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#00E0FF" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#DE3EFF" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Animated fractal lines */}
          <g className="animate-pulse-slow">
            <path
              d="M0,200 Q480,100 960,200 T1920,200"
              stroke="url(#fractal-gradient-1)"
              strokeWidth="2"
              fill="none"
              className="animate-flow-1"
            />
            <path
              d="M0,400 Q480,500 960,400 T1920,400"
              stroke="url(#fractal-gradient-2)"
              strokeWidth="1.5"
              fill="none"
              className="animate-flow-2"
            />
            <path
              d="M0,600 Q480,700 960,600 T1920,600"
              stroke="url(#fractal-gradient-1)"
              strokeWidth="1"
              fill="none"
              className="animate-flow-3"
            />
            <path
              d="M0,800 Q480,900 960,800 T1920,800"
              stroke="url(#fractal-gradient-2)"
              strokeWidth="2"
              fill="none"
              className="animate-flow-1"
            />
          </g>
          
          {/* Floating nodes */}
          <g className="animate-float">
            <circle cx="300" cy="150" r="3" fill="#00E0FF" opacity="0.6" className="animate-pulse" />
            <circle cx="800" cy="350" r="2" fill="#DE3EFF" opacity="0.4" className="animate-pulse-slow" />
            <circle cx="1200" cy="250" r="4" fill="#00FF88" opacity="0.5" className="animate-pulse" />
            <circle cx="1600" cy="450" r="2.5" fill="#FF4500" opacity="0.6" className="animate-pulse-slow" />
            <circle cx="500" cy="650" r="3.5" fill="#00E0FF" opacity="0.4" className="animate-pulse" />
            <circle cx="1400" cy="750" r="2" fill="#DE3EFF" opacity="0.5" className="animate-pulse-slow" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default FractalBackground;