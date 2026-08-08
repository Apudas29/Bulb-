import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-white tracking-wide"
        >
          Apu Das
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition"
          >
            About
          </Link>

          <Link
            href="/learn"
            className="text-gray-300 hover:text-white transition"
          >
            Learn
          </Link>

          <Link
            href="/bulb"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            💡 Bulb
          </Link>

          <Link
            href="/login"
            className="text-gray-300 hover:text-white transition"
          >
            Login
          </Link>

          <a
            href="https://github.com/Apudas29"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}