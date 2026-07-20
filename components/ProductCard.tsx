import Link from "next/link";
import Image from "next/image";
import { formatPrice, type Product } from "@/data/products";

/** Card de produto da vitrine — fundo claro para peças escuras aparecerem. */
export default function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const etiqueta = product.etiquetas[0];
  const promo = product.precoPromocional;

  return (
    <Link
      href={`/produto/${product.slug}`}
      className="group block bg-white border border-mist hover:border-gold/60 border-b-2 hover:border-b-gold transition-colors"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-mist img-zoom">
        <Image
          src={product.imagens[0]}
          alt={`${product.nome} — ${product.marca}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={`object-cover object-top transition-opacity duration-500 ${
            product.imagens[1] ? "group-hover:opacity-0" : ""
          }`}
          priority={priority}
        />
        {product.imagens[1] && (
          <Image
            src={product.imagens[1]}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-top opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}
        {etiqueta && (
          <span className="hang-tag hang-tag--ink absolute top-3 left-0">{etiqueta}</span>
        )}
        {promo && (
          <span className="hang-tag hang-tag--gold absolute top-3 right-0" style={{ clipPath: "none" }}>
            Oferta
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="tag-data text-[0.68rem] text-coffee/80">{product.marca}</span>
          <span className="tag-data text-[0.62rem] text-ink/40">{product.categoria}</span>
        </div>
        <h3 className="mt-1.5 font-medium text-[0.95rem] leading-snug text-ink group-hover:text-coffee transition-colors">
          {product.nome}
        </h3>

        <div className="mt-2.5 flex items-baseline gap-2">
          {promo ? (
            <>
              <span className="tag-data text-lg text-gold">{formatPrice(promo)}</span>
              <span className="text-xs text-ink/45 line-through">{formatPrice(product.preco)}</span>
            </>
          ) : (
            <span className="tag-data text-lg text-ink group-hover:text-gold transition-colors">
              {formatPrice(product.preco)}
            </span>
          )}
        </div>
        {product.parcelamento && (
          <p className="text-[0.72rem] text-ink/55 mt-0.5">{product.parcelamento}</p>
        )}

        <div className="mt-3 flex items-center justify-between border-t border-mist pt-2.5">
          <span className="tag-data text-[0.62rem] text-ink/50">
            {product.tamanhos[0] === "Único"
              ? "Tamanho único"
              : `${product.tamanhos[0]}–${product.tamanhos[product.tamanhos.length - 1]}`}
            {" · "}
            {product.disponibilidade}
          </span>
          <span className="tag-data text-[0.68rem] text-gold opacity-0 group-hover:opacity-100 transition-opacity">
            Ver detalhes →
          </span>
        </div>
      </div>
    </Link>
  );
}
