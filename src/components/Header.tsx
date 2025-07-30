import React, { useState } from 'react';
import { Menu, X, Volume2, Eye, Users } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#artistas', label: 'Artistas' },
    { href: '#mapa', label: 'Mapa' },
    { href: '#inclusion', label: 'Inclusión' },
    { href: '#talleres', label: 'Talleres' },
    { href: '#entradas', label: 'Entradas' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const accessibilityFeatures = [
    { icon: Volume2, label: 'Audio disponible', ariaLabel: 'Audiodescripción disponible' },
    { icon: Eye, label: 'Alto contraste', ariaLabel: 'Modo alto contraste' },
    { icon: Users, label: 'LSE disponible', ariaLabel: 'Lengua de señas española disponible' },
  ];

  return (
    <header className="relative z-50 bg-black/90 backdrop-blur-sm border-b border-cyan-500/20" role="banner">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#inicio" 
              className="text-2xl sm:text-3xl font-bold font-orbitron text-cyan-400 hover:text-cyan-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg px-2 py-1"
              aria-label="NODOS - Volver al inicio"
            >
              NODOS
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
                  aria-label={`Ir a ${item.label}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Accessibility Tools */}
          <div className="hidden sm:flex items-center space-x-2">
            {accessibilityFeatures.map((feature, index) => (
              <button
                key={index}
                className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
                aria-label={feature.ariaLabel}
                title={feature.label}
              >
                <feature.icon className="w-5 h-5" />
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 transition-colors duration-300"
              aria-expanded={isMenuOpen}
              aria-label="Abrir menú de navegación"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden" role="menu" aria-label="Menú de navegación móvil">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm rounded-lg mt-2 border border-cyan-500/20">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                  aria-label={`Ir a ${item.label}`}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Accessibility Tools */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-cyan-500/20 mt-4">
                {accessibilityFeatures.map((feature, index) => (
                  <button
                    key={index}
                    className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
                    aria-label={feature.ariaLabel}
                    title={feature.label}
                  >
                    <feature.icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;