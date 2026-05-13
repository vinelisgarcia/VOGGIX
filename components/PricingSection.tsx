import { customPricingNote, pricingPlans } from "@/lib/constants";
import { SectionIntro } from "@/components/SectionIntro";

type PricingSectionProps = {
  onDemoClick: () => void;
};

export function PricingSection({ onDemoClick }: PricingSectionProps) {
  return (
    <section id="precios" className="scroll-mt-24 bg-[#F8FAFC] py-20">
      <div className="section-shell">
        <SectionIntro
          title="Planes simples, sin letra pequeña"
          text="Tarifa plana para verticales, pagos opcionales y paquetes claros para Voggix Studio."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-[8px] border p-6 ${
                plan.featured
                  ? "border-[#071124] bg-[#071124] text-white shadow-[0_24px_80px_rgba(15,23,42,0.20)]"
                  : "border-voggix-border bg-white text-voggix-ink shadow-sm"
              }`}
            >
              <p className={`text-xs font-black uppercase tracking-[0.16em] ${plan.featured ? "text-cyan-200" : "text-voggix-blue"}`}>
                {plan.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-black">{plan.name}</h3>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className={`pb-1 text-sm font-bold ${plan.featured ? "text-slate-300" : "text-slate-500"}`}>
                  {plan.cadence}
                </span>
              </div>
              <p className={`mt-5 min-h-[112px] leading-7 ${plan.featured ? "text-slate-300" : "text-voggix-muted"}`}>
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-semibold">
                    <span
                      className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                        plan.featured ? "bg-cyan-300" : "bg-voggix-blue"
                      }`}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={onDemoClick}
                className={`mt-8 w-full rounded-lg px-4 py-3 text-sm font-black transition ${
                  plan.featured
                    ? "bg-white text-[#071124] hover:bg-slate-100"
                    : "bg-[#071124] text-white hover:bg-slate-900"
                }`}
              >
                {plan.cta}
              </button>
            </article>
          ))}
        </div>

        <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-black text-[#071124]">{customPricingNote.title}</h3>
            <p className="mt-2 max-w-3xl leading-7 text-voggix-muted">{customPricingNote.text}</p>
          </div>
          <button
            type="button"
            onClick={onDemoClick}
            className="shrink-0 rounded-lg border border-slate-300 px-5 py-3 text-sm font-black text-slate-900 transition hover:border-slate-900"
          >
            {customPricingNote.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
