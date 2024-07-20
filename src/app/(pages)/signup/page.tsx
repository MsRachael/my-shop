import SignInForm from "@/app/signin/components/SignInForm";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Sign Up | ShopX",
  description: "Sign Up to your shopping App"
};

type Props = {};

export default function signUp({}: Props) {
  return (
    <div className=" flex flex-col items-center justify-center gap-8">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-1 flex-col items-center justify-center w-full md:w-[400px] p-6 h-auto gap-12">
          <h1 className="text-4xl text-center">Create an Account!</h1>
          <SignInForm/>
        </div>
        <div className="hidden md:flex md:w-[700px] lg:w-[900px] p-6 md:border-l border-l-gray-500/50 h-1/2">
          <Image
            className="rounded-md"
            src={`https://picsum.photos/3840/2160?v=7`}
            alt="Your alt text"
            width={3840}
            height={2160}
          />
        </div>
      </div>
    </div>
  );
}
