import React, { useState, useEffect, useRef } from 'react';

const GlassContainer = ({ imageSrc, imageSrc2, alt = 'Image', alt2 = 'Image 2', className = '', ...props }) => {
  const [scale, setScale] = useState(1);
  const [sliderPosition, setSliderPosition] = useState(50); // Percentage from left
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY * 0.0005; // Reduced zoom factor for subtler effect
      setScale(Math.min(newScale, 1.1)); // Reduced cap for minimal zoom
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  // If only one image is provided, fall back to original behavior
  if (!imageSrc2) {
    return (
      <div className="relative group">
        {/* Liquid glass background blur layers */}
        <div className="absolute -inset-12 opacity-80">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/35 to-pink-500/30 rounded-[4rem] blur-3xl transform scale-110 animate-pulse" />
          <div className="absolute inset-2 bg-gradient-to-br from-cyan-400/20 via-blue-400/25 to-purple-400/20 rounded-[3.5rem] blur-2xl" />
          <div className="absolute inset-4 bg-gradient-to-br from-white/15 to-transparent rounded-[3rem] blur-xl" />
        </div>
        
        <div
          className={`relative rounded-3xl p-0 w-auto h-auto flex items-center justify-center overflow-hidden 
                     bg-gradient-to-br from-white/[0.15] via-white/[0.08] to-white/[0.02] 
                     backdrop-blur-2xl border border-white/[0.15] 
                     shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.15)]
                     before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/[0.08] before:to-transparent before:pointer-events-none
                     hover:shadow-[0_16px_48px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]
                     transition-all duration-500 ease-out hover:scale-[1.02] ${className}`}
          style={{ 
            transform: `scale(${scale})`, 
            transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.5s ease-out'
          }}
          {...props}
        >
          {/* Liquid glass inner effects */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none">
            {/* Main glass gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-white/[0.12] via-white/[0.04] to-transparent rounded-3xl" />
            {/* Subtle color reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/[0.03] via-transparent to-purple-400/[0.03] rounded-3xl" />
            {/* Edge enhancement */}
            <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent h-1/2" />
          </div>
          
          <img
            src={imageSrc}
            alt={alt}
            className="relative w-auto h-auto object-contain rounded-2xl z-10 
                     drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)] 
                     transition-transform duration-300 ease-out group-hover:scale-[1.01]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Outer aura and liquid glass effects */}
      <div className="absolute -inset-16 opacity-75">
        {/* Main liquid glass aura */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/25 via-purple-400/30 to-cyan-400/25 rounded-[4rem] blur-3xl transform scale-115 animate-pulse" />
        {/* Secondary depth layer */}
        <div className="absolute inset-4 bg-gradient-to-br from-white/12 via-blue-300/8 to-purple-300/12 rounded-[3rem] blur-2xl" />
        {/* Tertiary shimmer layer */}
        <div className="absolute inset-2 bg-gradient-to-r from-cyan-300/15 via-blue-300/20 to-purple-300/15 rounded-[3.5rem] blur-xl" />
        {/* Subtle shimmer effect */}
        <div className="absolute inset-6 bg-gradient-to-tr from-transparent via-white/15 to-transparent rounded-[2.5rem] blur-xl opacity-80" />
      </div>

      <div
        ref={containerRef}
        className={`relative rounded-3xl p-0 w-auto h-auto flex items-center justify-center overflow-hidden 
                   bg-gradient-to-br from-white/[0.18] via-white/[0.10] to-white/[0.03] 
                   backdrop-blur-3xl border border-white/[0.18] 
                   shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_12px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.05)]
                   before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/[0.10] before:via-white/[0.02] before:to-transparent before:pointer-events-none
                   hover:shadow-[0_20px_60px_rgba(0,0,0,0.15),0_8px_24px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.25)]
                   hover:border-white/[0.22] hover:bg-gradient-to-br hover:from-white/[0.20] hover:via-white/[0.12] hover:to-white/[0.04]
                   transition-all duration-700 ease-out hover:scale-[1.02] ${className}`}
        style={{ 
          transform: `scale(${scale})`, 
          transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.7s ease-out, background 0.7s ease-out, border-color 0.7s ease-out'
        }}
        {...props}
      >
        {/* Enhanced liquid glass inner effects */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden">
          {/* Primary glass reflection */}
          <div className="absolute inset-0 bg-gradient-radial from-white/[0.15] via-white/[0.06] to-transparent rounded-3xl" />
          {/* Apple-like subtle color tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/[0.04] via-transparent via-transparent to-purple-400/[0.04] rounded-3xl" />
          {/* Top edge highlight */}
          <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-b from-white/[0.12] to-transparent h-1/3" />
          {/* Bottom edge depth */}
          <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-t from-black/[0.03] to-transparent h-1/4 bottom-0" />
          {/* Side reflections */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-1/4 bg-gradient-to-r from-white/[0.06] to-transparent rounded-3xl" />
          <div className="absolute right-0 top-1/4 bottom-1/4 w-1/4 bg-gradient-to-l from-white/[0.06] to-transparent rounded-3xl" />
        </div>
        
      {/* Image container to maintain original dimensions */}
      <div className="relative">
        {/* First image (left side) */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
          }}
        >
          <img
            src={imageSrc}
            alt={alt}
            className="relative w-auto h-auto object-contain rounded-2xl z-10 drop-shadow-2xl"
          />
        </div>

        {/* Second image (right side) */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            clipPath: `inset(0 0 0 ${sliderPosition}%)`
          }}
        >
          <img
            src={imageSrc2}
            alt={alt2}
            className="relative w-auto h-auto object-contain rounded-2xl z-10 drop-shadow-2xl"
          />
        </div>

        {/* Base image to set container size (invisible) */}
        <img
          src={imageSrc}
          alt={alt}
          className="relative w-auto h-auto object-contain rounded-2xl opacity-0"
        />

        {/* Slider line and handle */}
        <div 
          className="absolute top-0 bottom-0 z-20 cursor-col-resize select-none"
          style={{ 
            left: `${sliderPosition}%`,
            transform: 'translateX(-50%)'
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Slider line */}
          <div className="w-0.5 h-full bg-white/80 shadow-lg" />
          
          {/* Slider handle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full shadow-lg border-2 border-white/50 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors duration-200">
            <div className="w-1 h-4 bg-gray-600 rounded-full mr-0.5" />
            <div className="w-1 h-4 bg-gray-600 rounded-full ml-0.5" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default GlassContainer;