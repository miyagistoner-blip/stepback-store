import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getProductBySlug } from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#f4f1ea] text-black dark:bg-black dark:text-white flex items-center justify-center px-6">
        <Navbar />

        <div className="text-center">
          <p className="text-orange-500 dark:text-orange-400 uppercase tracking-[0.3em] text-sm mb-4">
            STEPBACK STORE
          </p>

          <h1 className="text-4xl font-semibold mb-4">
            Producto no encontrado
          </h1>

          <Link
            href="/#productos"
            className="text-[#6f6a61] dark:text-zinc-400 hover:text-orange-500 dark:hover:text-orange-400 transition"
          >
            Volver a la colección
          </Link>
        </div>
      </main>
    );
  }

  const whatsappMessage = `Hola, estoy interesado en el ${product.name}`;
  const whatsappUrl = `https://wa.me/56936455845?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const highlight =
    product.slug === "ds900m"
      ? "6x L17 ARGB"
      : product.slug === "c275p"
      ? "3x L17 ARGB"
      : "650W Bronze";

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-black dark:bg-black dark:text-white relative overflow-hidden px-6 pt-28 pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#fbfaf6_0%,#f4f1ea_45%,#e9e4da_100%)] dark:bg-[radial-gradient(circle_at_top,#18181b_0%,#050505_45%,#000000_100%)]" />

      <div className="hidden dark:block absolute top-[-220px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full" />

      <Navbar />

      <div className="max-w-6xl mx-auto relative z-10">
        <Link
          href="/#productos"
          className="inline-block text-[#6f6a61] dark:text-zinc-400 hover:text-orange-500 dark:hover:text-orange-400 transition mb-10"
        >
          ← Volver a la colección
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <div className="relative bg-[#fbfaf6]/70 dark:bg-zinc-950/80 border border-black/10 dark:border-white/10 rounded-[2rem] h-[520px] overflow-hidden">
              <div className="absolute top-5 left-5 z-10">
                <span className="rounded-full border border-black/10 dark:border-white/10 bg-[#f4f1ea]/80 dark:bg-black/40 px-4 py-2 text-xs text-[#6f6a61] dark:text-zinc-300 backdrop-blur">
                  {product.stock}
                </span>
              </div>

              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-10"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[#fbfaf6]/60 dark:bg-zinc-950/60 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#8a8377] dark:text-zinc-500 mb-3">
                  Incluye
                </p>

                <p className="text-sm font-semibold text-black dark:text-white leading-snug">
                  {highlight}
                </p>
              </div>

              <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[#fbfaf6]/60 dark:bg-zinc-950/60 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#8a8377] dark:text-zinc-500 mb-3">
                  Despacho
                </p>

                <p className="text-sm font-semibold text-black dark:text-white leading-snug">
                  Todo Chile
                </p>
              </div>

              <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[#fbfaf6]/60 dark:bg-zinc-950/60 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#8a8377] dark:text-zinc-500 mb-3">
                  Compra
                </p>

                <p className="text-sm font-semibold text-black dark:text-white leading-snug">
                  WhatsApp
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-orange-500 dark:text-orange-400 uppercase tracking-[0.3em] text-sm mb-5">
              STEPBACK SELECTED
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-none mb-6">
              {product.name}
            </h1>

            <p className="text-[#6f6a61] dark:text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
              {product.shortDescription}
            </p>

            <div className="mb-8 rounded-[1.5rem] border border-black/10 dark:border-white/10 bg-[#fbfaf6]/60 dark:bg-zinc-950/60 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#8a8377] dark:text-zinc-500 mb-3">
                Concepto
              </p>

              <p className="text-[#6f6a61] dark:text-zinc-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-[#fbfaf6]/70 dark:bg-zinc-950/80 border border-black/10 dark:border-white/10 text-[#6f6a61] dark:text-zinc-300 px-4 py-2 rounded-full text-sm">
                {product.brand}
              </span>

              <span className="bg-[#fbfaf6]/70 dark:bg-zinc-950/80 border border-black/10 dark:border-white/10 text-[#6f6a61] dark:text-zinc-300 px-4 py-2 rounded-full text-sm">
                {product.category}
              </span>
            </div>

            <div className="mb-8">
              <p className="text-sm text-[#6f6a61] dark:text-zinc-500 mb-1">
                Precio
              </p>

              <p className="text-4xl font-semibold tracking-tight">
                {product.price}
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-sm uppercase tracking-[0.25em] text-[#8a8377] dark:text-zinc-500 mb-4">
                Colores disponibles
              </h2>

              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    className="bg-[#fbfaf6]/70 dark:bg-zinc-950/80 border border-black/10 dark:border-white/10 px-5 py-3 rounded-2xl text-black dark:text-white"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition px-8 py-4 rounded-2xl font-semibold"
            >
              Consultar disponibilidad
            </a>

            <p className="text-sm text-[#6f6a61] dark:text-zinc-500 mt-4">
              Atención directa por WhatsApp.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <section className="bg-[#fbfaf6]/70 dark:bg-zinc-950/80 border border-black/10 dark:border-white/10 rounded-[2rem] p-8 md:p-10">
            <p className="uppercase tracking-[0.25em] text-orange-500 dark:text-orange-400 text-sm mb-4">
              Detalles
            </p>

            <h2 className="text-3xl font-semibold tracking-tight mb-8">
              Especificaciones
            </h2>

            <div className="space-y-4 text-[#6f6a61] dark:text-zinc-400">
              {product.specs.map((spec) => (
                <p key={spec}>• {spec}</p>
              ))}
            </div>
          </section>

          <section className="bg-[#fbfaf6]/70 dark:bg-zinc-950/80 border border-black/10 dark:border-white/10 rounded-[2rem] p-8 md:p-10">
            <p className="uppercase tracking-[0.25em] text-orange-500 dark:text-orange-400 text-sm mb-4">
              Compra
            </p>

            <h2 className="text-3xl font-semibold tracking-tight mb-8">
              Envíos y compras
            </h2>

            <div className="space-y-4 text-[#6f6a61] dark:text-zinc-400">
              {product.shipping.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}