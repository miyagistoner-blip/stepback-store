import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { getProductBySlug } from "@/data/products";

const whatsappNumber = "56936455845";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const whatsappMessage = `Hola STEPBACK, quiero consultar por el ${product.name}`;

  const mainSpecs = product.specs.slice(0, 5);
  const keySpecs = product.specs.slice(0, 8);
  const fullSpecs = product.specs;

  return (
    <main className="min-h-screen bg-[#f5f2ea] text-black dark:bg-black dark:text-white">
      <Navbar />

      <section className="relative mx-auto max-w-7xl px-6 pt-28">
        <Link
          href="/#productos"
          className="inline-flex rounded-full border border-black/10 bg-white/50 px-5 py-2 text-sm font-bold text-black/60 transition hover:border-orange-500/40 hover:bg-white/80 hover:text-orange-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60 dark:hover:bg-white/[0.08] dark:hover:text-orange-400"
        >
          ← Volver a colección
        </Link>
      </section>

      <section className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-14 pt-8 lg:grid-cols-2 lg:items-start">
        <div className="absolute left-1/2 top-16 h-[360px] w-[640px] -translate-x-1/2 rounded-full bg-transparent blur-[140px] dark:bg-orange-500/10" />

        <div className="relative rounded-[2rem] border border-black/10 bg-white/50 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_30px_120px_rgba(0,0,0,0.35)] md:p-8">
          <div className="absolute left-6 top-6 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-xs font-semibold text-black/65 dark:border-white/10 dark:bg-black/70 dark:text-white/70">
            Disponible
          </div>

          <img
            src={product.image}
            alt={product.name}
            className="h-[420px] w-full object-contain md:h-[520px]"
          />
        </div>

        <div className="relative">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-orange-500">
            {product.category}
          </p>

          <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
            {product.name}
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-black/55 dark:text-white/55">
            {product.description}
          </p>

          <div className="mt-8 rounded-[2rem] border border-black/10 bg-white/55 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
                  Precio
                </p>

                <p className="mt-3 text-4xl font-black tracking-[-0.04em]">
                  {product.price}
                </p>
              </div>

              <span className="w-fit rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-green-600 dark:text-green-400">
                Disponible
              </span>
            </div>

            <p className="mt-5 text-sm leading-6 text-black/50 dark:text-white/45">
              Disponible para venta al detalle y al mayor. Coordina stock,
              retiro o despacho directamente por WhatsApp.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-green-500 px-8 py-4 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-green-400"
              >
                Consultar por WhatsApp
              </a>

              <a
                href="https://www.facebook.com/marketplace/profile/100095529813059/?ref=permalink&mibextid=6ojiHh"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-orange-500/30 bg-orange-500 px-8 py-4 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                Ver en Marketplace
              </a>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="mb-5 text-xl font-black">Características</h2>

            <div className="grid gap-3">
              {mainSpecs.map((spec) => (
                <div
                  key={spec}
                  className="rounded-2xl border border-black/10 bg-white/50 px-5 py-4 text-sm text-black/65 transition hover:border-orange-500/30 hover:bg-white/80 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70 dark:hover:bg-white/[0.05]"
                >
                  {spec}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="mb-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-orange-500">
            Lo importante
          </p>

          <h2 className="text-4xl font-black tracking-[-0.04em]">
            Specs clave
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {keySpecs.map((spec, index) => (
            <div
              key={spec}
              className="rounded-3xl border border-black/10 bg-white/50 p-5 transition hover:border-orange-500/30 hover:bg-white/80 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40 dark:text-white/35">
                {`Dato ${index + 1}`}
              </p>

              <p className="mt-4 text-lg font-black leading-snug text-black dark:text-white">
                {spec}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <details className="group rounded-[2rem] border border-black/10 bg-white/50 p-6 transition hover:border-orange-500/30 hover:bg-white/80 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.45em] text-orange-500">
                Información avanzada
              </p>

              <h2 className="text-2xl font-black tracking-[-0.03em]">
                Ver ficha técnica completa
              </h2>
            </div>

            <span className="rounded-full border border-black/10 px-4 py-2 text-sm font-bold text-black/60 transition group-open:rotate-45 group-open:text-black dark:border-white/10 dark:text-white/60 dark:group-open:text-white">
              +
            </span>
          </summary>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fullSpecs.map((spec, index) => (
              <div
                key={spec}
                className="rounded-3xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-black/30"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40 dark:text-white/35">
                  {`Especificación ${index + 1}`}
                </p>

                <p className="mt-4 text-base font-bold leading-snug text-black/75 dark:text-white/85">
                  {spec}
                </p>
              </div>
            ))}
          </div>
        </details>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-black/10 bg-white/50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
              STEPBACK
            </p>

            <h3 className="mt-4 text-xl font-black">Producto seleccionado</h3>

            <p className="mt-3 text-sm leading-6 text-black/50 dark:text-white/45">
              Hardware elegido para setups modernos, limpios y con buena
              presencia visual.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
              Compra
            </p>

            <h3 className="mt-4 text-xl font-black">Atención directa</h3>

            <p className="mt-3 text-sm leading-6 text-black/50 dark:text-white/45">
              Consulta disponibilidad y coordina tu compra directamente por
              WhatsApp.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
              Envíos
            </p>

            <h3 className="mt-4 text-xl font-black">A todo Chile</h3>

            <p className="mt-3 text-sm leading-6 text-black/50 dark:text-white/45">
              Despachos coordinados según ciudad, comuna y producto
              seleccionado.
            </p>
          </div>
        </div>
      </section>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-4 text-sm font-black text-white shadow-[0_20px_60px_rgba(34,197,94,0.35)] transition hover:-translate-y-0.5 hover:bg-green-400 md:hidden"
      >
        WhatsApp
      </a>
    </main>
  );
}