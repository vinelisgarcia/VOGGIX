"use client";

import { FormEvent, useState } from "react";
import { brand, businessTypeOptions } from "@/lib/constants";

type ContactValues = {
  name: string;
  businessName: string;
  businessType: string;
  whatsapp: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactValues, string>>;

const initialValues: ContactValues = {
  name: "",
  businessName: "",
  businessType: "",
  whatsapp: "",
  message: ""
};

export function ContactSection() {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sent, setSent] = useState(false);

  const updateValue = (field: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    await submitProspectContact(values);
    setSent(true);
    setValues(initialValues);
  };

  return (
    <section id="contacto" className="scroll-mt-24 bg-white py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-voggix-blue">Contacto</p>
          <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-[#071124]">
            Hablemos del siguiente centro que quieres digitalizar.
          </h2>
          <p className="mt-5 text-lg leading-8 text-voggix-muted">
            Cuéntanos qué tipo de negocio tienes, si necesitas solo reservas o también web, pagos y presencia digital.
          </p>
          <div className="mt-8 rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-5">
            <p className="text-sm font-black text-slate-900">Atención directa</p>
            <a
              href={brand.whatsappHref}
              className="mt-3 inline-flex rounded-lg bg-[#071124] px-4 py-3 text-sm font-black text-white transition hover:bg-slate-900"
            >
              WhatsApp {brand.whatsappDisplay}
            </a>
            <p className="mt-3 text-sm font-semibold text-slate-500">{brand.email}</p>
          </div>
        </div>

        <form className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-5 shadow-sm md:p-7" onSubmit={handleSubmit} noValidate>
          {sent ? (
            <div className="mb-5 rounded-[8px] border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
              <p className="font-black">Solicitud recibida.</p>
              <p className="mt-1 text-sm font-semibold">Queda preparada para conectar con CRM, Supabase, email o webhook.</p>
            </div>
          ) : null}

          <div className="grid gap-4 md:grid-cols-2">
            <Field
              label="Nombre"
              id="contact-name"
              value={values.name}
              error={errors.name}
              onChange={(value) => updateValue("name", value)}
            />
            <Field
              label="WhatsApp"
              id="contact-whatsapp"
              value={values.whatsapp}
              error={errors.whatsapp}
              inputMode="tel"
              onChange={(value) => updateValue("whatsapp", value)}
            />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Field
              label="Nombre del negocio"
              id="contact-business"
              value={values.businessName}
              error={errors.businessName}
              onChange={(value) => updateValue("businessName", value)}
            />
            <div>
              <label htmlFor="contact-type" className="text-sm font-black text-[#071124]">
                Tipo de negocio
              </label>
              <select
                id="contact-type"
                value={values.businessType}
                onChange={(event) => updateValue("businessType", event.target.value)}
                aria-invalid={Boolean(errors.businessType)}
                aria-describedby={errors.businessType ? "contact-type-error" : undefined}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-[#071124]"
              >
                <option value="">Selecciona una opción</option>
                {businessTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.businessType ? <ErrorMessage id="contact-type-error" message={errors.businessType} /> : null}
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="contact-message" className="text-sm font-black text-[#071124]">
              ¿Qué necesitas?
            </label>
            <textarea
              id="contact-message"
              value={values.message}
              onChange={(event) => updateValue("message", event.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              className="mt-2 min-h-32 w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-[#071124]"
              placeholder="Ej: Quiero Voggix Barber para una barbería con 3 barberos y pagos online."
            />
            {errors.message ? <ErrorMessage id="contact-message-error" message={errors.message} /> : null}
          </div>

          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-[#071124] px-5 py-3.5 text-sm font-black text-white transition hover:bg-slate-900"
          >
            Enviar solicitud
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  error,
  inputMode,
  onChange
}: {
  label: string;
  id: string;
  value: string;
  error?: string;
  inputMode?: "text" | "tel";
  onChange: (value: string) => void;
}) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="text-sm font-black text-[#071124]">
        {label}
      </label>
      <input
        id={id}
        type="text"
        inputMode={inputMode}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-[#071124]"
      />
      {error ? <ErrorMessage id={errorId} message={error} /> : null}
    </div>
  );
}

function ErrorMessage({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} className="mt-2 text-sm font-semibold text-red-600">
      {message}
    </p>
  );
}

function validate(values: ContactValues) {
  const errors: ContactErrors = {};

  if (!values.name.trim()) errors.name = "Escribe tu nombre.";
  if (!values.businessName.trim()) errors.businessName = "Escribe el nombre del negocio.";
  if (!values.businessType.trim()) errors.businessType = "Selecciona el tipo de negocio.";
  if (!values.whatsapp.trim()) {
    errors.whatsapp = "Escribe tu WhatsApp.";
  } else if (values.whatsapp.replace(/\D/g, "").length < 7) {
    errors.whatsapp = "Escribe un WhatsApp válido.";
  }
  if (!values.message.trim()) errors.message = "Cuéntanos qué necesitas.";

  return errors;
}

async function submitProspectContact(payload: ContactValues) {
  // TODO: Conectar con CRM, Supabase, email transaccional o webhook.
  await Promise.resolve(payload);
}
