import { categories } from "@/static/data";
import Link from "next/link";
import React from "react";

type Props = {};

export default function CategoryCard({}: Props) {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <Link
          href={`/products/${category.label.toLowerCase()}`}
          key={index}
          className="text-lg font-semibold flex items-center justify-center 
          p-4 bg-gray-100 rounded-lg hover:bg-neutral-200 hover:text-black"
        >
          {category.label}
        </Link>
      ))}
    </div>
  );
}
