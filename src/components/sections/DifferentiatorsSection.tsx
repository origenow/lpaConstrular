"use client";

import { motion } from "motion/react";

export function DifferentiatorsSection() {
  const items = [
    {
      id: "01",
      title: "Entrega Ágil",
      description: "Frota própria e logística otimizada para garantir que seu material chegue no prazo combinado, sem atrasos na sua obra."
    },
    {
      id: "02",
      title: "Estoque Real",
      description: "Trabalhamos com estoque pronto para entrega imediata. Variedade das melhores marcas do mercado nacional."
    },
    {
      id: "03",
      title: "Preço Justo",
      description: "Negociação direta com fornecedores para garantir a melhor relação custo-benefício para construtoras e reformas residenciais."
    }
  ];

  return (
    <section className="bg-surface py-xl relative">
      <svg
        className="absolute -bottom-px left-0 w-full h-12 text-background"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,30 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,60 L0,60 Z"
          fill="currentColor"
        />
      </svg>
      <div className="max-w-[1280px] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-lg">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 80 }}
            whileHover={{
              scale: 1.02,
              y: -5,
              backgroundColor: "var(--color-surface-container-low)"
            }}
            className="flex flex-col gap-sm p-md border-4 border-transparent hover:border-on-surface hover:neo-brutalist-shadow transition-colors duration-200 cursor-pointer rounded-none"
          >
            <motion.span
              whileHover={{ scale: 1.1, rotate: -3 }}
              className="font-headline-xl text-headline-xl text-primary leading-none inline-block w-fit select-none"
            >
              {item.id}
            </motion.span>
            <h3 className="font-headline-md text-headline-md uppercase">{item.title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
