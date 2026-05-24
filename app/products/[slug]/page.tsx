import Image from "next/image";

const products = {
  ds900m: {
    name: "Darkflash DS900M",
    image: "/products/ds900m.png",
    price: "$55.000",
  },

  c275p: {
    name: "Darkflash C275P",
    image: "/products/c275p.png",
    price: "$40.000",
  },

  psu650: {
    name: "Fuente 650W 80 Plus Bronze",
    image: "/products/psu650.png",
    price: "$45.000",
  },
};

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {

  const { slug } = await params;

  const product =
    products[slug as keyof typeof products];

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Producto no encontrado
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        <div className="relative bg-zinc-900 rounded-3xl h-[500px] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-10"
          />
        </div>

        <div>

          <p className="text-orange-400 uppercase tracking-[0.3em] text-sm mb-4">
            STEPBACK STORE
          </p>

          <h1 className="text-5xl font-black mb-6">
            {product.name}
          </h1>

          <p className="text-3xl font-bold text-orange-400 mb-8">
            {product.price}
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            Producto premium disponible en STEPBACK STORE.
            Stock limitado y disponibilidad mayorista.
          </p>

          <div className="space-y-4 text-zinc-300 mb-10">
            <p>• Producto nuevo</p>
            <p>• Garantía de funcionamiento</p>
            <p>• Disponible en Chile 🇨🇱</p>
            <p>• Atención directa por WhatsApp</p>
          </div>

          <button className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-2xl font-semibold">
            Hablar por WhatsApp
          </button>

        </div>

      </div>

    </main>
  );
}