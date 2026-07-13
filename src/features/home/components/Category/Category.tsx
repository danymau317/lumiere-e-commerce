import { Link } from "react-router-dom";

import CategoryItems from "./CategoryItems";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatchType, RootStateType } from "@/store/store";
import { useEffect } from "react";
import { fetchProducts } from "@/store/actions/productAction";

import { getCategoriesProducts } from "@/utils/products/formatProductsUtils";

type CategoryProps = {};

export default function Category({}: CategoryProps) {
  /*
  categorias
  "beauty" "fragrances" "furniture" "groceries" "home-decoration" "kitchen-accessories" "laptops" "mens-shirts" "mens-shoes" "mens-watches" "mobile-accessories"
  */

  const { products } = useSelector((store: RootStateType) => store.products);
  const dispatch: AppDispatchType = useDispatch();

  const categories = getCategoriesProducts(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="px-5 lg:p-10">
      <header className="lg:mb-10">
        <h2 className="text-2xl uppercase tracking-widest text-title-secondary font-light mb-1">
          Categorías
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <h2 className="font-playfair text-3xl text-title-primary font-semibold mb-2">
            Explora por <span className="italic">categoría</span>
          </h2>

          <Link
            to="categories"
            className="flex items-center gap-2 text-lg transition-colors duration-500 hover:text-title-secondary"
          >
            Ver todas las Categorias
            <span className="material-symbols-outlined">arrow_outward</span>
          </Link>
        </div>
      </header>

      <CategoryItems categories={categories} limit={4} />
    </section>
  );
}
