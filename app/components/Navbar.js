"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineCodeOff } from "react-icons/md";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(navbar);
  }, [navbar]);

  return (
    <div>
      <nav className="w-full dark:bg-zinc-800 fixed z-10 ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* Logo */}
              <Link href="/">
                <span>
                  <h2 className=" flex text-2xl text-cyan-600 font-bold ">
                    <MdOutlineCodeOff />
                    JOE DevTech
                  </h2>
                </span>
              </Link>
              {/* Hamburger */}
              <div className="md:hidden">
                <button
                  title="hamburger"
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <TiThMenu
                      title="hamburger"
                      color="white"
                      width={50}
                      height={30}
                      alt="logo"
                    />
                  ) : (
                    <TiThMenu
                      title="hamburger"
                      color="cyan"
                      width={50}
                      height={30}
                      alt="logo"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-4 ${
                isMenuOpen ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-blue-600 border-blue-900 md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="../" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-blue-600 border-blue-900 md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="../about/" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-blue-600 border-blue-900 md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="../product/" onClick={() => setNavbar(!navbar)}>
                    Services
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-blue-600 border-blue-900 md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="../teams/" onClick={() => setNavbar(!navbar)}>
                    Teams
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
