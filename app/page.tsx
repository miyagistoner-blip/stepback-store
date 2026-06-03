const whatsappNumber = "56936455845";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.46 0 .1 5.36.1 11.96c0 2.1.55 4.16 1.6 5.98L0 24l6.22-1.63a11.93 11.93 0 0 0 5.84 1.49h.01c6.6 0 11.96-5.36 11.96-11.96 0-3.2-1.25-6.2-3.51-8.42ZM12.07 21.84h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.69.97.98-3.6-.23-.37a9.9 9.9 0 1 1 8.35 4.59Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.8A4.2 4.2 0 1 1 12 16.2 4.2 4.2 0 0 1 12 7.8Zm0 2A2.2 2.2 0 1 0 12 14.2 2.2 2.2 0 0 0 12 9.8ZM17.25 6.4a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05Z" />
  </svg>
);

const products = [
  {
    name: "Darkflash DS900M",
    price: "$55.000",
    image: "/products/ds900m.png",
    href: "/products/ds900m",
    tag: "6 ventiladores incluidos",
  },
  {
    name: "Darkflash C275P",
    price: "$40.000",
    image: "/products/c275p.png",
    href: "/products/c275p",
    tag: "Compacto y elegante",
  },
  {
    name: "Darkflash EMT 650W Bronze",
    price: "$45.000",
    image: "/products/psu650w.png",
    href: "/products/psu650w",
    tag: "80 Plus Bronze",
  },
];

