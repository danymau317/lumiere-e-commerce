import CategoryItem from "./CategoryItem";
import type { CategoryItemProps } from "./CategoryItem";
type CategoryItemsProps = {
  categories?: CategoryItemProps[];
};

export default function CategoryItems({ categories }: CategoryItemsProps) {
  return (
    <section>
      {categories &&
        categories.map((category) => (
          <CategoryItem
            imgPath={category.imgPath}
            quantity={category.quantity}
            title={category.title}
            description={category.description}
          />
        ))}
    </section>
  );
}
