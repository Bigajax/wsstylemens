import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProduct, formatPrice } from "@/data/products";
import ProductPageClient from "@/components/ProductPageClient";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.nome} — ${product.marca}`,
    description: `${product.descricao} ${formatPrice(product.precoPromocional ?? product.preco)} na WS Style Men's.`,
    openGraph: {
      title: `${product.nome} — ${product.marca} | WS Style Men's`,
      description: product.descricao,
      images: [{ url: product.imagens[0] }],
    },
  };
}

export default async function ProdutoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const relacionados = (product.relacionados ?? [])
    .map(getProduct)
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.nome,
    brand: { "@type": "Brand", name: product.marca },
    sku: product.codigo,
    image: product.imagens,
    description: product.descricao,
    offers: {
      "@type": "Offer",
      price: product.precoPromocional ?? product.preco,
      priceCurrency: "BRL",
      availability:
        product.disponibilidade === "Pronta entrega"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
    },
  };

  return (
    <>
      {/* Faixa escura para o header transparente */}
      <div className="bg-ink h-20 sm:h-24" aria-hidden="true" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-offwhite py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="tag-data text-[0.68rem] text-ink/50 mb-6 flex gap-2" aria-label="Você está em">
            <Link href="/" className="hover:text-coffee transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link
              href={`/catalogo?categoria=${encodeURIComponent(product.categoria)}`}
              className="hover:text-coffee transition-colors"
            >
              {product.categoria}
            </Link>
            <span>/</span>
            <span className="text-coffee">{product.nome}</span>
          </nav>

          <ProductPageClient product={product} />

          {relacionados.length > 0 && (
            <section className="mt-16 sm:mt-24">
              <SectionHeading
                eyebrow="Complete o look"
                title="Combina com esta peça"
                highlight="Combina"
              />
              <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 max-w-4xl">
                {relacionados.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
