import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CatalogClient from "@/components/CatalogClient";

export const metadata: Metadata = {
  title: "Ofertas",
  description:
    "Ofertas e condições especiais da WS Style Men's — moda masculina premium com preço de ocasião.",
};

export default function OfertasPage() {
  return (
    <>
      <PageHero
        eyebrow="Condições especiais"
        title="Ofertas"
        text="Peças selecionadas com condição especial por tempo limitado. Campanhas novas entram aqui — vale acompanhar."
      />
      <div className="py-10 sm:py-14 bg-offwhite">
        <CatalogClient initial={{ apenasOfertas: true }} />
      </div>
    </>
  );
}
