
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import CategorySection from '@/components/CategorySection';
import SubscriptionTiers from '@/components/SubscriptionTiers';
import Footer from '@/components/Footer';
import ProductCard, { Product } from '@/components/ProductCard';
import { ArrowRight } from 'lucide-react';

const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Rajputana Heritage Necklace',
    description: 'Handcrafted gold necklace with traditional Rajput design elements and royal gemstone settings.',
    price: 125000,
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1587&auto=format&fit=crop',
    category: 'Jewelry',
    rating: 4.8,
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Banarasi Silk Wedding Saree',
    description: 'Exquisite hand-woven pure silk saree with intricate gold zari work in traditional motifs.',
    price: 85000,
    imageUrl: 'https://images.unsplash.com/photo-1619925840268-31a49ae02e51?q=80&w=1587&auto=format&fit=crop',
    category: 'Textiles',
    rating: 4.9,
    isNew: true,
  },
  {
    id: 3,
    name: 'Silver Puja Thali Set',
    description: 'Complete silver thali set with intricate engravings, perfect for religious ceremonies.',
    price: 45000,
    imageUrl: 'https://images.unsplash.com/photo-1621248893164-8930e616fb13?q=80&w=1587&auto=format&fit=crop',
    category: 'Home Decor',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Copper and Brass Cookware Set',
    description: 'Traditional copper and brass cookware set, handcrafted by master artisans.',
    price: 32000,
    imageUrl: 'https://images.unsplash.com/photo-1584990347449-8f0e6fdb5282?q=80&w=1587&auto=format&fit=crop',
    category: 'Kitchenware',
    rating: 4.6,
  },
];

const testimonials = [
  {
    id: 1,
    text: "The cultural sensitivity and understanding shown in curating items for our daughter's wedding was exceptional. Every piece resonated with our heritage.",
    author: "Rajesh Singh",
    role: "Rajput Family, Delhi",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
  },
  {
    id: 2,
    text: "Their subscription service made preparing for our daughter's wedding so much easier. The personal shopper's guidance was invaluable in choosing items that respect our traditions.",
    author: "Anita Chaudhary",
    role: "Jat Family, Haryana",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop",
  },
  {
    id: 3,
    text: "The platform offers a perfect blend of traditional values and modern aesthetics. We found unique pieces that showcase our cultural heritage while being practical for modern living.",
    author: "Ketan Patel",
    role: "Patidar Family, Gujarat",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop",
  },
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <CategorySection />
        
        {/* Featured Products Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div className="max-w-2xl">
                <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm font-medium mb-4">
                  Featured Items
                </span>
                
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                  Discover Our <span className="text-burgundy">Premium Selections</span>
                </h2>
                
                <p className="mt-4 text-lg text-muted-foreground">
                  Explore our carefully selected premium items that blend tradition with elegance.
                </p>
              </div>
              
              <button className="btn-outline mt-6 md:mt-0 inline-flex items-center gap-2 group">
                View All Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-24 bg-ivory-light">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-2 bg-burgundy/10 text-burgundy rounded-full text-sm font-medium mb-4">
                Testimonials
              </span>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                What <span className="text-burgundy">Families</span> Are Saying
              </h2>
              
              <p className="mt-4 text-lg text-muted-foreground">
                Hear from families who have celebrated their traditions with our collections.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="bg-white p-8 rounded-2xl shadow-soft relative"
                >
                  <div className="mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className="inline-block w-5 h-5 text-gold fill-gold" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-foreground mb-6 italic">{testimonial.text}</p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.imageUrl} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-medium">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-6 right-8 text-6xl font-serif text-burgundy/10">
                    "
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <SubscriptionTiers />
        
        {/* CTA Section */}
        <section className="py-20 bg-burgundy text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Start Your Cultural Journey Today
              </h2>
              
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of families celebrating their heritage with our premium collections tailored to your cultural background.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="btn-secondary">
                  Explore Collections
                </button>
                <button className="px-6 py-3 border border-white text-white rounded-md font-medium transition-all duration-300 hover:bg-white/10 active:scale-[0.98]">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
