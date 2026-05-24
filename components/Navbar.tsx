import { FaInstagram } from "react-icons/fa";
export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 absolute top-0 left-0 z-50 backdrop-blur-md">
      
      <h1 className="text-xl font-bold tracking-widest">
        STEPBACK
      </h1>

      <div className="flex gap-6 text-sm text-zinc-300 items-center">
        
        <a
          href="#"
          className="hover:text-orange-400 transition"
        >
          Inicio
        </a>

        <a
  href="https://instagram.com/stepback6store"
  target="_blank"
  className="flex items-center gap-2 bg-zinc-900 border border-white/10 hover:border-orange-500/40 px-4 py-2 rounded-2xl transition-all duration-300 hover:-translate-y-1"
>
  <FaInstagram className="text-orange-400 text-lg" />
  @stepback6store
</a>

      </div>
    </nav>
  );
}