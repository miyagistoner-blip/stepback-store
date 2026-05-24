import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

export default function Home() {
  const products = [
{
  title: "Darkflash DS900M",
  price: "$55.000",
  image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop",
},
  {
  title: "Darkflash C275P",
  price: "$40.000",
  image: "https://www.darkflash.com/upload/product/20241011/1728635315.png",
},
  {
  title: "Fuente 650W 80 Plus Bronze",
  price: "$45.000",
  image: "https://www.darkflash.com/upload/product/20230809/1691562984.png",
},
  {
  title: "Teclado Z68 DarkFlash",
  price: "$48.000",
  image: "https://www.darkflash.com/upload/product/20231129/1701243273.png",
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

          <button className="border border-white/10 hover:border-white/20 transition px-8 py-4 rounded-2xl font-semibold">
            Instagram
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
  />
))}

  </div>

</section>
    </main>
  );
}