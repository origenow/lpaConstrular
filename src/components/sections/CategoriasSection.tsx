"use client";

import Image from "next/image";
import { motion } from "motion/react";

const categorias = [
  {
    titulo: "ACABAMENTOS\n& PISOS",
    desconto: "25%",
    imagem: "/produtos/piso.png"
  },
  {
    titulo: "FERRAMENTAS\n& ELÉTRICA",
    desconto: "30%",
    imagem: "/produtos/ferramentas.png"
  },
  {
    titulo: "MATERIAIS\nDE OBRA",
    desconto: "40%",
    imagem: "/produtos/obra.png"
  }
];

export function CategoriasSection() {
  return (
    <section className="bg-background py-xl">
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
              className="relative overflow-hidden cursor-pointer rounded-t-full aspect-[3/4] shadow-md"
            >
              <Image
                src={cat.imagem}
                alt={cat.titulo}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />

              <h3 className="absolute inset-0 flex items-center justify-center text-center text-white font-headline-md text-headline-md uppercase whitespace-pre-line px-4 drop-shadow-lg">
                {cat.titulo}
              </h3>

              <div className="absolute bottom-4 right-4 flex flex-col items-center justify-center bg-red-600 text-white rounded-full w-[72px] h-[72px] shadow-lg ring-2 ring-white/30">
                <span className="text-[10px] font-semibold uppercase leading-none tracking-wider">ATÉ</span>
                <span className="text-2xl font-black leading-none mt-0.5">{cat.desconto}</span>
                <span className="text-[10px] font-semibold uppercase leading-none tracking-wider">OFF</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
