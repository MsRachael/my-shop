"use client";

import { usePathname } from "next/navigation";
import { products } from "@/static/data";
import ProductCard from "@/components/Card/ProductCard";

export default function CategoryPage() {
  const urlPath = usePathname().split("/");
  const capitalizedUrlPath = urlPath[urlPath.length - 1].charAt(0).toUpperCase() + urlPath[urlPath.length - 1].slice(1);

  const filteredProducts = products.filter(
    (product) => product.category === capitalizedUrlPath
  );



  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8">
      <div className="">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">
          {capitalizedUrlPath}
        </h1>
      </div>
      <div className="h-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product, idx) => (
          <ProductCard key={idx} data={product} />
        ))}
      </div>
    </div>
  );
}