import Link from "next/link";
import { notFound } from "next/navigation";

const whatsappNumber = "56936455845";

const products = {
  ds900m: {
    name: "Darkflash DS900M",
    price: "$55.000",
    image: "/products/ds900m.png",
    category: "Case Micro-ATX",
    description:
      "Gabinete panorámico compacto de Darkflash, ideal para setups modernos con estética premium. Incluye 6 ventiladores L17 ARGB.",
    specs: [
      "Formato M-ATX / ITX",
      "Incluye 6 ventiladores L17 ARGB",
      "Diseño panorámico",
      "Panel lateral de vidrio templado",
      "Ideal para setups gamer compactos",
    ],
    keySpecs: [
      ["Formato", "M-ATX / ITX"],
      ["Medidas", "434 × 218 × 414 mm"],
      ["GPU máxima", "Hasta 425 mm"],
      ["Cooler CPU", "Hasta 170 mm"],
      ["Ventiladores", "6× L17 ARGB incluidos"],
      ["Radiador", "Hasta 360 mm superior"],
      ["Material", "0.5 mm SPCC + vidrio templado"],
      ["Bahías", "1 SSD / 2 HDD"],
    ],
    fullSpecs: [
      ["Formato", "M-ATX / ITX"],
      ["Medidas del case", "434 × 218 × 414 mm"],
      ["Medidas de caja", "455 × 280 × 515 mm"],
      ["Material", "0.5 mm SPCC + vidrio templado"],
      ["GPU máxima", "Hasta 425 mm"],
      ["Cooler CPU máximo", "Hasta 170 mm"],
      ["Slots PCIe", "5"],
      ["Bahías SSD / HDD", "1 / 2"],
      ["Ventiladores superiores", "3×120 mm / 2×140 mm"],
      ["Ventiladores laterales", "2×120 mm"],
      ["Ventilador trasero", "1×120 mm"],
      ["Ventiladores inferiores", "3×120 mm"],
      ["Radiador superior", "240 / 360 mm"],
      ["Radiador lateral", "240 mm"],
    ],
  },

  c275p: {
    name: "Darkflash C275P",
    price: "$40.000",
    image: "/products/c275p.png",
    category: "Case M-ATX",
    description:
      "Gabinete compacto de doble cámara, elegante y limpio, pensado para setups modernos. Incluye 3 ventiladores L17 y ofrece una excelente presencia visual.",
    specs: [
      "Formato M-ATX / ITX",
      "Incluye 3 ventiladores L17",
      "Diseño compacto de doble cámara",
      "Panel de vidrio templado",
      "Buen flujo de aire",
    ],
    keySpecs: [
      ["Formato", "M-ATX / ITX"],
      ["Medidas", "333 × 275 × 323 mm"],
      ["GPU máxima", "Hasta 325 mm"],
      ["Cooler CPU", "Hasta 155 mm"],
      ["Ventiladores", "3× L17 incluidos"],
      ["Radiador", "Hasta 240 mm"],
      ["Material", "0.5 mm SPCC + vidrio templado"],
      ["Bahías", "2 SSD / 1 HDD"],
    ],
    fullSpecs: [
      ["Formato", "M-ATX / ITX"],
      ["Medidas del chasis", "330 × 275 × 305 mm"],
      ["Medidas totales", "333 × 275 × 323 mm"],
      ["Medidas de caja", "367 × 337 × 410 mm"],
      ["Material", "0.5 mm SPCC + vidrio templado"],
      ["GPU máxima", "Hasta 325 mm"],
      ["Cooler CPU máximo", "Hasta 155 mm"],
      ["Slots PCIe", "5"],
      ["Bahías SSD / HDD", "2 / 1"],
      ["Ventiladores superiores", "2×120 mm"],
      ["Ventiladores laterales", "2×120 mm"],
      ["Ventilador trasero", "1×120 mm"],
      ["Ventiladores inferiores", "2×120 mm"],
      ["Radiador lateral", "240 mm"],
      ["Radiador inferior", "240 mm"],
    ],
  },

  psu650w: {
    name: "Darkflash EMT 650W Bronze",
    price: "$45.000",
    image: "/products/psu650w.png",
    category: "Fuente de poder",
    description:
      "Fuente de poder Darkflash EMT 650W Bronze, recomendada para PCs gamer de entrada y gama media. Buena opción para equipos equilibrados con consumo moderado.",
    specs: [
      "650W",
      "Certificación 80 Plus Bronze",
      "No modular",
      "Ventilador FDB",
      "Condensadores japoneses 105°C",
    ],
    keySpecs: [
      ["Potencia", "650W"],
      ["Certificación", "80 Plus Bronze"],
      ["Formato", "ATX / no modular"],
      ["Ventilador", "FDB"],
      ["Protecciones", "OVP / OCP / OPP / SCP / OTP / UVP"],
      ["Medidas", "140 × 150 × 86 mm"],
    ],
    fullSpecs: [
      ["Potencia", "650W"],
      ["Certificación", "80 Plus Bronze"],
      ["Formato", "ATX / no modular"],
      ["Medidas", "140 × 150 × 86 mm"],
      ["Ventilador", "FDB"],
      ["Voltaje de entrada", "100–240V"],
      ["Frecuencia", "50–60Hz"],
      ["Condensadores", "Japoneses 105°C"],
      ["PFC", "Activo 98%"],
      ["Peso", "≈1.86 kg"],
      ["Protecciones", "OVP / OCP / OPP / SCP / OTP / UVP"],
    ],
  },
    g271qg: {
    name: "Darkflash G271QG",
    price: "$120.000",
    image: "/products/g271qg.png",
    category: "Monitor gamer 27”",
    description:
      "Monitor gamer Darkflash G271QG de 27 pulgadas, resolución 2K QHD y tasa de refresco de 180Hz. Ideal para setups gamer modernos, juegos competitivos y uso diario con excelente nitidez.",
    specs: [
      "27 pulgadas",
      "Resolución 2K QHD 2560×1440",
      "Panel IPS",
      "180Hz de refresco",
      "Compatible con montaje VESA 75×75 mm",
    ],
    keySpecs: [
      ["Tamaño", "27 pulgadas"],
      ["Resolución", "2560 × 1440 QHD"],
      ["Panel", "IPS"],
      ["Frecuencia", "180Hz"],
      ["Color", "99% sRGB / 75% NTSC"],
      ["Ángulo de visión", "178° / 178°"],
      ["Montaje", "VESA 75×75 mm"],
      ["Puertos", "2× DisplayPort / 2× HDMI"],
    ],
    fullSpecs: [
      ["Tamaño de panel", "27 pulgadas"],
      ["Tipo de panel", "IPS"],
      ["Resolución", "2560 × 1440"],
      ["Tasa de refresco", "180Hz"],
      ["Relación de aspecto", "16:9"],
      ["Brillo", "250 nits"],
      ["Contraste dinámico", "100000000:1"],
      ["Ángulo de visión", "178° horizontal / 178° vertical"],
      ["Gama de color", "99% sRGB / 75% NTSC"],
      ["Colores", "16.7 millones"],
      ["Cuidado visual", "Low Blue Light"],
      ["Montaje VESA", "75 × 75 mm"],
      ["Puertos de video", "2× DisplayPort / 2× HDMI"],
    ],
  },
};

