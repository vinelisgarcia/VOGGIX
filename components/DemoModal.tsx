"use client";

import { FormEvent, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { businessTypeOptions } from "@/lib/constants";

type DemoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type DemoFormValues = {
  name: string;
  businessName: string;
  businessType: string;
  whatsapp: string;
  city: string;
};

type DemoFormErrors = Partial<Record<keyof DemoFormValues, string>>;

const initialValues: DemoFormValues = {
  name: "",
  businessName: "",
  businessType: "",
  whatsapp: "",
  city: ""
};

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [values, setValues] = useState<DemoFormValues>(initialValues);
  const [errors, setErrors] = useState<DemoFormErrors>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const titleId = useMemo(() => "demo-modal-title", []);
  const descriptionId = useMemo(() => "demo-modal-description", []);

  const handleClose = useCallback(() => {
    setErrors({});
    setIsSuccess(false);
    setValues(initialValues);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => firstFieldRef.current?.focus(), 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) {
    return null;
  }

  const updateValue = (field: keyof DemoFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    await submitDemoRequest(values);
    setIsSuccess(true);
    setValues(initialValues);
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);
  };

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-slate-950/72 px-4 py-8 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="w-full max-w-xl rounded-[8px] border border-slate-200 bg-white p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase text-voggix-blue">Demo Voggix</p>
            <h2 id={titleId} className="mt-2 text-2xl font-black text-voggix-ink">
              Cuéntanos sobre tu negocio
            </h2>
            <p id={descriptionId} className="mt-2 leading-7 text-voggix-muted">
              Te mostraremos cómo Voggix puede organizar tus reservas, clientes y presencia digital.
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Cerrar modal de demo"
            onClick={handleClose}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-slate-200 text-xl font-bold text-slate-600 hover:bg-slate-50"
          >
            ×
          </button>
        </div>

        {isSuccess ? (
          <div className="mt-6 rounded-[8px] border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="text-lg font-black text-emerald-900">Solicitud recibida</h3>
            <p className="mt-2 leading-7 text-emerald-800">
              Gracias. La integración real queda preparada para conectar este formulario con backend,
              CRM, Supabase, email o webhook.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-5 rounded-lg bg-emerald-600 px-4 py-3 text-sm font-black text-white hover:bg-emerald-700"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <form className="mt-6 grid gap-4" onSubmit={handleSubmit} noValidate>
            <Field
              ref={firstFieldRef}
              label="Nombre"
              id="name"
              value={values.name}
              error={errors.name}
              onChange={(value) => updateValue("name", value)}
            />
            <Field
              label="Nombre del negocio"
              id="businessName"
              value={values.businessName}
              error={errors.businessName}
              onChange={(value) => updateValue("businessName", value)}
            />
            <div>
              <label htmlFor="businessType" className="text-sm font-black text-voggix-ink">
                Tipo de negocio
              </label>
              <select
                id="businessType"
                value={values.businessType}
                onChange={(event) => updateValue("businessType", event.target.value)}
                aria-invalid={Boolean(errors.businessType)}
                aria-describedby={errors.businessType ? "businessType-error" : undefined}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-voggix-ink"
              >
                <option value="">Selecciona una opción</option>
                {businessTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.businessType ? <ErrorMessage id="businessType-error" message={errors.businessType} /> : null}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="WhatsApp"
                id="whatsapp"
                value={values.whatsapp}
                error={errors.whatsapp}
                inputMode="tel"
                onChange={(value) => updateValue("whatsapp", value)}
              />
              <Field
                label="Ciudad"
                id="city"
                value={values.city}
                error={errors.city}
                onChange={(value) => updateValue("city", value)}
              />
            </div>
            <button
              type="submit"
              className="mt-2 rounded-lg bg-[#071124] px-5 py-3.5 text-sm font-black text-white transition hover:bg-slate-900"
            >
              Enviar solicitud
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

type FieldProps = {
  label: string;
  id: keyof DemoFormValues;
  value: string;
  error?: string;
  inputMode?: "text" | "tel";
  onChange: (value: string) => void;
};

const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  {
    label,
    id,
    value,
    error,
    inputMode,
    onChange
  },
  ref
) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="text-sm font-black text-voggix-ink">
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        name={id}
        type="text"
        inputMode={inputMode}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-voggix-ink"
      />
      {error ? <ErrorMessage id={errorId} message={error} /> : null}
    </div>
  );
});

function ErrorMessage({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} className="mt-2 text-sm font-semibold text-red-600">
      {message}
    </p>
  );
}

function validate(values: DemoFormValues) {
  const errors: DemoFormErrors = {};

  if (!values.name.trim()) errors.name = "Escribe tu nombre.";
  if (!values.businessName.trim()) errors.businessName = "Escribe el nombre del negocio.";
  if (!values.businessType.trim()) errors.businessType = "Selecciona el tipo de negocio.";
  if (!values.whatsapp.trim()) {
    errors.whatsapp = "Escribe tu WhatsApp.";
  } else if (values.whatsapp.replace(/\D/g, "").length < 7) {
    errors.whatsapp = "Escribe un WhatsApp válido.";
  }
  if (!values.city.trim()) errors.city = "Escribe tu ciudad.";

  return errors;
}

async function submitDemoRequest(payload: DemoFormValues) {
  // TODO: Conectar con backend, CRM, Supabase, email transaccional o webhook.
  await Promise.resolve(payload);
}
