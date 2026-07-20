import Image from "next/image";
import Link from "next/link";
import { getProduct, formatPrice } from "@/data/products";
import { lookTotal, type Look } from "@/data/looks";
import { waLook } from "@/lib/whatsapp";
import { WhatsIcon } from "./Icons";

/** Card de look completo: foto pendurada + lista de peças como etiqueta. */
export default function LookCard({ look }: { look: Look }) {
  const pecas = look.pecas
    .map((slug) => getProduct(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const waHref = waLook(
    look,
    pecas.map((p) => ({
      nome: p.nome,
      marca: p.marca,
      preco: formatPrice(p.precoPromocional ?? p.preco),
    }))
  );

  return (
    <article className="bg-white border border-mist flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-mist img-zoom">
        <Image
          src={look.imagem}
          alt={`Look ${look.numero} — ${look.nome}`}
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
          className="object-cover object-top"
        />
        <span className="hang-tag hang-tag--ink absolute top-3 left-0">{look.ocasiao}</span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="tag-data text-[0.68rem] text-gold">Look {look.numero}</p>
        <h3 className="display text-xl mt-1">{look.nome}</h3>
        <p className="text-sm text-ink/65 mt-2 leading-relaxed">{look.descricao}</p>

        <ul className="mt-4 space-y-2 border-t border-mist pt-4">
          {pecas.map((p) => (
            <li key={p.slug} className="flex items-baseline justify-between gap-3 text-sm">
              <Link href={`/produto/${p.slug}`} className="hover:text-coffee transition-colors">
                {p.nome} <span className="text-ink/45 text-xs">({p.marca})</span>
              </Link>
              <span className="tag-data text-[0.78rem] text-ink/70 shrink-0">
                {formatPrice(p.precoPromocional ?? p.preco)}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center justify-between border-t border-gold/40 pt-4">
          <div>
            <p className="tag-data text-[0.62rem] text-ink/50">Look completo</p>
            <p className="tag-data text-lg text-gold">{lookTotal(look)}</p>
          </div>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink text-gold tag-data text-[0.75rem] px-4 py-2.5 hover:bg-graphite transition-colors"
          >
            <WhatsIcon className="w-4 h-4" /> Quero este look
          </a>
        </div>
      </div>
    </article>
  );
}
