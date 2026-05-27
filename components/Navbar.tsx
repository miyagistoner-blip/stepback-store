import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-8 py-5 backdrop-blur-xl bg-[#f4f1ea]/70 dark:bg-black/50 border-b border-black/5 dark:border-white/5">
      <Link
        href="/#inicio"
        className="text-xl font-bold tracking-widest text-black dark:text-white"
      >
        STEPBACK
      </Link>

      <div className="flex gap-4 md:gap-6 text-sm items-center">
        <Link
          href="/#productos"
          className="text-[#6f6a61] dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-400 transition"
        >
          Colección
        </Link>

        <Link
          href="/#envios"
          className="text-[#6f6a61] dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-400 transition"
        >
          Envíos
        </Link>

        <a
  href="https://www.facebook.com/marketplace/profile/100095529813059/?ref=permalink&mibextid=6ojiHh"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:flex items-center gap-2 bg-[#fbfaf6]/70 dark:bg-zinc-900/80 border border-black/10 dark:border-white/10 hover:border-orange-500/40 px-4 py-2 rounded-2xl transition-all duration-300 hover:-translate-y-1 text-black dark:text-white"
>
  <FaFacebook className="text-orange-500 dark:text-orange-400 text-lg" />
  Marketplace
</a>

        <a
          href="https://instagram.com/stepback6store"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#fbfaf6]/70 dark:bg-zinc-900/80 border border-black/10 dark:border-white/10 hover:border-orange-500/40 px-4 py-2 rounded-2xl transition-all duration-300 hover:-translate-y-1 text-black dark:text-white"
        >
          <FaInstagram className="text-orange-500 dark:text-orange-400 text-lg" />
          <span className="hidden sm:inline">@stepback6store</span>
        </a>
      </div>
    </nav>
  );
}