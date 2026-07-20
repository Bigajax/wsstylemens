import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CatalogClient from "@/components/CatalogClient";

export const metadata: Metadata = {
  title: "Catálogo WS",
  description:
    "Explore a seleção de moda masculina, calçados e acessórios da WS Style Men's. Filtre por categoria, marca, tamanho e ocasião.",
};

export default async function CatalogoPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string; marca?: string; q?: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Vitrine completa"
        title="Catálogo WS"
        highlight="WS"
        text="Explore nossa seleção de moda masculina, calçados e acessórios. Achou a peça? A consulta é uma mensagem no WhatsApp."
      />
      <div className="py-10 sm:py-14 bg-offwhite">
        <CatalogClient
          initial={{
            categoria: params.categoria,
            marca: params.marca,
            busca: params.q,
          }}
        />
      </div>
    </>
  );
}
