"use client";

import Image from "next/image";
import { motion } from "motion/react";

const categorias = [
  {
    titulo: "ACABAMENTOS\n& PISOS",
    imagem: "/produtos/piso.png"
  },
  {
    titulo: "FERRAMENTAS\n& ELÉTRICA",
    imagem: "/produtos/ferramentas.png"
  },
  {
    titulo: "MATERIAIS\nDE OBRA",
    imagem: "/produtos/obra.png?v=2"
  }
];

export function CategoriasSection() {
  return (
    <section className="bg-background py-xl relative">

      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {categorias.map((cat, i) => (
            <motion.div
              key={cat.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative overflow-hidden cursor-pointer rounded-t-full aspect-[3/4] shadow-md"
            >
              {/* Shine sweep on hover */}
              <div className="absolute inset-0 z-20 pointer-events-none translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12" />

              <Image
                src={cat.imagem}
                alt={cat.titulo}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />

              <h3 className="absolute inset-0 flex items-center justify-center text-center text-white font-headline-md text-headline-md uppercase whitespace-pre-line px-4 drop-shadow-lg transition-transform duration-300 ease-out group-hover:scale-110">
                {cat.titulo}
              </h3>

              <div className="absolute bottom-4 right-4 flex flex-col items-center justify-center bg-red-600 text-white rounded-full w-[72px] h-[72px] shadow-lg ring-2 ring-white/30 text-center px-1">
                <span className="text-[9px] font-bold uppercase leading-tight tracking-wide">Preços<br/>Imperdíveis</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
}
