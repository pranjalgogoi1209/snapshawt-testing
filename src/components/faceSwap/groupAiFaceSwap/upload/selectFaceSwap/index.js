import React from "react";
import styles from "./selectFaceSwap.module.css";
import Image from "next/image";

import addUser from "@/../public/faceSwap/groupAiFaceSwap/upload/addUser.svg";
import userFace from "@/../public/faceSwap/groupAiFaceSwap/upload/userFace.svg";
import arrow from "@/../public/faceSwap/groupAiFaceSwap/upload/arrow.svg";

export default function SelectFaceSwap() {
  const addFaceArr = [{}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <div className={styles.SelectFaceSwap}>
      <p className={`grd-txt ${styles.title}`}>Upload Faces to Swap</p>
      <div className={styles.addFaceContainer}>
        {addFaceArr?.map((item, index) => (
          <div className={styles.addFace} key={index}>
            <div className={styles.templateFace}>
              <Image src={userFace} alt="template-face" />
            </div>

            <div className={styles.arrow}>
              <Image src={arrow} alt="arrow" />
            </div>

            <div className={styles.photoFace}>
              <Image src={addUser} alt="photo/webcam-face" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
