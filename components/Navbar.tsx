import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "56936455845";

export default function Navbar() {
  const whatsappMessage =
    "Hola STEPBACK, quiero consultar por productos disponibles";

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f5f2ea]/80 backdrop-blur-xl dark:border-white/10 dark:bg-black/75">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <div className="group relative">
          <Link
            href="/#inicio"
            className="block text-xl font-black tracking-[0.18em] text-black transition hover:text-orange-500 dark:text-white dark:hover:text-orange-400 md:text-2xl"
          >
            STEPBACK
          </Link>

          <div className="absolute left-0 top-full hidden w-56 pt-3 group-hover:block group-focus-within:block">
            <div className="rounded-3xl border border-black/10 bg-[#f5f2ea]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-black/95 dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
  <Link
    href="/#inicio"
    className="block rounded-2xl px-4 py-3 text-sm font-bold text-black/65 transition hover:bg-black/5 hover:text-orange-500 dark:text-white/65 dark:hover:bg-white/10 dark:hover:text-orange-400"
  >
    Inicio
  </Link>

  <Link
    href="/#productos"
    className="block rounded-2xl px-4 py-3 text-sm font-bold text-black/65 transition hover:bg-black/5 hover:text-orange-500 dark:text-white/65 dark:hover:bg-white/10 dark:hover:text-orange-400"
  >
    Colección
  </Link>

  <Link
    href="/#envios"
    className="block rounded-2xl px-4 py-3 text-sm font-bold text-black/65 transition hover:bg-black/5 hover:text-orange-500 dark:text-white/65 dark:hover:bg-white/10 dark:hover:text-orange-400"
  >
    Envíos
  </Link>
</div>
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-green-400"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp
          </a>

          <a
            href="https://www.facebook.com/marketplace/profile/100095529813059/?ref=permalink&mibextid=6ojiHh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-5 py-2.5 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:border-orange-500/40 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            <FaFacebook className="text-lg text-orange-500" />
            Marketplace
          </a>

          <a
            href="https://www.instagram.com/stepback6store?utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-5 py-2.5 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:border-orange-500/40 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            <FaInstagram className="text-lg text-orange-500" />
            Instagram
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp STEPBACK"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white transition hover:bg-green-400"
          >
            <FaWhatsapp className="text-lg" />
          </a>

          <a
            href="https://www.facebook.com/marketplace/profile/100095529813059/?ref=permalink&mibextid=6ojiHh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Marketplace STEPBACK"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-black transition hover:border-orange-500/40 dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <FaFacebook className="text-lg text-orange-500" />
          </a>

          <a
            href="https://www.instagram.com/stepback6store?utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram STEPBACK"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-black transition hover:border-orange-500/40 dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <FaInstagram className="text-lg text-orange-500" />
          </a>
        </div>
      </div>
    </nav>
  );
}