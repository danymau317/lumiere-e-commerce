import { Link } from "react-router-dom";

import CategoryItems from "./CategoryItems";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatchType, RootStateType } from "../../../../store/store";
import { useEffect } from "react";
import { fetchProducts } from "../../../../store/actions/productAction";

type CategoryProps = {};

export default function Category({}: CategoryProps) {
  /*
  categorias
  "beauty" "fragrances" "furniture" "groceries" "home-decoration" "kitchen-accessories" "laptops" "mens-shirts" "mens-shoes" "mens-watches" "mobile-accessories"
  */

  const { products } = useSelector((store: RootStateType) => store.products);
  const dispatch: AppDispatchType = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);

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

      {
        //!Crear repo en github y hacer ui de cards de categorias
      }

      <CategoryItems />
    </section>
  );
}
