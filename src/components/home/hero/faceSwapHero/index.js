import React, { useState } from "react";
import styles from "./faceSwapHero.module.css";
import Image from "next/image";
import Link from "next/link";

import free from "./../../../../../public/home/hero/free.png";

import faceSwap01 from "@/../public/home/hero/faceSwap01.jpg";
import faceSwap02 from "@/../public/home/hero/faceSwap02.jpg";
import faceSwap03 from "@/../public/home/hero/faceSwap03.jpg";

export default function FaceSwapHero({ setDisplayCard }) {
  const [faceSwapIndex, setFaceSwapIndex] = useState(0);
  const [faceSwapImg, setFaceSwapImg] = useState(faceSwap01);

  const faceSwap = [
    {
      img: faceSwap01,
      name: "single",
    },
    {
      img: faceSwap02,
      name: "group",
    },
    {
      img: faceSwap03,
      name: "video",
    },
  ];

  return (
    <div onClick={() => setDisplayCard("faceswap")} className={styles.faceSwap}>
      <div className={styles.imgContainer}>
        <Image src={faceSwapImg} alt="face-swap" className={styles.img} />
      </div>
      <div className={styles.faceSwapContent}>
        <div className={styles.top}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>Face Swap</p>
            <div className={styles.free}>
              {/* <Image src={free} alt="face-swap" /> */}
              <p className={styles.freeTxt}>
                <span className={`${styles.span} ${styles.span1}`}>F</span>
                <span className={`${styles.span} ${styles.span2}`}>R</span>
                <span className={`${styles.span} ${styles.span3}`}>E</span>
                <span className={`${styles.span} ${styles.span4}`}>E</span>
              </p>
            </div>
          </div>
          <p className={styles.description}>
            Now you can effortlessly transform your videos and photos into
            enchanting master pieces using our incredible filters.
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.swapImg}>
            {faceSwap?.map((item, index) => (
              <div
                className={` ${faceSwapIndex === index ? styles.active : ""} ${
                  styles.imgContainer
                }`}
                key={index}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  onClick={() => {
                    setFaceSwapIndex(index);
                    setFaceSwapImg(item.img);
                  }}
                  className={styles.img}
                />
              </div>
            ))}
          </div>
          <Link href={"/face-swap"} className={styles.link}>
            <button className={`btn1 ${styles.btn}`}>Try it out</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
