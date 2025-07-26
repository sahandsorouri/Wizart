
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './App.css'

function AnimatedSection({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedGridItem({ children, index, className }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'team', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const services = [
    {
      title: "Social Media Management",
      description: "Strategic content creation and community management to boost your brand's online presence.",
      icon: "📱"
    },
    {
      title: "Graphic Design",
      description: "Creative visual solutions for branding, marketing materials, and digital assets.",
      icon: "🎨"
    },
    {
      title: "Event & Experience Design",
      description: "Memorable event planning and experiential marketing that connects with your audience.",
      icon: "✨"
    }
  ]

  const portfolioItems = [
    {
      title: "Luxury Fashion Brand Identity",
      category: "Branding",
      description: "Complete brand identity design including logo, color palette, and brand guidelines for a premium fashion boutique.",
      image: "https://picsum.photos/seed/fashion/400/300",
      client: "Elegance Boutique",
      year: "2024"
    },
    {
      title: "Instagram Growth Campaign",
      category: "Social Media",
      description: "30-day social media campaign that increased follower engagement by 300% and generated 50+ new leads.",
      image: "https://picsum.photos/seed/social/400/300",
      client: "Tech Startup",
      year: "2024"
    },
    {
      title: "Corporate Event Experience",
      category: "Events",
      description: "Design and execution of a product launch event for 200+ attendees with immersive brand experiences.",
      image: "https://picsum.photos/seed/event/400/300",
      client: "Innovation Corp",
      year: "2023"
    },
    {
      title: "E-commerce Website Design",
      category: "Web Design",
      description: "Complete website redesign resulting in 45% increase in conversions and improved user experience.",
      image: "https://picsum.photos/seed/ecommerce/400/300",
      client: "Online Retailer",
      year: "2023"
    },
    {
      title: "Restaurant Brand Package",
      category: "Branding",
      description: "Full branding package including menu design, signage, and marketing materials for a modern restaurant.",
      image: "https://picsum.photos/seed/restaurant/400/300",
      client: "Fusion Kitchen",
      year: "2024"
    },
    {
      title: "Music Festival Campaign",
      category: "Events",
      description: "Creative campaign and visual identity for a 3-day music festival, including stage design and promotional materials.",
      image: "https://picsum.photos/seed/music/400/300",
      client: "Summer Beats Festival",
      year: "2023"
    }
  ]

  const teamMembers = [
    {
      name: "Creative Director",
      role: "Strategy & Vision",
      bio: "Leading creative vision and strategic direction for all projects."
    },
    {
      name: "Lead Designer",
      role: "Visual Design",
      bio: "Crafting beautiful and functional designs that tell your story."
    },
    {
      name: "Social Media Specialist",
      role: "Content & Community",
      bio: "Building engaged communities and creating compelling content."
    }
  ]

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>WizArt</h2>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className={currentSection === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</a>
            <a href="#about" className={currentSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About</a>
            <a href="#services" className={currentSection === 'services' ? 'active' : ''} onClick={() => scrollToSection('services')}>Services</a>
            <a href="#portfolio" className={currentSection === 'portfolio' ? 'active' : ''} onClick={() => scrollToSection('portfolio')}>Portfolio</a>
            <a href="#team" className={currentSection === 'team' ? 'active' : ''} onClick={() => scrollToSection('team')}>Team</a>
            <a href="#contact" className={currentSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              We Create
              <span className="gradient-text"> Exceptional </span>
              Digital Experiences
            </h1>
            <p className="hero-subtitle">
              A creative team specializing in social media management, graphic design, 
              and unforgettable event experiences that elevate your brand.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('portfolio')}>
                View Our Work
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-elements">
              <div className="float-element element-1">🎨</div>
              <div className="float-element element-2">📱</div>
              <div className="float-element element-3">✨</div>
              <div className="float-element element-4">🚀</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection>
        <section id="about" className="about">
          <div className="container">
            <div className="section-header">
              <h2>About WizArt</h2>
              <p>We are a passionate creative team dedicated to bringing your vision to life</p>
            </div>
            <div className="about-content">
              <div className="about-text">
                <h3>Crafting Digital Excellence</h3>
                <p>
                  At WizArt, we believe in the power of creative storytelling and strategic design. 
                  Our team combines artistic vision with data-driven insights to create compelling 
                  digital experiences that resonate with your audience.
                </p>
                <p>
                  From social media campaigns that spark conversations to events that create lasting 
                  memories, we're here to transform your ideas into impactful realities.
                </p>
                <div className="stats">
                  <div className="stat">
                    <h4>50+</h4>
                    <p>Projects Completed</p>
                  </div>
                  <div className="stat">
                    <h4>25+</h4>
                    <p>Happy Clients</p>
                  </div>
                  <div className="stat">
                    <h4>3</h4>
                    <p>Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="about-image">
                <img src="https://picsum.photos/500/400" alt="Team collaboration" />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection>
        <section id="services" className="services">
          <div className="container">
            <div className="section-header">
              <h2>Our Services</h2>
              <p>Comprehensive creative solutions tailored to your needs</p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => (
                <AnimatedGridItem key={index} index={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="service-btn">Learn More</button>
                </AnimatedGridItem>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Portfolio Section */}
      <AnimatedSection>
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-header">
              <h2>Our Portfolio</h2>
              <p>A showcase of our recent creative projects</p>
            </div>
            <div className="portfolio-grid">
              {portfolioItems.map((item, index) => (
                <AnimatedGridItem key={index} index={index} className="portfolio-item">
                  <div className="portfolio-image">
                    <img src={item.image} alt={item.title} />
                    <div className="portfolio-overlay">
                      <div className="portfolio-content">
                        <span className="portfolio-category">{item.category}</span>
                        <h3>{item.title}</h3>
                        <p className="portfolio-description">{item.description}</p>
                        <div className="portfolio-meta">
                          <span>Client: {item.client}</span>
                          <span>{item.year}</span>
                        </div>
                        <button className="portfolio-btn">View Project</button>
                      </div>
                    </div>
                  </div>
                </AnimatedGridItem>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection>
        <section id="team" className="team">
          <div className="container">
            <div className="section-header">
              <h2>Meet Our Team</h2>
              <p>The creative minds behind WizArt</p>
            </div>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <AnimatedGridItem key={index} index={index} className="team-card">
                  <div className="team-avatar">
                    <img src={`https://picsum.photos/seed/${member.name.replace(/\s/g, '')}/200/200`} alt={member.name} />
                  </div>
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </AnimatedGridItem>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-header">
              <h2>Let's Work Together</h2>
              <p>Ready to bring your vision to life? Get in touch with us today.</p>
            </div>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Get In Touch</h3>
                <p>We'd love to hear about your project and discuss how we can help bring your ideas to life.</p>
                <div className="contact-methods">
                  <div className="contact-method">
                    <span className="contact-icon">📧</span>
                    <div>
                      <h4>Email</h4>
                      <p>hello@vizart.com</p>
                    </div>
                  </div>
                  <div className="contact-method">
                    <span className="contact-icon">📱</span>
                    <div>
                      <h4>Social Media</h4>
                      <div className="social-links">
                        <a href="#" target="_blank">Instagram</a>
                        <a href="#" target="_blank">LinkedIn</a>
                        <a href="#" target="_blank">Behance</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Select Service</option>
                    <option value="social-media">Social Media Management</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="events">Event & Experience Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Tell us about your project" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>WizArt</h3>
              <p>Creating exceptional digital experiences</p>
            </div>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 WizArt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
