import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-app">
      {/* 1. Header & Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero Introduction */}
        <Hero />

        {/* 3. About Profile */}
        <About />

        {/* 4. Curriculum Vitae / Resume (Shifted after About) */}
        <Resume />

        {/* 5. Education & Academic Background */}
        <Education />

        {/* 6. Professional Experience & Internships */}
        <Experience />

        {/* 7. Skills & Core Competencies */}
        <Skills />

        {/* 8. Practical Projects & Academic Leadership */}
        <Projects />

        {/* 9. Certified Credentials & Badges */}
        <Certifications />

        {/* 10. Contact Information & Inquiries */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}

export default App;
