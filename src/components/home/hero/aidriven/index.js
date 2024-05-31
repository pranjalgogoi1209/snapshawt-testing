import React from "react";
import styles from "./aidriven.module.css";
import Image from "next/image";
import Link from "next/link";

import img01 from "@/../public/home/hero/img01.png";
import img02 from "@/../public/home/hero/img02.png";
import img03 from "@/../public/home/hero/img03.png";
import img04 from "@/../public/home/hero/img04.png";
import img05 from "@/../public/home/hero/img05.png";
import drivenImg from "@/../public/home/hero/drivenImg.png";

const AiDriven = () => {
  return (
    <div className={styles.AiDriven}>
      {/* left container */}
      <div className={styles.leftContainer}>
        <p className="cursiveFont">#Snapshawt photos</p>
        <h2>Transform Your Storytelling with Snapshawt AI</h2>
        <p className="txt2">
          Unleash the power of Gen AI like never before! Crafting captivating
          content has never been simpler. With Snapshawt's AI features, you can
          now effortlessly transform into anyone you desire, bring your dream
          images to life with just a prompt, or enhance any image to stunning
          realism.
        </p>
        <Link href={"/face-swap/single-ai-face-swap"}>
          <button className={`btn2 ${styles.btn}`}>Try Now {">"}</button>
        </Link>
      </div>

      {/* right container */}
      <div className={styles.rightContainer}>
        <Image src={drivenImg} alt="driven-image" className={styles.img} />
        {/* <div className={styles.first}>
          <div className={`${styles.imgContainer} ${styles.office}`}>
            <Image src={img01} alt="img01" className={styles.img} />
          </div>
          <div className={`${styles.imgContainer} ${styles.antman}`}>
            <Image src={img02} alt="img02" className={styles.img} />
          </div>
        </div> */}
        {/* <div className={styles.second}>
          <div className={styles.iconContainer}>
            <Image src={img03} alt="img03" />
          </div>
          <div className={`${styles.imgContainer} ${styles.woman}`}>
            <Image src={img04} alt="img04" className={styles.img} />
          </div>
          <div className={styles.avengerContainer}>
            <Image src={img05} alt="img05" className={styles.img} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AiDriven;
