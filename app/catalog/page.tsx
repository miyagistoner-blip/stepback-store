import Link from "next/link";
import Navbar from "@/components/Navbar";

const categories = [
  {
    title: "Cases",
    href: "/catalog/cases",
    description:
      "Gabinetes para setups modernos, limpios y con presencia visual.",
  },
  {
    title: "Fuentes",
    href: "/catalog/fuentes",
    description:
      "Fuentes de poder para armados gamer y equipos equilibrados.",
  },
  {
    title: "Monitores",
    href: "/catalog/monitores",
    description:
      "Monitores gamer para setups competitivos, trabajo y uso diario.",
  },
  {
    title: "Refrigeración",
    href: "/catalog/refrigeracion",
    description:
      "Refrigeración líquida y soluciones térmicas para tu setup.",
  },
  {
    title: "Ventiladores",
    href: "/catalog/ventiladores",
    description:
      "Ventiladores para flujo de aire, estética y presencia visual.",
  },
  {
    title: "Periféricos",
    href: "/catalog/perifericos",
    description:
      "Accesorios y periféricos seleccionados para completar el setup.",
  },
];

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-[#f5f2ea] text-black dark:bg-black dark:text-white">
      <Navbar />

      <section className="relative mx-auto max-w-[1600px] px-6 pb-12 pt-32">
        <div className="absolute left-1/2 top-16 h-[360px] w-[680px] -translate-x-1/2 rounded-full bg-transparent blur-[140px] dark:bg-orange-500/15" />

        <div className="relative">
          <Link
            href="/"
            className="inline-flex rounded-full border border-black/10 bg-white/50 px-5 py-2 text-sm font-bold text-black/60 transition hover:border-orange-500/40 hover:bg-white/80 hover:text-orange-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60 dark:hover:bg-white/[0.08] dark:hover:text-orange-400"
          >
            ← Volver al inicio
          </Link>

          <p className="mb-5 mt-10 text-xs font-semibold uppercase tracking-[0.55em] text-orange-500">
            STEPBACK CATALOG
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Catálogo.
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-black/55 dark:text-white/55 md:text-lg">
            Elige una categoría para ver solo los productos de esa sección, sin
            cargar todo el catálogo en una misma página.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-24 pt-8">
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group rounded-[2rem] border border-black/10 bg-white/50 p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/35 hover:bg-white/80 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05]"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
                STEPBACK
              </p>

              <h2 className="text-3xl font-black tracking-[-0.04em]">
                {category.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-black/50 dark:text-white/45">
                {category.description}
              </p>

              <span className="mt-8 inline-flex text-sm font-black text-black/40 transition group-hover:translate-x-1 group-hover:text-orange-500 dark:text-white/35 dark:group-hover:text-orange-400">
                Ver categoría →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}