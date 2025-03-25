
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Jewelry',
    description: 'Exquisite jewelry pieces with cultural significance',
    imageUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1470&auto=format&fit=crop',
    color: 'bg-gold/10',
    textColor: 'text-gold-dark',
  },
  {
    id: 2,
    name: 'Textiles',
    description: 'Fine silks, embroidered fabrics and traditional attire',
    imageUrl: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1374&auto=format&fit=crop',
    color: 'bg-burgundy/10',
    textColor: 'text-burgundy',
  },
  {
    id: 3,
    name: 'Home Decor',
    description: 'Elegant furnishings and artistic decorative pieces',
    imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1527&auto=format&fit=crop',
    color: 'bg-navy/10',
    textColor: 'text-navy',
  },
  {
    id: 4,
    name: 'Kitchenware',
    description: 'Premium utensils and cookware for the modern home',
    imageUrl: 'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?q=80&w=1470&auto=format&fit=crop',
    color: 'bg-emerald/10',
    textColor: 'text-emerald',
  },
];

const CategorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const childElements = sectionRef.current?.querySelectorAll('.category-card');
    childElements?.forEach((el) => observer.observe(el));
    
    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-24 bg-ivory-light" ref={sectionRef}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-burgundy/10 text-burgundy rounded-full text-sm font-medium mb-4">
            Browse Categories
          </span>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Discover Our <span className="text-burgundy">Premium Collections</span>
          </h2>
          
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our carefully curated categories tailored to celebrate your heritage and traditions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className={`category-card opacity-0 card-hover rounded-2xl overflow-hidden ${
                index === 0 ? 'animate-delay-100' :
                index === 1 ? 'animate-delay-200' :
                index === 2 ? 'animate-delay-300' :
                'animate-delay-400'
              }`}
            >
              <div className="aspect-square relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 group-hover:from-black/80 transition-all duration-300"/>
                <img 
                  src={category.imageUrl} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-white/80 text-sm mb-4 max-w-[90%]">{category.description}</p>
                  <button className="flex items-center text-white gap-1 text-sm font-medium group/btn">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="btn-outline inline-flex items-center gap-2 group">
            View All Categories
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
