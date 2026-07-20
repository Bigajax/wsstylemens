import Reveal from "./Reveal";

/** Faixa escura de abertura das páginas internas — dá fundo ao header transparente. */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  text,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  text?: string;
}) {
  const parts = highlight ? title.split(highlight) : [title];
  return (
    <section className="bg-ink text-offwhite pt-28 pb-12 sm:pt-36 sm:pb-16 rail">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <span className="hang-tag hang-tag--gold">{eyebrow}</span>
          <h1 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">
            {highlight ? (
              <>
                {parts[0]}
                <span className="text-gold">{highlight}</span>
                {parts[1]}
              </>
            ) : (
              title
            )}
          </h1>
          {text && <p className="mt-4 max-w-xl text-sand/90 leading-relaxed">{text}</p>}
        </Reveal>
      </div>
    </section>
  );
}
