"use client";

import { useState } from "react";
import { brand, navItems } from "@/lib/constants";
import { Logo } from "@/components/Logo";

type HeaderProps = {
  onDemoClick: () => void;
};

export function Header({ onDemoClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDemoClick = () => {
    setIsOpen(false);
    onDemoClick();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/88 backdrop-blur-xl">
      <div className="section-shell flex min-h-[76px] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Ir al inicio de Voggix">
          <Logo />
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-voggix-blue"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={brand.loginUrl}
            className="rounded-lg px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
          >
            Iniciar sesión
          </a>
          <button
            type="button"
            onClick={handleDemoClick}
            className="rounded-lg bg-[#071124] px-4 py-2.5 text-sm font-bold text-white shadow-soft transition hover:bg-slate-900"
          >
            Quiero una demo
          </button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-800 lg:hidden"
        >
          <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-slate-200 bg-white lg:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <nav className="section-shell flex flex-col gap-1 py-4" aria-label="Navegación móvil">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-bold text-slate-700 hover:bg-slate-50"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 grid gap-3 border-t border-slate-100 pt-4 sm:grid-cols-2">
            <a
              href={brand.loginUrl}
              onClick={() => setIsOpen(false)}
              className="rounded-lg border border-slate-200 px-4 py-3 text-center text-sm font-bold text-slate-700"
            >
              Iniciar sesión
            </a>
            <button
              type="button"
              onClick={handleDemoClick}
              className="rounded-lg bg-[#071124] px-4 py-3 text-sm font-bold text-white"
            >
              Quiero una demo
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
