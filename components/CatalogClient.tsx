"use client";

import { useMemo, useState } from "react";
import { products, formatPrice, type Categoria, type Ocasiao } from "@/data/products";
import { brands } from "@/data/brands";
import ProductCard from "./ProductCard";
import { CloseIcon, FilterIcon, SearchIcon } from "./Icons";

const CATEGORIAS = [...new Set(products.map((p) => p.categoria))] as Categoria[];
const OCASIOES = [...new Set(products.flatMap((p) => p.ocasioes))] as Ocasiao[];
const TAMANHOS = [...new Set(products.flatMap((p) => p.tamanhos))].filter((t) => t !== "Único");
const FAIXAS = [
  { label: "Até R$ 200", min: 0, max: 200 },
  { label: "R$ 200 a R$ 400", min: 200, max: 400 },
  { label: "R$ 400 a R$ 700", min: 400, max: 700 },
  { label: "Acima de R$ 700", min: 700, max: Infinity },
];

const ORDENACOES = [
  { value: "recentes", label: "Mais recentes" },
  { value: "destaques", label: "Destaques" },
  { value: "menor", label: "Menor preço" },
  { value: "maior", label: "Maior preço" },
  { value: "ofertas", label: "Ofertas" },
] as const;

type Ordenacao = (typeof ORDENACOES)[number]["value"];

export interface CatalogInitial {
  categoria?: string;
  marca?: string;
  busca?: string;
  apenasNovidades?: boolean;
  apenasOfertas?: boolean;
}

