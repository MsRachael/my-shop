import React from "react";
import ProjectLogo from "./custom-ui/ProjectLogo";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="w-full min-h-24 px-16 flex flex-col md:flex-row items-center justify-between gap-4 my-8">
      <ProjectLogo />
      <div className="flex flex-col items-center justify-center md:gap-2">
        <h3 className="text-lg md:text-2xl">E-Commerce</h3>
        <p className="text-sm md:text-xs text-center">
          &copy; 2024, Alyx and its affiliates.
        </p>
      </div>
    </div>
  );
}
