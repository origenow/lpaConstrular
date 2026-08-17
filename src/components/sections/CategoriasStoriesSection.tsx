"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type React from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

/* Larguras reais do card no grid (2→6 colunas conforme o breakpoint), com folga para 2x DPR. */
const PRODUCT_SIZES =
  "(min-width: 1280px) 200px, (min-width: 1024px) 240px, (min-width: 768px) 200px, (min-width: 640px) 220px, 50vw";

const WHATSAPP_BASE = "https://wa.me/553333411200?text=";

function storyWhatsAppUrl(title: string) {
  return WHATSAPP_BASE + encodeURIComponent(`Olá! Quero saber mais sobre o produto: ${title}`);
}

interface Product {
  id: number;
  title: string;
  label: string;
  image: string;
  cover?: boolean;
}

const products: Product[] = [
  { id: 31, title: "Argamassa Cimentcola",       label: "Interno ACI 20kg, Quartzolit",     image: "/produtos/p_vendidos/argamassa.webp" },
  { id: 32, title: "Tela Soldada Galvanizada",   label: "Malha de aço para construção",     image: "/produtos/p_vendidos/tela.webp"      },
  { id: 33, title: "Quadro Decorativo Jesus",    label: "Arte religiosa em canvas",         image: "/produtos/p_vendidos/jesus.webp", cover: true },
  { id: 1,  title: "Coral Rende Muito",          label: "Tinta concentrada azul",           image: "/produtos/p/tinta.webp"        },
  { id: 2,  title: "Coral Rende Muito",          label: "Tinta concentrada bege",           image: "/produtos/p/tinta2.webp"       },
  { id: 3,  title: "Pincel Tigre 3\"",           label: "Cabo laranja, cerdas naturais",    image: "/produtos/p/pincel.webp"       },
  { id: 4,  title: "Cabo de Rolo Atlas",         label: "Gaiola metálica p/ pintura",       image: "/produtos/p/rolo.webp"         },
  { id: 5,  title: "Espátula Inox Atlas",        label: "Multiuso, lâmina aço inox",        image: "/produtos/p/espatula.webp"     },
  { id: 6,  title: "Espátula Dentada Atlas",     label: "Plástica 10cm, corte V",           image: "/produtos/p/atlas.webp"        },
  { id: 7,  title: "Torneira Flexível",          label: "Mangueira metálica, bico duplo",   image: "/produtos/p/torneira.webp"     },
  { id: 8,  title: "Torneira Flex Preta",        label: "Mangueira silicone preta",         image: "/produtos/p/torneira2.webp"    },
  { id: 9,  title: "Torneira Bica Alta",         label: "Pescoço de ganso cromado",         image: "/produtos/p/torneira3.webp"    },
  { id: 10, title: "Torneira Flex Vermelha",     label: "Mangueira silicone colorida",      image: "/produtos/p/torneira4.webp"    },
  { id: 11, title: "Torneira de Parede Leão",    label: "Latão dourado, bica externa",      image: "/produtos/p/leao.webp"         },
  { id: 12, title: "Ducha Zagonel Ducali",       label: "Elétrico branco, tipo chuva",      image: "/produtos/p/chuveiro.webp"     },
  { id: 13, title: "Ducha Zagonel Preto",        label: "Elétrico preto, tipo chuva",       image: "/produtos/p/chuveiro2.webp"    },
  { id: 14, title: "Resistência Lorenzetti",     label: "Loren Ultra 7800W",                image: "/produtos/p/lore.webp"         },
  { id: 15, title: "Resistência Lorenzetti",     label: "Loren Shower eletrônico",          image: "/produtos/p/lore2.webp"        },
  { id: 16, title: "Resistência Lorenzetti",     label: "Para aquecedor de passagem",       image: "/produtos/p/lore3.webp"        },
  { id: 17, title: "Joelho 90° PVC Marrom",      label: "Conexão Tigre para água fria",     image: "/produtos/p/joelho.webp"       },
  { id: 18, title: "Tê PVC Branco Tigre",        label: "Conexão esgoto 3 vias",            image: "/produtos/p/joelho2.webp"      },
  { id: 19, title: "Joelho 45° PVC Marrom",      label: "Conexão Tigre para água fria",     image: "/produtos/p/joelho4.webp"      },
  { id: 20, title: "Fita Veda Rosca Tigre",      label: "18mm × 50m, anti-vazamento",       image: "/produtos/p/fita.webp"         },
  { id: 21, title: "Regulador de Gás",           label: "Válvula GLP doméstica",            image: "/produtos/p/gasdosmetico.webp" },
  { id: 22, title: "Piscina Inflável MOR",       label: "Estrutura rígida, grande porte",   image: "/produtos/p/piscina.webp"      },
  { id: 23, title: "Lâmpada LED Bulbo",          label: "Alta potência, rosca E27",         image: "/produtos/p/luz.webp"          },
  { id: 24, title: "Refletor LED AVANT",         label: "Slim300 — 22.500 lúmens",          image: "/produtos/p/luz1.webp"         },
  { id: 25, title: "Plugue 3 Pinos FAME",        label: "10A/250V padrão NBR",              image: "/produtos/p/plug.webp"         },
  { id: 26, title: "Tomada de Parede FAME",      label: "2P+T, placa simples",              image: "/produtos/p/plug2.webp"        },
  { id: 27, title: "Interruptor + Tomada",       label: "Placa combinada FAME",             image: "/produtos/p/plug3.webp"        },
  { id: 28, title: "3 Interruptores FAME",       label: "Placa tripla embutida",            image: "/produtos/p/plug4.webp"        },
  { id: 29, title: "2 Interruptores FAME",       label: "Placa dupla embutida",             image: "/produtos/p/pulb.webp"         },
  { id: 30, title: "Lixeira Inox",               label: "Tampa flip-top, aço escovado",     image: "/produtos/p/lix.webp"          },
];


export function CategoriasStoriesSection() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref as React.Ref<HTMLElement>} id="produtos" className="bg-surface py-10 border-b border-border-light relative overflow-hidden">
      <div className={`section-curtain absolute inset-0 z-0 pointer-events-none${isRevealed ? " is-revealed" : ""}`} />
      <div className="relative z-10 max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-1.5 h-6 bg-primary rounded-full shrink-0" />
          <h2 className="text-xl font-bold text-text-primary tracking-tight select-none">
            Explore nossos produtos
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.4) }}
              whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.10)" }}
              className="group bg-white rounded-2xl border border-slate-100 overflow-hidden cursor-pointer flex flex-col shadow-sm"
              role="button"
              tabIndex={0}
              onClick={() => window.open(storyWhatsAppUrl(product.title), "_blank", "noopener")}
              onKeyDown={(e) => e.key === "Enter" && window.open(storyWhatsAppUrl(product.title), "_blank", "noopener")}
            >
              {/* Image */}
              <div className="relative aspect-square bg-white shrink-0 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes={PRODUCT_SIZES}
                  className={product.cover ? "object-cover object-top" : "object-contain p-3"}
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                {/* CTA text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className="text-[11px] font-bold text-white uppercase tracking-wide px-2.5 py-1 rounded-full bg-green-500/90"
                    style={{ textShadow: "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)" }}
                  >
                    Conferir no WhatsApp
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-100" />

              {/* Info */}
              <div className="px-3 py-3 flex flex-col gap-1">
                <p className="text-[12px] font-semibold text-text-primary leading-snug line-clamp-2">
                  {product.title}
                </p>
                <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                  {product.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
