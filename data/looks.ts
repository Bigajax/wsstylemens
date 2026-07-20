/**
 * Looks completos montados pela equipe WS.
 * Cada peça referencia um produto do catálogo pelo slug.
 */

import { getProduct, formatPrice } from "./products";

export interface Look {
  slug: string;
  numero: string;
  nome: string;
  ocasiao: string;
  imagem: string;
  descricao: string;
  pecas: string[]; // slugs de produtos
}

export const looks: Look[] = [
  {
    slug: "casual-premium",
    numero: "01",
    nome: "Casual Premium",
    ocasiao: "Dia a dia",
    imagem: "/images/model-camiseta-branca-oculos.jpg",
    descricao: "A base bem-feita: tricot branco, chino bege e tênis de couro. Simples de vestir, difícil de errar.",
    pecas: ["camiseta-tricot-branca", "calca-chino-bege", "tenis-couro-branco", "relogio-orient-classico"],
  },
  {
    slug: "esporte-fino",
    numero: "02",
    nome: "Esporte Fino",
    ocasiao: "Evento",
    imagem: "/images/hero-camisa-branca-poltrona.jpg",
    descricao: "Camisa branca impecável, alfaiataria navy e cronógrafo no pulso. Elegância sem gravata.",
    pecas: ["camisa-branca-slim", "calca-alfaiataria-navy", "tenis-couro-branco", "relogio-orient-neo-sports"],
  },
  {
    slug: "verao-linho",
    numero: "03",
    nome: "Verão em Linho",
    ocasiao: "Final de semana",
    imagem: "/images/model-camisa-linho-verde.jpg",
    descricao: "Linho verde oliva com bermuda de alfaiataria. Fresco, elegante e pronto para o litoral.",
    pecas: ["camisa-linho-verde", "bermuda-alfaiataria", "tenis-couro-branco"],
  },
  {
    slug: "noite-marcante",
    numero: "04",
    nome: "Noite Marcante",
    ocasiao: "Encontro",
    imagem: "/images/model-polo-preta-bermuda.jpg",
    descricao: "Polo preta de gola aberta, bermuda bege e tênis preto. Contraste certo para a noite certa.",
    pecas: ["polo-preta", "bermuda-alfaiataria", "tenis-preto-couro", "relogio-orient-classico"],
  },
];

export function lookTotal(look: Look) {
  const total = look.pecas.reduce((sum, slug) => {
    const p = getProduct(slug);
    return sum + (p ? (p.precoPromocional ?? p.preco) : 0);
  }, 0);
  return formatPrice(total);
}
