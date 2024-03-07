import React, { useState, useRef } from "react";
import styles from "./upload.module.css";
import upload from "./../../../assets/faceSwap/upload/upload.png";
import uploadBtn from "./../../../assets/faceSwap/upload/uploadBtn.png";
import captureBtn from "./../../../assets/faceSwap/upload/captureBtn.png";
import Webcam from "react-webcam";

export default function Upload({
  selectedTemplate,
  setUploadTemplateImg,
  uploadTemplateImg,
  uploadContainerRef,
}) {
  const textRef = useRef(null);
  const uploadPhotoRef = useRef(null);
  const uploadPhotoRef2 = useRef(null);
  const uploadCaptureRef = useRef(null);
  const uploadTemplateRef = useRef(null);
  const [uploadPhotoImg, setUploadPhotoImg] = useState("");
  const webRef = useRef();
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const [capturedImg, setCapturedImg] = useState("");
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
    console.log("onchange working");
    console.log(e.target.files[0]);
    setUploadPhotoImg(e.target.files[0]);
  };
  const handleUploadPhoto = () => {
    console.log("uploading photo");
    uploadPhotoRef.current.click();
    setIsWebcamOpen(false);
    setCapturedImg("");
    setUploadPhotoImg("");
  };

  // upload photo from capture image
  const handleUploadPhotoChange2 = e => {
    console.log("onchange working");
    console.log(e.target.files[0]);
    setUploadPhotoImg(e.target.files[0]);
    setIsWebcamOpen(false);
  };
  const handleUploadPhoto2 = () => {
    console.log("uploading photo", uploadPhotoRef2.current);
    uploadPhotoRef2.current.click();
    setCapturedImg("");
    setUploadPhotoImg("");
  };

  // handleCapturePhoto
  const handleCapturePhoto = () => {
    if (textRef.current.innerText === "Capture") {
      setCapturedImg(webRef.current.getScreenshot());
      textRef.current.innerText = "Retake";
      setUploadPhotoImg("");
    } else {
      capturedImg && setCapturedImg("");
      textRef.current.innerText = "Capture";
    }
  };
  // uploadPhotoRef2 && console.log(uploadPhotoRef2);
  return (
    <div className={styles.Upload} ref={uploadContainerRef}>
      {/* credit btn */}
      <button className={`btn2 ${styles.creditBtn}`}>Credit = 5</button>

      {/* upload */}
      <div className={styles.uploadContainer}>
        {/* upload template */}
        <div className={styles.uploadTemplate}>
          <p className={`grd-txt ${styles.title}`}>
            Upload or Choose
            <br />
            Our Template
          </p>
          <div className={styles.imgContainer}>
            <div className={styles.imgParent}>
              <img
                src={
                  uploadTemplateImg
                    ? URL.createObjectURL(uploadTemplateImg)
                    : selectedTemplate
                    ? selectedTemplate
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

          <div className={styles.baap}>
            {!isWebcamOpen && (
              <div className={styles.imgContainer}>
                <div className={styles.imgParent}>
                  <img
                    src={
                      uploadPhotoImg
                        ? URL.createObjectURL(uploadPhotoImg)
                        : upload
                    }
                    alt="upload template"
                  />
                </div>
                <div className={`${styles.uploadBtnContainer}`}>
                  <div className={styles.btnGrandParent}>
                    <div
                      onClick={handleUploadPhoto}
                      className={styles.btnParent}
                    >
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
                    <div
                      className={styles.btnParent}
                      onClick={() => setIsWebcamOpen(true)}
                    >
                      <img src={captureBtn} alt="capture button" />
                    </div>
                    <p>Capture</p>
                  </div>
                </div>
              </div>
            )}

            {/* webcam */}
            {isWebcamOpen && (
              <div className={styles.webcamContainer}>
                <div className={styles.webcamParent}>
                  <Webcam
                    ref={webRef}
                    id={styles.webcam}
                    forceScreenshotSourceSize={true}
                  />
                  {capturedImg && (
                    <img
                      src={capturedImg}
                      alt="captured image"
                      className={styles.capturedImage}
                    />
                  )}
                </div>
                <div className={styles.captureBtnContainer}>
                  <div className={styles.btnGrandParent}>
                    <div
                      onClick={handleUploadPhoto2}
                      className={styles.btnParent}
                    >
                      <img src={uploadBtn} alt="upload button" />
                      <input
                        type="file"
                        ref={uploadPhotoRef2}
                        onChange={handleUploadPhotoChange2}
                        style={{ display: "none" }}
                      />
                    </div>
                    <p>Upload</p>
                  </div>

                  {/* capture */}
                  <div className={styles.btnGrandParent}>
                    <div
                      onClick={handleCapturePhoto}
                      className={styles.btnParent}
                    >
                      <img src={captureBtn} alt="upload button" />
                    </div>
                    <p ref={textRef}>Capture</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* swap now btn */}
      <button className={`btn2 ${styles.swapNowBtn}`}>Swap Now</button>
    </div>
  );
}
