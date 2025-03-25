
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <div className="mb-6 inline-block p-6 rounded-full bg-burgundy/10">
            <span className="text-6xl font-serif font-bold text-burgundy">404</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Page Not Found</h1>
          
          <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
            The page you are looking for might be under development or doesn't exist.
          </p>
          
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <Home className="w-5 h-5" />
            Return to Home
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
