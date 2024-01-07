import React from "react";
import styles from "./page.module.css";

export default function page() {
  return (
    <div className={`section__container ${styles.about_container}`}>
      <div className={`flex-center ${styles.image_about}`}>
        <img src="assets/me13.jpg" alt="profile" />
      </div>

      <div className={`flex-center ${styles.content}`}>
        <div>
          <h2>About Me</h2>
          <p>
            I am 19 years old, currently in 2nd year (Graduating 2025), pursuing
            a career in Bachelor of Computer Science from Kuvempu University,
            India. Born and brought up in Hosanagara, India. I have done my
            schooling in 2022, with Science + Computers as my background.
          </p>
          <br />
          <p>
            My idea behind taking up Computer Science is my love for programming
            and the fact that, given the knowledge, I can make a computer do
            almost anything I want it to do.
          </p>
          <br />
          <p>
            I have a keen interest in the field of Machine Learning and Data
            Science, and I&apos;m presently learning and working on the skills
            required to expertise in the same.
          </p>
          <br />
          <p>
            My hobbies include{" "}
            <i>
              playing chess, reading articles, and browsing YouTube
              recommendations.
            </i>
          </p>
          <br />
          <p>
            I am a firm believer of passion and determination can lead you to
            success.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}
