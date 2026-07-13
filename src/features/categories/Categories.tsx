import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "@/components/ui/BreadCrumb";
import NavBar from "@/components/Layout/NavBar/NavBar";
import Section from "@/components/ui/Section";
import type { AppDispatchType, RootStateType } from "@/store/store";
import { useEffect } from "react";
import { fetchProducts } from "@/store/actions/productAction";
import CategoryItems from "../home/components/Category/CategoryItems";
import { getCategoriesProducts } from "@/utils/products/formatProductsUtils";

type CategoriesProps = {};

export default function Categories({}: CategoriesProps) {
  const location = useLocation();
  const { products } = useSelector((store: RootStateType) => store.products);
  const dispatch: AppDispatchType = useDispatch();

  const categories = getCategoriesProducts(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section>
      <header>
        <NavBar />
        <BreadCrumb actualPath={location.pathname} />
      </header>
      <Section
        className="px-5 lg:p-10"
        title="Categorias"
        subtitle="Explora toda nuestra colección"
        description="Desde belleza y fragancias hasta tecnología y hogar. Encuentra exactamente lo que buscas navegando por nuestras categorías. "
      >
        <CategoryItems categories={categories} />
      </Section>
    </section>
  );
}
