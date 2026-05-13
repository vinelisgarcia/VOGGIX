import { verticals } from "@/lib/constants";
import { VerticalIcon, VerticalLogo, type VerticalKey } from "@/components/Logo";
import { SectionIntro } from "@/components/SectionIntro";

type VerticalsSectionProps = {
  onDemoClick: () => void;
};

export function VerticalsSection({ onDemoClick }: VerticalsSectionProps) {
  return (
    <section id="verticales" className="scroll-mt-24 bg-white py-20">
      <div className="section-shell">
        <SectionIntro
          title="Un ecosistema diseñado para cada tipo de negocio"
          text="Cada vertical conserva su color, símbolo y lógica propia. No es una plantilla pintada de otro color."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {verticals.map((vertical) => (
            <article
              key={vertical.name}
              className="group rounded-[8px] border border-voggix-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex min-h-[112px] items-start justify-between gap-3">
                <VerticalLogo
                  name={vertical.name}
                  vertical={vertical.key as VerticalKey}
                  color={vertical.color}
                  compact
                />
                <span className="grid h-10 w-10 place-items-center rounded-[8px]" style={{ backgroundColor: vertical.surface, color: vertical.color }}>
                  <VerticalIcon vertical={vertical.key as VerticalKey} className="h-6 w-6" />
                </span>
              </div>
              <h3 className="mt-6 text-xl font-black text-voggix-ink">{vertical.name}</h3>
              <p className="mt-3 min-h-[84px] leading-7 text-voggix-muted">{vertical.text}</p>
              {vertical.name === "Voggix Studio" ? (
                <a
                  href="#studio"
                  className="mt-5 inline-flex rounded-lg border border-slate-200 px-4 py-2 text-sm font-black text-voggix-ink transition hover:border-voggix-blue hover:text-voggix-blue"
                >
                  {vertical.cta}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={onDemoClick}
                  className="mt-5 rounded-lg border border-slate-200 px-4 py-2 text-sm font-black text-voggix-ink transition hover:border-voggix-blue hover:text-voggix-blue"
                >
                  {vertical.cta}
                </button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
