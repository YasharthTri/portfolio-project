import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
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

        {/* 4. Education & Qualifications */}
        <Education />

        {/* 5. Professional Experience & Internships */}
        <Experience />

        {/* 6. Skills & Core Competencies */}
        <Skills />

        {/* 7. Practical Projects & Academic Leadership */}
        <Projects />

        {/* 8. Certified Credentials & Badges */}
        <Certifications />

        {/* 9. Curriculum Vitae / Resume */}
        <Resume />

        {/* 10. Contact Information & Inquiries */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}

export default App;
