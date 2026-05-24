import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
type ProductCardProps = {
  title: string;
  price: string;
  image: string;
  slug: string;
};

export default function ProductCard({
  title,
  price,
  image,
  slug,
}: ProductCardProps) {
  return (
    <Link
  href={`/products/${slug}`}
  className="group bg-zinc-950 border border-white/10 rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] block"
>
      
      <div className="relative bg-zinc-900 rounded-2xl h-56 mb-5 flex items-center justify-center overflow-hidden">
        
        <div className="absolute top-4 left-4">
          <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs px-3 py-1 rounded-full">
            Disponible
          </span>
        </div>

        <Image
  src={image}
  alt={title}
  fill
  className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
/>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-orange-500/10 to-transparent" />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="text-2xl font-bold text-orange-400">
          {price}
        </p>

        <p className="text-sm text-zinc-500">
          Stock mayorista disponible
        </p>
      </div>

      <button
  className="mt-6 flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 transition-all duration-300 py-3 rounded-2xl font-semibold"
>
  <FaWhatsapp className="text-xl" />
  Hablar por WhatsApp
</button>
    </Link>
  );
}