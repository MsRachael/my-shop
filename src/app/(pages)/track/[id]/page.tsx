"use client";

import Btn from "@/components/custom-ui/Btn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="w-full flex flex-col gap-4 p-4">
      <h1 className="w-full text-center text-neutral-900/50 font-semibold text-xl md:text-2xl md:py-8">
        5fd64-faa45c-8456e
      </h1>
      <div className="w-full h-auto flex items-center justify-center flex-col md:flex-row 
      gap-1 md:gap-2 lg:gap-4 bg-neutral-100 rounded-lg py-4">
        <div
          className="h-56 lg:h-64 w-72 lg:w-72 margin-auto flex flex-col items-center 
              justify-center gap-4 p-4 bg-gray-100/50 rounded-lg"
        >
          <Image
            className="h-64 w-auto rounded-t-lg object-contain"
            src={`/products/men/adidas-classic-shirt.png`}
            alt="Adidas Classic Shirt"
            width={200}
            height={200}
          />
        </div>
        <div className="w-auto lg:w-96 flex flex-col items-center md:items-start justify-center">
          <Link href="/" target="_blank">
            <h1 className="text-xl lg:text-2xl font-medium">Adidas Classic Shirt</h1>
          </Link>
          <h1 className="text-lg md:text-xl lg:text-2xl">₹ 1,999</h1>
          <h2 className="font-bold text-sm md:text-base lg:text-lg text-green-800">Size: M</h2>
          <h1>
            Quantity: <strong>1</strong>
          </h1>
        </div>
        <div className="w-72 flex flex-col items-center justify-start gap-2">
          <Btn
            label="Pay Now"
            className="w-36 cursor-pointer h-10 text-base bg-slate-200 hover:bg-slate-300"
            action={() => {}}
          />
          <Btn
            label="Cancel Order"
            className="w-36 cursor-pointer h-10 text-base bg-red-200 border border-red-400 hover:bg-red-500 hover:text-white"
            action={() => {}}
          />
        </div>
      </div>
      <div className="w-full flex border bg-slate-200/40 flex-col md:flex-row rounded-lg p-4">
        <div className="flex-1 p-2 border-r-black/20 md:border-r-2 gap-4 text-base lg:text-lg md:text-base">
          <h1 className="text-2xl font-semibold">Username</h1>
          <h1>
            <strong>Address:</strong> G-12, 2nd Floor, Sector 63, Noida, UP
          </h1>
          <h1>
            <strong>Contact:</strong> 9876543210
          </h1>
          <h1>
            <strong>Delivery OTP:</strong> 564687
          </h1>
        </div>
        <div className="flex flex-1 p-2 items-center justify-center">
          <span>
            <strong>Status:</strong> Shipping
          </span>
        </div>
      </div>
    </div>
  );
}
