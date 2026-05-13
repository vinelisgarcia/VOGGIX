# Voggix Landing

Landing page oficial de Voggix, una plataforma todo en uno para reservas online, gestión de clientes, recordatorios, promoción digital y presencia web para negocios de servicios.

El proyecto es una web pública construida sobre una app Next.js. Hoy funciona como landing/website oficial; la misma base puede crecer hacia una web app con login, dashboard y módulos de producto.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- SVG/CSS para logo, favicon, Open Graph y mockups
- Identidad visual Voggix con Poppins/Inter como stack tipográfico y paleta `#2563EB`, `#8B5CF6`, `#EC4899`, `#22D3EE`, `#0F172A`, `#F8FAFC`

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Abre `http://localhost:3000`.

## Build

```bash
npm run lint
npm run build
```

## Contenido editable

Los datos principales de verticales, beneficios, planes, FAQ, navegación y contacto viven en:

```text
lib/constants.ts
```

## Conectar formulario de demo

El modal de demo está implementado en `components/DemoModal.tsx`. La función preparada para integración es:

```ts
submitDemoRequest(payload)
```

TODO producción:

- Conectar con backend propio, CRM, Supabase, email transaccional o webhook.
- Agregar manejo de errores reales de red.
- Guardar consentimiento si el flujo comercial lo requiere.
- Agregar analytics de conversión si aplica.

## WhatsApp

El WhatsApp comercial está configurado en `lib/constants.ts` como `+1 829 764 7616`.

Si cambia el número, actualiza `brand.whatsappNumber`, `brand.whatsappDisplay` y `brand.whatsappHref`.

## Despliegue en Vercel

1. Sube el proyecto a un repositorio Git.
2. Importa el repositorio desde Vercel.
3. Usa la configuración por defecto de Next.js.
4. Define variables de entorno cuando exista backend o webhook del formulario.
5. Ejecuta un deploy preview y valida SEO, responsive, formulario y enlaces.

## Pendientes de producción

- Reemplazar o activar `brand.loginUrl`.
- Conectar el formulario de demo y el formulario de contacto.
- Definir URLs legales reales para términos, privacidad y aviso legal.
- Ajustar dominio final en metadatos si no será `https://voggix.com`.
