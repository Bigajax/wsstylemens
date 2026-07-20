/**
 * Catálogo da WS Style Men's.
 * Estrutura pensada para migrar direto para um painel (Supabase):
 * cada produto é um registro completo, nada é hardcoded em componente.
 *
 * Fotos: acervo real do Instagram @wsstylemens (public/images).
 */

export type Categoria =
  | "Camisetas"
  | "Polos"
  | "Camisas"
  | "Calças"
  | "Bermudas"
  | "Tricôs e moletons"
  | "Tênis"
  | "Relógios"
  | "Bonés e acessórios";

export type Ocasiao =
  | "Dia a dia"
  | "Trabalho"
  | "Encontro"
  | "Viagem"
  | "Final de semana"
  | "Evento"
  | "Esporte fino"
  | "Presente";

export type Etiqueta =
  | "Novo"
  | "Lançamento"
  | "Seleção WS"
  | "Últimas unidades"
  | "Oferta"
  | "Mais vendido"
  | "Pronta entrega"
  | "Exclusivo";

export interface Product {
  slug: string;
  nome: string;
  marca: string;
  categoria: Categoria;
  codigo: string;
  preco: number;
  precoPromocional?: number;
  parcelamento?: string;
  cores: string[];
  /** Tamanhos de roupa (P–GG) ou numeração de calçado (39–43) */
  tamanhos: string[];
  imagens: string[];
  descricao: string;
  material?: string;
  modelagem?: string;
  ocasioes: Ocasiao[];
  etiquetas: Etiqueta[];
  disponibilidade: "Pronta entrega" | "Sob consulta";
  destaque?: boolean;
  novidade?: boolean;
  relacionados?: string[];
}

