import Link from "next/link";
import React from "react";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="assets/pagenotfound.png" alt="" />
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
