import { brand } from "@/lib/constants";

type FinalCTAProps = {
  onDemoClick: () => void;
};

export function FinalCTA({ onDemoClick }: FinalCTAProps) {
  return (
    <section className="bg-[#071124] py-20 text-white">
      <div className="section-shell rounded-[8px] border border-white/12 bg-white/[0.04] p-8 text-center md:p-12">
        <h2 className="text-balance text-3xl font-black sm:text-4xl">Digitaliza tu negocio con Voggix</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          Menos tareas manuales. Más reservas. Más clientes.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onDemoClick}
            className="rounded-lg bg-white px-5 py-3.5 text-sm font-black text-[#071124] transition hover:bg-slate-100"
          >
            Quiero una demo
          </button>
          <a
            href={brand.whatsappHref}
            className="rounded-lg border border-white/18 px-5 py-3.5 text-sm font-black text-white transition hover:bg-white/10"
          >
            WhatsApp {brand.whatsappDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
