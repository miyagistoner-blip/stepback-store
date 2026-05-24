export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 absolute top-0 left-0 backdrop-blur-md bg-black/30 border-b border-white/10">
      
      <h1 className="text-xl font-bold tracking-widest">
        STEPBACK
      </h1>

      <div className="flex gap-6 text-sm text-zinc-300">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Instagram</a>
      </div>

    </nav>
  );
}