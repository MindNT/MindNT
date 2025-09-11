import React, { useState, useRef, useEffect } from 'react';

const Chat = ({ isOpen, onClose, apiEndpoint }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '¡Hola! Soy tu asistente de Nexxus AI. ¿En qué puedo ayudarte hoy?',
      isBot: true,
      timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue.trim(),
      isBot: false,
      timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue.trim(),
          client: 'salinas-somos'
        })
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const data = await response.json();
      
      const botMessage = {
        id: Date.now() + 1,
        text: data.message || 'Lo siento, no pude procesar tu mensaje. ¿Podrías intentar de nuevo?',
        isBot: true,
        timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: 'Disculpa, hubo un problema de conexión. Por favor intenta de nuevo.',
        isBot: true,
        timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]">
      <div className="relative bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[24px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)] transition-all duration-700 ease-out animate-in slide-in-from-bottom-4 slide-in-from-right-4 duration-300">
        {/* Liquid glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.04] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none"></div>
        
        {/* Header */}
        <div className="relative z-10 px-6 py-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src="/logonexxus.png" alt="Nexxus" className="h-8 w-auto object-contain drop-shadow-lg" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-sm font-medium">En línea</span>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
            >
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Chat Area */}
        <div className="relative z-10 p-6">
          {/* Messages */}
          <div className="space-y-4 mb-6 max-h-80 overflow-y-auto scrollbar-none">
            {messages.map((message) => (
              <div key={message.id} className={`flex items-end gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                {message.isBot && (
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                )}
                <div className={`${
                  message.isBot 
                    ? 'bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl rounded-bl-md' 
                    : 'bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl rounded-br-md shadow-lg'
                } p-4 max-w-xs`}>
                  <p className={`text-sm leading-relaxed ${message.isBot ? 'text-white text-left' : 'text-white text-right'}`}>
                    {message.text}
                  </p>
                  <span className={`text-xs mt-2 block ${message.isBot ? 'text-white/50 text-left' : 'text-white/80 text-right'}`}>
                    {message.timestamp}
                  </span>
                </div>
                {!message.isBot && (
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-end gap-3 justify-start">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl rounded-bl-md p-4 max-w-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Area */}
          <form onSubmit={sendMessage} className="flex bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu mensaje..."
              disabled={isLoading}
              className="flex-1 bg-transparent px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none disabled:opacity-50"
            />
            <button 
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="px-4 py-3 bg-blue-500 hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;