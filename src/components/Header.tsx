import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', dropdown: [
      { name: 'Creative Design', path: '/services/creative-design' },
      { name: 'Modern Design', path: '/services/modern-design' },
      { name: 'Marketing Design', path: '/services/marketing-design' },
      { name: 'Photo Editing', path: '/services/photo-editing' },
      { name: 'Web Development', path: '/services/web-development' },
      { name: 'Web Applications', path: '/services/web-applications' },
    ]},
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-luxury border-b border-primary-light' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-playfair text-3xl font-bold text-primary hover:text-emerald transition-colors duration-300">
            GraphicDesignEye
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`font-montserrat font-medium text-text-primary hover:text-emerald transition-all duration-300 relative uppercase tracking-wide text-sm ${
                    location.pathname === item.path ? 'text-emerald' : ''
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-4 w-56 bg-white/95 backdrop-blur-md rounded-luxury shadow-luxury-hover opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-primary-light">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-6 py-3 font-montserrat text-text-secondary hover:text-emerald hover:bg-primary-light/30 transition-all duration-200 first:rounded-t-luxury last:rounded-b-luxury"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link
              to="/contact"
              className="btn-primary ml-4"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary hover:text-emerald transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-6 bg-white/95 backdrop-blur-md rounded-luxury shadow-luxury-hover border border-primary-light"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className="block px-6 py-4 font-montserrat text-text-primary hover:text-emerald hover:bg-primary-light/30 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-6 bg-primary-light/20">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-6 py-3 font-montserrat text-text-secondary hover:text-emerald transition-all duration-200 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="p-6">
              <Link
                to="/contact"
                className="btn-primary w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;