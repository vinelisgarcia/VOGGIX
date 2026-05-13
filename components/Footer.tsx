import { brand } from "@/lib/constants";
import { Logo } from "@/components/Logo";

const productLinks = ["Funciones", "Precios", "FAQ"];
const verticalLinks = [
  "Voggix Barber",
  "Voggix Dental",
  "Voggix Tattoo",
  "Voggix Beauty",
  "Voggix Studio"
];
const legalLinks = ["Términos", "Privacidad", "Aviso legal"];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm leading-7 text-voggix-muted">
            La plataforma que conecta, organiza y hace crecer negocios de servicios.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="Producto" items={productLinks} />
          <FooterColumn title="Verticales" items={verticalLinks} />
          <div>
            <h2 className="text-sm font-black uppercase text-voggix-ink">Contacto</h2>
            <ul className="mt-4 space-y-3 text-sm font-semibold text-voggix-muted">
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-voggix-blue">
                  {brand.email}
                </a>
              </li>
              <li>
                <a href={brand.whatsappHref} className="hover:text-voggix-blue">
                  WhatsApp {brand.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-voggix-blue">
                  Solicitar información
                </a>
              </li>
            </ul>
          </div>
          <FooterColumn title="Legal" items={legalLinks} />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-sm font-black uppercase text-voggix-ink">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm font-semibold text-voggix-muted">
        {items.map((item) => (
          <li key={item}>
            <a href="#inicio" className="hover:text-voggix-blue">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
