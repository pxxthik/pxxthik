import Link from "next/link";
import React from "react";
import styles from "./not-found.module.css";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/assets/pagenotfound.png"
          alt="page not found"
          width={240}
          height={210}
        />
      </div>
      <div className={styles.title}>
        <div>! Page Not Found</div>
        <div className={`action__btns ${styles.btns}`}>
          <Link href="/" className="portfolio">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
