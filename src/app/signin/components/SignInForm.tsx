"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

export default function SignInForm({}: Props) {
  const isSignIn = usePathname().includes("signin");

  return (
    <>
      <form className="w-full flex flex-col gap-4">
        {!isSignIn && (
          <input
            type="username"
            placeholder="Username"
            className="border-2 border-gray-500/50 p-2 rounded-md"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-gray-500/50 p-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-500/50 p-2 rounded-md"
        />
        {isSignIn ? (
          <button
            className="text-lg font-medium border-2 w-full text-white bg-slate-800 
              border-slate-400/40 px-4 py-2 rounded-md hover:bg-neutral-900 hover:text-white"
          >
            Sign In
          </button>
        ) : (
          <button
            className="text-lg font-medium border-2 w-full text-white bg-slate-800 
            border-slate-400/40 px-4 py-2 rounded-md hover:bg-neutral-900 hover:text-white"
          >
            Create Account
          </button>
        )}
      </form>
      {isSignIn ? (
        <div className="text-center text-lg flex-col font-medium">
          <p>Don&apos;t have an account?{" "}</p>
          <Link className="underline opacity-80 text-gray-600" href="/signup">Create new account</Link>
        </div>
      ) : (
        <div className="text-center text-lg flex-col font-medium">
          <p>Already have an account?{" "}</p>
          <Link className="underline opacity-80 text-gray-600" href="/signin">Sign in</Link>
        </div>
      )}
    </>
  );
}
