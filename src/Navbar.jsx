import React, { useState, useEffect } from 'react';
import { Search, Heart, User, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isWhite = isScrolled || isHovered;

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-versace">
      {/* Navbar Principal */}
      <nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex items-center justify-between px-8 py-3.5 transition-all duration-300 ${
          isWhite
            ? 'bg-white text-black shadow-sm'
            : 'bg-transparent text-white'
        }`}
      >
        {/* Logo Versace */}
        <div className="text-4xl font-black tracking-[4px] cursor-pointer select-none">
          VERSACE
        </div>

        {/* Links de Navegación */}
        <ul className="hidden xl:flex items-center space-x-7 text-[12px] font-bold tracking-[1.5px]">
          <li><a href="#novedades" className="hover:opacity-70 transition-opacity whitespace-nowrap">NOVEDADES</a></li>
          <li><a href="#bolsos" className="hover:opacity-70 transition-opacity whitespace-nowrap">BOLSOS</a></li>
          <li><a href="#mujer" className="hover:opacity-70 transition-opacity whitespace-nowrap">MUJER</a></li>
          <li><a href="#hombre" className="hover:opacity-70 transition-opacity whitespace-nowrap">HOMBRE</a></li>
          <li><a href="#fragancias" className="hover:opacity-70 transition-opacity whitespace-nowrap">FRAGANCIAS</a></li>
          <li><a href="#home-lifestyle" className="hover:opacity-70 transition-opacity whitespace-nowrap">HOME & LIFESTYLE</a></li>
          <li><a href="#ninos" className="hover:opacity-70 transition-opacity whitespace-nowrap">NIÑOS</a></li>
          <li><a href="#regalos" className="hover:opacity-70 transition-opacity whitespace-nowrap">REGALOS</a></li>
          <li><a href="#stories" className="hover:opacity-70 transition-opacity whitespace-nowrap">STORIES</a></li>
        </ul>

        {/* Íconos */}
        <div className="flex items-center space-x-5">
          <button aria-label="Buscar" className="hover:opacity-60 transition-opacity">
            <Search size={19} strokeWidth={1.5} />
          </button>
          <button aria-label="Favoritos" className="hover:opacity-60 transition-opacity">
            <Heart size={19} strokeWidth={1.5} />
          </button>
          <button aria-label="Usuario" className="hover:opacity-60 transition-opacity">
            <User size={19} strokeWidth={1.5} />
          </button>
          <button aria-label="Bolsa" className="hover:opacity-60 transition-opacity">
            <ShoppingBag size={19} strokeWidth={1.5} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;