"use client";

import { motion } from "motion/react";
import {
  Stories,
  StoriesContent,
  Story,
  StoryImage,
  StoryOverlay,
  StoryTitle,
  StoryAuthor,
  StoryAuthorName,
} from "@/components/ui/stories-carousel";

const WHATSAPP_BASE = "https://wa.me/553333411200?text=";

function storyWhatsAppUrl(title: string) {
  return WHATSAPP_BASE + encodeURIComponent(`Olá! Quero saber mais sobre o produto: ${title}`);
}

const stories = [
  { id: 1, title: "Coral Rende Muito", label: "Tinta concentrada azul", image: "/produtos/p/tinta.webp" },
  { id: 2, title: "Coral Rende Muito", label: "Tinta concentrada bege", image: "/produtos/p/tinta2.webp" },
  { id: 3, title: "Pincel Tigre 3\"", label: "Cabo laranja, cerdas naturais", image: "/produtos/p/pincel.webp" },
  { id: 4, title: "Cabo de Rolo Atlas", label: "Gaiola metálica p/ pintura", image: "/produtos/p/rolo.webp" },
  { id: 5, title: "Espátula Inox Atlas", label: "Multiuso, lâmina aço inox", image: "/produtos/p/espatula.webp" },
  { id: 6, title: "Espátula Dentada Atlas", label: "Plástica 10cm, corte V", image: "/produtos/p/atlas.webp" },
  { id: 7, title: "Torneira Flexível", label: "Mangueira metálica, bico duplo", image: "/produtos/p/torneira.webp" },
  { id: 8, title: "Torneira Flex Preta", label: "Mangueira silicone preta", image: "/produtos/p/torneira2.webp" },
  { id: 9, title: "Torneira Bica Alta", label: "Pescoço de ganso cromado", image: "/produtos/p/torneira3.webp" },
  { id: 10, title: "Torneira Flex Vermelha", label: "Mangueira silicone colorida", image: "/produtos/p/torneira4.webp" },
  { id: 11, title: "Torneira de Parede Leão", label: "Latão dourado, bica externa", image: "/produtos/p/leao.webp" },
  { id: 12, title: "Ducha Zagonel Ducali", label: "Elétrico branco, tipo chuva", image: "/produtos/p/chuveiro.webp" },
  { id: 13, title: "Ducha Zagonel Preto", label: "Elétrico preto, tipo chuva", image: "/produtos/p/chuveiro2.webp" },
  { id: 14, title: "Resistência Lorenzetti", label: "Loren Ultra 7800W", image: "/produtos/p/lore.webp" },
  { id: 15, title: "Resistência Lorenzetti", label: "Loren Shower eletrônico", image: "/produtos/p/lore2.webp" },
  { id: 16, title: "Resistência Lorenzetti", label: "Para aquecedor de passagem", image: "/produtos/p/lore3.webp" },
  { id: 17, title: "Joelho 90° PVC Marrom", label: "Conexão Tigre para água fria", image: "/produtos/p/joelho.webp" },
  { id: 18, title: "Tê PVC Branco Tigre", label: "Conexão esgoto 3 vias", image: "/produtos/p/joelho2.webp" },
  { id: 19, title: "Joelho 45° PVC Marrom", label: "Conexão Tigre para água fria", image: "/produtos/p/joelho4.webp" },
  { id: 20, title: "Fita Veda Rosca Tigre", label: "18mm × 50m, anti-vazamento", image: "/produtos/p/fita.webp" },
  { id: 21, title: "Regulador de Gás", label: "Válvula GLP doméstica", image: "/produtos/p/gasdosmetico.webp" },
  { id: 22, title: "Piscina Inflável MOR", label: "Estrutura rígida, grande porte", image: "/produtos/p/piscina.webp" },
  { id: 23, title: "Lâmpada LED Bulbo", label: "Alta potência, rosca E27", image: "/produtos/p/luz.webp" },
  { id: 24, title: "Refletor LED AVANT", label: "Slim300 — 22.500 lúmens", image: "/produtos/p/luz1.webp" },
  { id: 25, title: "Plugue 3 Pinos FAME", label: "10A/250V padrão NBR", image: "/produtos/p/plug.webp" },
  { id: 26, title: "Tomada de Parede FAME", label: "2P+T, placa simples", image: "/produtos/p/plug2.webp" },
  { id: 27, title: "Interruptor + Tomada", label: "Placa combinada FAME", image: "/produtos/p/plug3.webp" },
  { id: 28, title: "3 Interruptores FAME", label: "Placa tripla embutida", image: "/produtos/p/plug4.webp" },
  { id: 29, title: "2 Interruptores FAME", label: "Placa dupla embutida", image: "/produtos/p/pulb.webp" },
  { id: 30, title: "Lixeira Inox", label: "Tampa flip-top, aço escovado", image: "/produtos/p/lix.webp" },
];

export function CategoriasStoriesSection() {
  return (
    <section className="bg-background py-10 border-b border-border-light overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop mb-6">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-4"
        >
          <div className="w-1.5 h-6 bg-primary rounded-full shrink-0" />
          <h2 className="text-xl font-bold text-text-primary tracking-tight select-none">
            Explore nossas categorias
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="px-margin-mobile md:px-margin-desktop"
      >
        <Stories>
          <StoriesContent>
            {stories.map((story) => (
              <Story
                key={story.id}
                className="aspect-[3/4] w-[160px] md:w-[200px]"
                onClick={() => window.open(storyWhatsAppUrl(story.title), "_blank", "noopener")}
                onKeyDown={(e) => e.key === "Enter" && window.open(storyWhatsAppUrl(story.title), "_blank", "noopener")}
              >
                <StoryImage alt={story.title} src={story.image} />
                <StoryOverlay side="top" />
                <StoryOverlay side="bottom" />
                <StoryTitle>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                    A Constrular
                  </span>
                </StoryTitle>
                <StoryAuthor>
                  <div className="flex flex-col">
                    <StoryAuthorName className="text-white font-bold text-sm leading-tight">
                      {story.title}
                    </StoryAuthorName>
                    <span className="text-white/70 text-xs mt-0.5">{story.label}</span>
                  </div>
                </StoryAuthor>
              </Story>
            ))}
          </StoriesContent>
        </Stories>
      </motion.div>
    </section>
  );
}
