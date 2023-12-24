"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function WhoIam() {
  const typedTextRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js instance
    const options = {
      strings: ["Data Analyst", "Data Scientist"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);

    // Cleanup the Typed.js instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <br />a <span id="element" ref={typedTextRef}></span>
    </>
  );
}
