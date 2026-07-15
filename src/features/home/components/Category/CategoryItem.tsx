import { Link } from "react-router-dom";

export type CategoryItemProps = {
  className?: string;
  img: string;
  quantity: number;
  title: string;
  description: string;
  path: string;
};

export default function CategoryItem({
  className,
  img,
  quantity,
  title,
  description,
  path,
}: CategoryItemProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-lg h-[35vh] p-5 bg-center bg-cover flex flex-col justify-end gap-1 cursor-pointer transition-transform duration-500 hover:scale-105 ${className}`}
      style={{
        backgroundImage: `linear-gradient(
      to bottom,
      rgba(222,218,209, 0.05) 5%,
      rgba(186,181,173, 0.15) 25%,
      rgba(69,60,56, 0.95) 100%
    ),
    url(${img})`,
      }}
    >
      <Link
        to={`/categories/${path}`}
        className="absolute inset-0 flex flex-col justify-end p-5"
      >
        <span className="material-symbols-outlined absolute top-5 right-10 opacity-0 rounded-md bg-[222,218,209] translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          arrow_outward
        </span>
        <h2 className="font-playfair text-text-white-primary text-2xl">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </h2>
        <p className="text-sm text-text-gray-primary font-semibold">
          {description}
        </p>
        <h2 className="text-sm text-text-gray-primary">{quantity} Productos</h2>
      </Link>
    </article>
  );
}
