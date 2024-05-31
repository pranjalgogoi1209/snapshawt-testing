import React, { useEffect } from "react";
import styles from "./aiFaceSwap.module.css";
import Image from "next/image";
import Link from "next/link";

import dots from "@/../public/home/aifaceswap/dots.png";
import lineIcon from "@/../public/home/aifaceswap/lineIcon.png";
import roundIcon from "@/../public/home/aifaceswap/roundIcon.png";
import rightIcon from "@/../public/home/aifaceswap/rightIcon.svg";
import faceSwap02 from "@/../public/home/hero/faceSwap02.jpg";
import { usePathname } from "next/navigation";
const AiFaceSwap = () => {
  const pathname = usePathname();

  useEffect(() => {
    //ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });
  }, []);

  return (
    <div className={`flex-col-center ${styles.AiFaceSwap}`}>
      <h1 className={`grd-txt ${styles.heading}`}>
        Leverage Snapshawt AI&apos;s free tools
      </h1>
      <div className={`flex-row-center ${styles.leftHeadContainer}`}>
        <div className={styles.leftContainer}>
          <div className={styles.mainContainer}>
            {/* main image */}
            <div className={styles.imgContainer}>
              <Image
                src={faceSwap02}
                alt="ai-face-swap"
                className={styles.img}
              />
            </div>

            {/* dots-icon */}
            <div className={styles.dotsImgContainer}>
              <Image src={dots} alt="dots" className={styles.img} />
            </div>

            {/* one-click-magic */}
            <div className={styles.oneClickMagic}>ONE CLICK MAGIC</div>

            {/* lines-img */}
            <div className={styles.linesImgContainer}>
              <Image src={lineIcon} alt="line-icon" />
            </div>

            {/* round-icon */}
            <div className={styles.roundIcon}>
              <Image src={roundIcon} alt="roundIcon" className={styles.img} />
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <p className="cursiveFont">#Snapshawt photos</p>
          <h2>AI Face Swap</h2>
          <strong className={`txt2 ${styles.txtStrong}`}>
            Transform with Snapshawt's face swap AI!
          </strong>
          <p className="txt2">
            Ever imagined being a superhero, posing in front of the Eiffel
            Tower, or trying out a professional look without a photo shoot? With
            Snapshawt's Gen AI, now you can turn those dreams into reality!
          </p>
          <Link href={"/face-swap"}>
            <button className={`btn3 ${styles.btn}`}>Try Now {">"}</button>
          </Link>

          {/* right-icont */}
          <div className={styles.rightIcon}>
            <Image src={rightIcon} alt="rightIcon" className={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiFaceSwap;
