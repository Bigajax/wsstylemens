import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CatalogClient from "@/components/CatalogClient";

export const metadata: Metadata = {
  title: "Novidades",
  description:
    "Acabou de chegar na WS Style Men's: lançamentos de roupas, tênis, relógios e acessórios masculinos.",
};

export default function NovidadesPage() {
  return (
    <>
      <PageHero
        eyebrow="Chegou novo na WS"
        title="Novidades"
        text="As peças mais recentes da arara — reposição e lançamento toda semana. Viu primeiro, levou primeiro."
      />
      <div className="py-10 sm:py-14 bg-offwhite">
        <CatalogClient initial={{ apenasNovidades: true }} />
      </div>
    </>
  );
}
