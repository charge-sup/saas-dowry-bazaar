
import { useEffect, useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-white/90 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-serif font-bold text-burgundy">
            <span className="text-gold">Saas</span> Bhi Kabhi Dowry Thi
          </h1>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-burgundy transition-colors">
              Home
            </Link>
            <Link to="/categories" className="text-foreground hover:text-burgundy transition-colors">
              Categories
            </Link>
            <Link to="/subscriptions" className="text-foreground hover:text-burgundy transition-colors">
              Subscriptions
            </Link>
            <Link to="/about" className="text-foreground hover:text-burgundy transition-colors">
              About Us
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="btn-primary">
              Sign Up
            </button>
          </div>
        </div>

        <button 
          className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white pt-20 z-40 md:hidden">
          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col space-y-6">
              <Link to="/" className="text-lg font-medium" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/categories" className="text-lg font-medium" onClick={() => setMenuOpen(false)}>
                Categories
              </Link>
              <Link to="/subscriptions" className="text-lg font-medium" onClick={() => setMenuOpen(false)}>
                Subscriptions
              </Link>
              <Link to="/about" className="text-lg font-medium" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
              <div className="pt-4 flex flex-col space-y-4">
                <button className="btn-primary w-full">
                  Sign Up
                </button>
                <button className="btn-outline w-full">
                  Login
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
