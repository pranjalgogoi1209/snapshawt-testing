import React from "react";
import styles from "./socialMedia.module.css";
import Image from "next/image";
import Link from "next/link";

import img from "@/../public/faceSwap/socialMedia/socialMediaImg.jpg";

const SocialMedia = () => {
  return (
    <div className={styles.EnhanceImage}>
      <div className={styles.leftContainer}>
        <h2>Spice Up Social Media</h2>
        <p className={`txt2 ${styles.txt}`}>
          Add a unique twist to your pictures to make your social media posts
          more engaging and fun. Stand out in your followers' feeds with
          creative and unexpected face swaps, attracting likes and comments.
          Whether it&apos;s for a funny meme or a quirky profile picture, face
          swap can enhance your online presence.
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

export default SocialMedia;
