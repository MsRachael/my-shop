import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const menu = [
  {
    label: "My Orders",
    href: "/orders",
    icon: "/icons/prod.svg",
    size: 32,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: "/icons/settings.svg",
  },
  {
    label: "Profile",
    href: "/profile",
  },
];

export default function ProfileMenu({}: Props) {
  return (
    <div
      className="absolute z-50 right-8 top-20 min-h-24 w-64 border-2 
    border-gray-400/20 rounded-lg p-4 bg-gray-100 shadow-xl flex flex-col 
    items-start justify-center gap-2 text-xl font-medium text-gray-800 transition duration-500"
    >
      {menu.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className=" text-gray-800 hover:text-gray-900 flex justify-start items-center gap-2"
        >
          {item.icon && (
            <Image
              src={item.icon}
              alt={item.label}
              width={item?.size ? item.size : 24}
              height={item?.size ? item.size : 24}
              className="w-6 h-6"
            />
          )}
          {item.label}
        </Link>
      ))}
      <button className="w-full border-t h-10 bg-gray-500 rounded-md mt-4 hover:bg-gray-600">
        <Link href="/logout" className="text-lg font-semibold text-white">
          Logout
        </Link>
      </button>
    </div>
  );
}
