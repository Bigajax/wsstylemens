"use client";

import { useState } from "react";
import { waMonteSeuLook } from "@/lib/whatsapp";
import { WhatsIcon, ArrowIcon } from "./Icons";

/** Consultoria rápida: 3 etapas de escolha → mensagem pronta no WhatsApp. */

const etapas = [
  {
    titulo: "Para qual ocasião?",
    campo: "Ocasião",
    opcoes: ["Trabalho", "Encontro", "Festa", "Viagem", "Dia a dia", "Evento", "Esporte fino", "Presente"],
  },
  {
    titulo: "O que você procura?",
    campo: "Procuro",
    opcoes: ["Look completo", "Roupas", "Tênis", "Relógio ou acessório"],
  },
  {
    titulo: "Qual faixa de investimento?",
    campo: "Investimento",
    opcoes: ["Até R$ 250", "R$ 250 a R$ 500", "R$ 500 a R$ 1.000", "Acima de R$ 1.000"],
  },
] as const;

export default function MonteSeuLook() {
  const [etapa, setEtapa] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [tamanho, setTamanho] = useState("");
  const [numeracao, setNumeracao] = useState("");

  const escolher = (campo: string, valor: string) => {
    setRespostas((r) => ({ ...r, [campo]: valor }));
    if (etapa < etapas.length) setEtapa(etapa + 1);
  };

  const concluido = etapa >= etapas.length;

  const href = waMonteSeuLook({
    ...respostas,
    "Tamanho de roupa": tamanho,
    "Numeração de calçado": numeracao,
  });

  return (
    <div className="bg-ink2 border border-graphite p-6 sm:p-8">
      {/* Progresso costurado */}
      <div className="flex items-center gap-2 mb-6" aria-hidden="true">
        {etapas.map((_, i) => (
          <div
            key={i}
            className={`h-0.5 flex-1 transition-colors duration-500 ${
              i < etapa ? "bg-gold" : i === etapa ? "bg-gold/50" : "bg-graphite"
            }`}
          />
        ))}
      </div>

      {!concluido ? (
        <div>
          <p className="tag-data text-[0.7rem] text-gold">
            Etapa {etapa + 1} de {etapas.length}
          </p>
          <h3 className="display text-2xl text-offwhite mt-2">{etapas[etapa].titulo}</h3>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {etapas[etapa].opcoes.map((op) => (
              <button
                key={op}
                type="button"
                onClick={() => escolher(etapas[etapa].campo, op)}
                className="tag-data text-[0.8rem] px-4 py-2.5 border border-graphite text-sand hover:border-gold hover:text-goldbright transition-colors"
              >
                {op}
              </button>
            ))}
          </div>
          {etapa > 0 && (
            <button
              type="button"
              onClick={() => setEtapa(etapa - 1)}
              className="mt-6 text-xs text-sand/60 hover:text-sand transition-colors"
            >
              ← Voltar
            </button>
          )}
        </div>
      ) : (
        <div>
          <p className="tag-data text-[0.7rem] text-gold">Última etapa</p>
          <h3 className="display text-2xl text-offwhite mt-2">Seus tamanhos</h3>
          <p className="text-sm text-sand/80 mt-2">
            Opcional — ajuda a equipe a separar as peças certas antes de você chegar.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 max-w-sm">
            <label className="block">
              <span className="tag-data text-[0.65rem] text-sand/70">Roupa</span>
              <select
                value={tamanho}
                onChange={(e) => setTamanho(e.target.value)}
                className="mt-1 w-full bg-ink border border-graphite text-offwhite text-sm px-3 py-2.5 focus:border-gold"
              >
                <option value="">Selecionar</option>
                {["P", "M", "G", "GG", "XG"].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="tag-data text-[0.65rem] text-sand/70">Calçado</span>
              <select
                value={numeracao}
                onChange={(e) => setNumeracao(e.target.value)}
                className="mt-1 w-full bg-ink border border-graphite text-offwhite text-sm px-3 py-2.5 focus:border-gold"
              >
                <option value="">Selecionar</option>
                {["38", "39", "40", "41", "42", "43", "44"].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-ink tag-data text-[0.82rem] px-6 py-3.5 hover:bg-goldbright transition-colors"
            >
              <WhatsIcon /> Receber sugestões
            </a>
            <button
              type="button"
              onClick={() => {
                setEtapa(0);
                setRespostas({});
              }}
              className="text-xs text-sand/60 hover:text-sand transition-colors"
            >
              Recomeçar
            </button>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {Object.entries(respostas).map(([k, v]) => (
              <li key={k} className="hang-tag hang-tag--outline !bg-transparent !text-sand">
                {k}: {v}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!concluido && (
        <p className="mt-8 flex items-center gap-2 text-xs text-sand/50">
          <ArrowIcon className="w-3.5 h-3.5" />
          Ao final, suas respostas viram uma mensagem pronta para nossa equipe no WhatsApp.
        </p>
      )}
    </div>
  );
}
