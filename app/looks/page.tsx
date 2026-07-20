import type { Metadata } from "next";
import Link from "next/link";
import { looks } from "@/data/looks";
import PageHero from "@/components/PageHero";
import LookCard from "@/components/LookCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import MonteSeuLook from "@/components/MonteSeuLook";

export const metadata: Metadata = {
  title: "Looks completos",
  description:
    "Combinações prontas montadas pela equipe WS Style Men's, por ocasião: trabalho, encontro, viagem, esporte fino e mais.",
};

export default function LooksPage() {
  return (
    <>
      <PageHero
        eyebrow="Curadoria WS"
        title="Looks prontos para você"
        highlight="prontos"
        text="A equipe já combinou as peças — você escolhe a ocasião. Cada look sai da vitrine direto para o WhatsApp com todas as peças listadas."
      />
      <div className="bg-offwhite py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {looks.map((l, i) => (
              <Reveal key={l.slug} delay={(i % 2) * 80}>
                <LookCard look={l} />
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-sm text-ink/60 max-w-xl">
            Os valores dos looks são a soma das peças em vitrine — na loja, a equipe monta
            variações com o seu tamanho e o seu orçamento.{" "}
            <Link href="/catalogo" className="text-coffee underline underline-offset-2">
              Prefere montar peça por peça?
            </Link>
          </p>
        </div>
      </div>

      <section id="monte-seu-look" className="bg-ink text-offwhite py-16 sm:py-24 rail">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Consultoria WS"
            title="Quer um look só seu?"
            highlight="só seu?"
            text="Responda três perguntas e receba sugestões personalizadas da equipe no WhatsApp."
            tone="dark"
            align="center"
          />
          <div className="mt-10">
            <MonteSeuLook />
          </div>
        </div>
      </section>
    </>
  );
}
