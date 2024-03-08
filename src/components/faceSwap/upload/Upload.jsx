import React, { useState, useRef, useEffect } from "react";
import styles from "./upload.module.css";
import upload from "./../../../assets/faceSwap/upload/upload.png";
import uploadBtn from "./../../../assets/faceSwap/upload/uploadBtn.png";
import captureBtn from "./../../../assets/faceSwap/upload/captureBtn.png";
import Webcam from "react-webcam";
import GeneratedImage from "./generatedImage/GeneratedImage";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  // handleSwapNow
  const handleSwapNow = () => {
    // api calling
    if (
      (selectedTemplate || uploadTemplateImg) &&
      (capturedImg || uploadPhotoImg)
    ) {
      setIsGeneratedImageOpen(true);
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
        .post("https://953e-103-17-110-127.ngrok-free.app/rec", {
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
      {/* credit btn */}
      {/* <button className={`btn2 ${styles.creditBtn}`}>Credit = 5</button> */}

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
                    ? uploadTemplateImg
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
                    src={uploadPhotoImg ? uploadPhotoImg : upload}
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