type ProductSlug = keyof typeof products;

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products[slug as ProductSlug];

  if (!product) {
    notFound();
  }

  const whatsappMessage = `Hola STEPBACK, quiero consultar por el ${product.name}`;

  return (
    <main className="min-h-screen bg-[#f5f2ea] text-black dark:bg-black dark:text-white">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f5f2ea]/80 backdrop-blur-xl dark:border-white/10 dark:bg-black/75">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-black tracking-[0.18em]">
            STEPBACK
          </Link>

          <Link
            href="/"
            className="rounded-full border border-black/10 bg-black/5 px-5 py-2 text-sm font-bold text-black/70 transition hover:bg-black/10 hover:text-black dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
          >
            Volver a colección
          </Link>
        </div>
      </nav>

      <section className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-32 pb-14 lg:grid-cols-2 lg:items-start">
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

          <p className="mt-7 text-4xl font-black">{product.price}</p>

          <p className="mt-8 max-w-2xl text-base leading-8 text-black/55 dark:text-white/55">
            {product.description}
          </p>

          <div className="mt-10">
            <h2 className="mb-5 text-xl font-black">Características</h2>

            <div className="grid gap-3">
              {product.specs.map((spec) => (
                <div
                  key={spec}
                  className="rounded-2xl border border-black/10 bg-white/50 px-5 py-4 text-sm text-black/65 transition hover:border-orange-500/30 hover:bg-white/80 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70 dark:hover:bg-white/[0.05]"
                >
                  {spec}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
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
              className="rounded-2xl bg-orange-500 px-8 py-4 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-400"
            >
              Ver en Marketplace
            </a>
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
          {product.keySpecs.map(([label, value]) => (
            <div
              key={label}
              className="rounded-3xl border border-black/10 bg-white/50 p-5 transition hover:border-orange-500/30 hover:bg-white/80 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40 dark:text-white/35">
                {label}
              </p>
              <p className="mt-4 text-lg font-black leading-snug text-black dark:text-white">
                {value}
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
            {product.fullSpecs.map(([label, value]) => (
              <div
                key={label}
                className="rounded-3xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-black/30"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40 dark:text-white/35">
                  {label}
                </p>
                <p className="mt-4 text-base font-bold leading-snug text-black/75 dark:text-white/85">
                  {value}
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
    </main>
  );
}