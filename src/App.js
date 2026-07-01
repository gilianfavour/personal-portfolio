import './App.css';

import NavigationBar from './components/Navbar';
import Hero from './components/HeroSection';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles/Navbar.css';
import './styles/HeroSection.css';
import './styles/About.css';
import './styles/Experience.css';
import './styles/Projects.css';
import './styles/Skills.css';
import './styles/Contact.css';
import './styles/Footer.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
