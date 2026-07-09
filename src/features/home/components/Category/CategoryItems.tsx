import CategoryItem from "./CategoryItem";
import type { CategoryItemProps } from "./CategoryItem";
type CategoryItemsProps = {
  categories: CategoryItemProps[];
  limitAll?: boolean;
  limit: number;
};

export default function CategoryItems({
  categories,
  limitAll,
  limit,
}: CategoryItemsProps) {
  return (
    <section className="grid grid-cols-1 grid-rows-2 gap-10 sm:grid-rows-2 sm:grid-cols-2 sm:gap-5 lg:grid-rows-1 lg:grid-cols-4 lg:gap-8">
      {limitAll
        ? categories.map((category) => (
            <CategoryItem
              key={category.title}
              img={category.img}
              quantity={category.quantity}
              title={category.title}
              description={category.description}
            />
          ))
        : categories.map(
            (category, index) =>
              index <= limit && (
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
