import React from "react";
import styles from "./parties.module.css";
import Image from "next/image";
import Link from "next/link";

import img from "@/../public/faceSwap/parties/partiesImg.jpg";

const Parties = () => {
  return (
    <div className={styles.EnhanceImage}>
      <div className={styles.leftContainer}>
        {/* main image */}
        <div className={styles.imgContainer}>
          <Image src={img} alt="enhance-image" className={styles.img} />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h2>Have Fun at Parties</h2>
        <p className={`txt2 ${styles.txt}`}>
          Use face swap at gatherings for instant laughs and memorable moments.
          Break the ice and entertain guests by swapping faces in group photos.
          It&apos;s a great party trick that guarantees smiles and laughter,
          making any event more enjoyable.
        </p>
        <Link href={"/face-swap/single-ai-face-swap"}>
          <button className={`btn2 ${styles.btn}`}>Face Swap Now {">"}</button>
        </Link>
      </div>
    </div>
  );
};

export default Parties;
