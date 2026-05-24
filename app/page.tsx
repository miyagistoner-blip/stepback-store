import ProductCard 
from "../components/ProductCard";
import Navbar from "../components/Navbar";

export default function Home() {
  const products = [
  {
    title: "Darkflash DS900M",
    price: "$55.000",
    image: "/products/ds900m.png",
    slug: "ds900m",
  },

  {
    title: "Darkflash C275P",
    price: "$40.000",
    image: "/products/c275p.png",
    slug: "c275p",
  },

  {
    title: "Fuente 650W 80 Plus Bronze",
    price: "$45.000",
    image: "/products/psu650.png",
    slug: "psu650",
  },
];

  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">

      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full" />

      <Navbar />

      <section className="flex flex-col items-center justify-center h-screen text-center px-6 relative z-10">

        <p className="uppercase tracking-[0.3em] text-orange-400 text-sm mb-4">
          STEPBACK STORE
        </p>

        <h1 className="text-7xl font-black tracking-tight max-w-4xl leading-none">
          Hardware y setups con estética premium.
        </h1>

        <p className="text-zinc-400 mt-6 max-w-2xl text-lg">
          Cases, periféricos y productos seleccionados para setups modernos y minimalistas.
        </p>

        <div className="flex gap-4 mt-10">

          <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-2xl font-semibold">
            Ver productos
          </button>

        

        </div>

      </section>
<section className="px-6 pb-24 relative z-10">

  <h2 className="text-4xl font-bold mb-10">
    Productos destacados
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {products.map((product) => (
  <ProductCard
    key={product.title}
    title={product.title}
    price={product.price}
    image={product.image}
    slug={product.slug}
  />
))}

  </div>

</section>
    </main>
  );
}