// src/components/Portfolio.tsx
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isSending, setIsSending] = useState(false);

  // Create refs for each section
  const homeRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const sections = [
    { id: 'home', ref: homeRef },
    { id: 'work', ref: workRef },
    { id: 'about', ref: aboutRef },
    { id: 'contact', ref: contactRef },
  ];

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6, // Adjust for sensitivity
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = sections.find(sec => sec.ref.current === entry.target)?.id;
        if (sectionId) {
          setActiveSection(sectionId);
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    if (section.ref.current) {
      observer.observe(section.ref.current);
    }
  });

  return () => {
    sections.forEach(section => {
      if (section.ref.current) {
        observer.unobserve(section.ref.current);
      }
    });
  };
}, []);

  const links = [
    {
      name: "Github",
      url: "https://github.com/halords"
    },
    {
      name: "Linkedin",
      url: "https://linkedin.com/in/harold-erick-jamora-8aa557147/"
    }
  ];

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_8ejug0m",
        "template_fwn1aqq",
        formRef.current!,
        "jZL0QCx1vMiJ9JeJQ"
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current!.reset();
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const projects = [
    {
      id: 1,
      title: "Customer Feedback Management System",
      description: "A full-stack management system for consolidation of online and offline reports.",
      tags: ["VanillaJS", "Node", "Firebase"],
      image: "/images/feedback.png",
      link: "https://fir-7db1b.web.app/",
      github: "https://github.com/halords/feedback"
    },
    {
      id: 2,
      title: "Employee Character Reference Survey",
      description: "A full-stack system for managing character reference survey results of newly appointed and hired employees.",
      tags: ["React", "Vite", "TailwindCSS", "MySQL"],
      image: "/images/bg.png",
      link: "https://bg-survey-yv9o.vercel.app/",
      github: "https://github.com/halords/bg-survey"
    }
  ];

  const scrollToSection = (section: string) => {
    setIsMenuOpen(false);
    setActiveSection(section);
    
    switch(section) {
      case 'home':
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'work':
        workRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans w-full">
      {/* Header */}
      <header className="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-30 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <span className="text-indigo-600">Port</span>folio
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'work', 'about', 'contact'].map((item) => (
              <a
                key={item}
                className={`relative px-1 py-2 uppercase text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === item ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'
                }`}
                onClick={() => scrollToSection(item)}
              >
                {item}
                {activeSection === item && (
                  <motion.span 
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-600"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-gray-900 mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-gray-900 mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <div className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? '-rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden pt-20"
          >
            {['home', 'work', 'about', 'contact'].map((item) => (
              <button
                key={item}
                className={`text-2xl font-medium ${activeSection === item ? 'text-indigo-600' : 'text-gray-700'}`}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-20 w-full">
        {/* Hero Section */}
        <section 
          ref={homeRef}
          className="min-h-screen flex items-center justify-center px-6 w-full"
        >
          <div className="w-full max-w-7xl mx-auto text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Fullstack <span className="text-indigo-600">Developer</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-2xl mb-8"
            >
              I build simple, functional digital experiences with a focus on user interaction and clean design.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
              onClick={() => scrollToSection('work')}
            >
              View My Work
            </motion.button>
          </div>
        </section>

        {/* Work Section */}
        <section 
          ref={workRef}
          className="min-h-screen py-20 px-6 w-full"
        >
          <div className="w-full max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              My Projects
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-full"
                >
                  <div className={`h-64 w-full ${project.image}`}><img src={project.image} /></div>
                  <div className="p-6"><br />
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <div className="flex space-x-10">
                      <a
                        target='_blank'
                        href={project.link}
                        className="text-blue-600 hover:text-blue-800 underline underline-offset-4 transition-colors duration-200"
                      >
                        Visit Webapp
                      </a>
                      <a
                        target='_blank'
                        href={project.github}
                        className="text-blue-600 hover:text-blue-800 underline underline-offset-4 transition-colors duration-200"
                      >
                        Github Repo
                      </a>
                    </div> <br />
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section 
          ref={aboutRef}
          className="min-h-screen py-20 px-6 bg-gray-100 w-full"
        >
          <div className="w-full max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg w-full"
            >
              <div className="flex flex-col md:flex-row gap-8 w-full">
                <div className="w-full md:w-1/3">
                  <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 aspect-square rounded-xl w-full"><img src="/images/profile.jpg" /></div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Hi, I'm Harold</h3>
                  <p className="text-gray-600 mb-4">
                    I'm a casual developer with knowledge in creating modern web applications and digital experiences.
                  </p>
                  <p className="text-gray-600 mb-6">
                    With a background in  development, I bring a unique perspective to every project, ensuring both a functional and technical excellence.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold mb-2">Skills</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>React & Next.js</li>
                        <li>TypeScript</li>
                        <li>Vanilla JavaScript</li>
                        <li>Node.js</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Tools</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>Tailwind CSS</li>
                        <li>Bootstrap</li>
                        <li>Git</li>
                        <li>VS Code</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          ref={contactRef}
          className="min-h-screen py-20 px-6 flex items-center justify-center w-full"
        >
          <div className="w-full max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-indigo-600 text-white rounded-2xl p-8 md:p-12 w-full"
            >
              <div className="text-center w-full">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's work together</h2>
                <p className="text-xl mb-8 opacity-90">
                  Have a project in mind? I'd love to hear about it and see how I can help bring your ideas to life.
                </p>
                <form onSubmit={sendEmail} ref={formRef} className="max-w-lg mx-auto space-y-6 w-full">
                  <div className="w-full">
                    <input 
                      type="text" 
                      name="user_name"
                      placeholder="Your Name" 
                      className="w-full px-6 py-3 rounded-full bg-indigo-700 bg-opacity-50 placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div className="w-full">
                    <input 
                      type="email" 
                      name='user_email'
                      placeholder="Your Email" 
                      className="w-full px-6 py-3 rounded-full bg-indigo-700 bg-opacity-50 placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div className="w-full">
                    <textarea 
                      placeholder="Your Message" 
                      name='message'
                      rows={4}
                      className="w-full px-6 py-3 rounded-2xl bg-indigo-700 bg-opacity-50 placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-gray-100 transition-colors w-full md:w-auto flex items-center justify-center gap-2"
                    disabled={isSending}
                  >
                    {isSending ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-indigo-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 018 8z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 w-full">
        <div className="container mx-auto px-6 text-center w-full">
          <div className="flex justify-center space-x-6 mb-6">
            {links.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                className="hover:text-white transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
          <p className="text-gray-500">© {new Date().getFullYear()} Harold's Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;