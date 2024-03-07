import React, { useState, useRef } from "react";
import styles from "./upload.module.css";
import upload from "./../../../assets/faceSwap/upload/upload.png";
import uploadBtn from "./../../../assets/faceSwap/upload/uploadBtn.png";
import captureBtn from "./../../../assets/faceSwap/upload/captureBtn.png";

export default function Upload() {
  const uploadTemplateRef = useRef(null);
  const uploadPhotoRef = useRef(null);
  const uploadCaptureRef = useRef(null);
  const [uploadTemplateImg, setUploadTemplateImg] = useState("");
  const [uploadPhotoImg, setUploadPhotoImg] = useState("");

  // upload template
  const handleUploadTemplateChange = e => {
    console.log(e.target.files[0]);
    setUploadTemplateImg(e.target.files[0]);
  };
  const handleUploadTemplate = () => {
    console.log("uploading template");
    uploadTemplateRef.current.click();
  };

  // upload photo
  const handleUploadPhotoChange = e => {
    console.log(e.target.files[0]);
    setUploadPhotoImg(e.target.files[0]);
  };
  const handleUploadPhoto = () => {
    console.log("uploading photo");
    uploadPhotoRef.current.click();
  };
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
            Our Templates
          </p>
          <div className={styles.imgContainer}>
            <div className={styles.imgParent}>
              <img
                src={
                  uploadTemplateImg
                    ? URL.createObjectURL(uploadTemplateImg)
                    : upload
                }
                alt="upload template"
              />
            </div>

            <div className={styles.uploadBtnContainer}>
              <div className={styles.btnGrandParent}>
                <div
                  className={styles.btnParent}
                  onClick={handleUploadTemplate}
                >
                  <img src={uploadBtn} alt="upload button" />
                  <input
                    type="file"
                    ref={uploadTemplateRef}
                    onChange={handleUploadTemplateChange}
                    style={{ display: "none" }}
                  />
                </div>
                <p>Upload</p>
              </div>
            </div>
          </div>
        </div>

        {/* upload/capture your photo */}
        <div className={styles.uploadYourPhoto}>
          <p className={`grd-txt ${styles.title}`}>
            Upload or Capture
            <br />
            Your Photo
          </p>
          <div className={styles.imgContainer}>
            <div className={styles.imgParent}>
              <img
                src={
                  uploadPhotoImg ? URL.createObjectURL(uploadPhotoImg) : upload
                }
                alt="upload template"
              />
            </div>
            <div className={`${styles.uploadBtnContainer}`}>
              <div className={styles.btnGrandParent}>
                <div onClick={handleUploadPhoto} className={styles.btnParent}>
                  <img src={uploadBtn} alt="upload button" />
                  <input
                    type="file"
                    ref={uploadPhotoRef}
                    onChange={handleUploadPhotoChange}
                    style={{ display: "none" }}
                  />
                </div>
                <p>Upload</p>
              </div>
              <div className={styles.btnGrandParent}>
                <div className={styles.btnParent}>
                  <img src={captureBtn} alt="capture button" />
                </div>
                <p>Capture</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* swap now btn */}
      <button className={`btn2 ${styles.swapNowBtn}`}>Swap Now</button>
    </div>
  );
}
