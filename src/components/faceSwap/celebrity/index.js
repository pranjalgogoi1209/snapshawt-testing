import React from "react";
import styles from "./celebrity.module.css";
import Image from "next/image";
import Link from "next/link";

import img from "@/../public/faceSwap/celebrity/celebrityImg.jpg";

const Celebrity = () => {
  return (
    <div className={styles.EnhanceImage}>
      <div className={styles.leftContainer}>
        <h2>Try Celebrity Faces</h2>
        <p className={`txt2 ${styles.txt}`}>
          Imagine yourself with the face of your favorite celebri- ty. Ever
          wondered what you&apos;d look like as a movie star, athlete, or famous
          personality? Face swap lets you satis- fy your curiosity and have fun
          seeing yourself in the spotlight.
        </p>
        <Link href={"/face-swap/single-ai-face-swap"}>
          <button className={`btn2 ${styles.btn}`}>Face Swap Now {">"}</button>
        </Link>
      </div>

      <div className={styles.rightContainer}>
        {/* main image */}
        <div className={styles.imgContainer}>
          <Image src={img} alt="enhance-image" className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default Celebrity;
