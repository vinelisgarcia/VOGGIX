import { studioServices } from "@/lib/constants";
import { SectionIntro } from "@/components/SectionIntro";

type StudioSectionProps = {
  onDemoClick: () => void;
};

export function StudioSection({ onDemoClick }: StudioSectionProps) {
  return (
    <section id="studio" className="scroll-mt-24 overflow-hidden bg-voggix-black py-20 text-white">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionIntro
            align="left"
            dark
            eyebrow="Voggix Studio"
            title="Tu web, tu marca y tus reservas en un solo lugar"
            text="Creamos páginas web profesionales para negocios de servicios, alineadas a tu marca y conectadas con reservas, WhatsApp, Google Business Profile y redes sociales."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {studioServices.map((service) => (
              <article key={service.title} className="rounded-[8px] border border-white/12 bg-white/7 p-5">
                <h3 className="text-lg font-black text-white">{service.title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{service.text}</p>
              </article>
            ))}
          </div>
          <button
            type="button"
            onClick={onDemoClick}
            className="mt-8 rounded-lg bg-white px-5 py-3.5 text-sm font-black text-voggix-navy transition hover:bg-slate-100"
          >
            Quiero mi página web
          </button>
        </div>

        <StudioMockup />
      </div>
    </section>
  );
}

function StudioMockup() {
  return (
    <div className="rounded-[8px] border border-white/12 bg-white/[0.06] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.24)]">
      <div className="rounded-[8px] border border-white/14 bg-white p-4 text-voggix-ink">
        <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>
          <span className="rounded-lg bg-voggix-navy px-3 py-1 text-xs font-black text-white">
            Studio Preview
          </span>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[8px] bg-slate-950 p-5 text-white">
            <p className="text-xs font-black uppercase text-cyan-200">Barbería premium</p>
            <h3 className="mt-3 text-3xl font-black leading-tight">Reserva tu próximo corte</h3>
            <p className="mt-4 max-w-sm leading-7 text-slate-300">
              Web conectada a agenda, WhatsApp, Google y perfil profesional.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {["Servicios", "Equipo", "Mapa"].map((item) => (
                <div key={item} className="rounded-[8px] border border-white/12 px-3 py-3 text-center text-xs font-bold">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[8px] border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-black text-voggix-blue">Reserva conectada</p>
            <div className="mt-4 space-y-3">
              {["Servicio", "Fecha", "Hora"].map((item) => (
                <div key={item} className="rounded-[8px] bg-white px-4 py-3 text-sm font-bold text-slate-600 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-[8px] bg-voggix-blue px-4 py-3 text-center text-sm font-black text-white">
              Confirmar cita
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
