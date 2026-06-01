import Image from "next/image";
import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border-light py-16">


      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl mb-lg">

          {/* Marca */}
          <div className="flex flex-col gap-sm">
            <Image
              src="/logo/logo_certo.webp"
              alt="A Constrular"
              width={200}
              height={72}
              className="h-[44px] w-auto object-contain"
            />
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed max-w-xs">
              Líder regional em materiais de construção. Atendemos construtoras, reformas residenciais e clientes em geral no Vale do Caparaó e região.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-xs">
            <h4 className="font-label-bold text-label-bold text-text-primary uppercase tracking-wider mb-1">Links Úteis</h4>
            <a className="font-body-sm text-body-sm text-text-secondary hover:text-primary transition-colors" href="#lojas">Nossas Unidades</a>
            <a className="font-body-sm text-body-sm text-text-secondary hover:text-primary transition-colors" href="#sobre">Sobre Nós</a>
            <a className="font-body-sm text-body-sm text-text-secondary hover:text-primary transition-colors" href="#">Trabalhe Conosco</a>
            <a className="font-body-sm text-body-sm text-text-secondary hover:text-primary transition-colors" href="#">Política de Privacidade</a>
          </div>

          {/* Contato */}
          <div className="flex flex-col gap-xs">
            <h4 className="font-label-bold text-label-bold text-text-primary uppercase tracking-wider mb-1">Fale Conosco</h4>
            <p className="font-body-sm text-body-sm text-text-secondary">
              Matriz — Manhumirim
            </p>
            <a
              href="tel:+553333411200"
              className="font-body-sm text-body-sm text-text-secondary hover:text-primary transition-colors"
            >
              (33) 3341-1200
            </a>
            <a
              href="https://wa.me/553333411200"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-btn-green inline-flex items-center justify-center gap-2 text-white font-semibold text-sm px-6 py-3 mt-1 cursor-pointer rounded-[20px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              WhatsApp Matriz
            </a>
          </div>

        </div>

        <div className="pt-md border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="font-body-sm text-body-sm text-text-secondary/80">
            © 2026 A CONSTRULAR. CONSTRUINDO COM FORÇA E TRADIÇÃO.
          </p>
          <p className="font-body-sm text-body-sm text-text-secondary/80">
            CNPJ: 42.958.249/0005-88 &nbsp;·&nbsp; (33) 3341-1200
          </p>
        </div>

      </div>


    </footer>
  );
}
