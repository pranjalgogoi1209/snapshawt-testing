import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./upload.module.css";
import Image from "next/image";
import Webcam from "react-webcam";

import GeneratedImage from "./generatedImage/GeneratedImage";
import SelectFaceSwap from "./selectFaceSwap";

import upload from "@/../public/faceSwap/groupAiFaceSwap/upload/upload.png";
import uploadBtn from "@/../public/faceSwap/singleAiFaceSwap/upload/uploadBtn.png";
import captureBtn from "@/../public/faceSwap/singleAiFaceSwap/upload/captureBtn.png";

export default function Upload({
  selectedTemplate,
  setSelectedTemplate,
  setUploadTemplateImg,
  uploadTemplateImg,
  uploadContainerRef,
}) {
  const textRef = useRef(null);
  const uploadPhotoRef = useRef(null);
  const uploadPhotoRef2 = useRef(null);
  const uploadTemplateRef = useRef(null);
  const webRef = useRef();
  const [uploadPhotoImg, setUploadPhotoImg] = useState("");
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const [capturedImg, setCapturedImg] = useState("");
  const [isGeneratedImageOpen, setIsGeneratedImageOpen] = useState(false);
  const [generatedImg, setGeneratedImg] = useState();
  const [isTemplateBtnFill, setIsTemplateBtnFill] = useState(true);

  // upload template
  const handleUploadTemplateChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadTemplateImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUploadTemplate = () => {
    console.log("uploading template");
    uploadTemplateRef.current.click();
    setSelectedTemplate("");
  };

  // upload photo
  const handleUploadPhotoChange = e => {
    console.log("onchange working");
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadPhotoImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadPhotoImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setCapturedImg("");
    setIsWebcamOpen(false);
  };
  const handleUploadPhoto2 = () => {
    console.log("uploading photo", uploadPhotoRef2.current);
    uploadPhotoRef2.current.click();
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

  // toast options
  const toastOptions = {
    position: "top-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const handleSwapNow = () => {
    // api calling
    if (
      (selectedTemplate || uploadTemplateImg) &&
      (capturedImg || uploadPhotoImg)
    ) {
      setIsGeneratedImageOpen(true);
      setIsWebcamOpen(false);
      let userImage;
      if (capturedImg) {
        userImage = capturedImg;
      } else if (uploadPhotoImg) {
        userImage = uploadPhotoImg;
      }

      let template;
      if (selectedTemplate) {
        template = selectedTemplate;
      } else if (uploadTemplateImg) {
        template = uploadTemplateImg;
      }

      axios
        .post("https://h.ngrok.dev/rec", {
          image: userImage.split(",")[1],
          choice: template.split(",")[1],
        })
        .then(function (response) {
          console.log(response);
          setGeneratedImg(`data:image/webp;base64,${response.data.result}`);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      toast.error("Please upload or select images...", toastOptions);
    }
  };

  // Disable scrolling when isGeneratedImageOpen is true
  useEffect(() => {
    if (isGeneratedImageOpen) {
      document.body.classList.add(styles.disableScroll);
    } else {
      document.body.classList.remove(styles.disableScroll);
    }
  }, [isGeneratedImageOpen]);

  return (
    <div className={styles.Upload} ref={uploadContainerRef}>
      <h1 className={`grd-txt`}>Group AI Face Swap</h1>
      <div className={styles.swapBtns}>
        <button
          onClick={() => setIsTemplateBtnFill(true)}
          className={`${styles.btn} ${
            isTemplateBtnFill ? styles.fillSwapBtn : ""
          }`}
        >
          Upload or Choose Template
        </button>
        <button
          onClick={() => setIsTemplateBtnFill(false)}
          className={`${styles.btn} ${
            !isTemplateBtnFill ? styles.fillSwapBtn : ""
          }`}
        >
          Upload or Capture photo
        </button>
      </div>
      <div className={styles.uploadContainer}>
        {isTemplateBtnFill ? (
          // upload or choose template
          <div className={styles.uploadTemplate}>
            {/*  <p className={`grd-txt ${styles.title}`}>
              Upload or Choose Our Template
            </p> */}
            <div className={styles.imgBoundary}>
              <div className={styles.imgContainer}>
                <div className={styles.imgParent}>
                  <Image
                    src={
                      uploadTemplateImg
                        ? uploadTemplateImg
                        : selectedTemplate
                        ? selectedTemplate
                        : upload
                    }
                    alt="upload template"
                    className={styles.img}
                    width={100}
                    height={100}
                  />
                </div>

                <div className={styles.uploadBtnContainer}>
                  <div className={styles.btnGrandParent}>
                    <div
                      className={styles.btnParent}
                      onClick={handleUploadTemplate}
                    >
                      <Image src={uploadBtn} alt="upload button" />
                      <input
                        type="file"
                        ref={uploadTemplateRef}
                        onChange={handleUploadTemplateChange}
                        style={{ display: "none" }}
                      />
                    </div>
                    <p className={styles.p}>Upload</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // upload or capture your photo
          <div className={styles.uploadYourPhoto}>
            {/*  <p className={`grd-txt ${styles.title}`}>
              Upload or Capture Your Photo
            </p> */}

            <div className={styles.baap}>
              {!isWebcamOpen && (
                <div className={styles.imgBoundary}>
                  <div className={styles.imgContainer}>
                    <div className={styles.imgParent}>
                      <Image
                        src={uploadPhotoImg ? uploadPhotoImg : upload}
                        alt="upload photo"
                        width={100}
                        height={100}
                        style={{ borderRadius: "1.5vw" }}
                      />
                    </div>
                    <div className={`${styles.uploadBtnContainer}`}>
                      <div className={styles.btnGrandParent}>
                        <div
                          onClick={handleUploadPhoto}
                          className={styles.btnParent}
                        >
                          <Image src={uploadBtn} alt="upload button" />
                          <input
                            type="file"
                            ref={uploadPhotoRef}
                            onChange={handleUploadPhotoChange}
                            style={{ display: "none" }}
                          />
                        </div>
                        <p className={styles.p}>Upload</p>
                      </div>
                      <div className={styles.btnGrandParent}>
                        <div
                          className={styles.btnParent}
                          onClick={() => setIsWebcamOpen(true)}
                        >
                          <Image src={captureBtn} alt="capture button" />
                        </div>
                        <p className={styles.p}>Capture</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* webcam */}
              {isWebcamOpen && (
                <div className={styles.imgBoundary}>
                  <div className={styles.webcamContainer}>
                    <div className={styles.webcamParent}>
                      <Webcam
                        ref={webRef}
                        id={styles.webcam}
                        forceScreenshotSourceSize={true}
                      />
                      {capturedImg && (
                        <Image
                          src={capturedImg}
                          alt="captured image"
                          className={styles.capturedImage}
                          height={100}
                          width={100}
                        />
                      )}
                    </div>
                    <div className={styles.captureBtnContainer}>
                      <div className={styles.btnGrandParent}>
                        <div
                          onClick={handleUploadPhoto2}
                          className={styles.btnParent}
                        >
                          <Image src={uploadBtn} alt="upload button" />
                          <input
                            type="file"
                            ref={uploadPhotoRef2}
                            onChange={handleUploadPhotoChange2}
                            style={{ display: "none" }}
                          />
                        </div>
                        <p className={styles.p}>Upload</p>
                      </div>

                      {/* capture */}
                      <div className={styles.btnGrandParent}>
                        <div
                          onClick={handleCapturePhoto}
                          className={styles.btnParent}
                        >
                          <Image src={captureBtn} alt="upload button" />
                        </div>
                        <p ref={textRef} className={styles.p}>
                          Capture
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* select face to swap */}
        <SelectFaceSwap />
      </div>

      {/* swap now btn */}
      <button className={`btn2 ${styles.swapNowBtn}`} onClick={handleSwapNow}>
        Swap Now
      </button>

      {isGeneratedImageOpen && (
        <GeneratedImage
          setIsGeneratedImageOpen={setIsGeneratedImageOpen}
          uploadContainerRef={uploadContainerRef}
          generatedImg={generatedImg}
          setGeneratedImg={setGeneratedImg}
          uploadPhotoImg={uploadPhotoImg}
          capturedImg={capturedImg}
        />
      )}

      <ToastContainer />
    </div>
  );
}
