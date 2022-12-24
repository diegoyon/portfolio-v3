import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Home from './sections/Home/Home';
import Navbar from './components/Navbar';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import './App.css';

function App() {
  return (
    <>
      <main>
        <Navbar />

        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
