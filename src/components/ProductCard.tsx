
import { Heart } from 'lucide-react';
import { useState } from 'react';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div 
      className="card-hover bg-white rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        {product.isNew && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block px-3 py-1 bg-burgundy text-white text-xs font-medium rounded-full">
              New
            </span>
          </div>
        )}
        
        {product.isFeatured && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block px-3 py-1 bg-gold text-black text-xs font-medium rounded-full">
              Featured
            </span>
          </div>
        )}
        
        <button 
          className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all duration-300 ${
            liked ? 'bg-burgundy text-white' : 'bg-white/80 text-burgundy hover:bg-white'
          }`}
          onClick={() => setLiked(!liked)}
        >
          <Heart className={`h-4 w-4 ${liked ? 'fill-white' : ''}`} />
        </button>
        
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        <div 
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button className="btn-primary">
            View Details
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs text-muted-foreground">{product.category}</span>
            <h3 className="font-medium text-lg line-clamp-1">{product.name}</h3>
          </div>
          <div className="text-right">
            <span className="text-xs text-muted-foreground">Starting at</span>
            <p className="font-semibold text-lg text-burgundy">{formatPrice(product.price)}</p>
          </div>
        </div>
        
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        
        <div className="mt-3 flex items-center">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg 
                key={star} 
                className={`w-4 h-4 ${
                  star <= product.rating ? 'text-gold-dark fill-gold-dark' : 'text-muted-foreground'
                }`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-xs text-muted-foreground">{product.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
