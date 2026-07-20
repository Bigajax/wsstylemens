"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { waGeral } from "@/lib/whatsapp";
import { StoreIcon, SearchIcon, HangerIcon, WhatsIcon } from "./Icons";

const tabs = [
  { label: "Início", href: "/", icon: StoreIcon },
  { label: "Catálogo", href: "/catalogo", icon: SearchIcon },
  { label: "Looks", href: "/looks", icon: HangerIcon },
];

export default function MobileTabBar() {
  const pathname = usePathname();
  // Na página de produto a barra fixa de consulta assume o rodapé mobile
  if (pathname.startsWith("/produto/")) return null;

  return (
    <>
      <div className="h-16 md:hidden" aria-hidden="true" />
      <nav
        className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-ink border-t border-gold/30 grid grid-cols-4"
        aria-label="Navegação inferior"
      >
        {tabs.map((t) => {
          const active = pathname === t.href;
          const Icon = t.icon;
          return (
            <Link
              key={t.href}
              href={t.href}
              className={`flex flex-col items-center gap-1 py-2.5 ${
                active ? "text-gold" : "text-sand/80"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="tag-data text-[0.62rem]">{t.label}</span>
            </Link>
          );
        })}
        <a
          href={waGeral()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 text-goldbright"
        >
          <WhatsIcon className="w-5 h-5" />
          <span className="tag-data text-[0.62rem]">WhatsApp</span>
        </a>
      </nav>
    </>
  );
}
