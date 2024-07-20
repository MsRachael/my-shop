import Image from "next/image";
import Link from "next/link";
import React from "react";
import OrderStatus from "./OrderStatus";

type Props = {
  data: any;
};

export default function OrdersCard({ data }: Props) {
  return (
    <div
      className="w-auto h-96 lg:w-full flex flex-col md:flex-row bg-slate-100 
      hover:bg-slate-300 rounded-lg px-4 md:px-8 py-4
      transition-all ease-in-out duration-300"
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="w-auto md:w-full flex items-center justify-between gap-4">
          <div className="flex items-center  flex-col md:flex-row justify-center gap-4">
            <Image
              src={data?.img?.src}
              alt={data.name}
              width={100}
              height={100}
              className="w-auto h-44 md:h-28 md:w-28 object-contain shadow-sm  p-2"
            />
            <div className="flex flex-col gap-2">
              <Link href={`/track/${data.id}`} className="text-2xl font-semibold">
                {data.name}
              </Link>
              <div className="flex items-center gap-0 md:gap-4">
                <span className="text-sm font-medium">
                  Quantity: {data.quantity}
                </span>
              </div>
            </div>
          </div>
        </div>
        <OrderStatus status={data.status} />
      </div>
    </div>
  );
}
