"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { brand, heroMicroBenefits, verticals } from "@/lib/constants";
import { VerticalIcon, VerticalLogo, type VerticalKey } from "@/components/Logo";

type HeroProps = {
  onDemoClick: () => void;
};

const verticalServices: Record<VerticalKey, string[]> = {
  barber: ["Corte + barba", "Fade premium", "Cliente recurrente"],
  dental: ["Limpieza dental", "Ortodoncia", "Control semestral"],
  tattoo: ["Brief previo", "Sesión reservada", "Portafolio"],
  beauty: ["Color + peinado", "Uñas", "Spa facial"],
  studio: ["Landing", "Google Business", "Reservas conectadas"]
};

export function Hero({ onDemoClick }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = verticals[activeIndex];
  const activeKey = active.key as VerticalKey;
  const progressItems = useMemo(() => verticals.map((vertical) => vertical.shortName), []);

  useEffect(() => {
    const updateActiveVertical = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
      const passed = Math.min(Math.max(-rect.top, 0), scrollable);
      const progress = passed / scrollable;
      const nextIndex = Math.min(verticals.length - 1, Math.max(0, Math.round(progress * (verticals.length - 1))));

      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    };

    updateActiveVertical();
    window.addEventListener("scroll", updateActiveVertical, { passive: true });
    window.addEventListener("resize", updateActiveVertical);

    return () => {
      window.removeEventListener("scroll", updateActiveVertical);
      window.removeEventListener("resize", updateActiveVertical);
    };
  }, []);

  return (
    <section ref={sectionRef} id="inicio" className="relative bg-[#F8FAFC] lg:h-[520vh]">
      <div className="flex min-h-[calc(100svh-76px)] items-center overflow-hidden bg-[#F8FAFC] lg:sticky lg:top-[76px] lg:h-[calc(100vh-76px)] lg:min-h-0">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-slate-200/70" />
          <div
            className="absolute -right-24 top-24 h-80 w-80 rounded-full opacity-10 blur-3xl transition-colors duration-700"
            style={{ backgroundColor: active.color }}
          />
          <div
            className="absolute -left-28 bottom-12 h-72 w-72 rounded-full opacity-10 blur-3xl transition-colors duration-700"
            style={{ backgroundColor: active.color }}
          />
        </div>

        <div className="section-shell relative grid w-full items-center gap-10 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:py-12">
          <div>
            <div className="mb-7 inline-flex rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-black text-slate-700 shadow-sm">
              {brand.tagline}
            </div>

            <div aria-live="polite" className="mb-6">
              <VerticalLogo
                name={active.name}
                vertical={activeKey}
                color={active.color}
                compact
              />
            </div>

            <h1 className="text-balance text-[2.45rem] font-black leading-[1.04] tracking-normal text-[#071124] sm:text-5xl lg:text-[4.25rem]">
              Una plataforma para cada negocio que vive de su agenda.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Reservas online, clientes, recordatorios, pagos opcionales y presencia digital,
              adaptado a barberías, clínicas, estudios, beauty pros y proyectos web.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onDemoClick}
                className="rounded-lg bg-[#071124] px-5 py-3.5 text-sm font-black text-white shadow-soft transition hover:bg-slate-900"
              >
                Quiero una demo
              </button>
              <a
                href="#precios"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3.5 text-center text-sm font-black text-slate-900 transition hover:border-slate-900"
              >
                Ver planes
              </a>
            </div>

            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Microbeneficios de Voggix">
              {heroMicroBenefits.map((benefit) => (
                <li key={benefit} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700">
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2" aria-label="Progreso de verticales en el hero">
              {progressItems.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index ? "w-10" : "w-2.5 bg-slate-300"
                  }`}
                  style={activeIndex === index ? { backgroundColor: verticals[index].color } : undefined}
                  aria-label={`Ver ${item}`}
                />
              ))}
            </div>
          </div>

          <HeroScene
            activeKey={activeKey}
            title={active.heroTitle}
            text={active.heroText}
            metric={active.heroMetric}
            color={active.color}
            surface={active.surface}
            dark={active.dark}
            services={verticalServices[activeKey]}
          />
        </div>
      </div>
    </section>
  );
}

function HeroScene({
  activeKey,
  title,
  text,
  metric,
  color,
  surface,
  dark,
  services
}: {
  activeKey: VerticalKey;
  title: string;
  text: string;
  metric: string;
  color: string;
  surface: string;
  dark: string;
  services: string[];
}) {
  return (
    <div className="relative min-h-[500px] lg:min-h-[560px]" aria-label="Escena dinámica de verticales Voggix">
      <div
        className="absolute left-0 top-8 hidden w-52 rounded-[8px] border bg-white p-4 shadow-soft transition-all duration-500 md:block"
        style={{ borderColor: `${color}33`, transform: "translateX(0)" }}
      >
        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Vertical activa</p>
        <div className="mt-4 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-[8px]" style={{ backgroundColor: surface, color }}>
            <VerticalIcon vertical={activeKey} />
          </span>
          <span className="text-sm font-black text-slate-900">{metric}</span>
        </div>
      </div>

      <div
        className="absolute right-0 top-0 hidden w-56 rounded-[8px] border bg-white p-4 shadow-soft transition-all duration-500 md:block"
        style={{ borderColor: `${color}33` }}
      >
        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Disponibilidad</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {["10:30", "12:00", "17:00"].map((slot, index) => (
            <span
              key={slot}
              className="rounded-[8px] border px-2 py-2 text-center text-xs font-black"
              style={{
                borderColor: index === 1 ? color : "#E2E8F0",
                color: index === 1 ? color : "#475569",
                backgroundColor: index === 1 ? surface : "#FFFFFF"
              }}
            >
              {slot}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-[600px] justify-center pt-16 md:pt-20">
        <div className="relative w-full rounded-[8px] border border-slate-200 bg-white p-3 shadow-[0_30px_90px_rgba(15,23,42,0.14)]">
          <div className="rounded-[8px] border border-slate-200 bg-[#071124] p-4 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>
              <span className="rounded-full bg-white/8 px-3 py-1 text-xs font-black text-slate-200">
                Voggix OS
              </span>
            </div>

            <div className="grid gap-5 pt-5 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <span className="inline-grid h-14 w-14 place-items-center rounded-[8px]" style={{ backgroundColor: surface, color }}>
                  <VerticalIcon vertical={activeKey} className="h-8 w-8" />
                </span>
                <h2 className="mt-5 text-balance text-3xl font-black leading-tight text-white">{title}</h2>
                <p className="mt-4 leading-7 text-slate-300">{text}</p>
                <div className="mt-6 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[76%] rounded-full transition-colors duration-500" style={{ backgroundColor: color }} />
                </div>
              </div>

              <div className="rounded-[8px] bg-white p-4 text-slate-950">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">Agenda inteligente</p>
                    <p className="mt-1 text-lg font-black">Próximas reservas</p>
                  </div>
                  <span className="rounded-full px-3 py-1 text-xs font-black" style={{ backgroundColor: surface, color }}>
                    Live
                  </span>
                </div>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={service} className="flex items-center justify-between rounded-[8px] border border-slate-100 bg-slate-50 px-3 py-3">
                      <div className="flex items-center gap-3">
                        <span className="h-9 w-1 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
                        <span className="text-sm font-black">{service}</span>
                      </div>
                      <span className="text-sm font-bold text-slate-500">{index === 0 ? "Hoy" : "Auto"}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-4 right-5 w-[170px] rounded-[24px] border border-slate-200 bg-[#071124] p-2 shadow-[0_24px_80px_rgba(15,23,42,0.24)] sm:right-14 sm:w-[198px]"
      >
        <div className="rounded-[18px] bg-white p-3 text-slate-950">
          <div className="mx-auto mb-3 h-1 w-9 rounded-full bg-slate-300" aria-hidden="true" />
          <p className="text-xs font-black uppercase tracking-[0.14em]" style={{ color }}>
            Reserva
          </p>
          <p className="mt-1 text-lg font-black leading-tight">Confirma tu cita</p>
          <div className="mt-4 space-y-2">
            {services.slice(0, 2).map((service) => (
              <div key={service} className="rounded-[8px] border border-slate-200 px-3 py-2 text-xs font-bold">
                {service}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-[8px] py-2 text-center text-xs font-black text-white" style={{ backgroundColor: dark }}>
            Reservar ahora
          </div>
        </div>
      </div>
    </div>
  );
}
