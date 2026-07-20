"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/data/site.config";
import { waGeral } from "@/lib/whatsapp";
import { WhatsIcon, InstaIcon, MenuIcon, CloseIcon } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-offwhite transition-all duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur border-b border-gold/30" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? "h-14" : "h-[4.5rem]"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="WS Style Men's — Início">
          <Image
            src="/images/logo-ws.jpg"
            alt="Logo WS Style Men's"
            width={44}
            height={44}
            className={`rounded-full ring-1 ring-gold/60 transition-all duration-300 ${
              scrolled ? "w-9 h-9" : "w-11 h-11"
            }`}
            priority
          />
          <span className="display text-sm tracking-wide hidden sm:block">
            WS <span className="text-gold">Style Men&apos;s</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Menu principal">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`tag-data text-[0.78rem] transition-colors hover:text-goldbright ${
                pathname === l.href ? "text-gold" : "text-offwhite/85"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da WS"
            className="p-2 text-offwhite/85 hover:text-goldbright transition-colors hidden sm:block"
          >
            <InstaIcon />
          </a>
          <a
            href={waGeral()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="p-2 text-offwhite/85 hover:text-goldbright transition-colors"
          >
            <WhatsIcon />
          </a>
          <Link
            href="/catalogo"
            className="hidden md:inline-flex items-center gap-2 bg-gold text-ink tag-data text-[0.78rem] px-4 py-2 hover:bg-goldbright transition-colors"
          >
            Ver catálogo
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-14 bg-ink/98 backdrop-blur z-40 overflow-y-auto">
          <nav className="flex flex-col px-6 py-8 gap-1" aria-label="Menu mobile">
            {navLinks.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className={`display text-3xl py-3 border-b border-graphite transition-colors ${
                  pathname === l.href ? "text-gold" : "text-offwhite hover:text-gold"
                }`}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={waGeral()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-gold text-ink tag-data px-6 py-4"
            >
              <WhatsIcon /> Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
