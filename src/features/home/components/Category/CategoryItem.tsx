export type CategoryItemProps = {
  imgPath: string;
  quantity: number;
  title: string;
  description: string;
};

export default function CategoryItem({
  imgPath,
  quantity,
  title,
  description,
}: CategoryItemProps) {
  return (
    <article className={`bg-[url(${imgPath})]`}>
      <h2>{quantity} Productos</h2>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}
