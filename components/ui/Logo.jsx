import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <span className="text-[2rem] font-dancing font-bold cursor-pointer">
        Feane
      </span>
    </Link>
  );
};
