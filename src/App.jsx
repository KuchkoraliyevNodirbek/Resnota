import React from "react";
import ProductCard from "./components/product-card";
import { arr } from "./data/product";
import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <section>
        <Navbar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-[100px] container">
          {arr.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
