import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav>
      <div className="nav__content">
        <div className="logo">
          <Link href="/">pxxthik</Link>
        </div>
        <label htmlFor="check" className="checkbox">
          <FaBars className="menuLink" />
        </label>
        <input type="checkbox" name="check" id="check" />
        <ul>
          <NavLink to="/" text="Home" />
          <NavLink to="/blogs" text="Blogs" />
          <NavLink to="/projects" text="Projects" />
          <NavLink to="/about" text="About" />
          <NavLink to="/contact" text="Contact" />
        </ul>
      </div>
    </nav>
  );
}
