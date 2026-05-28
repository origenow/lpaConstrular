export function Footer() {
  return (
    <footer className="bg-surface border-t border-border-light py-16">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-start gap-lg mb-lg">
          
          <div className="flex flex-col gap-sm">
            <div className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary text-headline-md">construction</span>
              <h2 className="font-bebas text-3xl uppercase text-text-primary tracking-wider">A CONSTRULAR</h2>
            </div>
            <p className="font-body-sm text-body-sm text-text-secondary max-w-xs leading-relaxed">
              Qualidade que constrói histórias. Líder regional em fornecimento de materiais brutos e acabamentos finos.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-xl">
            <div className="flex flex-col gap-xs">
              <h4 className="font-label-bold text-label-bold text-text-primary uppercase tracking-wider">Links Úteis</h4>
              <a className="font-body-sm text-body-sm text-text-secondary hover:text-primary transition-colors" href="#">Nossas Lojas</a>
              <a className="font-body-sm text-body-sm text-text-secondary hover:text-primary transition-colors" href="#">Sobre Nós</a>
              <a className="font-body-sm text-body-sm text-text-secondary hover:text-primary transition-colors" href="#">Contato</a>
              <a className="font-body-sm text-body-sm text-text-secondary hover:text-primary transition-colors" href="#">Termos de Uso</a>
            </div>
            
            <div className="flex flex-col gap-xs">
              <h4 className="font-label-bold text-label-bold text-text-primary uppercase tracking-wider">Atendimento</h4>
              <p className="font-body-sm text-body-sm text-text-secondary">Segunda a Sexta: 08:00 - 18:00</p>
              <p className="font-body-sm text-body-sm text-text-secondary">Sábado: 08:00 - 12:00</p>
            </div>
          </div>
          
        </div>
        
        <div className="pt-md border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="font-body-sm text-body-sm text-text-secondary/80">
            © 2024 A CONSTRULAR. CONSTRUINDO COM FORÇA E TRADIÇÃO.
          </p>
          <p className="font-body-sm text-body-sm text-text-secondary/80">
            CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
}
