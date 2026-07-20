# WS Style Men's — Vitrine Digital

Vitrine digital da **WS Style Men's**, loja de moda masculina premium multimarcas de Mafra/SC.
Catálogo navegável com filtros, looks completos e conversão pelo WhatsApp.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Fotos reais do Instagram [@wsstylemens](https://www.instagram.com/wsstylemens/)

## Rodando

```bash
npm install
npm run dev     # desenvolvimento em http://localhost:3000
npm run build   # build de produção
npm run start   # serve o build
```

## Configuração da loja

Tudo que é cadastrável vive em `data/`:

| Arquivo | Conteúdo |
| --- | --- |
| `data/site.config.ts` | **WhatsApp (placeholder — trocar pelo número real)**, endereço, Instagram, horários |
| `data/products.ts` | Catálogo de produtos (nome, marca, preço, tamanhos, fotos, etiquetas) |
| `data/looks.ts` | Looks completos montados por ocasião |
| `data/brands.ts` | Marcas exibidas no site |

As mensagens automáticas de WhatsApp ficam em `lib/whatsapp.ts`.

## Estrutura

- `/` — home (hero, categorias, novidades, tênis, relógios, looks, consultoria, marcas, loja)
- `/catalogo` — busca, filtros e ordenação
- `/produto/[slug]` — página de produto com consulta pelo WhatsApp
- `/looks`, `/marcas`, `/novidades`, `/ofertas`, `/sobre`, `/contato`
