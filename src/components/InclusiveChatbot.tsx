import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Volume2, VolumeX, Accessibility } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const InclusiveChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy el asistente virtual de NODOS. Estoy aquí para ayudarte con información sobre accesibilidad, artistas y el evento. ¿En qué puedo asistirte?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const predefinedResponses: { [key: string]: string } = {
    'accesibilidad': 'NODOS cuenta con múltiples características de accesibilidad: interpretación en lengua de señas, audio descriptivo, navegación táctil, plataformas resonantes para experiencia vibratoria, y bucles inductivos para personas con audífonos.',
    'artistas': 'Nuestros artistas incluyen SYNTH STORM (Techno Inclusivo), NEON PULSE (Electronic Fusion), ECHO WAVES (Ambient Tech), QUANTUM BEAT (Bass Heavy), DIGITAL SOUL (Progressive House), y FRACTAL FLOW (Experimental Electronic). Cada uno especializado en experiencias multisensoriales.',
    'ubicacion': 'El evento se realizará en un espacio completamente accesible con rampas, señalización táctil, iluminación adaptativa y zonas de descanso sensorial.',
    'entradas': 'Las entradas están disponibles con descuentos especiales para personas con discapacidad y acompañantes. Ofrecemos diferentes tipos de acceso según las necesidades específicas.',
    'ayuda': 'Puedo ayudarte con información sobre: accesibilidad, artistas, ubicación, entradas, experiencias sensoriales, y cualquier pregunta sobre el evento NODOS.',
    'experiencia': 'NODOS ofrece experiencias multisensoriales únicas: visuales sincronizadas, vibraciones corporales, aromas ambientales, texturas táctiles y navegación sonora espacial.',
    'hola': '¡Hola! Bienvenido a NODOS. Estoy aquí para ayudarte con cualquier pregunta sobre nuestro evento de música electrónica inclusiva.',
    'gracias': '¡De nada! Es un placer ayudarte. Si tienes más preguntas sobre NODOS, no dudes en preguntarme.'
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }
    
    return 'Gracias por tu pregunta. Para obtener información específica sobre NODOS, puedes preguntarme sobre: accesibilidad, artistas, ubicación, entradas, o experiencias sensoriales. También puedes contactar a nuestro equipo directamente.';
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simular respuesta del bot después de un breve delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickQuestions = [
    '¿Qué accesibilidad tienen?',
    '¿Quiénes son los artistas?',
    '¿Dónde es el evento?',
    '¿Cómo compro entradas?'
  ];

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-magenta-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-500/50 ${
          isOpen ? 'rotate-180' : 'animate-pulse'
        }`}
        aria-label={isOpen ? 'Cerrar chat de ayuda' : 'Abrir chat de ayuda'}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
      </button>

      {/* Ventana del chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-black/95 backdrop-blur-sm border border-purple-500/30 rounded-lg shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-purple-500/30">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="text-white font-semibold">Asistente NODOS</h3>
              <Accessibility className="w-4 h-4 text-cyan-400" />
            </div>
            <button
              onClick={() => setIsAudioEnabled(!isAudioEnabled)}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
              aria-label={isAudioEnabled ? 'Desactivar audio' : 'Activar audio'}
            >
              {isAudioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-purple-600/20 text-white border border-purple-500/30'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Preguntas rápidas */}
          <div className="px-4 py-2 border-t border-purple-500/30">
            <div className="flex flex-wrap gap-1">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInputValue(question);
                    handleSendMessage();
                  }}
                  className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded hover:bg-purple-500/30 transition-colors focus:outline-none focus:ring-1 focus:ring-purple-500"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-purple-500/30">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu pregunta..."
                className="flex-1 px-3 py-2 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                aria-label="Escribe tu pregunta"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="px-3 py-2 bg-gradient-to-r from-purple-500 to-magenta-500 text-white rounded-lg hover:from-purple-600 hover:to-magenta-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Enviar mensaje"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InclusiveChatbot;
