import React from "react";
import styles from "./funny.module.css";
import Image from "next/image";
import Link from "next/link";

import img from "@/../public/faceSwap/funny/funny.jpg";

const Funny = () => {
  return (
    <div className={styles.EnhanceImage}>
      <div className={styles.leftContainer}>
        {/* main image */}
        <div className={styles.imgContainer}>
          <Image src={img} alt="enhance-image" className={styles.img} />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h2>Create Funny Photos</h2>
        <p className={`txt2 ${styles.txt}`}>
          Swap faces with friends, family, or pets to produce hilar- ious and
          entertaining images. Imagine the laughter when you see your best
          friend&apos;s face on your pet dog or your sibling&apos;s face on a
          famous painting. This feature is perfect for adding humor to any photo
          and creating moments of joy and amusement.
        </p>
        <Link href={"/face-swap/single-ai-face-swap"}>
          <button className={`btn2 ${styles.btn}`}>Face Swap Now {">"}</button>
        </Link>
      </div>
    </div>
  );
};

export default Funny;
