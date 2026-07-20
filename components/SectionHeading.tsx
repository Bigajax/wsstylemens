import Reveal from "./Reveal";

/**
 * Cabeçalho de seção: etiqueta de cabide (eyebrow) + título display.
 * `tone` controla o contraste conforme o fundo da seção.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  text,
  tone = "light",
  align = "left",
}: {
  eyebrow: string;
  title: string;
  /** trecho do título pintado de dourado */
  highlight?: string;
  text?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  const parts = highlight ? title.split(highlight) : [title];
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <span className={`hang-tag ${tone === "dark" ? "hang-tag--gold" : "hang-tag--outline"}`}>
        {eyebrow}
      </span>
      <h2
        className={`display mt-4 text-3xl sm:text-4xl lg:text-5xl ${
          tone === "dark" ? "text-offwhite" : "text-ink"
        }`}
      >
        {highlight ? (
          <>
            {parts[0]}
            <span className="text-gold">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {text && (
        <p
          className={`mt-4 max-w-xl text-[0.95rem] leading-relaxed ${
            tone === "dark" ? "text-sand/90" : "text-ink/70"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {text}
        </p>
      )}
    </Reveal>
  );
}
