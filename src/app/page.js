import React from "react";
import styles from "./page.module.css";
import WhoIam from "@/components/WhoIam";

export default function Home() {
  const showWhoIam = false;
  return (
    <main className={`section__container ${styles.home_container}`}>
      <div className={styles.content}>
        <p className={styles.subtitle}>HELLO</p>
        <h1 className={styles.title_home}>
          I'm <span>Pratheek Bedre</span>
          {showWhoIam ? <WhoIam /> : null}
        </h1>
        <p className={styles.description_home}>
          Welcome to my data science portfolio! I'm a results-driven data
          scientist with expertise in statistical analysis, machine learning,
          and data visualization. I turn data into actionable insights and have
          a track record of driving innovation in diverse industries. Let's
          connect to explore how I can contribute to your success.
        </p>
        <div className="action__btns">
          <button className="hire__me">Download Resume</button>
          <a href="https://github.com/pxxthik" className="portfolio">
            Visit Github
          </a>
        </div>
      </div>
      <div className={styles.image_home}>
        <img src="assets/profile.jpg" alt="profile" />
      </div>
    </main>
  );
}
