import { products } from "@/data/products";
import Navbar from "@/components/Navbar";

const whatsappNumber = "56936455845";

const mapLinks = {
  tienda:
    "https://www.google.com/maps/search/?api=1&query=Alonso%20de%20Ovalle%201060%20Local%20139%20Santiago%20Centro%20Chile",
  mayoristas:
    "https://www.google.com/maps/search/?api=1&query=Tarapac%C3%A1%201028%20Santiago%20Centro%20Chile",
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.46 0 .1 5.36.1 11.96c0 2.1.55 4.16 1.6 5.98L0 24l6.22-1.63a11.93 11.93 0 0 0 5.84 1.49h.01c6.6 0 11.96-5.36 11.96-11.96 0-3.2-1.25-6.2-3.51-8.42ZM12.07 21.84h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.69.97.98-3.6-.23-.37a9.9 9.9 0 1 1 8.35 4.59Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
  </svg>
);

type Product = (typeof products)[number];

function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={`/products/${product.slug}`}
      className="group block rounded-[2rem] border border-black/10 bg-white/50 p-4 transition duration-300 hover:-translate-y-1 hover:border-orange-500/35 hover:bg-white/80 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05]"
    >
      <div className="relative flex h-[260px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-black/[0.04] p-8 dark:bg-white/[0.06]">
        <span className="absolute left-5 top-5 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/65 dark:border-white/10 dark:bg-black/60 dark:text-white/75">
          Disponible
        </span>

        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="px-1 pb-1 pt-6">
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-black/35 dark:text-white/30">
          {product.category}
        </p>

        <h3 className="text-xl font-black tracking-[-0.03em]">
          {product.name}
        </h3>

        <div className="mt-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-black/50 dark:text-white/45">Precio</p>
            <p className="mt-1 text-2xl font-black">{product.price}</p>
          </div>

          <span className="text-sm font-black text-black/40 transition group-hover:translate-x-1 group-hover:text-orange-500 dark:text-white/35 dark:group-hover:text-orange-400">
            Ver producto →
          </span>
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  const whatsappMessage =
    "Hola STEPBACK, quiero consultar por productos disponibles";

  const featuredProducts = products.filter((product) =>
  ["ds900m", "c275p", "psu650", "g271qg"].includes(product.slug)
);

  

  return (
    <main className="min-h-screen bg-[#f5f2ea] text-black dark:bg-black dark:text-white">
      <Navbar />

      <section
        id="inicio"
        className="relative flex min-h-[82vh] items-center justify-center overflow-hidden px-6 pb-20 pt-32"
      >
        <div className="absolute left-1/2 top-16 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-transparent blur-[140px] dark:bg-orange-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),transparent_38%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_38%)]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.55em] text-orange-500">
            STEPBACK STORE
          </p>

          <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-8xl">
            Hardware y setups con estética premium.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-black/55 dark:text-white/55 md:text-lg">
            Cases, fuentes, monitores y periféricos seleccionados para setups
            modernos, limpios y minimalistas.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/catalog"
              className="rounded-2xl bg-orange-500 px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-400"
            >
              Ver catálogo
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-black/10 bg-black/5 px-8 py-4 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-8">
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-[2rem] border border-black/10 bg-white/40 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03]">
          {[
  { label: "Cases", href: "/catalog/cases" },
{ label: "Fuentes", href: "/catalog/fuentes" },
{ label: "Monitores", href: "/catalog/monitores" },
{ label: "Refrigeración", href: "/catalog/refrigeracion" },
{ label: "Ventiladores", href: "/catalog/ventiladores" },
{ label: "Periféricos", href: "/catalog/perifericos" },
].map((category) => (
            <a
              key={category.label}
              href={category.href}
              className="rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-bold text-black/55 transition hover:-translate-y-0.5 hover:border-orange-500/40 hover:bg-orange-500 hover:text-white dark:border-white/10 dark:bg-black/40 dark:text-white/60 dark:hover:border-orange-500/40 dark:hover:bg-orange-500 dark:hover:text-white"
            >
              {category.label}
            </a>
          ))}
        </div>
      </section>

      <section id="productos" className="mx-auto max-w-[1600px] px-6 py-20">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-orange-500">
              Colección seleccionada
            </p>

            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-5xl">
              Productos destacados
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-black/50 dark:text-white/45">
            Hardware gamer elegido por estética, rendimiento y disponibilidad.
            Venta al detalle, al mayor y envíos coordinados a todo Chile.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

    

      <section id="envios" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] border border-black/10 bg-white/50 p-8 dark:border-white/10 dark:bg-white/[0.03] md:p-12">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-orange-500">
            Envíos, retiros y compras
          </p>

          <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-[-0.05em] md:text-5xl">
            Compra simple, despacho coordinado.
          </h2>

          <p className="mt-7 max-w-4xl text-base leading-8 text-black/55 dark:text-white/55">
            Realizamos envíos a todo Chile y coordinamos cada compra
            directamente por WhatsApp. También contamos con disponibilidad para
            ventas al detalle y al mayor.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-black/10 bg-white/60 p-6 dark:border-white/10 dark:bg-black/40">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                Despachos
              </p>

              <h3 className="text-lg font-black">Envíos a todo Chile</h3>

              <p className="mt-3 text-sm leading-6 text-black/50 dark:text-white/45">
                Coordinamos el despacho según la ciudad, comuna y producto
                seleccionado.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/60 p-6 dark:border-white/10 dark:bg-black/40">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                Próximamente
              </p>

              <h3 className="text-lg font-black">Tienda física</h3>

              <a
                href={mapLinks.tienda}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-sm leading-6 text-black/50 underline decoration-black/20 underline-offset-4 transition hover:text-orange-500 hover:decoration-orange-500 dark:text-white/45 dark:decoration-white/20 dark:hover:text-orange-400 dark:hover:decoration-orange-400"
              >
                Alonso de Ovalle 1060, Local 139, Santiago Centro.
              </a>

              <p className="mt-3 text-xs leading-5 text-black/40 dark:text-white/35">
                Local en preparación. La atención presencial se anunciará cuando
                esté operativo.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/60 p-6 dark:border-white/10 dark:bg-black/40">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                Mayoristas
              </p>

              <h3 className="text-lg font-black">Retiros al mayor</h3>

              <p className="mt-3 text-sm leading-6 text-black/50 dark:text-white/45">
                <a
                  href={mapLinks.mayoristas}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-black/20 underline-offset-4 transition hover:text-orange-500 hover:decoration-orange-500 dark:decoration-white/20 dark:hover:text-orange-400 dark:hover:decoration-orange-400"
                >
                  Tarapacá 1028, Santiago Centro.
                </a>{" "}
                Disponible para compras mayoristas y retiros coordinados.
              </p>

              <p className="mt-3 text-xs leading-5 text-black/40 dark:text-white/35">
                Siempre con coordinación previa por WhatsApp.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-black/10 bg-white/60 p-6 dark:border-white/10 dark:bg-black/40">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
                  Atención directa
                </p>

                <h3 className="mt-3 text-2xl font-black tracking-[-0.03em]">
                  Coordina disponibilidad, retiro o despacho.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-black/50 dark:text-white/45">
                  Para asegurar stock, horarios y método de entrega, todas las
                  compras se coordinan previamente por WhatsApp.
                </p>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 justify-center rounded-2xl bg-green-500 px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-green-400"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-3xl border border-black/10 bg-white/50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Selección
            </p>

            <h3 className="text-lg font-black">Productos elegidos</h3>

            <p className="mt-3 text-sm leading-6 text-black/50 dark:text-white/45">
              Hardware seleccionado por estética, compatibilidad y presencia
              para setups modernos.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Atención
            </p>

            <h3 className="text-lg font-black">Compra directa</h3>

            <p className="mt-3 text-sm leading-6 text-black/50 dark:text-white/45">
              Coordinación rápida por WhatsApp para disponibilidad, retiro,
              despacho o ventas al mayor.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Cobertura
            </p>

            <h3 className="text-lg font-black">Envíos y retiros</h3>

            <p className="mt-3 text-sm leading-6 text-black/50 dark:text-white/45">
              Envíos a todo Chile y retiros coordinados en Santiago Centro
              según disponibilidad.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Mayoristas
            </p>

            <h3 className="text-lg font-black">Stock para reventa</h3>

            <p className="mt-3 text-sm leading-6 text-black/50 dark:text-white/45">
              Disponibilidad para técnicos, tiendas, armadores y revendedores.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-10 dark:border-white/10">
        <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-black tracking-[0.18em] text-black dark:text-white">
              STEPBACK
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-black/45 dark:text-white/40">
              Hardware gamer, productos seleccionados y atención directa para
              setups modernos en Chile.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Contacto
            </p>

            <div className="flex flex-col gap-3 text-sm text-black/50 dark:text-white/45">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-black dark:hover:text-white"
              >
                WhatsApp: +56 9 3645 5845
              </a>

              <a
                href="https://www.facebook.com/marketplace/profile/100095529813059/?ref=permalink&mibextid=6ojiHh"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-black dark:hover:text-white"
              >
                Marketplace
              </a>

              <a
                href="https://www.instagram.com/stepback6store?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-black dark:hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Ubicación
            </p>

            <div className="flex flex-col gap-3 text-sm leading-6 text-black/50 dark:text-white/45">
              <p>
                Próximamente tienda física:
                <br />
                <a
                  href={mapLinks.tienda}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-black/20 underline-offset-4 transition hover:text-orange-500 hover:decoration-orange-500 dark:decoration-white/20 dark:hover:text-orange-400 dark:hover:decoration-orange-400"
                >
                  Alonso de Ovalle 1060, Local 139.
                </a>
              </p>

              <p>
                Retiros al mayor:
                <br />
                <a
                  href={mapLinks.mayoristas}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-black/20 underline-offset-4 transition hover:text-orange-500 hover:decoration-orange-500 dark:decoration-white/20 dark:hover:text-orange-400 dark:hover:decoration-orange-400"
                >
                  Tarapacá 1028, Santiago Centro.
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Compra
            </p>

            <div className="flex flex-col gap-3 text-sm leading-6 text-black/50 dark:text-white/45">
              <p>Envíos a todo Chile.</p>
              <p>Ventas al detalle y al mayor.</p>
              <p>Todo retiro requiere coordinación previa.</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1600px] flex-col justify-between gap-4 border-t border-black/10 pt-6 text-sm text-black/35 dark:border-white/10 dark:text-white/30 md:flex-row">
          <p>© 2026 STEPBACK Store</p>
          <p>Hardware gamer · Santiago Centro, Chile</p>
        </div>
      </footer>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-4 text-sm font-black text-white shadow-[0_20px_60px_rgba(34,197,94,0.35)] transition hover:-translate-y-0.5 hover:bg-green-400 md:hidden"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
    </main>
  );
}