import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TourCards from './components/TourCards';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <Features />
      <TourCards />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
