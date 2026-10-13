import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white font-serif">
      {/* 1. SECCIÓN DE NEWSLETTER / SUSCRIPCIÓN */}
      <div className="w-full py-16 px-4 text-center border-t border-gray-100">
        <h2 className="font-versace-title text-[13px] md:text-[14px] font-semibold tracking-[3px] uppercase text-black mb-3">
          ÚNETE A LA CASA VERSACE
        </h2>
        <p className="font-versace-title text-[14px] md:text-[15px] text-gray-800 mb-8">
          Suscríbete para mantenerte al día sobre eventos, colecciones y noticias exclusivas.
        </p>

        {/* Campo de Correo Electrónico */}
        <div className="max-w-[420px] mx-auto flex items-center border border-gray-300 px-4 py-2.5 bg-white">
          <input
            type="email"
            placeholder="Introduce tu dirección de correo electrónico *"
            className="w-full text-[13px] font-sans text-gray-700 outline-none placeholder-gray-400 bg-transparent"
          />
          <button aria-label="Enviar correo" className="text-black hover:opacity-60 transition-opacity ml-2">
            <ArrowRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* 2. SECCIÓN GRIS DE ENLACES Y LEGALES */}
      <div className="w-full bg-[#f2f2f2] text-black pt-12 pb-8 px-6 md:px-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-8 text-[12px] leading-relaxed mb-16">
          
          {/* Columna 1: Buscador de Tiendas */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold tracking-[2px] uppercase text-[11px] mb-2">
              BUSCADOR DE TIENDAS
            </h3>
            <p className="cursor-pointer hover:underline">Buscar tienda</p>
            <p className="cursor-pointer hover:underline">Tiendas Versace Watches</p>
          </div>

          {/* Columna 2: Atención al Cliente */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold tracking-[2px] uppercase text-[11px] mb-2">
              ATENCIÓN AL CLIENTE
            </h3>
            <p className="cursor-pointer hover:underline">Servicios Exclusivos</p>
            <p className="cursor-pointer hover:underline">Guías para el Cuidado</p>
            <p className="cursor-pointer hover:underline">Contactarse con nosotros</p>
            <p className="cursor-pointer hover:underline">Ayuda/preguntas frecuentes</p>
            <p className="cursor-pointer hover:underline">Autenticidad</p>
            <p className="cursor-pointer hover:underline">Pedidos y envío</p>
            <p className="cursor-pointer hover:underline">Seguimiento del pedido</p>
            <p className="cursor-pointer hover:underline">Proceso de devolución y reclamación</p>
            <p className="cursor-pointer hover:underline">Desístase de su contrato/pedido</p>
          </div>

          {/* Columna 3: Empresa */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold tracking-[2px] uppercase text-[11px] mb-2">
              EMPRESA
            </h3>
            <p className="cursor-pointer hover:underline">Perfil de la empresa</p>
            <p className="cursor-pointer hover:underline">Datos corporativos</p>
            <p className="cursor-pointer hover:underline">Abastecimiento responsable</p>
            <p className="cursor-pointer hover:underline">Trabaja con nosotros</p>
            <p className="cursor-pointer hover:underline">Mapa del sitio</p>
            <p className="cursor-pointer hover:underline">Productos del mapa del sitio</p>
          </div>

          {/* Columna 4: Avisos Legales */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold tracking-[2px] uppercase text-[11px] mb-2">
              AVISOS LEGALES
            </h3>
            <p className="cursor-pointer hover:underline">Avisos legales</p>
            <p className="cursor-pointer hover:underline">Condiciones Generales de Venta</p>
            <p className="cursor-pointer hover:underline">Condiciones Generales de Compra de Bienes y Servicios</p>
            <p className="cursor-pointer hover:underline">Código de conducta comercial y ética</p>
            <p className="cursor-pointer hover:underline">Política de cookies</p>
            <p className="cursor-pointer hover:underline">Política de privacidad</p>
            <p className="cursor-pointer hover:underline">Política de privacidad para Socios Comerciales</p>
          </div>

          {/* Columna 5: Selector de Ubicación */}
          <div className="flex md:justify-end items-start text-[11px] font-semibold tracking-[1.5px] uppercase">
            <span className="cursor-pointer hover:opacity-75">COLOMBIA – ES ▼</span>
          </div>

        </div>

        {/* Fila Inferior: Copyright e Íconos de Redes Sociales (SVG integrados) */}
        <div className="w-full border-t border-gray-300 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-[1.5px] text-gray-700 uppercase">
          <p>© GIANNI VERSACE S.R.L. P.IVA IT04636090963</p>
          
          {/* Íconos de Redes Sociales en SVG directo */}
          <div className="flex items-center space-x-4 text-black">
            {/* Instagram */}
            <svg className="w-4 h-4 cursor-pointer hover:opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            {/* Facebook */}
            <svg className="w-4 h-4 cursor-pointer hover:opacity-60" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            {/* X / Twitter */}
            <svg className="w-4 h-4 cursor-pointer hover:opacity-60" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            {/* YouTube */}
            <svg className="w-4 h-4 cursor-pointer hover:opacity-60" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.37zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"/></svg>
            {/* LinkedIn */}
            <svg className="w-4 h-4 cursor-pointer hover:opacity-60" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;