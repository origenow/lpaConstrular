export interface Store {
  id: string;
  name: string;
  address: string;
  whatsappUrl: string;
  whatsappLabel: string;
}

export const stores: Store[] = [
  {
    id: "matriz",
    name: "A Constrular - Matriz",
    address: "Av. Raul Soares, 161 - Centro, Manhumirim - MG, 36970-000\nSeg–Sex 7h–18h | Sáb 7h–12h\n(33) 3341-1200",
    whatsappUrl: "https://wa.me/5533334112000",
    whatsappLabel: "WhatsApp Matriz",
  },
  {
    id: "trevo",
    name: "Loja Trevo",
    address: "Av. JK, 650, Manhumirim - MG, 36970-000\nSeg–Sex 7h–18h | Sáb 7h–12h\n(33) 3341-2129",
    whatsappUrl: "https://wa.me/5533334121290",
    whatsappLabel: "WhatsApp Trevo",
  },
  {
    id: "alto-jequitiba",
    name: "Alto Jequitibá",
    address: "R. Cap. Carlos Heringuer, 430 - Centro, Alto Jequitibá - MG, 36976-000\nSeg–Sex 7h–18h | Sáb 7h–12h\n(33) 3343-1133",
    whatsappUrl: "https://wa.me/5533334311330",
    whatsappLabel: "WhatsApp Alto Jequitibá",
  },
  {
    id: "manhuacu",
    name: "Manhuaçu",
    address: "Av. Barão do Rio Branco, 320 - Baixada, Manhuaçu - MG, 36900-000\nSeg–Sex 7h30–18h | Sáb 7h30–12h\n(33) 3339-1200",
    whatsappUrl: "https://wa.me/5533333912000",
    whatsappLabel: "WhatsApp Manhuaçu",
  },
  {
    id: "martins-soares",
    name: "Martins Soares",
    address: "Av. João Batista, 65 - Centro, Martins Soares - MG, 36972-000\nSeg–Sex 7h–18h | Sáb 7h–12h\n(33) 3339-1200",
    whatsappUrl: "https://wa.me/5533333912000",
    whatsappLabel: "WhatsApp Martins Soares",
  },
  {
    id: "ponte-aldeia",
    name: "Loja Ponte da Aldeia",
    address: "Av. Dr. Jorge Hannas, 4901, Manhuaçu - MG, 36905-000\nSeg–Sex 7h30–12h | Sáb 7h–12h\n(33) 3563-0105",
    whatsappUrl: "https://wa.me/5533356301050",
    whatsappLabel: "WhatsApp Ponte da Aldeia",
  },
  {
    id: "deposito",
    name: "A Constrular Depósito",
    address: "R. Projetada, 279 - Santo Antônio, Manhumirim - MG, 36970-000\nSeg–Sex 7h–18h | Sáb 7h–12h\n(33) 3341-1200",
    whatsappUrl: "https://wa.me/5533334112000",
    whatsappLabel: "WhatsApp Depósito",
  },
];
