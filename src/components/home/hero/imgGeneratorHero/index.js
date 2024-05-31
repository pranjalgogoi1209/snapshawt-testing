import React, { useState, useEffect } from "react";
import styles from "./imgGeneratorHero.module.css";
import Link from "next/link";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";

import commingSoon from "@/../public/home/hero/commingSoon.svg";
import imgGenerator01 from "@/../public/home/hero/imgGenerator01.jpg";
import imgGenerator02 from "@/../public/home/hero/imgGenerator02.jpg";
import imgGenerator03 from "@/../public/home/hero/imgGenerator03.jpg";
import imgGenerator04 from "@/../public/home/hero/imgGenerator04.jpg";

const list = [imgGenerator01, imgGenerator02, imgGenerator03, imgGenerator04];

const textList = [
  "Couple in Paris romantic sunset",
  "Indian women in Dubai city",
  "Indian boy with Butterfly on him",
  "young Indian girl in temple smiling",
];
export default function ImgGeneratorHero({
  setDisplayCard,
  setShowCommingSoonModal,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [typingCompleted, setTypingCompleted] = useState(false);
  const [showBlur, setShowBlur] = useState(true);

  useEffect(() => {
    const currentIndex = typingText.length;
    const currentTarget = textList[currentImageIndex];
    const targetLength = currentTarget.length;

    const timePerCharacter = 3000 / targetLength;

    if (!typingCompleted && currentIndex < targetLength) {
      const timeout = setTimeout(() => {
        setTypingText(currentTarget.substring(0, currentIndex + 1));
      }, timePerCharacter);

      return () => clearTimeout(timeout);
    }
  }, [typingText, typingCompleted, currentImageIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % list.length);
      setTypingText("");
      setTypingCompleted(false);
      setShowBlur(true);

      setTimeout(() => {
        setShowBlur(false);
      }, 3500);
    }, 6000);
    return () => clearInterval(intervalId);
  }, []);

  const currentImage = list[currentImageIndex];

  return (
    <div
      onClick={() => setDisplayCard("generator")}
      className={styles.faceSwap}
    >
      <div className={styles.imgContainer}>
        <Image
          src={currentImage}
          alt="ai-face-swap"
          className={`${styles.img} ${showBlur ? styles.blur : ""}`}
        />
      </div>
      <div className={styles.faceSwapContent}>
        <div className={styles.top}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>AI Image Generator</p>
            <div className={styles.free}>
              {/*  <Image src={commingSoon} alt="face-swap" /> */}
              <p className={styles.freeTxt}>Coming Soon</p>
            </div>
          </div>
          <p className={styles.description}>
            Turn your ideas into reality and generate stunning visual content.
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.search}>
            <p className={styles.prompt}>
              {typingCompleted ? (
                textList[currentImageIndex]
              ) : (
                <>{typingText}</>
              )}
            </p>
            <IoSearchOutline className={styles.svg} />
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
