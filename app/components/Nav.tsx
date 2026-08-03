import { link } from "fs";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex gap-6 p-4 bg-gray-100">
      <Link href="/" className="hover:text-blue-600">
        Home
      </Link>
      <Link href="/about" className="hover:text-blue-600">
        About
      </Link>
      <Link href="/contact" className="hover:text-blue-600">
        Contact
      </Link>
        <Link
                href="/bulb"
                className="text-zinc-700 hover:text-blue-600 dark:text-zinc-300"
              >
                Bulb
              </Link>
    </nav>
  );

              
}