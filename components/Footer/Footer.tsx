"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-gray-100 text-center p-6 mt-10">
      <p>© 2026 Natural Touch. All rights reserved.</p>
      <div className="mt-2 flex justify-center flex-wrap gap-4">
        <Link href="/policies" className="text-sm underline">
          Policies (Cookies & Privacy)
        </Link>
        <Link
          href="/location"
          aria-current={pathname === "/location" ? "page" : undefined}
          className="text-sm underline"
        >
          Location
        </Link>
        <Link
          href="/blog"
          aria-current={pathname === "/blog" ? "page" : undefined}
          className="text-sm underline"
        >
          Blog
        </Link>
      </div>
      <a
        href="https://www.instagram.com/natural_touch_esthetics/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm underline mt-4 block"
      >
        Instagram
      </a>
    </footer>
  );
}
