import React, { useState, useEffect } from "react";
import styles from "./instantFaceSwap.module.css";
import faceSwap01 from "@/../public/home/instantFaseSwap/faceSwap01.png";
import faceSwap02 from "@/../public/home/instantFaseSwap/faceSwap02.png";
import faceSwap03 from "@/../public/home/instantFaseSwap/faceSwap03.png";
import Image from "next/image";

export default function InstantFaceSwap() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      //console.log(activeIndex);
      setActiveIndex(prevIndex => (prevIndex + 1) % 3);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
    <div className={styles.InstantFaceSwap}>
      <div className={styles.leftContainer}>
        <p className={`aginoMoulFont ${styles.title}`}>
          Instant face swaps, <br /> endless possibilities!
        </p>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.imgContainer01}>
          <Image src={faceSwap01} alt="face-swap-01" />
        </div>
        <div className={styles.imgContainer02}>
          <Image src={faceSwap02} alt="face-swap-02" />
        </div>
        <div className={styles.imgContainer03}>
          <Image src={faceSwap03} alt="face-swap-03" />
        </div>
      </div>

      {/* mobile */}
      <div className={styles.rightContainerMobile}>
        <div
          className={`${styles.imgContainer01} ${
            activeIndex === 0 ? styles.show : ""
          }`}
        >
          <Image src={faceSwap01} alt="face-swap-01" />
        </div>

        <div
          className={`${styles.imgContainer02} ${
            activeIndex === 1 ? styles.show : ""
          }`}
        >
          <Image src={faceSwap02} alt="face-swap-02" />
        </div>

        <div
          className={`${styles.imgContainer03} ${
            activeIndex === 2 ? styles.show : ""
          }`}
        >
          <Image src={faceSwap03} alt="face-swap-03" />
        </div>
      </div>
    </div>
  );
}
