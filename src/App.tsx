import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import Home from "./features/home/Home";
import MakeUp from "./features/make-up/MakeUp";
import { type RootStateType } from "./store/store";
import Categories from "./features/categories/Categories";
import PageCategory from "./components/ui/PageCategory";

export type ListDummyApiType = {
  products: DummyApiType[];
};

export type DummyApiType = {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
};

function App() {
  const darkMode = useSelector((state: RootStateType) => state.theme.darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/make-up" element={<MakeUp />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<PageCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
