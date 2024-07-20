import React from "react";

type Props = {};

export default function Summary({}: Props) {
  return (
    <div className="sticky bg-white inset-y-0 right-0 w-full lg:w-96 py-8 h-full flex flex-col gap-4">
      <h1 className="text-2xl md:text-3xl text-center font-semibold items-center justify-center">
        Checkout
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-medium">Total</span>
          <span className="text-xl font-medium text-gray-500">$549</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-medium">Discount</span>
          <span className="text-xl font-medium text-gray-500">- $99</span>
        </div>
        <div className="flex items-center justify-between py-2 border-t border-black/60">
          <span className="text-2xl font-medium">Subtotal</span>
          <span className="text-xl font-medium text-gray-500">$358</span>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="text-lg font-medium border-2 w-full text-white bg-slate-800 border-slate-400/40 px-4 py-4 rounded-md hover:bg-neutral-900 hover:text-white">
          Checkout
        </button>
      </div>
    </div>
  );
}
