export type CategoryItemProps = {
  className?: string;
  img: string;
  quantity: number;
  title: string;
  description: string;
};

export default function CategoryItem({
  className,
  img,
  quantity,
  title,
  description,
}: CategoryItemProps) {
  return (
    <article
      className={`relative rounded-lg h-[35vh] p-5 bg-center bg-cover flex flex-col justify-end gap-1 ${className}`}
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
      <span className="material-symbols-outlined absolute top-5 left-56 rounded-md bg-gray-200">
        arrow_outward
      </span>
      <h2 className="font-playfair text-text-white-primary text-2xl">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h2>
      <p className="text-sm text-text-gray-primary font-semibold">
        {description}
      </p>
      <h2 className="text-sm text-text-gray-primary">{quantity} Productos</h2>
    </article>
  );
}
