"use client";

import { usePathname } from "next/navigation";
import { waGeral } from "@/lib/whatsapp";
import { WhatsIcon } from "./Icons";

export default function WhatsFab() {
  const pathname = usePathname();
  // Não cobrir a barra fixa de consulta do produto nem a tab bar mobile
  if (pathname.startsWith("/produto/")) return null;

  return (
    <a
      href={waGeral()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-40 right-4 bottom-20 md:bottom-6 md:right-6 inline-flex items-center gap-2 bg-gold text-ink shadow-lg shadow-ink/30 px-4 py-3 hover:bg-goldbright transition-colors"
      aria-label="Falar com a WS no WhatsApp"
    >
      <WhatsIcon />
      <span className="tag-data text-[0.78rem] hidden md:inline">Falar com a WS</span>
    </a>
  );
}
