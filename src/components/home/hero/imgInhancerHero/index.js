import React, { useState } from "react";
import styles from "./imgInhancerHero.module.css";
import Link from "next/link";
import Image from "next/image";

import commingSoon from "@/../public/home/hero/commingSoon.svg";
import imgInhancer01 from "@/../public/home/hero/imgInhancer01.jpg";
import imgInhancer02 from "@/../public/home/hero/imgInhancer02.jpg";
import imgInhancer03 from "@/../public/home/hero/imgInhancer03.jpg";

export default function ImgInhancerHero({
  setDisplayCard,
  setShowCommingSoonModal,
}) {
  const [imgInhancerIndex, setImgInhancerIndex] = useState(0);
  const [imgInhancerImg, setImgInhancerImg] = useState(imgInhancer01);

  const imageInhancer = [
    {
      img: imgInhancer01,
      name: "single",
    },
    {
      img: imgInhancer02,
      name: "group",
    },
    {
      img: imgInhancer03,
      name: "video",
    },
  ];

  return (
    <div onClick={() => setDisplayCard("enhancer")} className={styles.faceSwap}>
      <div className={styles.imgContainer}>
        <Image src={imgInhancerImg} alt="face-swap" className={styles.img} />
      </div>
      <div className={styles.faceSwapContent}>
        <div className={styles.top}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>AI Image Enhancer</p>
            <div className={styles.free}>
              {/* <Image src={commingSoon} alt="face-swap" /> */}
              <p className={styles.freeTxt}>Coming Soon</p>
            </div>
          </div>
          <p className={styles.description}>
            Make the picture clearer and make the small details really pop so
            that the overall quality is amazing.
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.swapImg}>
            {imageInhancer?.map((item, index) => (
              <div
                className={` ${
                  imgInhancerIndex === index ? styles.active : ""
                } ${styles.imgContainer}`}
                key={index}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  onClick={() => {
                    setImgInhancerIndex(index);
                    setImgInhancerImg(item.img);
                  }}
                  className={styles.img}
                />
              </div>
            ))}
          </div>
          <div
            onClick={() => setShowCommingSoonModal(true)}
            className={styles.link}
          >
            <button className={`btn1 ${styles.btn}`}>Try it out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
