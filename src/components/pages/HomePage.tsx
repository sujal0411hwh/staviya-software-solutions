// HPI 1.7-G
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ArrowRight, Zap, Shield, Rocket, TrendingUp, Users, Award, ChevronRight, Globe, Cpu, Layers, Hexagon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import type { Services, Technologies, BrandStoryMilestones, CompanyStats } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Utility Components ---

const SectionLabel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex items-center gap-3 mb-6 ${className}`}>
    <div className="h-px w-8 bg-primary/50" />
    <span className="text-primary font-mono text-sm tracking-widest uppercase">{children}</span>
  </div>
);

const GeometricBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
    <div className="absolute top-0 left-0 w-full h-full bg-background opacity-90" />
    {/* Grid Overlay */}
    <div 
      className="absolute inset-0 opacity-[0.03]" 
      style={{ 
        backgroundImage: `linear-gradient(to right, #64FFDA 1px, transparent 1px), linear-gradient(to bottom, #64FFDA 1px, transparent 1px)`,
        backgroundSize: '4rem 4rem'
      }} 
    />
    {/* Floating Geometric Shapes */}
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vw] border border-primary/5 rounded-full opacity-20"
    />
    <motion.div 
      animate={{ rotate: -360 }}
      transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      className="absolute top-[10%] -right-[5%] w-[60vw] h-[60vw] border border-secondary/5 rounded-full opacity-20"
    />
  </div>
);

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-magenta-accent origin-left z-50"
      style={{ scaleX }}
    />
  );
};

