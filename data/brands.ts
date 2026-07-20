/**
 * Marcas trabalhadas pela WS Style Men's (conforme bio do Instagram).
 * Gerenciável: remover/adicionar aqui reflete em todo o site.
 */

export interface Brand {
  nome: string;
  descricao: string;
}

export const brands: Brand[] = [
  { nome: "Nike", descricao: "Performance e lifestyle que dispensam apresentação." },
  { nome: "New Balance", descricao: "O equilíbrio entre conforto e estética urbana." },
  { nome: "Fila", descricao: "Herança esportiva italiana com preço honesto." },
  { nome: "New Era", descricao: "Os bonés originais das ligas americanas." },
  { nome: "Orient", descricao: "Relojoaria japonesa tradicional, máquinas automáticas." },
  { nome: "Reserva", descricao: "Moda brasileira com atitude e caimento." },
  { nome: "Resumo", descricao: "Básicos premium desenhados para durar." },
  { nome: "K&J", descricao: "Alfaiataria contemporânea e esporte fino." },
  { nome: "King & Joe", descricao: "Malharia e tricôs com toque diferenciado." },
];
