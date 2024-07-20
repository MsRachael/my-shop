import Image from "next/image";
import React from "react";
import Summary from "./components/Summary";
import Bag from "./components/Bag";

export const metadata = {
  title: "My Cart | ShopX",
  description: "Your bag of shopping App"
};

type Props = {};

export default function page({}: Props) {
  return (
    <div className=" flex flex-col lg:px-4 py-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">
        Cart Summary
      </h1>
        <div className="relative w-full flex flex-col-reverse lg:flex-row items-start justify-between gap-4">
        <Bag />
        <Summary />
        </div>
      </div>
  );
}
