import React from 'react';

const PromoBanner = () => {
  return (
    <section className="w-full bg-white">
      {/*  gap */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 px-2 md:px-4">
        
        {/* COLECCIÓN DE MUJER */}
        <div className="relative w-full h-[950px] overflow-hidden">

          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/women-collection.avif')" }}
          />
          
          {/* Textos y tipografia */}
          <div className="absolute bottom-10 left-0 right-0 text-center text-white z-10 px-4">
            <h2 className="font-versace-title text-[25px] font-semibold tracking-[3px] uppercase mb-2">
              COLECCIÓN DE MUJER
            </h2>
            <a 
              href="#mujer" 
              className="inline-block text-[11px] font-medium tracking-[2.5px] border-b border-white pb-0.5 hover:opacity-75 transition-opacity uppercase"
            >
              DESCUBRE
            </a>
          </div>
        </div>

        {/* COLECCIÓN DE HOMBRE */}
        <div className="relative w-full h-[950px] overflow-hidden">

          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/men-collection.avif')" }}
          />
          
          {/* Textos y tipografia */}
          <div className="absolute bottom-10 left-0 right-0 text-center text-white z-10 px-4">
            <h2 className="font-versace-title text-[25px] font-semibold tracking-[3px] uppercase mb-2">
              COLECCIÓN DE HOMBRE
            </h2>
            <a 
              href="#hombre" 
              className="inline-block text-[11px] font-medium tracking-[2.5px] border-b border-white pb-0.5 hover:opacity-75 transition-opacity uppercase"
            >
              DESCUBRE
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PromoBanner;