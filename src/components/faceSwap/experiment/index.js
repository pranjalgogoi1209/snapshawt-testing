import React from "react";
import styles from "./experiment.module.css";
import Image from "next/image";
import Link from "next/link";

import img from "@/../public/faceSwap/experiment/experimentImg.jpg";

const Experiment = () => {
  return (
    <div className={styles.EnhanceImage}>
      <div className={styles.leftContainer}>
        {/* main image */}
        <div className={styles.imgContainer}>
          <Image src={img} alt="enhance-image" className={styles.img} />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h2>Experiment with New Looks</h2>
        <p className={`txt2 ${styles.txt}`}>
          See yourself with different hairstyles or facial features by swapping
          with others. Whether you&apos;re considering a new hairstyle, curious
          about different facial features, or just want to see how you&apos;d
          look with someone else&apos;s face, face swap offers a playful way to
          explore different looks without any commitment.
        </p>
        <Link href={"/face-swap/single-ai-face-swap"}>
          <button className={`btn2 ${styles.btn}`}>Face Swap Now {">"}</button>
        </Link>
      </div>
    </div>
  );
};

export default Experiment;
