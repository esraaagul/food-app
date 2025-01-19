import React, { useState } from "react";
import { Logo } from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Search } from "../ui/Search";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);

  return (
    <div className="h-[5.5rem] bg-secondary ">
      <div className="flex justify-between container mx-auto items-center h-full text-white">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex z-50 hidden
            ${isMenuModal === true && "!grid place-content-center"}`}
        >
          {isMenuModal && (
            <button
              className="absolute  top-4 right-4 z-50"
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          )}
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center justify-end">
            <li className="px-[0.313rem] py-[0.625rem] hover:text-primary cursor-pointer">
              <a href="">HOME</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] hover:text-primary cursor-pointer">
              <a href="">MENU</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] hover:text-primary cursor-pointer">
              <a href="">ABOUT</a>
            </li>
            <li className="ppx-[0.313rem] py-[0.625rem] hover:text-primary cursor-pointer">
              <a href="">BOOK TABLE</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="#" className="hover:text-primary transition-all">
            <FaUserAlt />
          </a>
          <a href="#" className="hover:text-primary transition-all">
            <FaShoppingCart />
          </a>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all" />
          </button>
          <a className="md:inline-block hidden sm" href="#">
            <button className="btn-primary">Order Online</button>
          </a>
          <button
            className="sm:hidden inline-block"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu className="text-xl" />
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};
export default Header;
