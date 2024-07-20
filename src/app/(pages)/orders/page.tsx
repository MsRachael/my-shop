import React from "react";
import OrderItems from "./components/OrderItems";
import { twMerge } from "tw-merge";

type Props = {};

export default function Orders({}: Props) {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8">
      <h1 className="text-3xl lg:text-4xl text-center my-4">My Orders</h1>
      <OrderItems />
    </div>
  );
}
