import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/data/site.config";
import { waLoja, waGeral } from "@/lib/whatsapp";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { WhatsIcon, InstaIcon, PinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Loja física e contato",
  description:
    "Visite a WS Style Men's na Rua Marechal Floriano Peixoto, 580 — Mafra/SC, ou fale com a equipe pelo WhatsApp.",
};

export default function ContatoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: siteConfig.name,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: "BR",
    },
    sameAs: [siteConfig.instagram],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Loja física"
        title="Visite a WS Style Men's"
        highlight="WS"
        text="Provador à vontade, atendimento de gente que entende de estilo e a arara completa que você viu por aqui."
      />
      <div className="bg-offwhite py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden border border-mist bg-white">
              <Image
                src="/images/loja-fachada.jpg"
                alt="Fachada da WS Style Men's"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <div className="space-y-5">
            <div className="bg-white border border-mist p-6">
              <h2 className="tag-data text-[0.75rem] text-coffee flex items-center gap-2">
                <PinIcon className="w-4 h-4 text-gold" /> Endereço
              </h2>
              <p className="mt-2 text-lg font-medium">{siteConfig.address.street}</p>
              <p className="text-ink/65">
                {siteConfig.address.city}/{siteConfig.address.state}
              </p>
              {siteConfig.hours && <p className="mt-2 text-sm text-ink/65">{siteConfig.hours}</p>}
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={siteConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tag-data text-[0.78rem] bg-ink text-gold px-4 py-2.5 hover:bg-graphite transition-colors"
                >
                  Abrir no Google Maps
                </a>
                <a
                  href={waLoja()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 tag-data text-[0.78rem] border border-ink px-4 py-2.5 hover:bg-ink hover:text-gold transition-colors"
                >
                  <WhatsIcon className="w-4 h-4" /> Falar com a loja
                </a>
              </div>
            </div>

            <div className="bg-white border border-mist p-6">
              <h2 className="tag-data text-[0.75rem] text-coffee flex items-center gap-2">
                <WhatsIcon className="w-4 h-4 text-gold" /> Atendimento pelo WhatsApp
              </h2>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                Consulta de produto, ajuda com tamanho, montagem de look ou reserva de peça —
                tudo resolvido em conversa. Respondemos no horário de funcionamento da loja.
              </p>
              <a
                href={waGeral()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 tag-data text-[0.8rem] bg-gold text-ink px-5 py-3 hover:bg-goldbright transition-colors"
              >
                <WhatsIcon className="w-4 h-4" /> Iniciar conversa
              </a>
            </div>

            <div className="bg-white border border-mist p-6">
              <h2 className="tag-data text-[0.75rem] text-coffee flex items-center gap-2">
                <InstaIcon className="w-4 h-4 text-gold" /> Instagram
              </h2>
              <p className="mt-2 text-sm text-ink/70">
                Lançamentos, bastidores e looks reais todos os dias em{" "}
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coffee font-medium hover:text-ink transition-colors"
                >
                  {siteConfig.instagramHandle}
                </a>
                .
              </p>
            </div>

            <div className="bg-ink text-offwhite border border-graphite p-6">
              <h2 className="tag-data text-[0.75rem] text-gold">Trocas e devoluções</h2>
              <p className="mt-2 text-sm text-sand/85 leading-relaxed">
                Primeira troca facilitada: fale com a equipe pelo WhatsApp com a etiqueta da peça
                em mãos e combinamos tudo — na loja ou à distância.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