export default function HomePage() {
  // --- Data Fidelity Protocol: Canonical Data Sources ---
  const [services, setServices] = useState<Services[]>([]);
  const [technologies, setTechnologies] = useState<Technologies[]>([]);
  const [milestones, setMilestones] = useState<BrandStoryMilestones[]>([]);
  const [stats, setStats] = useState<CompanyStats[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // --- Scroll Hooks ---
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // --- Data Fetching (Preserved) ---
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [servicesData, techData, milestonesData, statsData] = await Promise.all([
        BaseCrudService.getAll<Services>('services'),
        BaseCrudService.getAll<Technologies>('technologies'),
        BaseCrudService.getAll<BrandStoryMilestones>('brandstorymilestones'),
        BaseCrudService.getAll<CompanyStats>('companystats')
      ]);
      setServices(servicesData.items);
      setTechnologies(techData.items);
      setMilestones(milestonesData.items.sort((a, b) => (a.year || 0) - (b.year || 0)));
      setStats(statsData.items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)));
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground font-paragraph selection:bg-primary/30 selection:text-primary-foreground overflow-x-clip">
      <ScrollProgress />
      <Header />

      {/* --- HERO SECTION: The Geometric Nexus --- */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <GeometricBackground />
        
        {/* Dynamic Abstract Shapes (Parallax) */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-1/4 left-10 w-64 h-64 border border-primary/10 rounded-full blur-3xl bg-primary/5" />
           <div className="absolute bottom-1/4 right-10 w-96 h-96 border border-magenta-accent/10 rounded-full blur-3xl bg-magenta-accent/5" />
        </motion.div>

        <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-8"
            style={{ opacity: heroOpacity }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-bold tracking-widest uppercase">System Online v2.0</span>
              </div>
              
              <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-foreground to-foreground/50">
                FUTURE <br />
                <span className="text-stroke-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">FORWARD</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl leading-relaxed mb-12 border-l-2 border-primary/30 pl-6">
                Staviya Software Solutions engineers the digital architecture of tomorrow. We transform complex challenges into elegant, geometric precision.
              </p>

              <div className="flex flex-wrap gap-6">
                <Button 
                  size="lg" 
                  className="h-16 px-10 bg-primary text-background hover:bg-primary/90 text-lg font-bold rounded-none border-r-4 border-b-4 border-primary/50 hover:translate-x-1 hover:-translate-y-1 transition-all duration-200"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Initiate Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-16 px-10 border-foreground/20 text-foreground hover:bg-foreground/5 text-lg font-bold rounded-none backdrop-blur-sm"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Systems
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual - Abstract 3D Representation */}
          <motion.div 
            className="lg:col-span-4 relative hidden lg:block h-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-dashed border-primary/20 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-12 border border-dotted border-secondary/20 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-magenta-accent/20 backdrop-blur-xl rounded-2xl border border-white/10 transform rotate-45 flex items-center justify-center shadow-2xl shadow-primary/10">
                      <Hexagon className="w-32 h-32 text-primary opacity-80" strokeWidth={1} />
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* --- BRAND STORY: The Timeline --- */}
      <section id="story" className="relative w-full py-32 bg-dark-gray-background overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sticky Header */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <SectionLabel>Our Legacy</SectionLabel>
                <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 leading-tight">
                  The <span className="text-secondary">Evolution</span> of Excellence
                </h2>
                <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
                  From our inception to our current standing as industry leaders, every milestone represents a leap forward in technological capability.
                </p>
                <div className="hidden lg:block w-24 h-1 bg-primary mt-8" />
              </div>
            </div>

            {/* Timeline Content */}
            <div className="lg:col-span-8 relative">
              {/* Vertical Line */}
              <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />

              <div className="space-y-24">
                {isLoading ? (
                  <div className="text-foreground/50">Loading timeline...</div>
                ) : milestones.length > 0 ? (
                  milestones.map((milestone, index) => (
                    <TimelineItem key={milestone._id} milestone={milestone} index={index} />
                  ))
                ) : (
                  <div className="p-8 border border-dashed border-foreground/20 rounded-lg text-center">
                    No milestones found.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES: The Grid --- */}
      <section id="services" className="relative w-full py-32 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/5 pb-8">
            <div>
              <SectionLabel>Capabilities</SectionLabel>
              <h2 className="font-heading text-5xl md:text-6xl font-bold">
                Core <span className="text-primary">Services</span>
              </h2>
            </div>
            <p className="text-foreground/60 max-w-md text-right mt-6 md:mt-0">
              Engineered solutions designed to scale, perform, and transform your digital infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              <div className="col-span-full text-center py-20">Loading services...</div>
            ) : services.length > 0 ? (
              services.map((service, index) => (
                <ServiceCard key={service._id} service={service} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-foreground/50">No services available</div>
            )}
          </div>
        </div>
      </section>

      {/* --- TECHNOLOGY: The Matrix --- */}
      <section id="technology" className="relative w-full py-32 bg-dark-gray-background border-y border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <SectionLabel className="justify-center">Tech Stack</SectionLabel>
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Powered by <span className="text-magenta-accent">Innovation</span>
            </h2>
            <p className="text-xl text-foreground/60">
              We leverage a cutting-edge ecosystem of technologies to build robust, scalable, and future-proof applications.
            </p>
          </div>

          {isLoading ? (
            <div className="text-center">Loading technologies...</div>
          ) : technologies.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <TechCard key={tech._id} tech={tech} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-foreground/50">No technologies available</div>
          )}
        </div>
      </section>

      {/* --- WHY CHOOSE: The Data --- */}
      <section id="why-choose" className="relative w-full py-32 bg-background overflow-hidden">
        {/* Background Parallax Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionLabel>Why Staviya</SectionLabel>
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8">
                Data-Driven <br />
                <span className="text-secondary">Excellence</span>
              </h2>
              <p className="text-lg text-foreground/60 mb-12 leading-relaxed">
                We don't just write code; we engineer success. Our track record speaks volumes about our commitment to quality, security, and performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {isLoading ? (
                  <div>Loading stats...</div>
                ) : stats.length > 0 ? (
                  stats.map((stat, index) => (
                    <StatItem key={stat._id} stat={stat} index={index} />
                  ))
                ) : (
                  <div className="text-foreground/50">No stats available</div>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 gap-6">
                <TrustCard 
                  icon={<Shield className="w-8 h-8 text-primary" />}
                  title="Enterprise Security"
                  description="Bank-grade encryption and security protocols protecting your intellectual property."
                />
                <TrustCard 
                  icon={<Rocket className="w-8 h-8 text-secondary" />}
                  title="Rapid Deployment"
                  description="Agile CI/CD pipelines ensuring faster time-to-market without compromising quality."
                />
                <TrustCard 
                  icon={<Award className="w-8 h-8 text-magenta-accent" />}
                  title="Award-Winning Team"
                  description="Recognized by industry leaders for design and engineering excellence."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT: The Interface --- */}
      <section id="contact" className="relative w-full py-32 bg-dark-gray-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-24">
          <div className="bg-background border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-20 bg-gradient-to-br from-primary/10 to-background relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="relative z-10">
                  <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                    Initiate <br />Collaboration
                  </h2>
                  <p className="text-foreground/70 mb-12 text-lg">
                    Ready to transform your vision into a digital reality? Our architects are standing by.
                  </p>
                  
                  <div className="space-y-8">
                    <ContactInfoItem icon={<Zap className="w-5 h-5" />} title="Response Time" value="< 24 Hours" />
                    <ContactInfoItem icon={<Globe className="w-5 h-5" />} title="Global Reach" value="Remote-First" />
                    <ContactInfoItem icon={<Users className="w-5 h-5" />} title="Team Access" value="Direct Channel" />
                  </div>
                </div>
              </div>

              <div className="p-12 lg:p-20">
                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                      <Layers className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-2">Transmission Received</h3>
                    <p className="text-foreground/60">We will decode your message and respond shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-mono uppercase tracking-wider text-foreground/50">Name</label>
                        <Input 
                          id="name" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-dark-gray-background border-white/10 focus:border-primary h-12" 
                          placeholder="John Doe" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-mono uppercase tracking-wider text-foreground/50">Email</label>
                        <Input 
                          id="email" 
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-dark-gray-background border-white/10 focus:border-primary h-12" 
                          placeholder="john@example.com" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-mono uppercase tracking-wider text-foreground/50">Company</label>
                      <Input 
                        id="company" 
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-dark-gray-background border-white/10 focus:border-primary h-12" 
                        placeholder="Organization Name" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-mono uppercase tracking-wider text-foreground/50">Project Brief</label>
                      <Textarea 
                        id="message" 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-dark-gray-background border-white/10 focus:border-primary min-h-[150px] resize-none" 
                        placeholder="Describe your requirements..." 
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full h-14 bg-primary text-background font-bold text-lg hover:bg-primary/90">
                      Transmit Request
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// --- Sub-Components for Cleanliness & Performance ---

const TimelineItem = ({ milestone, index }: { milestone: BrandStoryMilestones; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative pl-8 md:pl-16 lg:pl-24">
      {/* Node on the line */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute left-[-5px] md:left-[31px] lg:left-[27px] top-0 w-3 h-3 bg-background border-2 border-primary rounded-full z-10 hidden md:block"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
      >
        <div className="order-2 lg:order-1">
          <span className="inline-block text-6xl font-heading font-black text-white/5 mb-4 absolute -top-10 -left-4 select-none pointer-events-none">
            {milestone.year}
          </span>
          <div className="relative z-10">
            <span className="text-primary font-mono text-xl mb-2 block">{milestone.year}</span>
            <h3 className="text-3xl font-bold text-foreground mb-4">{milestone.milestoneTitle}</h3>
            <p className="text-foreground/70 leading-relaxed mb-4">{milestone.narrativeText}</p>
            {milestone.shortSummary && (
              <p className="text-sm text-foreground/50 italic border-l-2 border-primary/20 pl-4">
                {milestone.shortSummary}
              </p>
            )}
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          {milestone.milestoneImage ? (
            <div className="relative overflow-hidden rounded-lg border border-white/10 group">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src={milestone.milestoneImage}
                alt={milestone.milestoneTitle || "Milestone"}
                width={600}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ) : (
            <div className="w-full h-64 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
              <Layers className="w-12 h-12 text-white/20" />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const ServiceCard = ({ service, index }: { service: Services; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-dark-gray-background border border-white/5 p-8 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <Hexagon className="w-24 h-24 text-primary" />
      </div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
          {service.geometricIconImage ? (
            <Image src={service.geometricIconImage} alt="" width={32} className="w-8 h-8 object-contain" />
          ) : (
            <Cpu className="w-8 h-8 text-primary" />
          )}
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
          {service.serviceName}
        </h3>
        <p className="text-foreground/60 mb-6 line-clamp-3">
          {service.shortDescription}
        </p>
        
        {service.learnMoreUrl && (
          <a href={service.learnMoreUrl} className="inline-flex items-center text-sm font-bold text-foreground hover:text-primary transition-colors">
            Explore Service <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        )}
      </div>
      
      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

const TechCard = ({ tech, index }: { tech: Technologies; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-background border border-white/5 p-6 rounded-xl flex flex-col items-center justify-center text-center hover:border-magenta-accent/30 hover:shadow-lg hover:shadow-magenta-accent/5 transition-all duration-300 group"
    >
      <div className="h-12 w-12 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
        {tech.techIcon ? (
          <Image src={tech.techIcon} alt={tech.technologyName || ""} width={48} className="w-full h-full object-contain" />
        ) : (
          <Cpu className="w-8 h-8 text-foreground/50" />
        )}
      </div>
      <span className="font-bold text-sm text-foreground/80 group-hover:text-foreground transition-colors">
        {tech.technologyName}
      </span>
      {tech.category && (
        <span className="text-[10px] uppercase tracking-wider text-foreground/40 mt-1">
          {tech.category}
        </span>
      )}
    </motion.div>
  );
};

const StatItem = ({ stat, index }: { stat: CompanyStats; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-6 border-l-2 border-primary/20 bg-dark-gray-background/50"
    >
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
        {stat.statisticValue}{stat.unit}
      </div>
      <div className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">
        {stat.label}
      </div>
      <p className="text-xs text-foreground/50">
        {stat.description}
      </p>
    </motion.div>
  );
};

const TrustCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-start gap-6 p-6 rounded-xl bg-dark-gray-background border border-white/5 hover:border-white/10 transition-colors"
  >
    <div className="p-3 bg-background rounded-lg border border-white/5 shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-foreground/60 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const ContactInfoItem = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
      {icon}
    </div>
    <div>
      <div className="text-xs text-foreground/50 uppercase tracking-wider">{title}</div>
      <div className="font-bold text-foreground">{value}</div>
    </div>
  </div>
);