"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/contants";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-stone-950 relative z-30 py-5">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-5">
        {/* Logo */}
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-10 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden filter invert"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-stone-950 p-5 flex flex-col items-center gap-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-10 cursor-pointer transition-all hover:font-bold"
              onClick={toggleMenu} // Close menu on link click
            >
              {link.label}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
