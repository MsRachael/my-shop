import React from "react";

type Props = {
  data: {
    name: string;
    isTrending: boolean;
    price: number;
    description: string;
    size: string[];
    color: string[];
  };
};

export default function ProductInfo({ data }: Props) {
  return (
    <div className="h-full flex w-full ">
      <div className="flex flex-col items-start justify-start gap-4">
        <div className="w-full flex flex-col md:flex-row  items-end md:items-center justify-between gap-2">
          <h1 className="text-4xl font-semibold flex items-start justify-center gap-2">
            {data?.name ?? ""}
            {data && data.isTrending && (
              <span className="text-xs bg-neutral-700 text-teal-200 font-medium border px-2 py-1 rounded-md">
                Featured
              </span>
            )}
          </h1>
          <h3 className="text-lg font-medium text-gray-500">Rating: 4.0</h3>
        </div>
        <p className="text-5xl font-semibold text-teal-800">
        &#8377;{data?.price ?? ""}
        </p>
        <p className="text-lg"> {data?.description}</p>
        <div className="flex items-center justify-start gap-4">
          <p className="text-lg font-medium">Size:</p>
          <select className="border border-gray-300 rounded-md p-2">
            {data?.size.map((sz: string, idx: number) => (
              <option key={idx} value={sz}>
                {sz}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-start gap-2">
          {/* circlar color selecor */}
          {data?.color.map((clr: string, idx: number) => (
            <div
              key={idx}
              className="h-8 w-8 rounded-full border border-gray-300"
              style={{ backgroundColor: clr }}
            ></div>
          ))}
        </div>
        <button className="h-12 w-40 py-2 my-8 px-4 bg-black text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-gray-800">
          Add to cart
        </button>
      </div>
    </div>
  );
}
