import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "@/components/ui/BreadCrumb/BreadCrumb";
import NavBar from "@/components/Layout/NavBar/NavBar";
import Section from "@/components/ui/BreadCrumb/Section";
import type { AppDispatchType, RootStateType } from "@/store/store";
import { useEffect } from "react";
import { fetchProducts } from "@/store/actions/productAction";

type CategoriesProps = {};

export default function Categories({}: CategoriesProps) {
  const location = useLocation();
  const { products } = useSelector((store: RootStateType) => store.products);
  const dispatch: AppDispatchType = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section>
      <header>
        <NavBar />
        <BreadCrumb actualPath={location.pathname} />
        <Section
          title="Categorias"
          subtitle="Explora toda nuestra colección"
          description="Desde belleza y fragancias hasta tecnología y hogar. Encuentra exactamente lo que buscas navegando por nuestras categorías. "
        ></Section>
      </header>
    </section>
  );
}
