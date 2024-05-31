import React, { useState } from "react";
import styles from "./enanceImage.module.css";
import Image from "next/image";

import CommingSoonModal from "@/components/modals/commingSoonModal";

import icon from "@/../public/home/enhanceimage/icon.png";
import img from "@/../public/home/enhanceimage/img.png";

const EnhanceImage = () => {
  const [showCommingSoonModal, setShowCommingSoonModal] = useState(false);

  return (
    <div className={styles.EnhanceImage}>
      <div className={styles.leftContainer}>
        <p className="cursiveFont">New Age tech</p>
        <h2>AI Image Enhancer</h2>
        <strong className={`txt2 ${styles.strong}`}>
          Enhance low-quality images with Snapshawt AI.
        </strong>
        <p className="txt2">
          Say goodbye to blurry, low-quality images with Snapshawt&apos;s
          advanced AI technology, you can breathe new life into your favorite
          photos. Whether it&apos;s an old family snapshot, a cherished vacation
          picture, or a candid moment captured on camera, our image enhancer
          brings out the best in every image.
        </p>
        <button
          onClick={() => setShowCommingSoonModal(true)}
          className={`btn2 ${styles.btn}`}
        >
          Try Now {">"}
        </button>
      </div>

      <div className={styles.rightContainer}>
        {/* main image */}
        <div className={styles.imgContainer}>
          <Image src={img} alt="enhance-image" className={styles.img} />
        </div>

        {/* icon */}
        <div className={styles.iconContainer}>
          <Image src={icon} alt="icon" />
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
};

export default EnhanceImage;
