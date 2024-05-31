import React from "react";
import styles from "./creativeArt.module.css";
import Image from "next/image";
import Link from "next/link";

import img from "@/../public/faceSwap/creativeArt/creativeArtImg.jpg";

const CreativeArt = () => {
  return (
    <div className={styles.EnhanceImage}>
      <div className={styles.leftContainer}>
        {/* main image */}
        <div className={styles.imgContainer}>
          <Image src={img} alt="enhance-image" className={styles.img} />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h2>Make Creative Art</h2>
        <p className={`txt2 ${styles.txt}`}>
          Combine faces in imaginative ways to produce artistic and surreal
          images. Use face swap to explore your artis- tic side by blending
          different faces and features, creat- ing new and interesting visual
          compositions. It&apos;s a great tool for artists and creatives looking
          to experiment with digital art.
        </p>
        <Link href={"/face-swap/single-ai-face-swap"}>
          <button className={`btn2 ${styles.btn}`}>Face Swap Now {">"}</button>
        </Link>
      </div>
    </div>
  );
};

export default CreativeArt;
