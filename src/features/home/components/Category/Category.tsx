import { Link } from "react-router-dom";

import CategoryItems from "./CategoryItems";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatchType, RootStateType } from "../../../../store/store";
import { useEffect } from "react";
import { fetchProducts } from "../../../../store/actions/productAction";
import type { ProductType } from "../../../../store/types/productsType";

import { categoryInfo } from "../../../../constants/categoryNames";

type CategoryProps = {};

export default function Category({}: CategoryProps) {
  /*
  categorias
  "beauty" "fragrances" "furniture" "groceries" "home-decoration" "kitchen-accessories" "laptops" "mens-shirts" "mens-shoes" "mens-watches" "mobile-accessories"
  */

  const { products } = useSelector((store: RootStateType) => store.products);
  const dispatch: AppDispatchType = useDispatch();

  const groupedProducts = products.reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }

      acc[product.category].push(product);

      return acc;
    },
    {} as Record<string, ProductType[]>,
  );

  const categories = Object.entries(groupedProducts).map(
    ([category, products]) => ({
      img: products[0].thumbnail,
      quantity: products.length,
      title: categoryInfo[category]?.title ?? category,
      description: categoryInfo[category]?.description ?? category,
    }),
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(groupedProducts);

  return (
    <section className="px-5 lg:px-10 border-2">
      <header>
        <h2 className="text-2xl uppercase tracking-widest text-title-secondary font-light mb-1">
          Categorías
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <h2 className="font-playfair text-3xl text-title-primary font-semibold">
            Explora por
          </h2>
          <h2 className="font-playfair text-3xl text-title-primary font-semibold italic mb-2">
            categoría
          </h2>
          <Link to="" className="flex items-center gap-2">
            Ver todas las Categorias
            <span className="material-symbols-outlined">arrow_outward</span>
          </Link>
        </div>
      </header>

      <CategoryItems categories={categories} />
    </section>
  );
}
