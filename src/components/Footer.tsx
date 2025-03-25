
import { Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-burgundy text-white">
      <div className="container mx-auto pt-16 pb-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <h2 className="text-2xl font-serif font-bold">
                <span className="text-gold">Saas</span> Bhi Kabhi Dowry Thi
              </h2>
            </Link>
            <p className="text-white/70 mb-6">
              Celebrating traditions with modern elegance. India's first premium dowry marketplace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/categories" className="text-white/70 hover:text-white transition-colors">Categories</Link>
              </li>
              <li>
                <Link to="/subscriptions" className="text-white/70 hover:text-white transition-colors">Subscriptions</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/categories/jewelry" className="text-white/70 hover:text-white transition-colors">Jewelry</Link>
              </li>
              <li>
                <Link to="/categories/textiles" className="text-white/70 hover:text-white transition-colors">Textiles</Link>
              </li>
              <li>
                <Link to="/categories/home-decor" className="text-white/70 hover:text-white transition-colors">Home Decor</Link>
              </li>
              <li>
                <Link to="/categories/kitchenware" className="text-white/70 hover:text-white transition-colors">Kitchenware</Link>
              </li>
              <li>
                <Link to="/categories/electronics" className="text-white/70 hover:text-white transition-colors">Electronics</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Subscribe to Newsletter</h3>
            <p className="text-white/70 mb-4">
              Stay updated with our latest collections and cultural insights.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white/10 text-white border-0 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button className="bg-gold text-burgundy px-4 rounded-r-lg hover:bg-gold-dark transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Saas Bhi Kabhi Dowry Thi. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm">
            <Link to="/terms" className="text-white/70 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="text-white/70 hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
