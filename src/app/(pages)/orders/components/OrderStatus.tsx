import Btn from "@/components/custom-ui/Btn";
import React from "react";

type Props = {
  status: any;
};

export default function OrderStatus({ status }: Props) {
    //convert into readbale date format
    const shipmentDate = new Date(status.dateOfShipment).toDateString();
  return (
    <div className="w-full flex h-auto items-center flex-col justify-center">
      {status.trackingStatus === "Shipping" && (
        <div className="flex gap-2 flex-row md:flex-col">
          <Btn
            label="Track Order"
            className="w-36 md:w-44 bg-slate-400/60 text-neutral-600 
            hover:bg-slate-600 hover:text-white 
            cursor-pointer h-10 text-base"
            action={() => {}}
          />
          <Btn
            label="Cancel Order"
            className="w-36 md:w-44 bg-red-900/60 text-white hover:bg-red-900 
            hover:text-white 
            cursor-pointer h-10 text-base"
            action={() => {}}
          />
        </div>
      )}
      {
        status.trackingStatus === "Delivered" && (
          <div className="flex flex-col items-center justify-center">
            <span className="text-lg md:text-lg font-bold text-green-900">
              Delivered
            </span>
            <span className="text-sm font-medium">on {shipmentDate}</span>
          </div>
        )
      }
      {
        status.trackingStatus === "Cancelled" && (
          <span className="text-lg md:text-lg font-bold text-red-600">Cancelled</span>
        )
      }
    </div>
  );
}
