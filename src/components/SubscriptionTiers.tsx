
import { useEffect, useRef, useState } from 'react';
import { Check, Star } from 'lucide-react';

interface TierFeature {
  id: number;
  text: string;
  highlighted?: boolean;
}

interface SubscriptionTier {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  period: string;
  description: string;
  features: TierFeature[];
  recommended?: boolean;
  community: string;
  color: string;
  hoverColor: string;
  textColor: string;
}

const subscriptionTiers: SubscriptionTier[] = [
  {
    id: 1,
    name: 'Rajput Royalty',
    subtitle: 'For Rajput families',
    price: 25000,
    period: 'per month',
    description: 'Access to exclusive royal heritage collections with historical significance.',
    community: 'Rajput',
    features: [
      { id: 1, text: 'Exclusive access to royal heritage collections' },
      { id: 2, text: 'Personal shopper for cultural guidance', highlighted: true },
      { id: 3, text: 'Royal heirloom authentication' },
      { id: 4, text: 'Priority delivery and setup' },
      { id: 5, text: 'Customization of traditional items' },
    ],
    color: 'bg-burgundy',
    hoverColor: 'hover:bg-burgundy-dark',
    textColor: 'text-burgundy',
  },
  {
    id: 2,
    name: 'Jat Prestige',
    subtitle: 'For Jat families',
    price: 18000,
    period: 'per month',
    description: 'Premium agricultural-themed heritage items with modern functionality.',
    community: 'Jat',
    recommended: true,
    features: [
      { id: 1, text: 'Curated agricultural heritage collections' },
      { id: 2, text: 'Land-themed decorative elements', highlighted: true },
      { id: 3, text: 'Modern farmhouse aesthetics' },
      { id: 4, text: 'Handcrafted artisanal items' },
      { id: 5, text: 'Seasonal collection updates' },
    ],
    color: 'bg-gold',
    hoverColor: 'hover:bg-gold-dark',
    textColor: 'text-gold-dark',
  },
  {
    id: 3,
    name: 'Patidar Elegance',
    subtitle: 'For Patidar families',
    price: 15000,
    period: 'per month',
    description: 'Business-inspired collections that blend tradition with entrepreneurial spirit.',
    community: 'Patidar',
    features: [
      { id: 1, text: 'Business-inspired heritage collections' },
      { id: 2, text: 'Networking events with artisans', highlighted: true },
      { id: 3, text: 'Trade route themed decor' },
      { id: 4, text: 'Entrepreneurial household items' },
      { id: 5, text: 'Modern-traditional fusion designs' },
    ],
    color: 'bg-navy',
    hoverColor: 'hover:bg-navy-dark',
    textColor: 'text-navy',
  },
  {
    id: 4,
    name: 'Brahmin Wisdom',
    subtitle: 'For Brahmin families',
    price: 22000,
    period: 'per month',
    description: 'Scholarly and spiritual collections with traditional Vedic influences.',
    community: 'Brahmin',
    features: [
      { id: 1, text: 'Sacred texts and manuscripts replicas' },
      { id: 2, text: 'Traditional puja and ritual items', highlighted: true },
      { id: 3, text: 'Vedic-inspired home décor' },
      { id: 4, text: 'Personalized spiritual consultations' },
      { id: 5, text: 'Exclusive access to scholarly artifacts' },
    ],
    color: 'bg-saffron',
    hoverColor: 'hover:bg-saffron-dark',
    textColor: 'text-saffron-dark',
  },
];

const SubscriptionTiers = () => {
  const [selectedTier, setSelectedTier] = useState<number>(2);
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
    
    const childElements = sectionRef.current?.querySelectorAll('.tier-card');
    childElements?.forEach((el) => observer.observe(el));
    
    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-24 bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-burgundy/10 text-burgundy rounded-full text-sm font-medium mb-4">
            Our Subscription Plans
          </span>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Choose the Perfect <span className="text-burgundy">Subscription</span> for Your Heritage
          </h2>
          
          <p className="mt-4 text-lg text-muted-foreground">
            Select a subscription plan tailored to your cultural background and traditions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {subscriptionTiers.map((tier, index) => (
            <div 
              key={tier.id}
              className={`tier-card opacity-0 relative bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                selectedTier === tier.id 
                  ? 'shadow-elegant border-' + tier.color.split('-')[1] 
                  : 'shadow-soft hover:shadow-elegant border-border'
              } ${
                index === 0 ? 'animate-delay-100' :
                index === 1 ? 'animate-delay-200' :
                'animate-delay-300'
              }`}
              onClick={() => setSelectedTier(tier.id)}
            >
              {tier.recommended && (
                <div className="absolute top-0 inset-x-0">
                  <div className={`text-center py-2 text-sm font-medium text-white ${tier.color}`}>
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`p-8 ${tier.recommended ? 'pt-16' : 'pt-8'}`}>
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${tier.color.replace('bg-', 'bg-') + '/20'} ${tier.textColor} mb-4`}>
                    <Star className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{tier.subtitle}</p>
                </div>
                
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center">
                    <span className="text-3xl font-bold">{formatPrice(tier.price)}</span>
                    <span className="text-muted-foreground ml-2">{tier.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature.id} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 rounded-full p-1 ${tier.color.replace('bg-', 'bg-') + '/20'}`}>
                        <Check className={`w-4 h-4 ${tier.textColor}`} />
                      </div>
                      <span className={`text-sm ${feature.highlighted ? 'font-medium' : ''}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    selectedTier === tier.id 
                      ? tier.color + ' text-white' 
                      : 'bg-muted hover:bg-muted-foreground/20 text-foreground'
                  }`}
                >
                  {selectedTier === tier.id ? 'Current Selection' : 'Select Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionTiers;
