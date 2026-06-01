export interface Store {
  id: string;
  name: string;
  street: string;
  cityState: string;
  hours: string;
  phone?: string;
  whatsappUrl?: string;
  pendingPhone?: boolean;
}

export const stores: Store[] = [
  {
    id: "matriz",
    name: "Matriz",
    street: "Av. Raul Soares, 161 - Centro",
    cityState: "Manhumirim - MG, 36970-000",
    hours: "Seg–Sex 7h–18h | Sáb 7h–12h",
    phone: "(33) 3341-1200",
    whatsappUrl: "https://wa.me/553333411200",
  },
  {
    id: "trevo",
    name: "Trevo",
    street: "Av. JK, 650",
    cityState: "Manhumirim - MG, 36970-000",
    hours: "Seg–Sex 7h–18h | Sáb 7h–12h",
    phone: "(33) 3341-2129",
    whatsappUrl: "https://wa.me/553333412129",
  },
  {
    id: "alto-jequitiba",
    name: "Alto Jequitibá",
    street: "R. Cap. Carlos Heringuer, 430 - Centro",
    cityState: "Alto Jequitibá - MG, 36976-000",
    hours: "Seg–Sex 7h–18h | Sáb 7h–12h",
    phone: "(33) 3343-1133",
    whatsappUrl: "https://wa.me/553333431133",
  },
  {
    id: "manhuacu",
    name: "Manhuaçu",
    street: "Av. Barão do Rio Branco, 320 - Baixada",
    cityState: "Manhuaçu - MG, 36900-000",
    hours: "Seg–Sex 7h30–18h | Sáb 7h30–12h",
    phone: "(33) 3339-1200",
    whatsappUrl: "https://wa.me/553333391200",
  },
  {
    id: "martins-soares",
    name: "Martins Soares",
    street: "Av. João Batista, 65 - Centro",
    cityState: "Martins Soares - MG, 36972-000",
    hours: "Seg–Sex 7h–18h | Sáb 7h–12h",
    phone: "(33) 9 7400-9292",
    whatsappUrl: "https://wa.me/5533974009292",
  },
  {
    id: "ponte-aldeia",
    name: "Ponte da Aldeia",
    street: "Av. Dr. Jorge Hannas, 4901",
    cityState: "Manhuaçu - MG, 36906-440",
    hours: "Seg–Sex 7h30–18h | Sáb 7h–12h",
    pendingPhone: true,
  },
  {
    id: "deposito",
    name: "Depósito",
    street: "R. Projetada, 279 - Santo Antônio",
    cityState: "Manhumirim - MG, 36970-000",
    hours: "Seg–Sex 7h–18h | Sáb 7h–12h",
    phone: "(33) 3341-1360",
    whatsappUrl: "https://wa.me/553333411360",
  },
];
