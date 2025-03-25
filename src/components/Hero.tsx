
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      heroRef.current.style.setProperty('--x', `${moveX}px`);
      heroRef.current.style.setProperty('--y', `${moveY}px`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" ref={heroRef}>
      <div 
        className="absolute inset-0 bg-gradient-to-br from-burgundy/10 via-transparent to-gold/10" 
        style={{ transform: 'translate(calc(var(--x, 0) * -0.5), calc(var(--y, 0) * -0.5))' }}
      />
      
      <div 
        className="absolute top-1/4 -right-20 w-72 h-72 bg-burgundy/20 rounded-full blur-3xl" 
        style={{ transform: 'translate(calc(var(--x, 0) * 0.3), calc(var(--y, 0) * 0.3))' }}
      />
      
      <div 
        className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gold/20 rounded-full blur-3xl"
        style={{ transform: 'translate(calc(var(--x, 0) * 0.3), calc(var(--y, 0) * 0.3))' }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <span className="inline-block px-4 py-2 bg-burgundy/10 text-burgundy rounded-full text-sm font-medium animate-fadeIn">
            India's First Premium Dowry Marketplace
          </span>
          
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight animate-fadeIn animate-delay-100">
            <span className="text-burgundy">Celebrating Traditions</span> with Modern Elegance
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-muted-foreground animate-fadeIn animate-delay-200">
            Explore our curated collections of premium dowry items, tailored to match your cultural heritage and preferences.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fadeIn animate-delay-300">
            <button className="btn-primary flex items-center justify-center gap-2 group">
              Explore Collections
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="btn-outline">
              Learn More
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6 animate-fadeIn animate-delay-400">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-burgundy-light" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">1,200+</span> satisfied families
            </p>
          </div>
        </div>
        
        <div 
          className="hidden md:block absolute top-0 right-0 w-1/2 h-full"
          style={{ transform: 'translate(calc(var(--x, 0) * 0.5), calc(var(--y, 0) * 0.5))' }}
        >
          <div className="relative w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/90 backdrop-blur-md rounded-2xl shadow-elegant p-4 animate-float">
              <div className="h-full w-full bg-burgundy/10 rounded-xl flex items-center justify-center">
                <span className="font-serif text-xl text-burgundy">Premium Collections</span>
              </div>
            </div>
            
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white/90 backdrop-blur-md rounded-2xl shadow-elegant p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="h-full w-full bg-gold/10 rounded-xl flex items-center justify-center">
                <span className="font-serif text-xl text-gold-dark">Cultural Heritage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
