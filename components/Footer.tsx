import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site.config";
import { waGeral, waGrupoVip } from "@/lib/whatsapp";
import { WhatsIcon, InstaIcon, PinIcon } from "./Icons";

const colunas = [
  {
    titulo: "Navegue",
    links: [
      { label: "Catálogo", href: "/catalogo" },
      { label: "Novidades", href: "/novidades" },
      { label: "Looks completos", href: "/looks" },
      { label: "Ofertas", href: "/ofertas" },
      { label: "Marcas", href: "/marcas" },
    ],
  },
  {
    titulo: "Categorias",
    links: [
      { label: "Camisetas", href: "/catalogo?categoria=Camisetas" },
      { label: "Camisas", href: "/catalogo?categoria=Camisas" },
      { label: "Tênis", href: "/catalogo?categoria=T%C3%AAnis" },
      { label: "Relógios", href: "/catalogo?categoria=Rel%C3%B3gios" },
      { label: "Acessórios", href: "/catalogo?categoria=Bon%C3%A9s%20e%20acess%C3%B3rios" },
    ],
  },
  {
    titulo: "A loja",
    links: [
      { label: "Sobre a WS", href: "/sobre" },
      { label: "Loja física", href: "/contato" },
      { label: "Trocas e devoluções", href: "/contato" },
      { label: "Privacidade", href: "/contato" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-offwhite rail">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo-ws.jpg"
              alt="Logo WS Style Men's"
              width={72}
              height={72}
              className="rounded-full ring-1 ring-gold/50"
            />
            <p className="display text-xl mt-5 leading-tight">
              Estilo masculino <span className="text-gold">em cada detalhe.</span>
            </p>
            <div className="flex items-start gap-2 mt-5 text-sand/90 text-sm">
              <PinIcon className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
              <span>
                {siteConfig.address.street} — {siteConfig.address.city}/{siteConfig.address.state}
              </span>
            </div>
            <div className="flex gap-3 mt-5">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 border border-graphite hover:border-gold text-sand hover:text-goldbright transition-colors"
              >
                <InstaIcon />
              </a>
              <a
                href={waGeral()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 border border-graphite hover:border-gold text-sand hover:text-goldbright transition-colors"
              >
                <WhatsIcon />
              </a>
            </div>
          </div>

          {colunas.map((c) => (
            <nav key={c.titulo} aria-label={c.titulo}>
              <h3 className="tag-data text-gold text-[0.78rem] mb-4">{c.titulo}</h3>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-sand/85 hover:text-goldbright transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {siteConfig.vipGroupEnabled && (
          <div className="mt-12 border border-gold/40 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="display text-lg">
                Entre para o <span className="text-gold">Grupo WS</span>
              </p>
              <p className="text-sm text-sand/85 mt-1">
                Lançamentos antecipados, reposições e ofertas direto no seu WhatsApp.
              </p>
            </div>
            <a
              href={waGrupoVip()}
              target="_blank"
              rel="noopener noreferrer"
              className="tag-data text-[0.8rem] bg-gold text-ink px-5 py-3 hover:bg-goldbright transition-colors shrink-0"
            >
              Entrar no Grupo VIP
            </a>
          </div>
        )}

        <div className="mt-10 pt-6 border-t border-graphite flex flex-col sm:flex-row justify-between gap-2 text-xs text-sand/60">
          <div>
            <p>
              © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.address.city}/
              {siteConfig.address.state}. Todos os direitos reservados.
            </p>
            <p className="mt-1">
              <a
                href="https://rafaelrazeira.com.br/vitrine-digital"
                target="_blank"
                rel="noopener"
                className="hover:text-goldbright transition-colors"
              >
                vitrine por Rafael Razeira Estúdio
              </a>
            </p>
          </div>
          <p>Vitrine digital — atendimento pelo WhatsApp.</p>
        </div>
      </div>
    </footer>
  );
}
