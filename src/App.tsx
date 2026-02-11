import { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#121212]">
      <Header onContactClick={scrollToContact} />
      <Hero onContactClick={scrollToContact} />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Portfolio />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
