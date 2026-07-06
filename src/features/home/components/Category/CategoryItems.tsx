import CategoryItem from "./CategoryItem";
import type { CategoryItemProps } from "./CategoryItem";
type CategoryItemsProps = {
  categories?: CategoryItemProps[];
};

export default function CategoryItems({ categories }: CategoryItemsProps) {
  return (
    <section className="grid grid-cols-1 grid-rows-2 gap-10">
      {categories &&
        categories.map(
          (category, index) =>
            index <= 3 && (
              <CategoryItem
                key={category.title}
                img={category.img}
                quantity={category.quantity}
                title={category.title}
                description={category.description}
              />
            ),
        )}
    </section>
  );
}
