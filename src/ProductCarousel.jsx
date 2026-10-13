import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lista de productos del carrusel con sus textos y fotos fijas en public/
  const products = [
    {
      id: 1,
      name: 'Chaquetón marinero acolchado de borreguillo',
      price: 'COP 56,208,400',
      image: '/Product1.png',
    },
    {
      id: 2,
      name: 'Minivestido de bouclé de lana',
      price: 'COP 11,752,700',
      image: '/product2.png',
    },
    {
      id: 3,
      name: 'Botas Gianni de napa hasta la rodilla 90 mm',
      price: 'COP 8,431,300',
      image: '/product3.png',
    },
    {
      id: 4,
      name: 'Minibolso saco de piel Pivot',
      price: 'COP 9,606,600',
      image: '/product4.png',
    },
    {
      id: 5,
      name: 'Reloj V-Square Petite',
      price: 'COP 7,150,000',
      image: '/producto5.png',
    },
    {
      id: 6,
      name: 'Blade collar con cristales',
      price: 'COP 2,300,000',
      image: '/product6.png',
    },
  ];

  // Máximo índice alcanzable para mostrar de a 4 productos
  const maxIndex = products.length - 4;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  return (
    <section className="relative w-full bg-white py-12">
      {/* Botón Flecha Izquierda */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          aria-label="Anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 shadow-md transition-all text-black"
        >
          <ArrowLeft size={18} />
        </button>
      )}

      {/* Botón Flecha Derecha */}
      {currentIndex < maxIndex && (
        <button
          onClick={handleNext}
          aria-label="Siguiente"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 shadow-md transition-all text-black"
        >
          <ArrowRight size={18} />
        </button>
      )}

      {/* Contenedor con movimiento de carrusel */}
      <div className="overflow-hidden w-full px-2 md:px-4">
        <div
          className="flex gap-3 md:gap-4 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 25}%)`,
          }}
        >
          {/* Tarjeta 1: Chaquetón */}
          <div className="w-1/4 flex-shrink-0 flex flex-col">
            <div className="w-full h-[420px] bg-[#f5f5f5] flex items-center justify-center p-6">
              <img
                src={products[0].image}
                alt={products[0].name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="mt-4 text-left">
              <h3 className="font-versace-title text-[13px] md:text-[14px] text-black font-normal">
                {products[0].name}
              </h3>
              <p className="font-sans text-[12px] text-black mt-1 font-normal">
                {products[0].price}
              </p>
            </div>
          </div>

          {/* Tarjeta 2: Minivestido */}
          <div className="w-1/4 flex-shrink-0 flex flex-col">
            <div className="w-full h-[420px] bg-[#f5f5f5] flex items-center justify-center p-6">
              <img
                src={products[1].image}
                alt={products[1].name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="mt-4 text-left">
              <h3 className="font-versace-title text-[13px] md:text-[14px] text-black font-normal">
                {products[1].name}
              </h3>
              <p className="font-sans text-[12px] text-black mt-1 font-normal">
                {products[1].price}
              </p>
            </div>
          </div>

          {/* Tarjeta 3: Botas */}
          <div className="w-1/4 flex-shrink-0 flex flex-col">
            <div className="w-full h-[420px] bg-[#f5f5f5] flex items-center justify-center p-6">
              <img
                src={products[2].image}
                alt={products[2].name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="mt-4 text-left">
              <h3 className="font-versace-title text-[13px] md:text-[14px] text-black font-normal">
                {products[2].name}
              </h3>
              <p className="font-sans text-[12px] text-black mt-1 font-normal">
                {products[2].price}
              </p>
            </div>
          </div>

          {/* Tarjeta 4: Minibolso */}
          <div className="w-1/4 flex-shrink-0 flex flex-col">
            <div className="w-full h-[420px] bg-[#f5f5f5] flex items-center justify-center p-6">
              <img
                src={products[3].image}
                alt={products[3].name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="mt-4 text-left">
              <h3 className="font-versace-title text-[13px] md:text-[14px] text-black font-normal">
                {products[3].name}
              </h3>
              <p className="font-sans text-[12px] text-black mt-1 font-normal">
                {products[3].price}
              </p>
            </div>
          </div>

          {/* Tarjeta 5: Extra para probar el movimiento de las flechas */}
          <div className="w-1/4 flex-shrink-0 flex flex-col">
            <div className="w-full h-[420px] bg-[#f5f5f5] flex items-center justify-center p-6">
              <img
                src={products[4].image}
                alt={products[4].name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="mt-4 text-left">
              <h3 className="font-versace-title text-[13px] md:text-[14px] text-black font-normal">
                {products[4].name}
              </h3>
              <p className="font-sans text-[12px] text-black mt-1 font-normal">
                {products[4].price}
              </p>
            </div>
          </div>

          {/* Tarjeta 6: Extra para probar el movimiento de las flechas */}
          <div className="w-1/4 flex-shrink-0 flex flex-col">
            <div className="w-full h-[420px] bg-[#f5f5f5] flex items-center justify-center p-6">
              <img
                src={products[5].image}
                alt={products[5].name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="mt-4 text-left">
              <h3 className="font-versace-title text-[13px] md:text-[14px] text-black font-normal">
                {products[5].name}
              </h3>
              <p className="font-sans text-[12px] text-black mt-1 font-normal">
                {products[5].price}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;