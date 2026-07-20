import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site.config";
import { waGeral } from "@/lib/whatsapp";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { WhatsIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Sobre a WS",
  description:
    "A WS Style Men's nasceu para facilitar a forma como o homem se veste. Conheça a loja de moda masculina premium de Mafra/SC.",
};

const fotos = [
  { img: "/images/loja-interior-logo.jpg", alt: "Interior da loja com a logo WS na parede", legenda: "A casa da WS" },
  { img: "/images/loja-balcao.jpg", alt: "Balcão de atendimento da loja", legenda: "Atendimento próximo" },
  { img: "/images/camisetas-dobradas.jpg", alt: "Camisetas premium dobradas na loja", legenda: "Curadoria nas peças" },
  { img: "/images/loja-interior-araras.jpg", alt: "Araras de roupas da loja", legenda: "A arara da semana" },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Nossa história"
        title="Mais do que roupa. Uma escolha de estilo."
        highlight="escolha de estilo."
        text="A WS Style Men's nasceu para facilitar a forma como o homem se veste. Selecionamos roupas, calçados e acessórios que unem estilo, versatilidade e personalidade."
      />

      <div className="bg-offwhite py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden border border-mist bg-white">
                <Image
                  src="/images/loja-fachada.jpg"
                  alt="Fachada da WS Style Men's em Mafra/SC"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
            <div className="space-y-5 text-ink/75 leading-relaxed">
              <p>
                Nossa equipe ajuda cada cliente a encontrar peças que façam sentido para a rotina
                e para a imagem que ele deseja transmitir — sem empurrar tendência, sem
                complicar a escolha.
              </p>
              <p>
                Na loja, em {siteConfig.address.city}/{siteConfig.address.state}, cada peça passa
                pela curadoria da equipe antes de entrar na arara: marcas reconhecidas, caimento
                conferido e combinações pensadas para funcionar juntas.
              </p>
              <p>
                E quando você não pode vir até a loja, a vitrine digital resolve: escolha as
                peças por aqui e finalize o atendimento pelo WhatsApp — com a mesma atenção de
                quem entra pela porta da frente.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={waGeral()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 tag-data text-[0.8rem] bg-gold text-ink px-5 py-3 hover:bg-goldbright transition-colors"
                >
                  <WhatsIcon className="w-4 h-4" /> Falar com a equipe
                </a>
                <Link
                  href="/contato"
                  className="tag-data text-[0.8rem] border border-ink px-5 py-3 hover:bg-ink hover:text-gold transition-colors"
                >
                  Visitar a loja
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {fotos.map((f, i) => (
              <Reveal key={f.img} delay={i * 60}>
                <figure>
                  <div className="relative aspect-square overflow-hidden border border-mist bg-white img-zoom">
                    <Image
                      src={f.img}
                      alt={f.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-bottom"
                    />
                  </div>
                  <figcaption className="tag-data text-[0.68rem] text-coffee mt-2">
                    {f.legenda}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
