
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background image with subtle parallax */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
          alt="Food background" 
          className="w-full h-full object-cover animate-pan-image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <span className="text-sm md:text-base text-white/90 font-medium uppercase tracking-wider mb-4 opacity-0 animate-fade-in" style={{"--reveal-delay": "1"} as React.CSSProperties}>
        Arts of Cooking
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-bold max-w-4xl leading-tight mb-6 opacity-0 animate-fade-in" style={{"--reveal-delay": "3"} as React.CSSProperties}>
          Experience the Art of <span className="text-foody-300">Fine Dining</span>
        </h1>
        
        <p className="text-white/80 max-w-xl mb-8 text-base md:text-lg opacity-0 animate-fade-in" style={{"--reveal-delay": "5"} as React.CSSProperties}>
        Enjoy a food journey that combines classic flavors with latest preparation methods to produce a memorable meal.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 animate-fade-in" style={{"--reveal-delay": "7"} as React.CSSProperties}>
          <a href="#menu" className="px-8 py-3 rounded-full bg-foody-700 text-white font-medium transition-all duration-300 hover:bg-foody-600 hover:shadow-lg">
            View Our Menu
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full bg-foody-700 text-white font-medium transition-all duration-300 hover:bg-foody-600 hover:shadow-lg">
            Make a Reservation
          </a>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#menu" className="text-white/80 hover:text-white transition-colors duration-300">
          <ArrowDown className="mx-auto" />
          <span className="sr-only">Scroll down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
