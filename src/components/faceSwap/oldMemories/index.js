import React from "react";
import styles from "./oldMemories.module.css";
import Image from "next/image";
import Link from "next/link";

import img from "@/../public/faceSwap/oldMemories/oldMemoriesImg.jpg";

const OldMemories = () => {
  return (
    <div className={styles.EnhanceImage}>
      <div className={styles.leftContainer}>
        <h2>Relive Old Memories</h2>
        <p className={`txt2 ${styles.txt}`}>
          Swap faces in old photos to see family members in dif- ferent
          scenarios. Imagine seeing what your grandpar- ents would look like if
          they swapped places in their wedding photo or how different
          generations of your family would look if they exchanged faces.
          It&apos;s a fun way to bring new life to old memories and see your
          loved ones in a different light.
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

export default OldMemories;
