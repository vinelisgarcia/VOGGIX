import { useId } from "react";

type LogoProps = {
  variant?: "dark" | "light";
  compact?: boolean;
};

type VoggixMarkProps = {
  className?: string;
  mode?: "gradient" | "mono";
  color?: string;
  appIcon?: boolean;
};

export type VerticalKey = "barber" | "dental" | "tattoo" | "beauty" | "studio";

type VerticalLogoProps = {
  name: string;
  vertical: VerticalKey;
  color: string;
  dark?: boolean;
  compact?: boolean;
};

export function Logo({ variant = "dark", compact = false }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-[#070B14]";
  const slashColor = variant === "light" ? "from-white via-white to-cyan-200" : "from-voggix-blue via-voggix-violet to-voggix-blue";

  return (
    <span className="inline-flex items-center gap-3" aria-label="Voggix">
      <VoggixMark className={compact ? "h-9 w-10" : "h-10 w-12"} />
      <span className={`font-display text-[1.45rem] font-black leading-none tracking-[0.04em] ${textColor}`}>
        VOGGI
        <span className="relative inline-block pr-0.5">
          X
          <span
            className={`absolute right-[-0.05rem] top-[0.13rem] h-1.5 w-4 -rotate-45 rounded-full bg-gradient-to-r ${slashColor}`}
            aria-hidden="true"
          />
        </span>
      </span>
    </span>
  );
}

export function VerticalLogo({ name, vertical, color, dark = false, compact = false }: VerticalLogoProps) {
  const label = name.replace("Voggix ", "");
  const textColor = dark ? "text-white" : "text-[#070B14]";
  const mutedColor = dark ? "text-white/70" : "text-slate-500";

  return (
    <span className="inline-flex items-center gap-3" aria-label={name}>
      <VoggixMark mode="mono" color={color} className={compact ? "h-9 w-10" : "h-11 w-12"} />
      <span className="leading-none">
        <span className={`font-display block text-[1.05rem] font-black tracking-[0.08em] ${textColor}`}>
          VOGGIX
        </span>
        <span
          className={`mt-1 flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.28em] ${mutedColor}`}
        >
          <VerticalIcon vertical={vertical} className="h-4 w-4" />
          <span style={{ color }}>{label}</span>
        </span>
      </span>
    </span>
  );
}

export function VoggixMark({
  className = "h-10 w-12",
  mode = "gradient",
  color = "#2563EB",
  appIcon = false
}: VoggixMarkProps) {
  const gradientId = useId();
  const fill = mode === "gradient" ? `url(#${gradientId})` : color;

  const mark = (
    <svg
      viewBox="0 0 72 58"
      role="img"
      aria-label="Isotipo Voggix"
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id={gradientId} x1="7" y1="6" x2="62" y2="55" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="0.48" stopColor="#8B5CF6" />
          <stop offset="0.76" stopColor="#EC4899" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <path
        d="M5.9 9.4C5.2 8 6.2 6.3 7.8 6.3H19.2C20.1 6.3 20.9 6.9 21.3 7.7L33.4 34.4C34 35.8 35.9 35.9 36.7 34.6L51.9 7.5C52.3 6.8 53 6.3 53.9 6.3H65.1C66.8 6.3 67.8 8.2 66.9 9.7L43.5 49.2C39.8 55.5 30.6 55.1 27.4 48.5L5.9 9.4Z"
        fill={fill}
      />
      <path
        d="M39.5 7.2H53.8C55.5 7.2 56.5 9.2 55.4 10.5L40.2 29.5C37.4 33 32.3 33.5 28.8 30.7L25.7 28.2L39.5 7.2Z"
        fill={fill}
        opacity={mode === "gradient" ? "0.78" : "0.86"}
      />
      <rect
        x="50.6"
        y="0.8"
        width="12.8"
        height="12.8"
        rx="3"
        transform="rotate(45 50.6 0.8)"
        fill={fill}
      />
    </svg>
  );

  if (!appIcon) {
    return mark;
  }

  return (
    <span className="inline-grid h-12 w-12 place-items-center rounded-[12px] bg-[#071124] shadow-soft">
      {mark}
    </span>
  );
}

export function VerticalIcon({
  vertical,
  className = "h-6 w-6"
}: {
  vertical: VerticalKey;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true
  };

  if (vertical === "barber") {
    return (
      <svg {...common}>
        <path d="M9 23.5L23.5 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M9 8.5L23.5 23" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="7.3" cy="24.7" r="3.2" stroke="currentColor" strokeWidth="2" />
        <circle cx="7.3" cy="7.3" r="3.2" stroke="currentColor" strokeWidth="2" />
        <path d="M18.5 13.5L25.5 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (vertical === "dental") {
    return (
      <svg {...common}>
        <path
          d="M9.2 4.8C12 3.4 14.2 5.6 16 5.6C17.8 5.6 20 3.4 22.8 4.8C26.3 6.5 26.4 11.7 24.4 16.2C22.9 19.5 22.4 26.5 19.5 26.5C17.4 26.5 18 20.2 16 20.2C14 20.2 14.6 26.5 12.5 26.5C9.6 26.5 9.1 19.5 7.6 16.2C5.6 11.7 5.7 6.5 9.2 4.8Z"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (vertical === "tattoo") {
    return (
      <svg {...common}>
        <path d="M7 21.5L19.5 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M17 6.5L25.5 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M14.5 11.5L20.5 17.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M5.5 23L9 26.5L6.2 28.2L3.8 25.8L5.5 23Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M21 7L24 4L28 8L25 11" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }

  if (vertical === "beauty") {
    return (
      <svg {...common}>
        <path
          d="M20.2 26.5C17.9 27.3 14.7 27.2 12.2 26C9 24.5 7.1 21.3 7.1 17.4C7.1 10.9 11 5.3 17.3 5.3C22.1 5.3 25.2 8.6 25.2 12.8C25.2 16.4 23 18.6 20.1 19.2"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path d="M14.2 13.6C15.6 14.6 18 14.7 20.4 13.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 20.7C15 21.8 17.5 21.8 19.6 20.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="5" y="7" width="22" height="18" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M12.5 14L9.5 16.8L12.5 19.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.5 14L22.5 16.8L19.5 19.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.2 12.8L14.8 20.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
