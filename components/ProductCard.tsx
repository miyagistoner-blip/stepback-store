import Image from "next/image";
import Link from "next/link";

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
      className="group block rounded-[2rem] border border-black/10 dark:border-white/10 bg-[#fbfaf6]/70 dark:bg-zinc-950/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/20 hover:shadow-[0_24px_80px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_24px_80px_rgba(249,115,22,0.08)]"
    >
      <div className="relative h-64 overflow-hidden rounded-[1.5rem] bg-[#eee9df] dark:bg-zinc-900 mb-5">
        <div className="absolute top-4 left-4 z-10">
          <span className="rounded-full border border-black/10 dark:border-white/10 bg-[#fbfaf6]/80 dark:bg-black/40 px-3 py-1 text-xs text-[#6f6a61] dark:text-zinc-300 backdrop-blur">
            Disponible
          </span>
        </div>

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="px-1">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#8a8377] dark:text-zinc-500">
          STEPBACK SELECTED
        </p>

        <h3 className="text-xl font-semibold tracking-tight text-black dark:text-white">
          {title}
        </h3>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-[#6f6a61] dark:text-zinc-500">
              Desde
            </p>

            <p className="text-2xl font-semibold text-black dark:text-white">
              {price}
            </p>
          </div>

          <span className="rounded-full border border-black/10 dark:border-white/10 px-4 py-2 text-sm text-black dark:text-white transition group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
            Ver detalle
          </span>
        </div>
      </div>
    </Link>
  );
}