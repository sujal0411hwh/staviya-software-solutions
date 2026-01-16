import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    company: [
      { label: 'Our Story', id: 'story' },
      { label: 'Services', id: 'services' },
      { label: 'Technology', id: 'technology' },
      { label: 'Why Choose Us', id: 'why-choose' },
    ],
    services: [
      { label: 'Web Development', id: 'services' },
      { label: 'Mobile Apps', id: 'services' },
      { label: 'Cloud Solutions', id: 'services' },
      { label: 'Consulting', id: 'services' },
    ],
    contact: [
      { icon: Mail, label: 'hello@staviya.com', href: 'mailto:hello@staviya.com' },
      { icon: Phone, label: '+1 (555) 123-4567', href: 'tel:+15551234567' },
      { icon: MapPin, label: 'San Francisco, CA', href: null },
    ],
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="relative w-full bg-dark-gray-background border-t border-primary/20">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-10 right-20 w-64 h-64 border border-primary" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
        <div className="absolute bottom-10 left-20 w-48 h-48 border border-secondary" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
      </div>

      <div className="relative z-10 max-w-[100rem] mx-auto px-8 md:px-16 lg:px-24 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-heading text-3xl font-black text-foreground mb-4">
                <span className="text-primary">Staviya</span>
                <br />
                <span className="text-foreground">Software</span>
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Building the future of software with precision-engineered solutions and innovative technology.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background border border-primary/30 rounded-lg flex items-center justify-center text-foreground hover:text-primary hover:border-primary/60 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-heading text-lg font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-heading text-lg font-bold text-foreground mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-heading text-lg font-bold text-foreground mb-4">Get in Touch</h4>
              <ul className="space-y-3">
                {footerLinks.contact.map((contact) => (
                  <li key={contact.label} className="flex items-start gap-3">
                    <contact.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        {contact.label}
                      </a>
                    ) : (
                      <span className="text-foreground/70">{contact.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-primary/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">
              © {currentYear} Staviya Software Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground/60 hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground/60 hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground/60 hover:text-primary text-sm transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