export default function Home() {
  const whatsappMessage = "Hola STEPBACK, quiero consultar por productos disponibles";

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-black tracking-[0.18em]">
            STEPBACK
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <a href="#productos" className="transition hover:text-white">
              Productos
            </a>

            <a href="#envios" className="transition hover:text-white">
              Envíos
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 font-semibold text-white transition hover:bg-white/10"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>

            <a
              href="https://www.facebook.com/marketplace/profile/100095529813059/?ref=permalink&mibextid=6ojiHh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 font-semibold text-white transition hover:bg-white/10"
            >
              <FacebookIcon />
              Marketplace
            </a>

            <a
              href="https://www.instagram.com/stepback6store?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 font-semibold text-white transition hover:bg-white/10"
            >
              <InstagramIcon />
              Instagram
            </a>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden px-6 pt-32 pb-20">
        <div className="absolute left-1/2 top-16 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_38%)]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.55em] text-orange-500">
            STEPBACK STORE
          </p>

          <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-8xl">
            Hardware y setups con estética premium.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/55 md:text-lg">
            Cases, periféricos y productos seleccionados para setups modernos,
            limpios y minimalistas.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#productos"
              className="rounded-2xl bg-orange-500 px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-400"
            >
              Ver productos
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Consultar por WhatsApp
            </a>
          </div>
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

          <p className="max-w-xl text-sm leading-7 text-white/45">
            Hardware gamer elegido por estética, rendimiento y disponibilidad.
            Venta al detalle, al mayor y envíos coordinados a todo Chile.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.href}
              className="group block rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-orange-500/35 hover:bg-white/[0.05]"
            >
              <div className="relative flex h-[260px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-white/[0.06] p-8">
                <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-white/75">
                  Disponible
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="px-1 pb-1 pt-6">
                <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/30">
                  {product.tag}
                </p>

                <h3 className="text-xl font-black tracking-[-0.03em]">
                  {product.name}
                </h3>

                <div className="mt-7 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm text-white/45">Desde</p>
                    <p className="mt-1 text-2xl font-black">{product.price}</p>
                  </div>

                  <span className="rounded-full border border-white/10 px-5 py-2 text-sm font-bold text-white transition group-hover:border-orange-500/50 group-hover:bg-orange-500">
                    Ver detalle
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="envios" className="mx-auto max-w-6xl px-6 py-20">
  <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-orange-500">
      Envíos, retiros y compras
    </p>

    <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-[-0.05em] md:text-5xl">
      Compra simple, despacho coordinado.
    </h2>

    <p className="mt-7 max-w-4xl text-base leading-8 text-white/55">
      Realizamos envíos a todo Chile y coordinamos cada compra directamente por
      WhatsApp. También contamos con disponibilidad para ventas al detalle y al
      mayor.
    </p>

    <div className="mt-10 grid gap-4 md:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
          Despachos
        </p>

        <h3 className="text-lg font-black">Envíos a todo Chile</h3>

        <p className="mt-3 text-sm leading-6 text-white/45">
          Coordinamos el despacho según la ciudad, comuna y producto
          seleccionado.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
          Próximamente
        </p>

        <h3 className="text-lg font-black">Tienda física</h3>

        <p className="mt-3 text-sm leading-6 text-white/45">
          Alonso de Ovalle 1060, Local 139, Santiago Centro.
        </p>

        <p className="mt-3 text-xs leading-5 text-white/35">
          Local en preparación. La atención presencial se anunciará cuando esté
          operativo.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
          Mayoristas
        </p>

        <h3 className="text-lg font-black">Retiros al mayor</h3>

        <p className="mt-3 text-sm leading-6 text-white/45">
          Tarapacá 1028, Santiago Centro. Disponible para compras mayoristas y
          retiros coordinados.
        </p>

        <p className="mt-3 text-xs leading-5 text-white/35">
          Siempre con coordinación previa por WhatsApp.
        </p>
      </div>
    </div>

    <div className="mt-10 rounded-3xl border border-white/10 bg-black/40 p-6">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
            Atención directa
          </p>

          <h3 className="mt-3 text-2xl font-black tracking-[-0.03em]">
            Coordina disponibilidad, retiro o despacho.
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45">
            Para asegurar stock, horarios y método de entrega, todas las compras
            se coordinan previamente por WhatsApp.
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
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Selección
            </p>

            <h3 className="text-lg font-black">Productos elegidos</h3>

            <p className="mt-3 text-sm leading-6 text-white/45">
              Hardware seleccionado por estética, compatibilidad y presencia
              para setups modernos.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Atención
            </p>

            <h3 className="text-lg font-black">Compra directa</h3>

            <p className="mt-3 text-sm leading-6 text-white/45">
              Coordinación rápida por WhatsApp para disponibilidad, retiro,
              despacho o ventas al mayor.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Cobertura
            </p>

            <h3 className="text-lg font-black">Envíos y retiros</h3>

            <p className="mt-3 text-sm leading-6 text-white/45">
              Envíos a todo Chile y retiros coordinados en Santiago Centro
              según disponibilidad.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Mayoristas
            </p>

            <h3 className="text-lg font-black">Stock para reventa</h3>

            <p className="mt-3 text-sm leading-6 text-white/45">
              Disponibilidad para técnicos, tiendas, armadores y revendedores.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-black tracking-[0.18em] text-white">
              STEPBACK
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">
              Hardware gamer, productos seleccionados y atención directa para
              setups modernos en Chile.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Contacto
            </p>

            <div className="flex flex-col gap-3 text-sm text-white/45">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp: +56 9 3645 5845
              </a>

              <a
                href="https://www.facebook.com/marketplace/profile/100095529813059/?ref=permalink&mibextid=6ojiHh"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Marketplace
              </a>

              <a
                href="https://www.instagram.com/stepback6store?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Ubicación
            </p>

            <div className="flex flex-col gap-3 text-sm leading-6 text-white/45">
              <p>
                Próximamente tienda física:
                <br />
                Alonso de Ovalle 1060, Local 139.
              </p>

              <p>
                Retiros al mayor:
                <br />
                Tarapacá 1028, Santiago Centro.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Compra
            </p>

            <div className="flex flex-col gap-3 text-sm leading-6 text-white/45">
              <p>Envíos a todo Chile.</p>
              <p>Ventas al detalle y al mayor.</p>
              <p>Todo retiro requiere coordinación previa.</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1600px] flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/30 md:flex-row">
          <p>© 2026 STEPBACK Store</p>
          <p>Hardware gamer · Santiago Centro, Chile</p>
        </div>
      </footer>
    </main>
  );
}