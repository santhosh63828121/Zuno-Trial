import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Monitor, Camera, Code, Smartphone, TrendingUp, Star, Award, Users } from "lucide-react";
import Robot3D from "../components/Robot3D";

// ✅ Correct GSAP imports
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Animations
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.3, ease: "power3.out" }
      );
    }

    if (servicesRef.current) {
      gsap.fromTo(servicesRef.current.children,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );
    }

    if (statsRef.current) {
      gsap.fromTo(statsRef.current.children,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          }
        }
      );
    }
  }, []);

  const services = [
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Innovative visual solutions that capture your brand essence with artistic excellence',
      path: '/services/creative-design',
      gradient: 'from-emerald/20 to-gold/20'
    },
    {
      icon: Monitor,
      title: 'Modern Design',
      description: 'Contemporary interfaces with cutting-edge aesthetics and premium user experiences',
      path: '/services/modern-design',
      gradient: 'from-primary-bright/20 to-emerald/20'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Design',
      description: 'Strategic designs that convert and engage audiences with measurable results',
      path: '/services/marketing-design',
      gradient: 'from-accent/20 to-primary-bright/20'
    },
    {
      icon: Camera,
      title: 'Photo Editing',
      description: 'Professional retouching and enhancement services with meticulous attention to detail',
      path: '/services/photo-editing',
      gradient: 'from-gold/20 to-accent/20'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack development with modern technologies and premium performance standards',
      path: '/services/web-development',
      gradient: 'from-primary/20 to-primary-bright/20'
    },
    {
      icon: Smartphone,
      title: 'Web Applications',
      description: 'Interactive web apps that deliver exceptional UX with luxury-grade functionality',
      path: '/services/web-applications',
      gradient: 'from-emerald/20 to-primary/20'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '150+', label: 'Happy Clients', icon: Users },
    { number: '5+', label: 'Years Experience', icon: TrendingUp },
  ];

  const portfolioItems = [
    {
      title: 'Luxury Brand Identity',
      category: 'Premium Branding',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'E-commerce Excellence',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Mobile App Interface',
      category: 'UI/UX Design',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Marketing Campaign',
      category: 'Strategic Design',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Photography Portfolio',
      category: 'Visual Arts',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const blogPosts = [
    {
      title: 'The Future of Luxury Web Design',
      excerpt: 'Explore the latest trends in premium digital experiences and luxury brand aesthetics.',
      date: 'Jan 15, 2025',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Creating Timeless Brand Identities',
      excerpt: 'Learn the principles behind designing brand identities that stand the test of time.',
      date: 'Jan 12, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Premium User Experience Design',
      excerpt: 'Master the art of creating interfaces that exude elegance and sophistication.',
      date: 'Jan 10, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen font-montserrat">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 bg-gradient-luxury">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div ref={heroRef} className="space-y-8">
              <motion.div
                className="caption-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Premium Design & Development
              </motion.div>
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                Crafting <span className="text-gradient-gold">Luxury</span> Digital Experiences
              </motion.h1>
              <motion.p 
                className="body-text max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                We create stunning visual experiences that captivate audiences and drive results with cutting-edge technology, artistic excellence, and unwavering attention to detail.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
              >
                <Link
                  to="/portfolio"
                  className="btn-primary group"
                >
                  View Our Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="btn-secondary"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Robot3D />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/10 rounded-full animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-emerald/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Icon className="text-gold mx-auto mb-4" size={32} />
                  <div className="font-playfair text-4xl md:text-5xl font-bold text-gold mb-2">{stat.number}</div>
                  <div className="font-montserrat text-sm uppercase tracking-wider text-gray-300">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="caption-text mb-4">Our Expertise</div>
            <h2 className="section-title">Premium Services</h2>
            <p className="body-text max-w-4xl mx-auto">
              From creative design to cutting-edge development, we offer comprehensive solutions 
              crafted with the precision and elegance that defines luxury brands.
            </p>
          </motion.div>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className={`luxury-card p-8 group bg-gradient-to-br ${service.gradient} border border-gold/10 hover:border-gold/30`}
                  whileHover={{ y: -8, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-luxury bg-emerald/10 flex items-center justify-center mb-6 group-hover:bg-emerald/20 transition-all duration-300 border border-emerald/20">
                    <Icon className="text-emerald group-hover:scale-110 transition-transform duration-300" size={28} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-4 group-hover:text-emerald transition-colors duration-300">{service.title}</h3>
                  <p className="body-text mb-6 text-base">{service.description}</p>
                  <Link
                    to={service.path}
                    className="inline-flex items-center text-emerald hover:text-gold transition-colors duration-300 group-hover:translate-x-1 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="caption-text mb-4">Our Work</div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="body-text max-w-4xl mx-auto">
              Discover our latest projects and see how we bring creative visions to life 
              with uncompromising quality and attention to detail.
            </p>
          </motion.div>

          <div className="overflow-x-auto pb-6">
            <div className="flex space-x-8" style={{ width: 'max-content' }}>
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="w-80 luxury-card overflow-hidden group"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -12 }}
                >
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8">
                    <span className="caption-text text-xs">{item.category}</span>
                    <h3 className="font-playfair text-xl font-bold mt-2 mb-4 group-hover:text-emerald transition-colors duration-300">{item.title}</h3>
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center text-text-secondary hover:text-emerald transition-colors duration-300 font-medium"
                    >
                      View Project
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="caption-text mb-4">Insights & Inspiration</div>
            <h2 className="section-title">Latest Articles</h2>
            <p className="body-text max-w-4xl mx-auto">
              Stay updated with the latest trends, insights, and inspiration from the world 
              of luxury design and premium development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                className="luxury-card overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center text-xs text-text-secondary mb-4 font-montserrat">
                    <span>{post.date}</span>
                    <span className="mx-3 text-gold">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-4 group-hover:text-emerald transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="body-text mb-6 text-base line-clamp-3">{post.excerpt}</p>
                  <Link
                    to="/blog"
                    className="inline-flex items-center text-emerald hover:text-gold transition-colors duration-300 font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="caption-text mb-6 text-gold">Ready to Begin?</div>
            <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 text-white">
              Let's Create Something <span className="text-gradient-gold">Extraordinary</span>
            </h2>
            <p className="body-text mb-12 text-gray-300 text-xl max-w-3xl mx-auto">
              Transform your vision into a premium digital experience that captivates, 
              converts, and leaves a lasting impression.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/portfolio"
                className="btn-secondary"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;