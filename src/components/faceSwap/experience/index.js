import React from "react";
import styles from "./experience.module.css";
import Image from "next/image";
import Link from "next/link";

import img from "@/../public/faceSwap/experience/experienceImg.jpg";
import unlimitedImg from "@/../public/faceSwap/experience/unlimitedImg.jpg";

const Experience = () => {
  return (
    <div className={`flex-col-center ${styles.EnhanceImage}`}>
      <div className={`flex-row-center ${styles.top}`}>
        <div className={styles.leftContainer}>
          {/* main image */}
          <div className={styles.imgContainer}>
            <Image src={img} alt="enhance-image" className={styles.img} />
          </div>
        </div>

        <div className={styles.rightContainer}>
          <h2>Experience limitless creative face swapping</h2>

          <p className={`txt2 ${styles.txt}`}>
            Snapshawt&apos;s innovative face swap technology allows you to
            seamlessly blend faces, creating hilarious and unique images.
            Whether you&apos;sre swapping faces with friends, family, or even
            your favorite celebrities, the possibilities are endless. Perfect
            for social media, parties, and creating un- forgettable memories,
            Snapshawt makes face swapping fun and easy.
            <br />
            <strong>
              Try it today and see where your creativity takes you!
            </strong>
          </p>
          <Link href={"/face-swap/single-ai-face-swap"}>
            <button className={`btn2 ${styles.btn}`}>
              Face Swap Now {">"}
            </button>
          </Link>
        </div>
      </div>

      <div className={`flex-row-center ${styles.imgContainer}`}>
        <Image src={unlimitedImg} className={styles.img} alt="enhance-image" />
      </div>

      {/* what you can do */}
      <div className={`flex-col-center ${styles.bottom}`}>
        <h2>What you can do with Face Swap?</h2>
        <p className={`txt2 ${styles.txt}`}>
          With Face Swap, you can create funny photos by swapping faces with
          friends, family, or pets for hilarious images that bring joy and
          amusement. Spice up your social media by adding a unique twist to your
          pictures, making your posts more engaging and fun. Make creative art
          by combining faces to produce imaginative and surreal images, and
          relive old memories by seeing family members in different scenarios
          with swapped faces. Have fun at parties by entertaining guests with
          instant laughs from group photo face swaps. Try celebrity faces to see
          yourself with the face of your favorite star, and experiment with new
          looks by exploring different hairstyles or facial features through
          face swapping with others.
        </p>
      </div>
    </div>
  );
};

export default Experience;
