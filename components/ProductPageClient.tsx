"use client";

import { useState } from "react";
import Image from "next/image";
import { formatPrice, type Product } from "@/data/products";
import { waProduto, waAjudaProduto } from "@/lib/whatsapp";
import { WhatsIcon, ChatIcon } from "./Icons";

/** Área interativa da página de produto: galeria, seleção e consulta. */
export default function ProductPageClient({ product }: { product: Product }) {
  const [imagem, setImagem] = useState(0);
  const [tamanho, setTamanho] = useState<string | null>(
    product.tamanhos.length === 1 ? product.tamanhos[0] : null
  );
  const [cor, setCor] = useState<string | null>(product.cores.length === 1 ? product.cores[0] : null);
  const [avisoSelecao, setAvisoSelecao] = useState(false);

  const preco = product.precoPromocional ?? product.preco;
  const precisaSelecao =
    (product.tamanhos.length > 1 && !tamanho) || (product.cores.length > 1 && !cor);

  const consultarHref = waProduto(product, {
    tamanho: tamanho ?? undefined,
    cor: cor ?? undefined,
  });

  const aoConsultar = (e: React.MouseEvent) => {
    if (precisaSelecao) {
      e.preventDefault();
      setAvisoSelecao(true);
    }
  };

  return (
    <div className="lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-12">
      {/* Galeria */}
      <div>
        <div className="relative aspect-[4/5] bg-white border border-mist overflow-hidden">
          <Image
            src={product.imagens[imagem]}
            alt={`${product.nome} — foto ${imagem + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
            priority
          />
          {product.etiquetas[0] && (
            <span className="hang-tag hang-tag--ink absolute top-4 left-0">
              {product.etiquetas[0]}
            </span>
          )}
        </div>
        {product.imagens.length > 1 && (
          <div className="mt-3 flex gap-2">
            {product.imagens.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setImagem(i)}
                aria-label={`Ver foto ${i + 1}`}
                className={`relative w-20 aspect-[4/5] border transition-colors ${
                  imagem === i ? "border-gold" : "border-mist hover:border-gold/50"
                }`}
              >
                <Image src={img} alt="" fill sizes="80px" className="object-cover object-top" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Informações */}
      <div className="mt-8 lg:mt-0">
        <div className="flex items-center gap-3">
          <span className="tag-data text-[0.72rem] text-coffee">{product.marca}</span>
          <span className="text-mist">•</span>
          <span className="tag-data text-[0.72rem] text-ink/50">{product.categoria}</span>
          <span className="text-mist">•</span>
          <span className="tag-data text-[0.72rem] text-ink/50">Cód. {product.codigo}</span>
        </div>

        <h1 className="display text-3xl sm:text-4xl mt-3">{product.nome}</h1>

        <div className="mt-5 flex items-baseline gap-3">
          <span className="tag-data text-3xl text-gold">{formatPrice(preco)}</span>
          {product.precoPromocional && (
            <span className="text-ink/45 line-through">{formatPrice(product.preco)}</span>
          )}
        </div>
        {product.parcelamento && (
          <p className="text-sm text-ink/60 mt-1">{product.parcelamento}</p>
        )}

        <p className="mt-6 text-[0.95rem] leading-relaxed text-ink/75">{product.descricao}</p>

        {/* Cores */}
        {product.cores.length > 1 && (
          <fieldset className="mt-7">
            <legend className="tag-data text-[0.72rem] text-coffee mb-3">
              Cor {cor && <span className="text-ink/50 normal-case">— {cor}</span>}
            </legend>
            <div className="flex flex-wrap gap-2">
              {product.cores.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => {
                    setCor(c);
                    setAvisoSelecao(false);
                  }}
                  aria-pressed={cor === c}
                  className={`tag-data text-[0.75rem] px-3.5 py-2 border transition-colors ${
                    cor === c ? "bg-ink text-gold border-ink" : "bg-white border-mist hover:border-gold"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {/* Tamanhos */}
        {product.tamanhos.length > 1 && (
          <fieldset className="mt-6">
            <legend className="tag-data text-[0.72rem] text-coffee mb-3">
              {product.categoria === "Tênis" ? "Numeração" : "Tamanho"}{" "}
              {tamanho && <span className="text-ink/50 normal-case">— {tamanho}</span>}
            </legend>
            <div className="flex flex-wrap gap-2">
              {product.tamanhos.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setTamanho(t);
                    setAvisoSelecao(false);
                  }}
                  aria-pressed={tamanho === t}
                  className={`tag-data text-[0.8rem] min-w-11 px-3 py-2.5 border transition-colors ${
                    tamanho === t ? "bg-ink text-gold border-ink" : "bg-white border-mist hover:border-gold"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            {avisoSelecao && (
              <p className="mt-3 text-sm text-coffee bg-sand/40 border border-gold/40 px-3 py-2">
                Selecione {product.cores.length > 1 && !cor ? "a cor e " : ""}
                {product.categoria === "Tênis" ? "a numeração" : "o tamanho"} para consultar.
              </p>
            )}
          </fieldset>
        )}

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href={consultarHref}
            onClick={aoConsultar}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={precisaSelecao}
            className={`flex-1 inline-flex items-center justify-center gap-2 tag-data text-[0.85rem] px-6 py-4 transition-colors ${
              precisaSelecao
                ? "bg-mist text-ink/50 cursor-not-allowed"
                : "bg-gold text-ink hover:bg-goldbright"
            }`}
          >
            <WhatsIcon /> Quero este produto
          </a>
          <a
            href={waAjudaProduto(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 tag-data text-[0.85rem] px-6 py-4 border border-ink text-ink hover:bg-ink hover:text-gold transition-colors"
          >
            <ChatIcon /> Preciso de ajuda
          </a>
        </div>

        {/* Ficha técnica */}
        <dl className="mt-8 border-t border-mist divide-y divide-mist text-sm">
          {product.material && <Linha dt="Material" dd={product.material} />}
          {product.modelagem && <Linha dt="Modelagem" dd={product.modelagem} />}
          <Linha dt="Disponibilidade" dd={product.disponibilidade} />
          <Linha dt="Ocasiões" dd={product.ocasioes.join(", ")} />
          <Linha
            dt="Troca"
            dd="Primeira troca facilitada — combine direto com a equipe pelo WhatsApp."
          />
          <Linha dt="Retirada" dd="Retire na loja em Mafra/SC ou consulte envio." />
        </dl>

        {/* Guia de tamanhos */}
        <details className="mt-4 border border-mist bg-white group">
          <summary className="cursor-pointer list-none px-4 py-3 tag-data text-[0.75rem] text-coffee flex justify-between items-center">
            Guia de tamanhos
            <span className="group-open:rotate-45 transition-transform text-gold text-lg leading-none">+</span>
          </summary>
          <div className="px-4 pb-4 text-sm text-ink/70 leading-relaxed">
            Entre dois tamanhos? Nossa equipe confere a peça no corpo do provador e envia fotos
            pelo WhatsApp antes de você decidir. Modelagem slim veste mais junto ao corpo;
            regular tem folga natural.
          </div>
        </details>
      </div>

      {/* Barra fixa mobile */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-ink border-t border-gold/40 px-4 py-3 flex items-center justify-between gap-3">
        <div>
          <p className="tag-data text-[0.6rem] text-sand/70">{product.nome}</p>
          <p className="tag-data text-lg text-gold leading-tight">{formatPrice(preco)}</p>
        </div>
        <a
          href={consultarHref}
          onClick={aoConsultar}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 tag-data text-[0.8rem] px-5 py-3 ${
            precisaSelecao ? "bg-graphite text-sand/60" : "bg-gold text-ink"
          }`}
        >
          <WhatsIcon className="w-4 h-4" /> Consultar
        </a>
      </div>
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </div>
  );
}

function Linha({ dt, dd }: { dt: string; dd: string }) {
  return (
    <div className="flex gap-4 py-2.5">
      <dt className="tag-data text-[0.7rem] text-coffee w-32 shrink-0 pt-0.5">{dt}</dt>
      <dd className="text-ink/75">{dd}</dd>
    </div>
  );
}
