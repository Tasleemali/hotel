"use client";

import React, { useContext, useState } from "react";
import { AlignRight, Menu, User, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GlobaleContext } from "@/context";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const router = useRouter();
  const { isAuth } = useContext(GlobaleContext);
  const { data: session } = useSession();

  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeBar, setActiveBar] = useState("home");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Room", href: "/main-page/all-rooms" },
    { name: "Gallery", href: "/main-page/all-gallery" },
    { name: "About Us", href: "/main-page/about" },
    { name: "Contact Us", href: "/main-page/contact-us" },
  ];

  if (session?.user) {
    navLinks.push({ name: "Bookings", href: "/main-page/booking" });
  }

  return (
    <nav className="bg-[#6b0f1a] text-[#fefae0] sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1
            onClick={() => setActiveBar("home")}
            className="font-bold text-2xl md:text-3xl cursor-pointer"
          >
            HotelBoom
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`hover:text-yellow-200 transition ${
                  activeBar === link.name.toLowerCase()
                    ? "border-b-2 border-[#fefae0]"
                    : ""
                }`}
                onClick={() => setActiveBar(link.name.toLowerCase())}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* User/Login + Menu Button */}
        <div className="flex items-center gap-4">
          {isAuth ? (
            <User
              className="w-7 h-7 cursor-pointer"
              onClick={() => router.push("/service/account")}
            />
          ) : (
            <button
              onClick={() => router.push("/service/login")}
              className="border border-[#fefae0] px-4 py-1 rounded-lg font-semibold hover:bg-[#8d1222] transition"
            >
              Login
            </button>
          )}
          <AlignRight
            className="md:hidden w-7 h-7 cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-full h-full bg-[#6b0f1a] px-6 py-8 transition-transform z-40 md:hidden ${
            toggleMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <X
              onClick={() => setToggleMenu(false)}
              className="w-7 h-7 cursor-pointer"
            />
          </div>
          <ul className="mt-8 flex flex-col items-center space-y-8 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`${
                    activeBar === link.name.toLowerCase()
                      ? "border-b-2 border-[#fefae0]"
                      : ""
                  }`}
                  onClick={() => {
                    setActiveBar(link.name.toLowerCase());
                    setToggleMenu(false);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
