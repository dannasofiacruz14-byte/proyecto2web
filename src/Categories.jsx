import React from 'react';

const Categories = () => {
  const categories = [
    { title: 'BOLSOS', image: '/bags.jpg', link: '#bolsos' },
    { title: 'CINTURONES', image: '/belts.jpg', link: '#cinturones' },
    { title: 'JOYAS DE MODA', image: '/jewelry.jpg', link: '#joyas' },
    { title: 'ZAPATOS', image: '/shoes.jpg', link: '#zapatos' },
  ];

  return (
    <section className="w-full bg-white py-10">
      {/* Grid  */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {categories.map((cat, idx) => (
          <a key={idx} href={cat.link} className="flex flex-col items-center">
            
            {/* Contenedor de imagen  */}
            <div className="overflow-hidden w-full h-[420px] bg-stone-100">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${cat.image}')` }}
              />
            </div>

            {/* Texto  */}
            <span className="font-versace-title text-[25px] font-semibold tracking-[3px] uppercase mt-5 text-black text-center">
              {cat.title}
            </span>

          </a>
        ))}
      </div>
    </section>
  );
};

export default Categories;