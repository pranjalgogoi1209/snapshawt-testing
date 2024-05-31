import React from "react";
import styles from "./explore.module.css";

export default function Explore() {
  return (
    <div className={`flex-col-center ${styles.Explore}`}>
      <h1 className={styles.heading}>
        Explore Free Face Swap <br /> On Snapshawt
      </h1>
      <h3 className={styles.des}>
        Explore Snapshawt's Free Face Swap feature! Effortlessly
        <br />
        switch faces with friends and family for fun and memorable photos.
      </h3>
    </div>
  );
}
