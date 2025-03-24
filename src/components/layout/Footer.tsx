
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-2xl font-bold mb-6">Foody Zone</h2>
            <p className="text-white/70 mb-6">
              Elevating culinary experiences through exceptional ingredients and passionate craftsmanship.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-white/70 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#menu" className="text-white/70 hover:text-white transition-colors duration-300">Menu</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#chefs" className="text-white/70 hover:text-white transition-colors duration-300">Our Chefs</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-white/70">
                123 Gourmet Avenue, Culinary District<br />
                New York, NY 10001
              </li>
              <li className="text-white/70">
                +1 (555) 123-4567
              </li>
              <li className="text-white/70">
                info@foodyzone.com
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to receive updates on special events, new menu items, and seasonal offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 text-white border-0 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-foody-300/50 w-full"
              />
              <button 
                type="submit" 
                className="bg-foody-700 text-white px-4 py-2 rounded-r-lg hover:bg-foody-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <p>© {currentYear} Foody Zone. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
