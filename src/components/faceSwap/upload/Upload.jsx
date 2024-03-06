import React from "react";
import styles from "./upload.module.css";

export default function Upload() {
  return (
    <div className={styles.Upload}>
      {/* credit btn */}
      <button className={`btn2 ${styles.creditBtn}`}>Credit = 5</button>

      {/* upload */}
      <div className={styles.uploadContainer}>
        {/* upload template */}
        <div className={styles.uploadTemplate}>
          <p className={`grd-txt ${styles.title}`}>
            Upload or Choose
            <br />
            our Templates
          </p>
          <div className={styles.imgContainer}>
            <div className={styles.imgParent}>
              <img src="#" alt="upload template" />
            </div>
            <div className={styles.uploadBtnContainer}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
