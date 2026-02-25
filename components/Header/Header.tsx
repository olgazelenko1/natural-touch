"use client";

import css from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <Link
        href="/"
        className={`${css.navLink} ${pathname === "/" ? css.active : ""}`}
      >
        Natural Touch
      </Link>
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <Link
              href="/about"
              className={`${css.navLink} ${pathname === "/about" ? css.active : ""}`}
            >
              About
            </Link>
          </li>
          <li className={css.navItem}>
            <Link
              href="/services"
              className={`${css.navLink} ${pathname === "/services" ? css.active : ""}`}
            >
              Services
            </Link>
          </li>
          <li className={css.navItem}>
            <Link
              href="/gallery"
              className={`${css.navLink} ${pathname === "/gallery" ? css.active : ""}`}
            >
              Gallery
            </Link>
          </li>
          <li className={css.navItem}>
            <Link
              href="/location"
              className={`${css.navLink} ${pathname === "/location" ? css.active : ""}`}
            >
              Location
            </Link>
          </li>
          <li className={css.navItem}>
            <Link
              href="/blog"
              className={`${css.navLink} ${pathname === "/blog" ? css.active : ""}`}
            >
              Blog
            </Link>
          </li>
          <li className={css.navItem}>
            <Link
              href="/policy"
              className={`${css.navLink} ${pathname === "/policy" ? css.active : ""}`}
            >
              Policy Terms
            </Link>
          </li>
        </ul>
      </nav>
      <button className={css.bookingButton}>Book Now</button>
    </header>
  );
};

export default Header;
