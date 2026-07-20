import Image from "next/image";
import Link from "next/link";
import { products, categorias } from "@/data/products";
import { looks } from "@/data/looks";
import { brands } from "@/data/brands";
import { siteConfig } from "@/data/site.config";
import { waPresente, waLoja } from "@/lib/whatsapp";
import ProductCard from "@/components/ProductCard";
import LookCard from "@/components/LookCard";
import MonteSeuLook from "@/components/MonteSeuLook";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import {
  WhatsIcon,
  ArrowIcon,
  TagIcon,
  ChatIcon,
  HangerIcon,
  SparkIcon,
  StoreIcon,
  WatchIcon,
  PinIcon,
  InstaIcon,
} from "@/components/Icons";

export default function Home() {
  const novidades = products.filter((p) => p.novidade).slice(0, 4);
  const tenis = products.filter((p) => p.categoria === "Tênis");
  const relogios = products.filter((p) => p.categoria === "Relógios");

  return (
    <>
      {/* ————— HERO ————— */}
      <section className="relative bg-ink text-offwhite overflow-hidden">
        {/* Monograma em baixa opacidade */}
        <div
          aria-hidden="true"
          className="absolute -left-24 top-1/2 -translate-y-1/2 w-[34rem] h-[34rem] opacity-[0.07] pointer-events-none select-none"
        >
          <Image src="/images/logo-ws.jpg" alt="" fill className="object-contain" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-[1.05fr_1fr] items-stretch">
          <div className="relative z-10 flex flex-col justify-center pt-32 pb-14 lg:py-40 lg:pr-8">
            <Reveal>
              <span className="hang-tag hang-tag--gold">Seleção WS</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display text-[2.6rem] leading-[0.95] sm:text-6xl xl:text-7xl mt-5">
                Estilo que
                <br />
                acompanha
                <br />
                <span className="text-gold">o seu ritmo.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-sand/90 leading-relaxed">
                Moda masculina premium, marcas selecionadas e combinações para
                todos os momentos.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-ink tag-data text-[0.85rem] px-7 py-4 hover:bg-goldbright transition-colors"
                >
                  Explorar catálogo <ArrowIcon />
                </Link>
                <Link
                  href="/#monte-seu-look"
                  className="inline-flex items-center justify-center gap-2 border border-sand/40 text-offwhite tag-data text-[0.85rem] px-7 py-4 hover:border-gold hover:text-goldbright transition-colors"
                >
                  Montar meu look
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-6 text-xs text-sand/60 tag-data">
                Roupas · Tênis · Relógios · Acessórios selecionados
              </p>
            </Reveal>
          </div>

          {/* Foto sangrando à direita */}
          <div className="relative min-h-[26rem] lg:min-h-0 -mx-4 sm:-mx-6 lg:mx-0">
            <Image
              src="/images/hero-camisa-branca-poltrona.jpg"
              alt="Look completo WS: camisa branca, alfaiataria navy e tênis de couro"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/40 lg:bg-gradient-to-r lg:from-ink lg:via-transparent lg:to-transparent" />
            {/* Etiqueta do look do hero */}
            <Link
              href="/looks"
              className="absolute bottom-6 right-4 sm:right-8 bg-ink/85 backdrop-blur border border-gold/50 px-4 py-3 hover:border-gold transition-colors group"
            >
              <p className="tag-data text-[0.62rem] text-gold">Look 02 — Esporte Fino</p>
              <p className="text-sm text-sand mt-0.5 group-hover:text-offwhite transition-colors">
                Ver as peças deste look →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ————— FAIXA DE BENEFÍCIOS ————— */}
      <section className="bg-ink2 text-offwhite rail border-b border-graphite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-5">
          {[
            { icon: TagIcon, label: "Marcas selecionadas" },
            { icon: ChatIcon, label: "Atendimento personalizado" },
            { icon: WhatsIcon, label: "Compra pelo WhatsApp" },
            { icon: HangerIcon, label: "Looks completos" },
            { icon: SparkIcon, label: "Novidades frequentes" },
            { icon: StoreIcon, label: "Loja física em Mafra/SC" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2.5">
              <b.icon className="w-5 h-5 text-gold shrink-0" />
              <span className="tag-data text-[0.68rem] text-sand/90">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ————— CATEGORIAS: A ARARA ————— */}
      <section className="bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Categorias"
            title="Encontre o seu próximo look"
            highlight="próximo look"
            text="Navegue como quem passa o braço pela arara: cada categoria com curadoria da equipe WS."
          />
        </div>
        {/* Trilho da arara */}
        <div className="mt-10 rail">
          <div className="flex gap-4 overflow-x-auto no-scrollbar px-4 sm:px-6 pt-6 pb-2 lg:px-[max(1rem,calc((100vw-80rem)/2+1.5rem))]">
            {categorias.map((c, i) => (
              <Link
                key={c.nome}
                href={`/catalogo?categoria=${encodeURIComponent(c.nome)}`}
                className={`group relative shrink-0 w-56 sm:w-64 ${i % 2 === 1 ? "mt-6" : ""}`}
              >
                {/* gancho do cabide */}
                <span
                  aria-hidden="true"
                  className="absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-gold/70"
                />
                <div className="relative aspect-[3/4] overflow-hidden bg-mist img-zoom border border-mist group-hover:border-gold/60 transition-colors">
                  <Image
                    src={c.imagem}
                    alt={c.nome}
                    fill
                    sizes="256px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <h3 className="display text-lg text-offwhite">{c.nome}</h3>
                    <p className="text-[0.78rem] text-sand/85 mt-1 leading-snug">{c.descricao}</p>
                    <p className="tag-data text-[0.68rem] text-gold mt-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver produtos →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ————— NOVIDADES ————— */}
      <section className="bg-white py-16 sm:py-20 border-y border-mist">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <SectionHeading
              eyebrow="Chegou novo na WS"
              title="Acabou de chegar"
              highlight="chegar"
            />
            <Link
              href="/novidades"
              className="tag-data text-[0.78rem] text-coffee border-b border-gold pb-1 hover:text-ink transition-colors"
            >
              Ver todas as novidades →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {novidades.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <ProductCard product={p} priority={i < 2} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— TÊNIS ————— */}
      <section className="bg-ink text-offwhite py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] max-w-md overflow-hidden border border-graphite">
              <Image
                src="/images/tenis-newbalance-cinza.jpg"
                alt="Tênis New Balance cinza — lançamento na WS"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <span className="hang-tag hang-tag--gold absolute top-4 left-0">Lançamento</span>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Tênis e calçados"
              title="Do look ao último passo"
              highlight="último passo"
              text="New Balance, Fila, Nike e modelos selecionados — numeração do 39 ao 43, pronta entrega na loja."
              tone="dark"
            />
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {tenis.slice(0, 2).map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
            <Link
              href="/catalogo?categoria=T%C3%AAnis"
              className="inline-flex items-center gap-2 mt-7 tag-data text-[0.8rem] text-gold hover:text-goldbright transition-colors"
            >
              Ver todos os tênis <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ————— RELÓGIOS E ACESSÓRIOS ————— */}
      <section className="bg-ink2 text-offwhite py-16 sm:py-24 border-t border-graphite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeading
                eyebrow="Relógios e acessórios"
                title="Presença nos detalhes"
                highlight="detalhes"
                text="Orient automáticos e cronógrafos, bonés New Era, correntes e perfumaria — o acabamento que diferencia um look bom de um look certo."
                tone="dark"
              />
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {relogios.slice(0, 2).map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-6">
                <Link
                  href="/catalogo?categoria=Rel%C3%B3gios"
                  className="inline-flex items-center gap-2 tag-data text-[0.8rem] text-gold hover:text-goldbright transition-colors"
                >
                  <WatchIcon className="w-4 h-4" /> Ver relógios <ArrowIcon className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={waPresente()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 tag-data text-[0.8rem] text-sand/80 hover:text-goldbright transition-colors"
                >
                  Preciso de ajuda para presentear
                </a>
              </div>
            </div>
            <Reveal className="order-1 lg:order-2">
              <div className="relative aspect-square overflow-hidden border border-graphite">
                <Image
                  src="/images/relogios-orient-flatlay.jpg"
                  alt="Relógios Orient automáticos em três cores"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-bottom"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— LOOKS PRONTOS ————— */}
      <section className="bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <SectionHeading
              eyebrow="Curadoria WS"
              title="Looks prontos para você"
              highlight="prontos"
              text="Combinações montadas pela equipe, por ocasião. Uma mensagem e as peças estão separadas para você."
            />
            <Link
              href="/looks"
              className="tag-data text-[0.78rem] text-coffee border-b border-gold pb-1 hover:text-ink transition-colors"
            >
              Ver todos os looks →
            </Link>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-5 lg:gap-6">
            {looks.slice(0, 2).map((l) => (
              <Reveal key={l.slug}>
                <LookCard look={l} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— MONTE SEU LOOK ————— */}
      <section id="monte-seu-look" className="bg-ink text-offwhite py-16 sm:py-24 rail">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Consultoria WS"
            title="Não sabe o que combinar?"
            highlight="combinar?"
            text="Conte para nossa equipe qual é a ocasião e receba sugestões de peças que combinam com seu estilo — direto no WhatsApp."
            tone="dark"
            align="center"
          />
          <div className="mt-10">
            <MonteSeuLook />
          </div>
        </div>
      </section>

      {/* ————— MARCAS ————— */}
      <section className="bg-white py-16 sm:py-20 border-b border-mist">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Multimarcas"
            title="Marcas que representam"
            highlight="representam"
            text="Curadoria honesta: só entra na arara o que a equipe vestiria."
          />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-px bg-mist border border-mist">
            {brands.map((b) => (
              <Link
                key={b.nome}
                href={`/catalogo?marca=${encodeURIComponent(b.nome)}`}
                className="group bg-white p-6 hover:bg-offwhite transition-colors"
              >
                <p className="display text-lg group-hover:text-coffee transition-colors">{b.nome}</p>
                <p className="text-[0.8rem] text-ink/55 mt-1.5 leading-snug">{b.descricao}</p>
                <p className="tag-data text-[0.65rem] text-gold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver produtos →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ————— PROVA SOCIAL ————— */}
      <section className="bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Clientes reais"
            title="Quem veste WS, recomenda"
            highlight="recomenda"
          />
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {[
              { img: "/images/lifestyle-marina.jpg", alt: "Cliente WS na marina" },
              { img: "/images/lifestyle-praia.jpg", alt: "Cliente WS no litoral" },
              { img: "/images/lifestyle-sport.jpg", alt: "Cliente WS em look esportivo" },
              { img: "/images/lifestyle-carro.jpg", alt: "Cliente WS em look urbano" },
            ].map((f, i) => (
              <Reveal key={f.img} delay={i * 60}>
                <div className="relative aspect-[3/4] overflow-hidden bg-mist img-zoom border border-mist">
                  <Image src={f.img} alt={f.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-mist bg-white px-6 py-5">
            <p className="text-sm text-ink/70">
              Comprou na WS? Publique seu look e marque{" "}
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-coffee font-medium hover:text-ink transition-colors"
              >
                {siteConfig.instagramHandle}
              </a>{" "}
              — os melhores aparecem aqui e no nosso Instagram.
            </p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 tag-data text-[0.78rem] border border-ink px-4 py-2.5 hover:bg-ink hover:text-gold transition-colors shrink-0"
            >
              <InstaIcon className="w-4 h-4" /> Marque a WS no seu look
            </a>
          </div>
        </div>
      </section>

      {/* ————— SOBRE + LOJA FÍSICA ————— */}
      <section className="bg-ink text-offwhite rail">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] max-w-md overflow-hidden border border-graphite">
              <Image
                src="/images/loja-fachada.jpg"
                alt="Fachada da loja WS Style Men's em Mafra/SC"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="A loja"
              title="Mais do que roupa. Uma escolha de estilo."
              highlight="escolha de estilo."
              text="A WS Style Men's nasceu para facilitar a forma como o homem se veste. Selecionamos roupas, calçados e acessórios que unem estilo, versatilidade e personalidade — e nossa equipe ajuda cada cliente a encontrar o que faz sentido para a rotina dele."
              tone="dark"
            />
            <div className="mt-8 flex items-start gap-3 text-sand/90">
              <PinIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-offwhite">
                  {siteConfig.address.street} — {siteConfig.address.city}/{siteConfig.address.state}
                </p>
                <p className="text-sm mt-1">Visite a loja ou chame no WhatsApp para atendimento.</p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={siteConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tag-data text-[0.8rem] border border-sand/40 px-5 py-3 hover:border-gold hover:text-goldbright transition-colors"
              >
                Abrir no Google Maps
              </a>
              <a
                href={waLoja()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 tag-data text-[0.8rem] bg-gold text-ink px-5 py-3 hover:bg-goldbright transition-colors"
              >
                <WhatsIcon className="w-4 h-4" /> Falar com a loja
              </a>
              <Link
                href="/sobre"
                className="tag-data text-[0.8rem] text-sand/80 px-2 py-3 hover:text-goldbright transition-colors"
              >
                Conhecer a WS →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
