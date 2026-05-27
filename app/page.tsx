import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="bg-[#f4f1ea] text-black dark:bg-black dark:text-white min-h-screen relative overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#fbfaf6_0%,#f4f1ea_45%,#e9e4da_100%)] dark:bg-[radial-gradient(circle_at_top,#18181b_0%,#050505_45%,#000000_100%)]" />

  <div className="hidden dark:block absolute top-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full" />

  <Navbar />

      <section id="inicio" className="flex flex-col items-center justify-center h-screen text-center px-6 relative z-10">
        <p className="uppercase tracking-[0.3em] text-orange-400 text-sm mb-4">
          STEPBACK STORE
        </p>

        <h1 className="text-7xl font-black tracking-tight max-w-4xl leading-none">
          Hardware y setups con estética premium.
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 mt-6 max-w-2xl text-lg">
          Cases, periféricos y productos seleccionados para setups modernos y minimalistas.
        </p>

        <div className="flex gap-4 mt-10">
          <a
            href="#productos"
            className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-2xl font-semibold"
          >
            Ver productos
          </a>
        </div>
      </section>

      <section id="productos" className="px-6 pb-24 relative z-10">
        <h2 className="text-4xl font-bold mb-10">
          Productos destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              title={product.title}
              price={product.price}
              image={product.image}
              slug={product.slug}
            />
          ))}
        </div>
      </section>
      <section id="envios" className="px-6 pb-28 relative z-10">
  <div className="max-w-5xl mx-auto rounded-[2rem] border border-black/10 dark:border-white/10 bg-[#fbfaf6]/70 dark:bg-zinc-950/80 p-8 md:p-12">
    <p className="uppercase tracking-[0.25em] text-orange-500 dark:text-orange-400 text-sm mb-4">
      Envíos y compras
    </p>

    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
      Compra simple, despacho coordinado.
    </h2>

    <p className="text-[#6f6a61] dark:text-zinc-400 text-lg max-w-2xl leading-relaxed mb-10">
      Realizamos envíos a todo Chile y coordinamos cada compra directamente por WhatsApp.
      También contamos con disponibilidad para ventas al detalle y al mayor.
    </p>

    <div className="grid md:grid-cols-3 gap-4">
      <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[#f4f1ea]/70 dark:bg-black/30 p-6">
        <h3 className="font-semibold text-lg mb-2">
          Envíos a todo Chile
        </h3>
        <p className="text-sm text-[#6f6a61] dark:text-zinc-500 leading-relaxed">
          Coordinamos el despacho según la ciudad y el producto seleccionado.
        </p>
      </div>

      <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[#f4f1ea]/70 dark:bg-black/30 p-6">
        <h3 className="font-semibold text-lg mb-2">
          Retiro en Santiago
        </h3>
        <p className="text-sm text-[#6f6a61] dark:text-zinc-500 leading-relaxed">
          Disponible previa coordinación para compras confirmadas.
        </p>
      </div>

      <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[#f4f1ea]/70 dark:bg-black/30 p-6">
        <h3 className="font-semibold text-lg mb-2">
          Ventas al mayor
        </h3>
        <p className="text-sm text-[#6f6a61] dark:text-zinc-500 leading-relaxed">
          Stock mayorista disponible para tiendas, técnicos y revendedores.
        </p>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}