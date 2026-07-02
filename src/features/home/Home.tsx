import NavBar from "../../components/Layout/NavBar/NavBar";
import Category from "./components/Category/Category";
import Portrait from "./components/Portrait/Portrait";

type HomeProps = {};

export default function Home({}: HomeProps) {
  return (
    <section>
      <header>
        <NavBar />
      </header>
      <Portrait />
      <Category />
    </section>
  );
}
