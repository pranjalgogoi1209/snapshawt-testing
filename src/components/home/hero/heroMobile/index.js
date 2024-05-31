import React, { useState, useEffect } from "react";
import styles from "./heroMobile.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import FaceSwapHero from "./../faceSwapHero";
import ImgInhancerHero from "./../imgInhancerHero";
import ImgGeneratorHero from "./../imgGeneratorHero";

export default function HeroMobile({ setShowCommingSoonModal }) {
  const [displayCard, setDisplayCard] = useState("faceswap");

  // change cards
  /*   useEffect(() => {
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
  }, [displayCard]); */

  return (
    <div className={styles.HeroMobile}>
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
            Effortlessly swap faces with our cutting-edge AI-powered face swap.
            <br />
            Express yourself with freedom !
          </p>
        )}

        {displayCard === "enhancer" && (
          <p className={`txt1 ${styles.description}`}>
            Experience Seamless Image Enhancer Online. Turn Your Photos into Fun
            Creations Instantly !
          </p>
        )}

        {displayCard === "generator" && (
          <p className={`txt1 ${styles.description}`}>
            Experience Seamless Image Generate Online. Turn Your Photos into Fun
            Creations Instantly !
          </p>
        )}
      </div>

      {/* cards Mobile */}
      <div className={styles.cardsMobile}>
        <div className={`flex-row-center ${styles.title}`}>
          <p
            /* onClick={() => setDisplayCard("faceswap")} */
            className={`${styles.text} ${styles.textUnique} ${
              displayCard === "faceswap" ? styles.titleUnderline : ""
            }`}
          >
            Face Swap
          </p>
          <p
            /* onClick={() => setDisplayCard("enhancer")} */
            className={`${styles.text} ${
              displayCard === "enhancer" ? styles.titleUnderline : ""
            }`}
          >
            AI Image Enhancer
          </p>
          <p
            /* onClick={() => setDisplayCard("generator")} */
            className={`${styles.text} ${
              displayCard === "generator" ? styles.titleUnderline : ""
            }`}
          >
            AI Image Generator
          </p>
        </div>
        <div className={styles.changeCard}>
          {/*  {displayCard === "faceswap" && (
            <FaceSwapHero setDisplayCard={setDisplayCard} />
          )}

          {displayCard === "enhancer" && (
            <ImgInhancerHero setDisplayCard={setDisplayCard} />
          )}

          {displayCard === "generator" && (
            <ImgGeneratorHero setDisplayCard={setDisplayCard} />
          )} */}

          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={swiper => console.log(swiper)}
            className={`flex-row-center ${styles.swiper}`}
            onSlideChange={swiper => {
              const activeIndex = swiper.activeIndex;
              switch (activeIndex) {
                case 0:
                  setDisplayCard("faceswap");
                  break;
                case 1:
                  setDisplayCard("enhancer");
                  break;
                case 2:
                  setDisplayCard("generator");
                  break;
                default:
                  setDisplayCard("faceswap");
              }
            }}
          >
            <SwiperSlide className={`flex-row-center ${styles.swiperSlide}`}>
              <FaceSwapHero setDisplayCard={setDisplayCard} />
            </SwiperSlide>

            <SwiperSlide className={`flex-row-center ${styles.swiperSlide}`}>
              <ImgInhancerHero
                setDisplayCard={setDisplayCard}
                setShowCommingSoonModal={setShowCommingSoonModal}
              />
            </SwiperSlide>

            <SwiperSlide className={`flex-row-center ${styles.swiperSlide}`}>
              <ImgGeneratorHero
                setDisplayCard={setDisplayCard}
                setShowCommingSoonModal={setShowCommingSoonModal}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
