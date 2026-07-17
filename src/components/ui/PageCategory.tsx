import { useParams } from "react-router-dom";
import BreadCrumb from "./BreadCrumb";
import NavBar from "../Layout/NavBar/NavBar";
import { categoryInfo } from "@/constants/categoryInfo";
import type { RootStateType } from "@/store/store";
import { useSelector } from "react-redux";
import { replaceBlanks } from "@/utils/textUtils";

type PageCategoryProps = {};

export default function PageCategory({}: PageCategoryProps) {
  const { category } = useParams();
  const info = categoryInfo[category ?? ""];
  const { products } = useSelector((store: RootStateType) => store.products);
  const productsFiltered = products.filter((p) => p.category === category);
  const productsQuantity = productsFiltered.length;

  console.log(productsFiltered);

  return (
    <section>
      <header>
        <NavBar />
        <BreadCrumb />
      </header>
      <article>
        <header className="p-2 flex flex-col gap-2">
          <h2 className="text-title-secondary tracking-widest text-xl">
            {info.altTitle ?? info.description}
          </h2>
          <h2 className="font-playfair font-semibold text-3xl">{info.title}</h2>
          <p className="text-text-secondary text-justify">
            {info.completeDescription}
          </p>
          <p>{productsQuantity} productos disponibles</p>
          <img
            src={productsFiltered[0].thumbnail}
            alt={replaceBlanks(productsFiltered[0].title + " img", "-")}
          />
        </header>
      </article>
    </section>
  );
}
