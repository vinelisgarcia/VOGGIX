import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const title = "Voggix — Reservas, gestión y presencia digital para negocios";
const description =
  "Voggix conecta, organiza y hace crecer negocios de servicios con reservas online, gestión de clientes, recordatorios, promoción digital y páginas web con Voggix Studio.";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voggix.com"),
  title,
  description,
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title,
    description,
    url: "https://voggix.com",
    siteName: "Voggix",
    images: [
      {
        url: "/og-voggix.svg",
        width: 1200,
        height: 630,
        alt: "Voggix, plataforma todo en uno para reservas y crecimiento"
      }
    ],
    locale: "es_DO",
    type: "website"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Voggix",
      url: "https://voggix.com",
      email: "hola@voggix.com",
      slogan: "Conecta. Organiza. Haz crecer.",
      logo: "https://voggix.com/favicon.svg"
    },
    {
      "@type": "SoftwareApplication",
      name: "Voggix",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
