import { useLocation, useParams } from "react-router-dom";
import BreadCrumb from "./BreadCrumb";
import NavBar from "../Layout/NavBar/NavBar";
import { categoryInfo } from "@/constants/categoryInfo";

type PageCategoryProps = {};

export default function PageCategory({}: PageCategoryProps) {
  const location = useLocation();
  const { category } = useParams();
  const info = categoryInfo[category ?? ""];

  console.log(location.pathname);

  return (
    <section>
      <header>
        <NavBar />
        <BreadCrumb />
      </header>
      <article>
        <header>
          <h2>Introduccion</h2>
          <h2>{info.title}</h2>
        </header>
      </article>
    </section>
  );
}
