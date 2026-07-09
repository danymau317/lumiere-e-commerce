import type { ProductType } from "@/store/types/productsType";
import { categoryInfo } from "@/constants/categoryInfo";

export function getGroupProducts(products: ProductType[]) {
  return products.reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }

      acc[product.category].push(product);

      return acc;
    },
    {} as Record<string, ProductType[]>,
  );
}

export function getCategoriesProducts(products: ProductType[]) {
  const groupedProducts = getGroupProducts(products);
  return Object.entries(groupedProducts).map(([category, products]) => ({
    img: products[0].thumbnail,
    quantity: products.length,
    title: categoryInfo[category]?.title ?? category,
    description: categoryInfo[category]?.description ?? category,
  }));
}
