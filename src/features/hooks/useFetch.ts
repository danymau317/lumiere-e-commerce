import { useState, useEffect } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const d = await fetch(url);
        const res = await d.json();
        setData(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return { data };
}

// function App() {
//   const { data: listProducts } = useFetch<ListDummyApiType>(
//     "https://dummyjson.com/products?limit=40",
//   );

//   return (
//     <>
//       {listProducts?.products.map((product) => (
//         <p key={product.id}>{product.title}</p>
//       ))}
//     </>
//   );
// }
