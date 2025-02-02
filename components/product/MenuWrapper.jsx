import React from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <Title addClass="text-[40px]">Our Menu</Title>
      <div className="mt-10">
        <button className="px-6 py-2 bg-secondary text-white rounded-3xl">
          All
        </button>
        <button className="px-6">Burger</button>
        <button className="px-6">Pizza</button>
        <button className="px-6">Drink</button>
      </div>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

export default MenuWrapper;
