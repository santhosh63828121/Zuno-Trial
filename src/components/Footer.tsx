import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
  ];

  const serviceLinks = [
    { name: 'Creative Design', path: '/services/creative-design' },
    { name: 'Modern Design', path: '/services/modern-design' },
    { name: 'Marketing Design', path: '/services/marketing-design' },
    { name: 'Photo Editing', path: '/services/photo-editing' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Web Applications', path: '/services/web-applications' },
  ];

  return (
    <footer className="bg-gradient-dark text-text-light">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-playfair text-2xl font-bold text-gold">GraphicDesignEye</h3>
            <p className="font-montserrat text-sm leading-relaxed text-gray-300">
              Premium design and development services that bring your vision to life with cutting-edge technology and creative expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    className="w-12 h-12 bg-gold/10 rounded-luxury flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300 group border border-gold/20 hover:border-gold"
                    aria-label={social.label}
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="font-playfair text-xl font-bold text-text-light">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="font-montserrat text-sm text-gray-300 hover:text-gold transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-playfair text-xl font-bold text-text-light">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="font-montserrat text-sm text-gray-300 hover:text-gold transition-colors duration-300">Home</Link></li>
              <li><Link to="/portfolio" className="font-montserrat text-sm text-gray-300 hover:text-gold transition-colors duration-300">Portfolio</Link></li>
              <li><Link to="/blog" className="font-montserrat text-sm text-gray-300 hover:text-gold transition-colors duration-300">Blog</Link></li>
              <li><Link to="/contact" className="font-montserrat text-sm text-gray-300 hover:text-gold transition-colors duration-300">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="font-playfair text-xl font-bold text-text-light">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gold" />
                <span className="font-montserrat text-sm text-gray-300">contact@graphicdesigneye.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gold" />
                <span className="font-montserrat text-sm text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gold" />
                <span className="font-montserrat text-sm text-gray-300">123 Design St, Creative City</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gold/20 mt-12 pt-8 text-center"
        >
          <p className="font-montserrat text-sm text-gray-400">&copy; 2025 GraphicDesignEye. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;