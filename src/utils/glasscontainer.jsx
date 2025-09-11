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
      <div
        className={`relative rounded-3xl p-0 w-auto h-auto flex items-center justify-center overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/30 ${className}`}
        style={{ 
          transform: `scale(${scale})`, 
          transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
        {...props}
      >
        {/* Inner glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent rounded-3xl pointer-events-none" />
        
        <img
          src={imageSrc}
          alt={alt}
          className="relative w-auto h-auto object-contain rounded-2xl z-10 drop-shadow-2xl"
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative rounded-3xl p-0 w-auto h-auto flex items-center justify-center overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/30 ${className}`}
      style={{ 
        transform: `scale(${scale})`, 
        transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
      {...props}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent rounded-3xl pointer-events-none z-30" />
      
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
  );
};

export default GlassContainer;