"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Bag({}: Props) {

  const [items, setItems] = useState(1);

  const handleAdd = () => {
    setItems(items + 1);
  }

  const handleMinus = () => {
    if (items > 1) {
      setItems(items - 1);
    }
  }


  return (
    <div className="min-h-96 md:h-[64vh] overflow-x-hidden overflow-scroll w-full lg:w-[800px] flex flex-col my-8 px-2 gap-6">
    <div className="w-auto lg:w-full flex flex-col md:flex-row bg-slate-100 rounded-lg md:px-8 py-4">
      <div className="w-auto md:w-full flex items-center justify-between gap-4">
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/products/men/puma-suede-classic.png"
            alt="Product Image"
            width={100}
            height={100}
            className="h-28 w-28 object-contain shadow-sm  p-2"
          />
          <div className="flex flex-col gap-2">
            <Link
            href={"/products/men/2"}
            className="text-2xl font-semibold">Puma Suede Classic</Link>
            <div className="flex items-center gap-4">
              <Image
                className="cursor-pointer border rounded-lg h-6 w-6 p-1"
                src="/icons/minus.svg"
                alt="Minus Icon"
                width={15}
                height={15}
                onClick={handleMinus}
              />
              <span className="text-lg font-medium">{items}</span>
              <Image
                className="cursor-pointer border rounded-lg h-6 w-6 p-1"
                src="/icons/plus.svg"
                alt="Plus Icon"
                width={15}
                height={15}
                onClick={handleAdd}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-auto items-center flex-row md:flex-col justify-center gap-2">
        <span className="text-2xl font-medium">$965</span>
        <button
          type="button"
          className="rounded-lg px-4 gap-1 py-1 flex items-center justify-center hover:bg-red-200 hover:text-red-900 font-medium"
        >
          Remove
          <Image
            src="/icons/delete.svg"
            alt="Minus Icon"
            width={30}
            height={30}
            className="text-white"
          />
        </button>
      </div>
    </div>
    </div>
  );
}
