"use client"

import { filterOrderData, recentOrders } from "@/static/data";
import React from "react";
import OrdersCard from "./OrdersCard";
import Filterbar from "@/components/Section/Filterbar";

type Props = {};

export default function OrderItems({}: Props) {
  return (
    <>
      <Filterbar data={filterOrderData} />
      <div className="w-full flex items-center justify-center">
        <div
          className="min-h-48 md:h-[64vh] overflow-x-hidden overflow-scroll 
        w-full lg:w-[900px] flex flex-col my-8 px-2 gap-4"
        >
          {recentOrders.map((item) => {
            return <OrdersCard data={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
}
