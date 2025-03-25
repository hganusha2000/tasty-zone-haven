
import { useState, useEffect } from 'react';
import { MenuIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Chefs', href: '#chefs' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a 
          href="#hero" 
          className="font-serif text-2xl font-bold text-foody-700 transition-all duration-300 hover:text-foody-500"
        >
          Foody Zone
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              //className="text-sm font-medium text-white transition-all duration-300 hover:text-foody-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-foody-300 after:transition-all after:duration-300 hover:after:w-full"
              className="text-sm font-medium text-yellow-500 transition-all duration-300 hover:text-yellow-400"

            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-foody-700 text-white font-medium transition-all duration-300 hover:bg-foody-600 hover:shadow-md"
          >
            Reserve
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="absolute top-5 right-5">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 w-full px-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-foreground transition-all duration-300 hover:text-foody-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="w-full text-center px-5 py-3 rounded-full bg-foody-700 text-white font-medium transition-all duration-300 hover:bg-foody-600 mt-4"
              onClick={() => setIsOpen(false)}
            >
              Reserve
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
