import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border-light py-16">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl mb-lg">

          {/* Marca */}
          <div className="flex flex-col gap-sm">
            <Image
              src="/logo/LogoAConstrular.png"
              alt="A Constrular"
              width={200}
              height={72}
              className="h-[56px] w-auto object-contain"
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
              className="inline-flex items-center gap-2 mt-1 font-body-sm text-body-sm text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.554 4.107 1.523 5.83L0 24l6.344-1.498A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.003-1.366l-.36-.213-3.767.889.944-3.666-.234-.376A9.79 9.79 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              WhatsApp Matriz
            </a>
          </div>

        </div>

        <div className="pt-md border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="font-body-sm text-body-sm text-text-secondary/80">
            © 2026 A CONSTRULAR. CONSTRUINDO COM FORÇA E TRADIÇÃO.
          </p>
          <p className="font-body-sm text-body-sm text-text-secondary/80">
            CNPJ: 00.000.000/0001-00
          </p>
        </div>

      </div>
    </footer>
  );
}
