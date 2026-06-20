import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { products } from "@/data/products";

type Product = (typeof products)[number];

const categories = {
  cases: {
    title: "Cases",
    description:
      "Gabinetes seleccionados para setups modernos, limpios y con buena presencia visual.",
    filter: (product: Product) => {
      const category = product.category.toLowerCase();
      return category.includes("gabinete") || category.includes("case");
    },
  },
  fuentes: {
    title: "Fuentes",
    description:
      "Fuentes de poder para armados gamer de entrada, gama media y setups equilibrados.",
    filter: (product: Product) =>
      product.category.toLowerCase().includes("fuente"),
  },
  monitores: {
    title: "Monitores",
    description:
      "Monitores gamer para setups competitivos, uso diario y alta fluidez.",
    filter: (product: Product) =>
      product.category.toLowerCase().includes("monitor"),
  },
  refrigeracion: {
    title: "Refrigeración",
    description:
      "Refrigeración líquida y soluciones térmicas para mantener el setup estable.",
    filter: (product: Product) =>
      product.category.toLowerCase().includes("refriger"),
  },
  ventiladores: {
    title: "Ventiladores",
    description:
      "Ventiladores para mejorar flujo de aire, estética y presencia visual del setup.",
    filter: (product: Product) =>
      product.category.toLowerCase().includes("ventil"),
  },
  perifericos: {
    title: "Periféricos",
    description:
      "Accesorios y periféricos seleccionados para completar el setup.",
    filter: (product: Product) =>
      product.category.toLowerCase().includes("perif"),
  },
};

type CategorySlug = keyof typeof categories;

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
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
    </Link>
  );
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const selectedCategory = categories[category as CategorySlug];

  if (!selectedCategory) {
    notFound();
  }

  const categoryProducts = products.filter(selectedCategory.filter);

  return (
    <main className="min-h-screen bg-[#f5f2ea] text-black dark:bg-black dark:text-white">
      <Navbar />

      <section className="relative mx-auto max-w-[1600px] px-6 pb-12 pt-32">
        <div className="absolute left-1/2 top-16 h-[360px] w-[680px] -translate-x-1/2 rounded-full bg-transparent blur-[140px] dark:bg-orange-500/15" />

        <div className="relative">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex rounded-full border border-black/10 bg-white/50 px-5 py-2 text-sm font-bold text-black/60 transition hover:border-orange-500/40 hover:bg-white/80 hover:text-orange-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60 dark:hover:bg-white/[0.08] dark:hover:text-orange-400"
            >
              ← Volver al inicio
            </Link>

            <Link
              href="/catalog"
              className="inline-flex rounded-full border border-black/10 bg-white/50 px-5 py-2 text-sm font-bold text-black/60 transition hover:border-orange-500/40 hover:bg-white/80 hover:text-orange-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60 dark:hover:bg-white/[0.08] dark:hover:text-orange-400"
            >
              Ver catálogo
            </Link>
          </div>

          <p className="mb-5 mt-10 text-xs font-semibold uppercase tracking-[0.55em] text-orange-500">
            STEPBACK CATALOG
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
            {selectedCategory.title}
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-black/55 dark:text-white/55 md:text-lg">
            {selectedCategory.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-8">
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-[2rem] border border-black/10 bg-white/40 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03]">
          {Object.entries(categories).map(([slug, item]) => (
            <Link
              key={slug}
              href={`/catalog/${slug}`}
              className={`rounded-full border px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${
                slug === category
                  ? "border-orange-500 bg-orange-500 text-white"
                  : "border-black/10 bg-white/60 text-black/55 hover:border-orange-500/40 hover:bg-orange-500 hover:text-white dark:border-white/10 dark:bg-black/40 dark:text-white/60 dark:hover:border-orange-500/40 dark:hover:bg-orange-500 dark:hover:text-white"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-24 pt-12">
        {categoryProducts.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {categoryProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-black/10 bg-white/35 p-8 text-sm text-black/45 dark:border-white/10 dark:bg-white/[0.02] dark:text-white/35">
            Próximamente productos en esta categoría.
          </div>
        )}
      </section>
    </main>
  );
}