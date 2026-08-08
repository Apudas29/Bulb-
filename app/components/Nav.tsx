"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-zinc-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold hover:text-yellow-400 transition"
          >
            Apu Das
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>

            <Link href="/about" className="hover:text-yellow-400">
              About
            </Link>

            <Link href="/learn" className="hover:text-yellow-400">
              Learn
            </Link>

            <Link href="/bulb" className="hover:text-yellow-400">
              💡 Bulb
            </Link>

            <Link href="/login" className="hover:text-yellow-400">
              Login
            </Link>

            <a
              href="https://github.com/Apudas29"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-yellow-400 transition"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col gap-4 py-4 border-t border-zinc-700">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link href="/learn" onClick={() => setOpen(false)}>
              Learn
            </Link>

            <Link href="/bulb" onClick={() => setOpen(false)}>
              💡 Bulb
            </Link>

            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>

            <a
              href="https://github.com/Apudas29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400"
            >
              GitHub
            </a>
          </div>
        )}
        
      </div>
    </nav>
    
  );
}
