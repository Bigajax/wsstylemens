import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/data/brands";
import { products } from "@/data/products";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Marcas",
  description:
    "Nike, New Balance, Fila, New Era, Orient, Reserva e mais — as marcas selecionadas da WS Style Men's.",
};

export default function MarcasPage() {
  return (
    <>
      <PageHero
        eyebrow="Multimarcas"
        title="Marcas que representam"
        highlight="representam"
        text="Trabalhamos com marcas que entregam o que prometem — e a curadoria da WS escolhe, dentro de cada uma, só o que vale a arara."
      />
      <div className="bg-offwhite py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12">
          {brands.map((b, i) => {
            const doBrand = products.filter((p) => p.marca === b.nome).slice(0, 3);
            return (
              <Reveal key={b.nome} delay={Math.min(i * 40, 160)}>
                <section className="bg-white border border-mist p-6 sm:p-8">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <h2 className="display text-2xl sm:text-3xl">{b.nome}</h2>
                      <p className="text-sm text-ink/60 mt-1.5 max-w-md">{b.descricao}</p>
                    </div>
                    <Link
                      href={`/catalogo?marca=${encodeURIComponent(b.nome)}`}
                      className="tag-data text-[0.75rem] text-coffee border-b border-gold pb-1 hover:text-ink transition-colors"
                    >
                      Ver produtos {b.nome} →
                    </Link>
                  </div>
                  {doBrand.length > 0 && (
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 max-w-3xl">
                      {doBrand.map((p) => (
                        <ProductCard key={p.slug} product={p} />
                      ))}
                    </div>
                  )}
                </section>
              </Reveal>
            );
          })}
        </div>
      </div>
    </>
  );
}
