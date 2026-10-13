import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* SLIDE 1: RELOJES */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          currentIndex === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/watches.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-16 left-0 right-0 text-center text-white z-20 px-4">
          <h1 className="font-versace-title text-[20px] md:text-[25px] font-normal tracking-[2px] uppercase mb-5 drop-shadow-sm">
            RELOJES OTOÑO-INVIERNO 2026
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-7 font-versace-sans text-[10px] md:text-[10.5px] font-medium tracking-[2.5px]">
            <a href="#relojes-hombre" className="border-b border-white pb-0.5 hover:opacity-75 transition-opacity uppercase">
              HOMBRE
            </a>
            <a href="#relojes-mujer" className="border-b border-white pb-0.5 hover:opacity-75 transition-opacity uppercase">
              MUJER
            </a>
            <a href="#relojes-descubre" className="border-b border-white pb-0.5 hover:opacity-75 transition-opacity uppercase">
              DESCUBRE MÁS
            </a>
          </div>
        </div>
      </div>

      {/* SLIDE 2: OTOÑO-INVIERNO */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          currentIndex === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/autumn-winter.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-16 left-0 right-0 text-center text-white z-20 px-4">
          <h1 className="font-versace-title text-[20px] md:text-[25px] font-normal tracking-[2px] uppercase mb-5 drop-shadow-sm">
            OTOÑO-INVIERNO 2026
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-7 font-versace-sans text-[10px] md:text-[10.5px] font-medium tracking-[2.5px]">
            <a href="#mujer" className="border-b border-white pb-0.5 hover:opacity-75 transition-opacity uppercase">
              MUJER
            </a>
            <a href="#hombre" className="border-b border-white pb-0.5 hover:opacity-75 transition-opacity uppercase">
              HOMBRE
            </a>
          </div>
        </div>
      </div>

      {/* SLIDE 3: GAFAS */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          currentIndex === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/eyewear.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-16 left-0 right-0 text-center text-white z-20 px-4">
          <h1 className="font-versace-title text-[20px] md:text-[25px] font-normal tracking-[2px] uppercase mb-5 drop-shadow-sm">
            GAFAS OTOÑO-INVIERNO 2026
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-7 font-versace-sans text-[10px] md:text-[10.5px] font-medium tracking-[2.5px]">
            <a href="#gafas-hombre" className="border-b border-white pb-0.5 hover:opacity-75 transition-opacity uppercase">
              GAFAS PARA HOMBRE
            </a>
            <a href="#gafas-mujer" className="border-b border-white pb-0.5 hover:opacity-75 transition-opacity uppercase">
              GAFAS PARA MUJER
            </a>
            <a href="#gafas-mas" className="border-b border-white pb-0.5 hover:opacity-75 transition-opacity uppercase">
              DESCUBRE MÁS
            </a>
          </div>
        </div>
      </div>

      {/* Indicadores de diapositiva */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2.5 z-30">
        <button
          onClick={() => setCurrentIndex(0)}
          aria-label="Ir a slide 1"
          className={`h-[1px] transition-all duration-300 ${
            currentIndex === 0 ? 'w-6 bg-white' : 'w-2 bg-white/40'
          }`}
        />
        <button
          onClick={() => setCurrentIndex(1)}
          aria-label="Ir a slide 2"
          className={`h-[1px] transition-all duration-300 ${
            currentIndex === 1 ? 'w-6 bg-white' : 'w-2 bg-white/40'
          }`}
        />
        <button
          onClick={() => setCurrentIndex(2)}
          aria-label="Ir a slide 3"
          className={`h-[1px] transition-all duration-300 ${
            currentIndex === 2 ? 'w-6 bg-white' : 'w-2 bg-white/40'
          }`}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;