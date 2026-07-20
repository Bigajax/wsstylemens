import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-ink text-offwhite min-h-[70vh] flex items-center rail">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-32 text-center">
        <span className="hang-tag hang-tag--gold">Etiqueta não encontrada</span>
        <h1 className="display text-5xl sm:text-6xl mt-5">
          Essa peça saiu <span className="text-gold">da arara.</span>
        </h1>
        <p className="mt-4 text-sand/85 max-w-md mx-auto">
          A página que você procura não existe ou o produto não está mais na vitrine.
        </p>
        <Link
          href="/catalogo"
          className="mt-8 inline-flex tag-data text-[0.85rem] bg-gold text-ink px-7 py-4 hover:bg-goldbright transition-colors"
        >
          Voltar ao catálogo
        </Link>
      </div>
    </div>
  );
}
