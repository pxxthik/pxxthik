"use client"
import React from "react";
import Link from "next/link";

export default function NavLink(props) {
  const toggleNavbar = () => {
    document.getElementById("check").checked = false;
  };

  return (
    <li>
      <Link onClick={toggleNavbar} href={props.to}>
        {props.text}
      </Link>
    </li>
  );
}
