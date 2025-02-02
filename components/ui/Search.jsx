import React from "react";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import { GiCancel } from "react-icons/gi";

export const Search = ({ setIsSearchModal }) => {
  return (
    <div
      className="fixed top-0 left-0  w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen
     after:bg-white after:absolute after:opacity-70 after:left-0 after:top-0 grid place-content-center"
    >
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center">
          <div className="relative z-50 md:w-[37.5rem] w-[23.125rem] border-2 bg-white p-10 rounded-3xl">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsSearchModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
            <Title addClass="text-[2.5rem] text-center">Search</Title>
            <input
              type="text"
              className="border w-full my-10"
              placeholder="Search..."
            />
            <div>
              <ul className="">
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                  <div className="relative flex">
                    <Image
                      src="/images/food.png"
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">$10</span>
                </li>
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                  <div className="relative flex">
                    <Image
                      src="/images/food.png"
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">$10</span>
                </li>
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                  <div className="relative flex">
                    <Image
                      src="/images/food.png"
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">$10</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};
