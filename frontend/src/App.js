import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// Contexts
import { LanguageProvider } from './contexts/LanguageContext';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <main>
            <Hero />
            <Destinations />
            <About />
            <Testimonials />
            <Blog />
            <Contact />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;