/**
 * Construtores de mensagem para o WhatsApp — o canal principal de conversão.
 * Cada contexto do site gera uma mensagem própria, já preenchida.
 */

import { siteConfig } from "@/data/site.config";
import { formatPrice, type Product } from "@/data/products";
import type { Look } from "@/data/looks";

export function waLink(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function waGeral() {
  return waLink(
    "Olá! Vim pela vitrine digital da WS Style Men's e gostaria de um atendimento."
  );
}

export function waProduto(p: Product, selecao?: { tamanho?: string; cor?: string }) {
  const linhas = [
    "Olá! Encontrei este produto na vitrine digital da WS Style Men's.",
    "",
    `Produto: ${p.nome}`,
    `Marca: ${p.marca}`,
    `Código: ${p.codigo}`,
    `Cor: ${selecao?.cor ?? p.cores.join(" / ")}`,
    `Tamanho ou numeração: ${selecao?.tamanho ?? "a definir"}`,
    `Valor: ${formatPrice(p.precoPromocional ?? p.preco)}`,
    "",
    "Gostaria de confirmar a disponibilidade e finalizar meu atendimento.",
  ];
  return waLink(linhas.join("\n"));
}

export function waAjudaProduto(p: Product) {
  return waLink(
    `Olá! Estou vendo o produto "${p.nome}" (${p.codigo}) na vitrine da WS Style Men's e preciso de ajuda com tamanho ou combinação.`
  );
}

export function waLook(look: Look, pecas: { nome: string; marca: string; preco: string }[]) {
  const linhas = [
    `Olá! Me interessei pelo Look ${look.numero} — ${look.nome} da vitrine WS Style Men's.`,
    "",
    ...pecas.map((p) => `• ${p.nome} (${p.marca}) — ${p.preco}`),
    "",
    "Gostaria de consultar disponibilidade e tamanhos das peças.",
  ];
  return waLink(linhas.join("\n"));
}

export function waMonteSeuLook(respostas: Record<string, string>) {
  const linhas = [
    "Olá! Quero ajuda da equipe WS para montar um look.",
    "",
    ...Object.entries(respostas)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`),
    "",
    "Podem me enviar sugestões?",
  ];
  return waLink(linhas.join("\n"));
}

export function waPresente() {
  return waLink(
    "Olá! Estou procurando um presente na WS Style Men's e preciso de ajuda para escolher."
  );
}

export function waLoja() {
  return waLink(
    "Olá! Gostaria de mais informações sobre a loja física da WS Style Men's."
  );
}

export function waGrupoVip() {
  return waLink(
    "Olá! Quero entrar no Grupo VIP da WS Style Men's para receber lançamentos e ofertas."
  );
}
