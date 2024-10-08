"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition duration-300"
          >
            Bouchard Holdings LLC
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["About Us", "Contact", "Rentals", "Coming Soon"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-600 hover:text-gray-800 transition duration-300 text-sm uppercase tracking-wider"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="container mx-auto px-4 py-2">
            {["About Us", "Contact", "Rentals", "Coming Soon"].map((item) => (
              <li key={item} className="py-2">
                <Link
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block text-gray-600 hover:text-gray-800 transition duration-300 text-sm uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
