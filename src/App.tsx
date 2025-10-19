import React from 'react'

/* ===========================
   Componente Chip reutilizable
   =========================== */
const Chip = ({ children }: { children: React.ReactNode }) => (
  <span
    className="inline-flex items-center gap-2 rounded-full border card-border bg-white/10 px-3 py-2 text-sm text-white/90"
  >
    {children}
  </span>
)

/* =========================================
   LeadForm (envía mailto con datos del lead)
   - Labels accesibles (sr-only)
   - encodeURIComponent en subject/body
   ========================================= */
function LeadForm() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [city, setCity] = React.useState('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = 'Quiero unirme a la beta de Arcadia'
    const body = `Nombre: ${name}
Email: ${email}
Teléfono: ${phone}
Ciudad: ${city}`
    window.location.href = `mailto:ti@eurekapys.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-2 grid max-w-lg gap-3 rounded-2xl border card-border bg-white/5 p-4"
    >
      <label className="sr-only" htmlFor="name">
        Nombre
      </label>
      <input
        id="name"
        required
        className="rounded-xl border card-border bg-[#120a24] px-3 py-3"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="sr-only" htmlFor="email">
        Correo
      </label>
      <input
        id="email"
        required
        type="email"
        className="rounded-xl border card-border bg-[#120a24] px-3 py-3"
        placeholder="Tu correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="sr-only" htmlFor="phone">
        Teléfono
      </label>
      <input
        id="phone"
        required
        type="tel"
        className="rounded-xl border card-border bg-[#120a24] px-3 py-3"
        placeholder="Tu teléfono (WhatsApp)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label className="sr-only" htmlFor="city">
        Ciudad
      </label>
      <input
        id="city"
        className="rounded-xl border card-border bg-[#120a24] px-3 py-3"
        placeholder="Ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button
        className="rounded-xl bg-gradient-to-r from-[var(--magenta)] to-[var(--verde)] px-4 py-3 font-bold transition hover:brightness-110 active:scale-[0.98]"
      >
        Unirme a la lista
      </button>
      <small className="text-muted">
        Protegemos tus datos. Solo usaremos tu información para contactarte sobre Arcadia.
      </small>
    </form>
  )
}

/* ======================
   App (página principal)
   ====================== */
export default function App() {
  return (
    <div className="flex min-h-full flex-col">
      {/* ===================================================
          HEADER (pulido)
          - Móvil: centrado
          - Desktop: justificado y “tenso”
          - Sombra + glass para separación visual
         =================================================== */}
      <header className="sticky top-0 z-50 overflow-hidden border-b card-border glass shadow-md shadow-[rgba(0,0,0,0.25)]">
        <div
          className="mx-auto max-w-6xl xl:max-w-5xl px-4 py-2.5
                     flex flex-col items-center justify-center gap-2.5
                     md:flex-row md:items-center md:justify-between"
        >
          {/* Marca (logo + nombre) */}
          <a
            href="#"
            className="group flex items-center gap-3 md:gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] rounded-xl"
          >
            <div className="grid h-10 w-10 md:h-12 md:w-12 place-items-center overflow-hidden rounded-xl shrink-0">
              <img
                src="/logo-arcadia.png"
                alt="Arcadia"
                width={48}
                height={48}
                className="aspect-square h-full w-full object-contain transition-transform group-hover:scale-105"
              />
            </div>

            <div className="flex flex-row items-center gap-1.5 md:gap-2 flex-wrap md:flex-nowrap">
              <strong className="leading-none text-white text-xl md:text-2xl font-extrabold">
                Arcadia
              </strong>
              <span
                className="leading-none whitespace-nowrap rounded-full border card-border
                           px-1.5 py-[1px] text-[10px] text-white/80 md:px-2 md:py-[2px] md:text-xs"
              >
                by Eureka Labs
              </span>
            </div>
          </a>

          {/* Nav (centrado en móvil, fluido; ghost + gradiente) */}
          <nav className="flex w-full md:w-auto flex-wrap justify-center gap-1.5 md:gap-2">
            <a
              href="#nosotros"
              className="rounded-xl border card-border bg-white/10 px-3 py-2 md:px-3.5 md:py-2.5 font-semibold transition hover:bg-white/15 active:scale-[0.98]"
            >
              Nosotros
            </a>
            <a
              href="#modulos"
              className="rounded-xl border card-border bg-white/10 px-3 py-2 md:px-3.5 md:py-2.5 font-semibold transition hover:bg-white/15 active:scale-[0.98]"
            >
              Módulos
            </a>
            <a
              href="#contacto"
              className="rounded-xl bg-gradient-to-r from-[var(--magenta)] to-[var(--verde)] px-3 py-2 md:px-3.5 md:py-2.5 font-semibold transition hover:brightness-110 active:scale-[0.98]"
            >
              Unirme
            </a>
          </nav>
        </div>
      </header>

      {/* ======================================
          HERO (presentación principal, pulido)
         ====================================== */}
      <main className="mx-auto max-w-6xl grow px-4">
        <section className="grid items-center gap-8 py-10 md:grid-cols-2 md:py-12 lg:py-16">
          {/* Columna de texto */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border card-border bg-white/10 px-3 py-2 text-sm">
              🚀 <small className="opacity-90">Lanzamiento temprano • Beta privada</small>
            </span>

            <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Crece, comparte,{` `}
              <span className="bg-gradient-to-r from-[var(--magenta)] to-[var(--verde)] bg-clip-text text-transparent">
                conecta
              </span>
              .
            </h1>

            <p className="mt-4 max-w-prose text-lg text-muted text-justify">
              Arcadia es el ecosistema comunitario donde comercios, emprendedores y vecinos
              crean su propio espacio digital. Módulos para visibilizar negocios, empleos,
              finca raíz, domicilios y mercado campesino; con mapas en vivo, notificaciones
              y la asistencia de Mariana IA.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-xl bg-gradient-to-r from-[var(--magenta)] to-[var(--verde)] px-4 py-3 font-bold transition hover:brightness-110 active:scale-[0.98]"
                href="#contacto"
              >
                Quiero participar
              </a>
              <a
                className="rounded-xl border card-border bg-white/10 px-4 py-3 font-bold transition hover:bg-white/15 active:scale-[0.98]"
                href="https://wa.me/573000000000"
                target="_blank"
                rel="noopener"
              >
                WhatsApp
              </a>
            </div>

            {/* Chips informativos */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Chip>🗺️ Mapas en vivo</Chip>
              <Chip>🤖 Mariana IA</Chip>
              <Chip>🔔 Notificaciones</Chip>
            </div>

            {/* Redes sociales */}
            <div className="mt-3 flex gap-2">
              <a
                className="rounded-full border card-border bg-white/10 px-3 py-2 transition hover:bg-white/15"
                href="https://instagram.com/arcadia.app"
                target="_blank"
                rel="noopener"
              >
                Instagram
              </a>
              <a
                className="rounded-full border card-border bg-white/10 px-3 py-2 transition hover:bg-white/15"
                href="#"
                target="_blank"
                rel="noopener"
              >
                Facebook
              </a>
              <a
                className="rounded-full border card-border bg-white/10 px-3 py-2 transition hover:bg-white/15"
                href="#"
                target="_blank"
                rel="noopener"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Columna visual */}
          <div className="rounded-2xl border card-border p-3">
            <picture>
              <source srcSet="/hero-arcadia.webp" type="image/webp" />
              <img
                src="/hero-arcadia.png"
                alt="Arcadia — Comunidad viva"
                width={1280}
                height={800}
                loading="lazy"
                className="aspect-[16/10] w-full rounded-xl border card-border object-cover shadow-[0_8px_26px_rgba(0,0,0,0.28)]"
              />
            </picture>

            {/* Tarjetas informativas */}
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border card-border bg-[var(--card)] p-3">
                <h3 className="font-semibold">🛍️ Comercios</h3>
                <p className="text-sm text-muted">
                  Micrositios con catálogo y pedidos por WhatsApp.
                </p>
              </div>
              <div className="rounded-xl border card-border bg-[var(--card)] p-3">
                <h3 className="font-semibold">👩‍💼 Empleos</h3>
                <p className="text-sm text-muted">Vacantes y hojas de vida por categoría.</p>
              </div>
              <div className="rounded-xl border card-border bg-[var(--card)] p-3">
                <h3 className="font-semibold">🏠 Finca raíz</h3>
                <p className="text-sm text-muted">
                  Búsqueda por sectores, filtros y favoritos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =======================
            NOSOTROS (pulido)
           ======================= */}
        <section id="nosotros" className="py-10 md:py-12">
          <h2 className="text-2xl md:text-3xl font-bold">Nosotros</h2>
          <p className="mt-2 text-muted max-w-prose text-justify">
            Arcadia es un proyecto de <span className="font-semibold">Eureka Labs</span>.
            Unimos comunidad y tecnología para que comercios, emprendedores y vecinos
            crezcan juntos con herramientas simples: mapas en vivo, notificaciones y
            asistencia de <span className="font-semibold">Mariana IA</span>.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border card-border bg-[var(--card)] p-4">
              <h3 className="font-semibold">🎯 Propósito</h3>
              <p className="text-sm text-muted">
                Impulsar economías locales y tejido social.
              </p>
            </div>
            <div className="rounded-xl border card-border bg-[var(--card)] p-4">
              <h3 className="font-semibold">🤝 Valores</h3>
              <p className="text-sm text-muted">
                Transparencia, colaboración y servicio.
              </p>
            </div>
            <div className="rounded-xl border card-border bg-[var(--card)] p-4">
              <h3 className="font-semibold">🛠️ Equipo</h3>
              <p className="text-sm text-muted">
                Dev + diseño + data, con enfoque humano.
              </p>
            </div>
          </div>
        </section>

        {/* =======================
            MÓDULOS (pulido)
           ======================= */}
        <section id="modulos" className="py-10 md:py-12">
          <h2 className="text-2xl font-bold md:text-3xl">Lo que trae Arcadia</h2>

          <div className="mt-4 grid gap-3 md:mt-6 md:grid-cols-2">
            <div className="rounded-xl border card-border bg-[var(--card)] p-4">
              <h3 className="font-semibold">🏍️ Domicilios y transporte</h3>
              <p className="text-sm text-muted">Seguimiento en mapa y calificación.</p>
            </div>
            <div className="rounded-xl border card-border bg-[var(--card)] p-4">
              <h3 className="font-semibold">❤️ Comunidad</h3>
              <p className="text-sm text-muted">
                Mascotas/objetos perdidos, ayuda solidaria.
              </p>
            </div>
            <div className="rounded-xl border card-border bg-[var(--card)] p-4">
              <h3 className="font-semibold">🌾 Mercado campesino</h3>
              <p className="text-sm text-muted">
                Productores locales con precios justos.
              </p>
            </div>
            <div className="rounded-xl border card-border bg-[var(--card)] p-4">
              <h3 className="font-semibold">🔔 Notificaciones</h3>
              <p className="text-sm text-muted">
                Push y correo para eventos importantes.
              </p>
            </div>
          </div>
        </section>

        {/* ====================================
            CONTACTO (Lead + contacto directo)
           ==================================== */}
        <section id="contacto" className="py-10 md:py-12">
          <h2 className="text-2xl font-bold md:text-3xl">
            ¿Quieres participar en la beta?
          </h2>
          <p className="text-muted">Déjanos tu correo y te avisamos cuando abramos cupos.</p>
          <LeadForm />
          <p className="mt-2 text-muted">
            Correo directo:{' '}
            <a className="underline" href="mailto:ti@eurekapys.com">
              ti@eurekapys.com
            </a>
          </p>
        </section>
      </main>

      {/* ===================
          FOOTER (centrado)
         =================== */}
      <footer className="mt-10 border-t card-border">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center md:py-8">
          <p className="leading-relaxed text-sm text-white/80">
            © 2025 Todos los derechos reservados, <strong>Arcadia R.P.G.</strong>
            <br />
            Un proyecto de{' '}
            <a
              href="https://eurekapys.com"
              target="_blank"
              rel="noopener"
              className="underline transition hover:text-[var(--verde)]"
            >
              Eureka Labs
            </a>
            , con dirección técnica de <span className="font-semibold">J.F.R.</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
