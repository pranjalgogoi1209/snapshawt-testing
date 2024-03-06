import React from "react";
import styles from "./faceSwapPage.module.css";
import Upload from "../../components/faceSwap/upload/Upload";

export default function FaceSwapPage() {
  return (
    <div className={styles.FaceSwapPage}>
      <Upload />
    </div>
  );
}
