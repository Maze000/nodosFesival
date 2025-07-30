import React from 'react';
import { Heart, Accessibility, Network, Mail, MessageCircle, Phone, Video } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    evento: [
      { label: 'Sobre NODOS', href: '#inicio' },
      { label: 'Artistas', href: '#artistas' },
      { label: 'Mapa del evento', href: '#mapa' },
      { label: 'Talleres', href: '#talleres' },
    ],
    accesibilidad: [
      { label: 'Lineamientos de inclusión', href: '#inclusion' },
      { label: 'Tecnología adaptativa', href: '#experiencia' },
      { label: 'Guía de accesibilidad', href: '#' },
      { label: 'Soporte especializado', href: '#contacto' },
    ],
    comunidad: [
      { label: 'Galería', href: '#' },
      { label: 'Testimonios', href: '#' },
      { label: 'Eventos anteriores', href: '#' },
      { label: 'Colaboradores', href: '#' },
    ],
    legal: [
      { label: 'Política de privacidad', href: '#' },
      { label: 'Términos de uso', href: '#' },
      { label: 'Política de accesibilidad', href: '#' },
      { label: 'Política de cookies', href: '#' },
    ]
  };

  const socialLinks = [
    { 
      label: 'Email', 
      href: 'mailto:accesibilidad@nodos.es', 
      icon: Mail,
      description: 'Contacto por email' 
    },
    { 
      label: 'WhatsApp', 
      href: 'https://wa.me/34600123456', 
      icon: MessageCircle,
      description: 'Chat directo por WhatsApp' 
    },
    { 
      label: 'Teléfono', 
      href: 'tel:+34900654321', 
      icon: Phone,
      description: 'Llamada telefónica' 
    },
    { 
      label: 'Videollamada LSE', 
      href: '#contacto', 
      icon: Video,
      description: 'Videollamada con intérprete LSE' 
    },
  ];

  return (
    <footer className="relative bg-black border-t border-cyan-500/20" role="contentinfo">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 400">
          <g>
            <path d="M0,100 Q300,50 600,100 T1200,100" stroke="#00E0FF" strokeWidth="1" fill="none" opacity="0.3" />
            <path d="M0,200 Q300,250 600,200 T1200,200" stroke="#DE3EFF" strokeWidth="1" fill="none" opacity="0.2" />
            <path d="M0,300 Q300,250 600,300 T1200,300" stroke="#00FF88" strokeWidth="1" fill="none" opacity="0.3" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold font-orbitron text-cyan-400 mb-4">
                NODOS
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Música electrónica inclusiva que conecta cuerpos, sentidos y comunidades. 
                Donde cada diferencia es una nueva forma de percibir el arte.
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Hecho con inclusión en Santiago</span>
              </div>
            </div>
            
            {/* Accessibility Statement */}
            <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-lg border border-cyan-500/20">
              <div className="flex items-start gap-3">
                <Accessibility className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-1">
                    Compromiso de Accesibilidad
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Este sitio cumple con WCAG 2.1 AA y está diseñado para ser accesible 
                    para personas con todas las capacidades.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Evento</h4>
            <nav>
              <ul className="space-y-2" role="list">
                {footerLinks.evento.map((link, index) => (
                  <li key={index} role="listitem">
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded px-1 py-0.5"
                      aria-label={`Ir a ${link.label}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Accessibility Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Accesibilidad</h4>
            <nav>
              <ul className="space-y-2" role="list">
                {footerLinks.accesibilidad.map((link, index) => (
                  <li key={index} role="listitem">
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black rounded px-1 py-0.5"
                      aria-label={`Ir a ${link.label}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Comunidad</h4>
            <nav>
              <ul className="space-y-2" role="list">
                {footerLinks.comunidad.map((link, index) => (
                  <li key={index} role="listitem">
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-magenta-400 transition-colors duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-magenta-500 focus:ring-offset-2 focus:ring-offset-black rounded px-1 py-0.5"
                      aria-label={`Ir a ${link.label}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="text-lg font-semibold text-white mb-6 text-center">
            Contacto Multimodal
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="group flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-600/30 hover:border-cyan-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
                aria-label={social.description}
                title={social.description}
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <nav aria-label="Enlaces legales">
            <ul className="flex flex-wrap justify-center gap-6" role="list">
              {footerLinks.legal.map((link, index) => (
                <li key={index} role="listitem">
                  <a 
                    href={link.href}
                    className="text-gray-500 hover:text-gray-300 transition-colors duration-300 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded px-1 py-0.5"
                    aria-label={`Ver ${link.label}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © {currentYear} NODOS. Todos los derechos reservados.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Diseñado desde la diversidad para la diversidad.
              </p>
            </div>

            {/* Network Symbol */}
            <div className="flex items-center gap-2 text-gray-500">
              <Network className="w-5 h-5 text-cyan-400" />
              <span className="text-xs">
                Conectando diferencias, amplificando capacidades
              </span>
            </div>
          </div>
        </div>

        {/* Event Info */}
        <div className="mt-8 text-center p-6 bg-gradient-to-r from-cyan-500/5 to-magenta-500/5 rounded-xl border border-cyan-500/20">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span><strong className="text-cyan-400">15 DE MARZO 2025</strong></span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-magenta-400 rounded-full animate-pulse"></div>
              <span><strong className="text-magenta-400">CENTRO CULTURAL DIGITAL</strong></span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span><strong className="text-green-400">SANTIAGO, CHILE</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Skip to top link for accessibility */}
      <a 
        href="#inicio"
        className="sr-only focus:not-sr-only fixed bottom-6 right-6 px-4 py-2 bg-cyan-500 text-white rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black z-50"
        aria-label="Volver al inicio de la página"
      >
        Ir al inicio
      </a>
    </footer>
  );
};

export default Footer;