export default function CatalogClient({ initial = {} }: { initial?: CatalogInitial }) {
  const [busca, setBusca] = useState(initial.busca ?? "");
  const [categoria, setCategoria] = useState<string | null>(initial.categoria ?? null);
  const [marca, setMarca] = useState<string | null>(initial.marca ?? null);
  const [tamanho, setTamanho] = useState<string | null>(null);
  const [ocasiao, setOcasiao] = useState<string | null>(null);
  const [faixa, setFaixa] = useState<string | null>(null);
  const [soNovidades, setSoNovidades] = useState(initial.apenasNovidades ?? false);
  const [soOfertas, setSoOfertas] = useState(initial.apenasOfertas ?? false);
  const [ordenar, setOrdenar] = useState<Ordenacao>("recentes");
  const [painelAberto, setPainelAberto] = useState(false);

  const resultado = useMemo(() => {
    const q = busca.trim().toLowerCase();
    let lista = products.filter((p) => {
      if (q) {
        const alvo = `${p.nome} ${p.marca} ${p.categoria} ${p.codigo} ${p.cores.join(" ")}`.toLowerCase();
        if (!alvo.includes(q)) return false;
      }
      if (categoria && p.categoria !== categoria) return false;
      if (marca && p.marca !== marca) return false;
      if (tamanho && !p.tamanhos.includes(tamanho)) return false;
      if (ocasiao && !p.ocasioes.includes(ocasiao as Ocasiao)) return false;
      if (faixa) {
        const f = FAIXAS.find((f) => f.label === faixa)!;
        const preco = p.precoPromocional ?? p.preco;
        if (preco < f.min || preco >= f.max) return false;
      }
      if (soNovidades && !p.novidade) return false;
      if (soOfertas && !p.precoPromocional) return false;
      return true;
    });

    const preco = (p: (typeof products)[number]) => p.precoPromocional ?? p.preco;
    switch (ordenar) {
      case "menor":
        lista = [...lista].sort((a, b) => preco(a) - preco(b));
        break;
      case "maior":
        lista = [...lista].sort((a, b) => preco(b) - preco(a));
        break;
      case "destaques":
        lista = [...lista].sort((a, b) => Number(b.destaque ?? false) - Number(a.destaque ?? false));
        break;
      case "ofertas":
        lista = [...lista].sort(
          (a, b) => Number(Boolean(b.precoPromocional)) - Number(Boolean(a.precoPromocional))
        );
        break;
      default:
        lista = [...lista].sort((a, b) => Number(b.novidade ?? false) - Number(a.novidade ?? false));
    }
    return lista;
  }, [busca, categoria, marca, tamanho, ocasiao, faixa, soNovidades, soOfertas, ordenar]);

  const chips: { label: string; clear: () => void }[] = [];
  if (categoria) chips.push({ label: categoria, clear: () => setCategoria(null) });
  if (marca) chips.push({ label: marca, clear: () => setMarca(null) });
  if (tamanho) chips.push({ label: `Tam. ${tamanho}`, clear: () => setTamanho(null) });
  if (ocasiao) chips.push({ label: ocasiao, clear: () => setOcasiao(null) });
  if (faixa) chips.push({ label: faixa, clear: () => setFaixa(null) });
  if (soNovidades) chips.push({ label: "Novidades", clear: () => setSoNovidades(false) });
  if (soOfertas) chips.push({ label: "Ofertas", clear: () => setSoOfertas(false) });

  const limparTudo = () => {
    setBusca("");
    setCategoria(null);
    setMarca(null);
    setTamanho(null);
    setOcasiao(null);
    setFaixa(null);
    setSoNovidades(false);
    setSoOfertas(false);
  };

  const Filtros = () => (
    <div className="space-y-7">
      <FiltroGrupo titulo="Categoria">
        {CATEGORIAS.map((c) => (
          <FiltroOpcao key={c} ativo={categoria === c} onClick={() => setCategoria(categoria === c ? null : c)}>
            {c}
          </FiltroOpcao>
        ))}
      </FiltroGrupo>
      <FiltroGrupo titulo="Marca">
        {brands.map((b) => (
          <FiltroOpcao key={b.nome} ativo={marca === b.nome} onClick={() => setMarca(marca === b.nome ? null : b.nome)}>
            {b.nome}
          </FiltroOpcao>
        ))}
      </FiltroGrupo>
      <FiltroGrupo titulo="Tamanho / numeração">
        {TAMANHOS.map((t) => (
          <FiltroOpcao key={t} ativo={tamanho === t} onClick={() => setTamanho(tamanho === t ? null : t)} compacto>
            {t}
          </FiltroOpcao>
        ))}
      </FiltroGrupo>
      <FiltroGrupo titulo="Ocasião">
        {OCASIOES.map((o) => (
          <FiltroOpcao key={o} ativo={ocasiao === o} onClick={() => setOcasiao(ocasiao === o ? null : o)}>
            {o}
          </FiltroOpcao>
        ))}
      </FiltroGrupo>
      <FiltroGrupo titulo="Faixa de preço">
        {FAIXAS.map((f) => (
          <FiltroOpcao key={f.label} ativo={faixa === f.label} onClick={() => setFaixa(faixa === f.label ? null : f.label)}>
            {f.label}
          </FiltroOpcao>
        ))}
      </FiltroGrupo>
      <FiltroGrupo titulo="Destaques">
        <FiltroOpcao ativo={soNovidades} onClick={() => setSoNovidades(!soNovidades)}>
          Novidades
        </FiltroOpcao>
        <FiltroOpcao ativo={soOfertas} onClick={() => setSoOfertas(!soOfertas)}>
          Ofertas
        </FiltroOpcao>
      </FiltroGrupo>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      {/* Busca + ordenação */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Buscar produto</span>
          <SearchIcon className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink/40" />
          <input
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por nome, marca, cor ou código…"
            className="w-full bg-white border border-mist focus:border-gold pl-10 pr-4 py-3 text-sm outline-none transition-colors"
          />
        </label>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPainelAberto(true)}
            className="lg:hidden inline-flex items-center gap-2 tag-data text-[0.78rem] bg-ink text-offwhite px-4 py-3"
          >
            <FilterIcon className="w-4 h-4" /> Filtrar
            {chips.length > 0 && (
              <span className="bg-gold text-ink rounded-full w-5 h-5 grid place-items-center text-[0.65rem]">
                {chips.length}
              </span>
            )}
          </button>
          <label className="flex items-center gap-2">
            <span className="tag-data text-[0.68rem] text-ink/50 hidden sm:block">Ordenar</span>
            <select
              value={ordenar}
              onChange={(e) => setOrdenar(e.target.value as Ordenacao)}
              className="bg-white border border-mist text-sm px-3 py-3 outline-none focus:border-gold"
            >
              {ORDENACOES.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {/* Chips ativos */}
      {chips.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {chips.map((c) => (
            <button
              key={c.label}
              type="button"
              onClick={c.clear}
              className="inline-flex items-center gap-1.5 hang-tag hang-tag--outline hover:!text-ink transition-colors"
            >
              {c.label} <CloseIcon className="w-3 h-3" />
            </button>
          ))}
          <button
            type="button"
            onClick={limparTudo}
            className="text-xs text-coffee underline underline-offset-2 hover:text-ink transition-colors ml-1"
          >
            Limpar filtros
          </button>
        </div>
      )}

      <div className="mt-6 lg:grid lg:grid-cols-[240px_1fr] lg:gap-8">
        {/* Filtros desktop */}
        <aside className="hidden lg:block" aria-label="Filtros">
          <Filtros />
        </aside>

        <div>
          <p className="tag-data text-[0.72rem] text-ink/50 mb-4" aria-live="polite">
            {resultado.length} {resultado.length === 1 ? "produto" : "produtos"}
          </p>
          {resultado.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
              {resultado.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          ) : (
            <div className="border border-mist bg-white px-6 py-16 text-center">
              <p className="display text-xl">Nenhum produto com esses filtros</p>
              <p className="text-sm text-ink/60 mt-2">
                Ajuste a busca ou fale com a equipe — o estoque da loja vai além da vitrine.
              </p>
              <button
                type="button"
                onClick={limparTudo}
                className="mt-5 tag-data text-[0.78rem] bg-ink text-gold px-5 py-3 hover:bg-graphite transition-colors"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Painel de filtros mobile */}
      {painelAberto && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <button
            type="button"
            aria-label="Fechar filtros"
            onClick={() => setPainelAberto(false)}
            className="absolute inset-0 bg-ink/60"
          />
          <div className="relative ml-auto h-full w-[85%] max-w-sm bg-offwhite overflow-y-auto">
            <div className="sticky top-0 bg-offwhite border-b border-mist flex items-center justify-between px-5 py-4">
              <span className="display text-lg">Filtrar</span>
              <button type="button" onClick={() => setPainelAberto(false)} aria-label="Fechar">
                <CloseIcon />
              </button>
            </div>
            <div className="px-5 py-6 pb-28">
              <Filtros />
            </div>
            <div className="fixed bottom-0 right-0 w-[85%] max-w-sm bg-offwhite border-t border-mist p-4">
              <button
                type="button"
                onClick={() => setPainelAberto(false)}
                className="w-full bg-gold text-ink tag-data text-[0.82rem] py-3.5 hover:bg-goldbright transition-colors"
              >
                Ver {resultado.length} {resultado.length === 1 ? "resultado" : "resultados"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FiltroGrupo({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="tag-data text-[0.7rem] text-coffee mb-3">{titulo}</legend>
      <div className="flex flex-wrap gap-2">{children}</div>
    </fieldset>
  );
}

function FiltroOpcao({
  ativo,
  onClick,
  compacto = false,
  children,
}: {
  ativo: boolean;
  onClick: () => void;
  compacto?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={ativo}
      className={`tag-data text-[0.72rem] border transition-colors ${
        compacto ? "px-2.5 py-1.5 min-w-9" : "px-3 py-1.5"
      } ${
        ativo
          ? "bg-ink text-gold border-ink"
          : "bg-white text-ink/70 border-mist hover:border-gold"
      }`}
    >
      {children}
    </button>
  );
}
