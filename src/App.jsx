import React from 'react';
import Navbar from './Navbar';
import HeroCarousel from './HeroCarousel';
import Categories from './Categories';
import PromoBanner from './PromoBanner';
import ProductCarousel from './ProductCarousel';
import Footer from './Footer'; // 

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <HeroCarousel />
      <Categories />
      <PromoBanner />
      

<ProductCarousel />
      <Footer />
    </div>
  );
}

export default App;