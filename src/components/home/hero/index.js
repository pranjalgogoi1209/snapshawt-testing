import React, { useState, useEffect } from "react";
import styles from "./hero.module.css";

import HeroMobile from "./heroMobile";
import CommingSoonModal from "@/components/modals/commingSoonModal";

import FaceSwapHero from "./faceSwapHero";
import ImgInhancerHero from "./imgInhancerHero";
import ImgGeneratorHero from "./imgGeneratorHero";
import AiDriven from "./aidriven";

export default function Hero() {
  const [displayCard, setDisplayCard] = useState("faceswap");
  const [showCommingSoonModal, setShowCommingSoonModal] = useState(false);

  // change cards
  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (displayCard) {
        case "faceswap":
          setDisplayCard("enhancer");
          break;
        case "enhancer":
          setDisplayCard("generator");
          break;
        case "generator":
          setDisplayCard("faceswap");
          break;
        default:
          setDisplayCard("faceswap");
          break;
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [displayCard]);

  return (
    <div className={styles.Hero}>
      {/* bg */}
      <div className={styles.bgContainer}>
        <div className={`${styles.bgOne} ${styles.bg}`}></div>
        <div className={`${styles.bgTwo} ${styles.bg}`}></div>
      </div>

      {/* content */}
      <div className={styles.contentContainer}>
        <div className={styles.containerOne}>
          <div className={`flex-col-center ${styles.top}`}>
            {displayCard === "faceswap" && (
              <h1 className={"grd-txt"}>AI Face Swap </h1>
            )}
            {displayCard === "enhancer" && (
              <h1 className={"grd-txt"}>AI Image Enhancer</h1>
            )}
            {displayCard === "generator" && (
              <h1 className={"grd-txt"}>AI Image Generator </h1>
            )}

            {displayCard === "faceswap" && (
              <p className={`txt1 ${styles.description}`}>
                Effortlessly swap faces with our cutting-edge AI-powered face
                swap. Express yourself with freedom !
              </p>
            )}

            {displayCard === "enhancer" && (
              <p className={`txt1 ${styles.description}`}>
                Experience Seamless Image Enhancer Online. Turn Your Photos into
                Fun Creations Instantly !
              </p>
            )}

            {displayCard === "generator" && (
              <p className={`txt1 ${styles.description}`}>
                Experience Seamless Image Generate Online. Turn Your Photos into
                Fun Creations Instantly !
              </p>
            )}
          </div>
          <div className={styles.cards}>
            {/* face swap */}
            <FaceSwapHero setDisplayCard={setDisplayCard} />

            {/* ai image enhancer */}
            <ImgInhancerHero
              setDisplayCard={setDisplayCard}
              setShowCommingSoonModal={setShowCommingSoonModal}
            />

            {/* ai image generator */}
            <ImgGeneratorHero
              setDisplayCard={setDisplayCard}
              setShowCommingSoonModal={setShowCommingSoonModal}
            />
          </div>

          {/* hero mobile */}
          <div className={styles.heroMobile}>
            <HeroMobile setShowCommingSoonModal={setShowCommingSoonModal} />
          </div>
        </div>
        <div className={styles.containerTwo}>
          <AiDriven />
        </div>
      </div>

      {/* comming soon modal */}
      {showCommingSoonModal && (
        <CommingSoonModal
          showCommingSoonModal={showCommingSoonModal}
          setShowCommingSoonModal={setShowCommingSoonModal}
        />
      )}
    </div>
  );
}
