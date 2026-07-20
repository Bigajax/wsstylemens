/**
 * Configurações gerais da WS Style Men's.
 * Tudo que é "cadastrável" (contato, endereço, redes) vive aqui —
 * o futuro painel administrativo substitui este arquivo.
 */

export const siteConfig = {
  name: "WS Style Men's",
  shortName: "WS",
  tagline: "Estilo masculino em cada detalhe.",
  description:
    "Moda masculina, tênis, relógios e acessórios selecionados. Conheça os lançamentos e monte seu look com a WS Style Men's.",

  // ATENÇÃO: número placeholder — substituir pelo WhatsApp real da loja
  // (formato: código do país + DDD + número, só dígitos)
  whatsapp: "5547999999999",

  instagram: "https://www.instagram.com/wsstylemens/",
  instagramHandle: "@wsstylemens",

  address: {
    street: "Rua Marechal Floriano Peixoto, 580",
    city: "Mafra",
    state: "SC",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=WS+Style+Men's+Rua+Marechal+Floriano+Peixoto+580+Mafra+SC",
  },

  // Horários ainda não confirmados pela loja — quando definidos, preencher
  // e a seção passa a exibir automaticamente. Não inventar horários.
  hours: null as string | null,

  // Grupo VIP no WhatsApp — trocar pelo link real quando existir
  vipGroupEnabled: true,
} as const;

export const navLinks = [
  { label: "Início", href: "/" },
  { label: "Novidades", href: "/novidades" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Marcas", href: "/marcas" },
  { label: "Looks", href: "/looks" },
  { label: "Ofertas", href: "/ofertas" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
] as const;
