"use client";

import { products } from "@/static/data";
import ImageSet from "./components/ImageSet";
import ProductInfo from "./components/ProductInfo";
import { usePathname } from "next/navigation";

export default function ProductPage() {
  const urlPath = usePathname();
  const params = urlPath.split("/");
  const product = products.find((product) => product.id === Number(params[3]));
  return (
    <div className=" flex flex-col md:flex-row items-center justify-center gap-8 my-4">
      {product && (
        <ImageSet
          data={{
            imgSet: product.imgSet.map((img) => img.src),
            img: product.img,
            name: product.name,
            category: product.category,
          }}
        />
      )}
      {product && (
        <ProductInfo
          data={
            product as {
              name: string;
              isTrending: boolean;
              price: number;
              description: string;
              size: string[];
              color: string[];
            }
          }
        />
      )}
    </div>
  );
}
