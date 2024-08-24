import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { images } from "@/constants";

const navbar = () => {
  const [toogleMenu, setToggleMenu] = useState(false);

  function handleMenu() {
    setToggleMenu(!toogleMenu.value);
    console.log(toogleMenu);
  }

  return (
    <nav className="fixed top-0 right-0 z-[99] w-full py-2 bg-black">
      <div className="container flex items-center justify-between">
        <img
          src={images.gericht.src}
          loading="eager"
          alt="Logo"
          className="w-[150px] lg:w-[250px] pointer"
        />
        <ul className=" items-center justify-center flex-1 [&>li]:px-4 hover:[&>li]:text-grey hidden lg:flex">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#awards">Awards</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="hidden md:flex items-center justify-end [&>a]:mx-4 [&>a]:border-transparent [&>a]:border-b-[1px] hover:[&>a]:border-b-golden [&>a]:transition-all [&>a]:duration-500 [&>a]:ease-in-out">
          <a href="#login" className="">
            Login / Register
          </a>
          <div className="w-[1px] h-8 bg-golden" />
          <a href="/">Book Table</a>
        </div>
        <div className="md:hidden">
          <GiHamburgerMenu
            color="#fff"
            fontSize={32}
            onClick={() => setToggleMenu(true)}
          />
          {toogleMenu && (
            <div className="fixed top-0 right-0 z-10 flex flex-col w-full h-screen transition-all duration-500 ease-in-out bg-black">
              <MdOutlineRestaurantMenu
                fontSize={32}
                onClick={() => setToggleMenu(false)}
                className="absolute cursor-pointer top-5 text-golden right-5"
              />
              <ul className="flex items-center flex-col gap-y-10 justify-center flex-1 [&>li]:px-4 [&>li]:text-center [&>li]:font-cormorant hover:[&>li]:text-white [&>li]:text-3xl [&>li]:text-golden ">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#menu">Menu</a>
                </li>
                <li>
                  <a href="#awards">Awards</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default navbar;
