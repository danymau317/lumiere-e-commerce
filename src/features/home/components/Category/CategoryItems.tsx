import CategoryItem from "./CategoryItem";
import type { CategoryItemProps } from "./CategoryItem";
type CategoryItemsProps = {
  categories: CategoryItemProps[];
  limit?: number;
};

export default function CategoryItems({
  categories,
  limit,
}: CategoryItemsProps) {
  const visibleCategories = limit ? categories.slice(0, limit) : categories;

  return (
    <section className="grid grid-cols-1 grid-rows-2 gap-10 sm:grid-rows-2 sm:grid-cols-2 sm:gap-5 lg:grid-rows-1 lg:grid-cols-4 lg:gap-8">
      {visibleCategories.map((category) => (
        <CategoryItem key={category.title} {...category} />
      ))}
    </section>
  );
}