export const products: Product[] = [
  // ————— Camisas —————
  {
    slug: "camisa-branca-slim",
    nome: "Camisa Branca Slim",
    marca: "Reserva",
    categoria: "Camisas",
    codigo: "WS-CM-001",
    preco: 289.9,
    parcelamento: "3x de R$ 96,63 sem juros",
    cores: ["Branco"],
    tamanhos: ["P", "M", "G", "GG"],
    imagens: ["/images/hero-camisa-branca-poltrona.jpg", "/images/model-camisa-branca-sentado.jpg"],
    descricao:
      "A camisa branca que resolve do escritório ao jantar. Tecido com toque macio, caimento slim sem apertar e colarinho firme o dia inteiro.",
    material: "Algodão com elastano",
    modelagem: "Slim",
    ocasioes: ["Trabalho", "Encontro", "Evento", "Esporte fino"],
    etiquetas: ["Seleção WS", "Pronta entrega"],
    disponibilidade: "Pronta entrega",
    destaque: true,
    relacionados: ["calca-alfaiataria-navy", "relogio-orient-classico", "tenis-couro-branco"],
  },
  {
    slug: "camisa-linho-creme",
    nome: "Camisa de Linho Creme",
    marca: "Reserva",
    categoria: "Camisas",
    codigo: "WS-CM-002",
    preco: 319.9,
    parcelamento: "3x de R$ 106,63 sem juros",
    cores: ["Creme"],
    tamanhos: ["P", "M", "G", "GG"],
    imagens: ["/images/model-camisa-linho-creme.jpg"],
    descricao:
      "Linho leve com caimento natural — a peça que segura o calor com elegância. Funciona aberta sobre camiseta ou fechada com calça de alfaiataria.",
    material: "Linho misto",
    modelagem: "Regular",
    ocasioes: ["Encontro", "Viagem", "Final de semana", "Evento"],
    etiquetas: ["Novo", "Pronta entrega"],
    disponibilidade: "Pronta entrega",
    novidade: true,
    relacionados: ["camisa-linho-verde", "bermuda-alfaiataria", "tenis-couro-branco"],
  },
  {
    slug: "camisa-linho-verde",
    nome: "Camisa de Linho Verde Oliva",
    marca: "Reserva",
    categoria: "Camisas",
    codigo: "WS-CM-003",
    preco: 319.9,
    parcelamento: "3x de R$ 106,63 sem juros",
    cores: ["Verde oliva"],
    tamanhos: ["M", "G", "GG"],
    imagens: ["/images/model-camisa-linho-verde.jpg"],
    descricao:
      "O tom que diferencia sem gritar. Linho respirável, botões discretos e um caimento que combina com bermuda ou calça clara.",
    material: "Linho misto",
    modelagem: "Regular",
    ocasioes: ["Encontro", "Viagem", "Final de semana"],
    etiquetas: ["Novo"],
    disponibilidade: "Pronta entrega",
    novidade: true,
    relacionados: ["camisa-linho-creme", "bermuda-alfaiataria"],
  },
  {
    slug: "camisa-navy-esporte-fino",
    nome: "Camisa Navy Esporte Fino",
    marca: "K&J",
    categoria: "Camisas",
    codigo: "WS-CM-004",
    preco: 259.9,
    parcelamento: "3x de R$ 86,63 sem juros",
    cores: ["Azul marinho"],
    tamanhos: ["P", "M", "G", "GG"],
    imagens: ["/images/model-camisa-navy-sentado.jpg"],
    descricao:
      "Elegância sem excesso de formalidade: azul profundo, tecido encorpado e modelagem ajustada para noites que pedem presença.",
    material: "Algodão premium",
    modelagem: "Slim",
    ocasioes: ["Encontro", "Evento", "Esporte fino"],
    etiquetas: ["Seleção WS"],
    disponibilidade: "Pronta entrega",
    destaque: true,
    relacionados: ["camisa-branca-slim", "relogio-orient-classico"],
  },

  // ————— Camisetas —————
  {
    slug: "camiseta-tricot-branca",
    nome: "Camiseta Tricot Canelada Branca",
    marca: "King & Joe",
    categoria: "Camisetas",
    codigo: "WS-CT-001",
    preco: 189.9,
    parcelamento: "2x de R$ 94,95 sem juros",
    cores: ["Off-white"],
    tamanhos: ["P", "M", "G", "GG"],
    imagens: ["/images/model-camiseta-branca-oculos.jpg"],
    descricao:
      "Textura canelada que veste como camiseta e aparece como tricô. Gola firme, toque premium — o básico que não passa despercebido.",
    material: "Tricot canelado",
    modelagem: "Regular",
    ocasioes: ["Dia a dia", "Encontro", "Final de semana"],
    etiquetas: ["Mais vendido", "Pronta entrega"],
    disponibilidade: "Pronta entrega",
    destaque: true,
    novidade: true,
    relacionados: ["calca-chino-bege", "tenis-couro-branco", "oculos-e-acessorios"],
  },
  {
    slug: "camiseta-navy-premium",
    nome: "Camiseta Premium Navy",
    marca: "King & Joe",
    categoria: "Camisetas",
    codigo: "WS-CT-002",
    preco: 149.9,
    cores: ["Azul marinho"],
    tamanhos: ["P", "M", "G", "GG"],
    imagens: ["/images/model-camiseta-navy-chino.jpg"],
    descricao:
      "Malha penteada de gramatura alta, sem estampa e sem transparência. A camiseta que segura qualquer combinação.",
    material: "Algodão penteado",
    modelagem: "Regular",
    ocasioes: ["Dia a dia", "Trabalho", "Viagem"],
    etiquetas: ["Pronta entrega"],
    disponibilidade: "Pronta entrega",
    relacionados: ["calca-chino-bege", "camiseta-oliva-premium"],
  },
  {
    slug: "camiseta-oliva-premium",
    nome: "Camiseta Premium Verde Oliva",
    marca: "Resumo",
    categoria: "Camisetas",
    codigo: "WS-CT-003",
    preco: 149.9,
    cores: ["Verde oliva"],
    tamanhos: ["M", "G", "GG"],
    imagens: ["/images/model-camiseta-olive.jpg"],
    descricao:
      "O tom militar que combina com bege, preto e jeans. Corte reto, ombro no lugar e malha que não deforma.",
    material: "Algodão penteado",
    modelagem: "Regular",
    ocasioes: ["Dia a dia", "Final de semana", "Viagem"],
    etiquetas: ["Novo"],
    disponibilidade: "Pronta entrega",
    novidade: true,
    relacionados: ["camiseta-navy-premium", "camiseta-khaki-basica"],
  },
  {
    slug: "camiseta-khaki-basica",
    nome: "Camiseta Básica Khaki",
    marca: "Resumo",
    categoria: "Camisetas",
    codigo: "WS-CT-004",
    preco: 129.9,
    cores: ["Khaki"],
    tamanhos: ["P", "M", "G", "GG"],
    imagens: ["/images/detail-camiseta-khaki-corrente.jpg"],
    descricao:
      "Neutra na medida: fica boa sozinha, melhor ainda com uma corrente prata. Malha densa e cor que não desbota.",
    material: "Algodão penteado",
    modelagem: "Regular",
    ocasioes: ["Dia a dia", "Final de semana"],
    etiquetas: ["Pronta entrega"],
    disponibilidade: "Pronta entrega",
    relacionados: ["camiseta-oliva-premium", "kit-camisetas-premium"],
  },
  {
    slug: "kit-camisetas-premium",
    nome: "Kit Camisetas Premium",
    marca: "Seleção WS",
    categoria: "Camisetas",
    codigo: "WS-CT-005",
    preco: 399.9,
    precoPromocional: 349.9,
    parcelamento: "3x de R$ 116,63 sem juros",
    cores: ["Branco", "Cinza", "Verde", "Vermelho", "Off-white"],
    tamanhos: ["P", "M", "G", "GG"],
    imagens: ["/images/camisetas-dobradas.jpg"],
    descricao:
      "Três camisetas premium à sua escolha entre as cores disponíveis na loja. A base do guarda-roupa resolvida de uma vez.",
    material: "Algodão penteado",
    modelagem: "Regular",
    ocasioes: ["Dia a dia", "Presente", "Viagem"],
    etiquetas: ["Oferta", "Seleção WS"],
    disponibilidade: "Pronta entrega",
    relacionados: ["camiseta-khaki-basica", "camiseta-navy-premium"],
  },

  // ————— Polos —————
  {
    slug: "polo-azul-claro",
    nome: "Polo Azul Claro Texturizada",
    marca: "K&J",
    categoria: "Polos",
    codigo: "WS-PL-001",
    preco: 199.9,
    parcelamento: "2x de R$ 99,95 sem juros",
    cores: ["Azul claro"],
    tamanhos: ["P", "M", "G", "GG"],
    imagens: ["/images/detail-polo-azul.jpg"],
    descricao:
      "Piquet texturizado com brilho discreto de fio tinto. A polo que transita entre a reunião e o happy hour.",
    material: "Piquet premium",
    modelagem: "Slim",
    ocasioes: ["Trabalho", "Dia a dia", "Esporte fino"],
    etiquetas: ["Novo", "Pronta entrega"],
    disponibilidade: "Pronta entrega",
    novidade: true,
    relacionados: ["polo-amarela", "calca-chino-bege"],
  },
  {
    slug: "polo-amarela",
    nome: "Polo Amarela Manteiga",
    marca: "King & Joe",
    categoria: "Polos",
    codigo: "WS-PL-002",
    preco: 189.9,
    cores: ["Amarelo claro"],
    tamanhos: ["P", "M", "G"],
    imagens: ["/images/model-polo-amarela.jpg"],
    descricao:
      "Tom manteiga que ilumina pele bronzeada e contrasta com calça preta. Gola retilínea que não vira com o tempo.",
    material: "Malha retilínea",
    modelagem: "Slim",
    ocasioes: ["Encontro", "Final de semana", "Evento"],
    etiquetas: ["Últimas unidades"],
    disponibilidade: "Pronta entrega",
    relacionados: ["polo-azul-claro", "polo-preta"],
  },
  {
    slug: "polo-preta",
    nome: "Polo Preta Gola Aberta",
    marca: "Reserva",
    categoria: "Polos",
    codigo: "WS-PL-003",
    preco: 219.9,
    parcelamento: "2x de R$ 109,95 sem juros",
    cores: ["Preto"],
    tamanhos: ["P", "M", "G", "GG"],
    imagens: ["/images/model-polo-preta-bermuda.jpg"],
    descricao:
      "Gola aberta estilo retrô, preto absoluto e caimento leve. Com bermuda de alfaiataria vira o look do verão.",
    material: "Malha premium",
    modelagem: "Regular",
    ocasioes: ["Encontro", "Final de semana", "Esporte fino"],
    etiquetas: ["Seleção WS", "Mais vendido"],
    disponibilidade: "Pronta entrega",
    destaque: true,
    relacionados: ["bermuda-alfaiataria", "tenis-preto-couro"],
  },

  // ————— Calças e bermudas —————
  {
    slug: "calca-chino-bege",
    nome: "Calça Chino Bege",
    marca: "K&J",
    categoria: "Calças",
    codigo: "WS-CL-001",
    preco: 249.9,
    parcelamento: "3x de R$ 83,30 sem juros",
    cores: ["Bege"],
    tamanhos: ["38", "40", "42", "44", "46"],
    imagens: ["/images/model-camiseta-navy-chino.jpg"],
    descricao:
      "A chino que substitui o jeans sem esforço. Sarja com elastano, cós confortável e barra na altura certa para mostrar o tênis.",
    material: "Sarja com elastano",
    modelagem: "Slim",
    ocasioes: ["Trabalho", "Dia a dia", "Encontro"],
    etiquetas: ["Mais vendido", "Pronta entrega"],
    disponibilidade: "Pronta entrega",
    relacionados: ["camiseta-navy-premium", "tenis-couro-branco"],
  },
  {
    slug: "calca-alfaiataria-navy",
    nome: "Calça Alfaiataria Navy",
    marca: "K&J",
    categoria: "Calças",
    codigo: "WS-CL-002",
    preco: 289.9,
    parcelamento: "3x de R$ 96,63 sem juros",
    cores: ["Azul marinho"],
    tamanhos: ["38", "40", "42", "44"],
    imagens: ["/images/hero-camisa-branca-poltrona.jpg"],
    descricao:
      "Corte de alfaiataria com tecido tecnológico que não amassa. Do casamento ao escritório sem passar pela lavanderia.",
    material: "Tecido tecnológico",
    modelagem: "Slim",
    ocasioes: ["Trabalho", "Evento", "Esporte fino"],
    etiquetas: ["Seleção WS"],
    disponibilidade: "Pronta entrega",
    relacionados: ["camisa-branca-slim", "tenis-couro-branco"],
  },
  {
    slug: "bermuda-alfaiataria",
    nome: "Bermuda Alfaiataria Bege",
    marca: "Reserva",
    categoria: "Bermudas",
    codigo: "WS-BM-001",
    preco: 199.9,
    cores: ["Bege"],
    tamanhos: ["38", "40", "42", "44"],
    imagens: ["/images/model-polo-preta-bermuda.jpg"],
    descricao:
      "Comprimento acima do joelho, pregas discretas e tecido leve. A bermuda que entra em restaurante sem cerimônia.",
    material: "Sarja leve",
    modelagem: "Regular",
    ocasioes: ["Final de semana", "Viagem", "Encontro"],
    etiquetas: ["Novo"],
    disponibilidade: "Pronta entrega",
    novidade: true,
    relacionados: ["polo-preta", "camisa-linho-verde"],
  },

  // ————— Tênis —————
  {
    slug: "tenis-new-balance-cinza",
    nome: "Tênis New Balance Lifestyle Cinza",
    marca: "New Balance",
    categoria: "Tênis",
    codigo: "WS-TN-001",
    preco: 749.9,
    parcelamento: "6x de R$ 124,98 sem juros",
    cores: ["Cinza"],
    tamanhos: ["39", "40", "41", "42", "43"],
    imagens: ["/images/tenis-newbalance-cinza.jpg"],
    descricao:
      "O cinza que virou assinatura da marca: camurça, mesh e a entressola que segura o dia inteiro. Combina com tudo que você já tem.",
    material: "Camurça e mesh",
    ocasioes: ["Dia a dia", "Viagem", "Final de semana"],
    etiquetas: ["Lançamento", "Seleção WS"],
    disponibilidade: "Pronta entrega",
    destaque: true,
    novidade: true,
    relacionados: ["tenis-couro-branco", "calca-chino-bege"],
  },
  {
    slug: "tenis-couro-branco",
    nome: "Tênis Couro Branco Minimalista",
    marca: "Fila",
    categoria: "Tênis",
    codigo: "WS-TN-002",
    preco: 449.9,
    parcelamento: "4x de R$ 112,48 sem juros",
    cores: ["Branco"],
    tamanhos: ["39", "40", "41", "42", "43"],
    imagens: ["/images/tenis-branco-couro.jpg"],
    descricao:
      "Couro branco sem logomarca gritando. O tênis que fecha look de alfaiataria, chino ou jeans — o coringa do guarda-roupa.",
    material: "Couro",
    ocasioes: ["Trabalho", "Encontro", "Esporte fino", "Dia a dia"],
    etiquetas: ["Mais vendido", "Pronta entrega"],
    disponibilidade: "Pronta entrega",
    destaque: true,
    relacionados: ["tenis-new-balance-cinza", "tenis-preto-couro"],
  },
  {
    slug: "tenis-preto-couro",
    nome: "Tênis Couro Preto Sola Alta",
    marca: "Fila",
    categoria: "Tênis",
    codigo: "WS-TN-003",
    preco: 469.9,
    parcelamento: "4x de R$ 117,48 sem juros",
    cores: ["Preto"],
    tamanhos: ["40", "41", "42", "43"],
    imagens: ["/images/tenis-preto-rug.jpg"],
    descricao:
      "Preto no cabedal, branco na entressola: contraste limpo que alonga a silhueta. Para noites e looks monocromáticos.",
    material: "Couro",
    ocasioes: ["Encontro", "Evento", "Esporte fino"],
    etiquetas: ["Novo"],
    disponibilidade: "Pronta entrega",
    novidade: true,
    relacionados: ["tenis-couro-branco", "polo-preta"],
  },

  // ————— Relógios —————
  {
    slug: "relogio-orient-neo-sports",
    nome: "Relógio Orient Neo Sports Cronógrafo",
    marca: "Orient",
    categoria: "Relógios",
    codigo: "WS-RL-001",
    preco: 899.9,
    parcelamento: "6x de R$ 149,98 sem juros",
    cores: ["Prata e azul"],
    tamanhos: ["Único"],
    imagens: ["/images/relogios-triptico.jpg"],
    descricao:
      "Cronógrafo com mostrador azul profundo e pulseira de aço. Presença de esportivo com acabamento de clássico.",
    material: "Aço inoxidável",
    ocasioes: ["Trabalho", "Evento", "Presente", "Esporte fino"],
    etiquetas: ["Lançamento", "Seleção WS"],
    disponibilidade: "Pronta entrega",
    destaque: true,
    novidade: true,
    relacionados: ["relogio-orient-diver", "relogio-orient-classico"],
  },
  {
    slug: "relogio-orient-diver",
    nome: "Relógio Orient Automático Diver",
    marca: "Orient",
    categoria: "Relógios",
    codigo: "WS-RL-002",
    preco: 1099.9,
    parcelamento: "6x de R$ 183,32 sem juros",
    cores: ["Azul gelo", "Amarelo", "Vermelho"],
    tamanhos: ["Único"],
    imagens: ["/images/relogios-orient-flatlay.jpg"],
    descricao:
      "Automático da marca tradicional japonesa, com mostradores em cores que não passam batido. Máquina que dispensa bateria.",
    material: "Aço inoxidável",
    ocasioes: ["Presente", "Final de semana", "Evento"],
    etiquetas: ["Exclusivo", "Seleção WS"],
    disponibilidade: "Sob consulta",
    destaque: true,
    relacionados: ["relogio-orient-neo-sports", "relogio-orient-classico"],
  },
  {
    slug: "relogio-orient-classico",
    nome: "Relógio Orient Clássico Prata",
    marca: "Orient",
    categoria: "Relógios",
    codigo: "WS-RL-003",
    preco: 649.9,
    parcelamento: "5x de R$ 129,98 sem juros",
    cores: ["Prata"],
    tamanhos: ["Único"],
    imagens: ["/images/relogio-prata-mao.jpg"],
    descricao:
      "Mostrador limpo, caixa fina e pulseira de aço escovado. O relógio de todo dia que também vai bem no evento.",
    material: "Aço inoxidável",
    ocasioes: ["Trabalho", "Dia a dia", "Presente"],
    etiquetas: ["Mais vendido", "Pronta entrega"],
    disponibilidade: "Pronta entrega",
    relacionados: ["relogio-orient-neo-sports", "camisa-branca-slim"],
  },

  // ————— Bonés e acessórios —————
  {
    slug: "bone-new-era-la",
    nome: "Boné New Era LA 9Forty",
    marca: "New Era",
    categoria: "Bonés e acessórios",
    codigo: "WS-AC-001",
    preco: 199.9,
    cores: ["Preto"],
    tamanhos: ["Único"],
    imagens: ["/images/flatlay-look-bone.jpg"],
    descricao:
      "O clássico LA em preto absoluto, aba curva e ajuste traseiro. Fecha o look casual com atitude na medida.",
    ocasioes: ["Dia a dia", "Final de semana", "Presente"],
    etiquetas: ["Pronta entrega"],
    disponibilidade: "Pronta entrega",
    relacionados: ["camiseta-khaki-basica", "tenis-new-balance-cinza"],
  },
  {
    slug: "perfumaria-masculina",
    nome: "Perfumaria Masculina Selecionada",
    marca: "Seleção WS",
    categoria: "Bonés e acessórios",
    codigo: "WS-AC-002",
    preco: 289.9,
    cores: ["—"],
    tamanhos: ["Único"],
    imagens: ["/images/detail-perfume.jpg"],
    descricao:
      "Fragrâncias masculinas selecionadas pela equipe WS. Consulte as opções disponíveis no momento — a linha muda com frequência.",
    ocasioes: ["Presente", "Encontro"],
    etiquetas: ["Seleção WS"],
    disponibilidade: "Sob consulta",
    relacionados: ["relogio-orient-classico", "bone-new-era-la"],
  },
];

export const categorias: { nome: Categoria; descricao: string; imagem: string }[] = [
  { nome: "Camisetas", descricao: "A base premium do guarda-roupa.", imagem: "/images/model-camiseta-branca-oculos.jpg" },
  { nome: "Polos", descricao: "Do escritório ao fim de semana.", imagem: "/images/detail-polo-azul.jpg" },
  { nome: "Camisas", descricao: "Linho, algodão e presença.", imagem: "/images/model-camisa-linho-creme.jpg" },
  { nome: "Calças", descricao: "Chino e alfaiataria no caimento certo.", imagem: "/images/model-camiseta-navy-chino.jpg" },
  { nome: "Bermudas", descricao: "Verão com acabamento de alfaiate.", imagem: "/images/model-polo-preta-bermuda.jpg" },
  { nome: "Tênis", descricao: "Modelos para produções casuais e urbanas.", imagem: "/images/tenis-newbalance-cinza.jpg" },
  { nome: "Relógios", descricao: "Presença e personalidade nos detalhes.", imagem: "/images/relogios-orient-flatlay.jpg" },
  { nome: "Bonés e acessórios", descricao: "O que fecha o look.", imagem: "/images/flatlay-look-bone.jpg" },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
