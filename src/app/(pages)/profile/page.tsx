"use client";

import CategoryCard from "@/components/Card/CategoryCard";
import Image from "next/image";
import React from "react";
import Orders from "../orders/page";

type Props = {};

export default function Profile({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 md:py-8">
      <div
        className="w-auto lg:w-[800px] flex flex-col md:flex-row items-center 
      justify-center gap-4"
      >
        <div className="w-full flex flex-col items-center gap-4">
          <h1 className="text-4xl font-semibold my-4">Welcome! User</h1>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4 lg:gap-12">
            <div className="flex items-center justify-center gap-4">
              <Image
                src="/icons/user.svg"
                alt="User Icon"
                width={150}
                height={150}
                className="h-auto w-32 md:w-56 object-contain shadow-sm p-2 rounded-full bg-slate-200"
              />
            </div>
            <div className="w-56 flex flex-col gap-2 text-md items-start justify-center">
              <h2 className="flex items-center">
                <Image
                  src="/icons/man.svg"
                  alt="User Icon"
                  width={25}
                  height={25}
                  className="h-6 w-6"
                />
                <span className="ml-6">Male</span>
              </h2>
              <h2 className="flex items-center">
                <Image
                  src="/icons/phone.svg"
                  alt="User Icon"
                  width={20}
                  height={20}
                  className="h-6 w-6"
                />
                <span className="ml-6">+91 97454 55446</span>
              </h2>
              <h2 className="flex items-center font-medium">
                <Image
                  src="/icons/email.svg"
                  alt="User Icon"
                  width={20}
                  height={20}
                  className="h-6 w-6"
                />
                <span className="ml-6">xyz@test.com</span>
              </h2>
              <h2 className="flex items-center">
                <Image
                  src="/icons/address.svg"
                  alt="User Icon"
                  width={15}
                  height={15}
                  className="h-6 w-6"
                />
                <span className="ml-6">Address</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-between gap-4 py-4 md:py-0">
          <CategoryCard label="Total Orders: 10" className="w-80 md:w-52" />
          <CategoryCard
            label="Track Orders"
            className="w-80 md:w-52 cursor-pointer"
          />
        </div>
      </div>
      <Orders/>
    </div>
  );
}
