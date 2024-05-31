import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./upload.module.css";
import Image from "next/image";
import Webcam from "react-webcam";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import { useMediaQuery } from 'react-responsive';

import GeneratedImage from "./generatedImage";
import BuyCraditsModal from "@/components/modals/buyCraditsModal";

import upload from "@/../public/faceSwap/singleAiFaceSwap/upload/upload.jpg";
import capture from "@/../public/faceSwap/singleAiFaceSwap/upload/capture.jpg";
import uploadBtn from "@/../public/faceSwap/singleAiFaceSwap/upload/uploadBtn.png";
import captureBtn from "@/../public/faceSwap/singleAiFaceSwap/upload/captureBtn.png";
import arrow from "@/../public/faceSwap/singleAiFaceSwap/upload/arrow.png";
import UserDB from "@/utils/userdb";

export default function Upload({
  selectedTemplate,
  setSelectedTemplate,
  setUploadTemplateImg,
  uploadTemplateImg,
  uploadContainerRef,
  templatesRef,
}) {
  const selector = useSelector(data => data.credits);
  const textRef = useRef(null);
  const [isCaptured, setIsCaptured] = useState(false);
  const uploadPhotoRef = useRef(null);
  const uploadPhotoRef2 = useRef(null);
  const uploadTemplateRef = useRef(null);
  const webRef = useRef();
  const router = useRouter();
  const [uploadPhotoImg, setUploadPhotoImg] = useState("");
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const [capturedImg, setCapturedImg] = useState("");
  const [isGeneratedImageOpen, setIsGeneratedImageOpen] = useState(false);
  const [generatedImg, setGeneratedImg] = useState();
  const [showBuyCraditsModal, setShowBuyCraditsModal] = useState(false);
  
  const [isMobileView, setIsMobileView] = useState(false);


  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  useEffect(() => {
    setIsMobileView(isMobile);
  }, [isMobile]);


  console.log(isMobileView);

  // upload template
  /*  const handleUploadTemplateChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadTemplateImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }; */

  const handleUploadTemplateChange = e => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploadTemplateImg(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        toast.error("Please select a valid image file...", toastOptions);
        e.target.value = null;
        return;
      }
    }
  };

  const handleUploadTemplate = () => {
    console.log("uploading template");
    uploadTemplateRef.current.click();
    setSelectedTemplate("");
  };

  // upload photo
  /*   const handleUploadPhotoChange = e => {
    console.log("onchange working");
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadPhotoImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }; */

  const handleUploadPhotoChange = e => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploadPhotoImg(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        toast.error("Please select a valid image file...", toastOptions);
        e.target.value = null;
      }
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
  /*   const handleUploadPhotoChange2 = e => {
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
  }; */

  const handleUploadPhotoChange2 = e => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploadPhotoImg(reader.result);
          setIsCaptured(false);
        };
        reader.readAsDataURL(file);
      } else {
        toast.error("Please select a valid image file...", toastOptions);
        e.target.value = null;
        return;
      }
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
/*   const handleCapturePhoto = () => {
    if (textRef.current.innerText === "Capture") {
      setCapturedImg(webRef.current.getScreenshot());
      textRef.current.innerText = "Retake";
      setUploadPhotoImg("");
    } else {
      capturedImg && setCapturedImg("");
      textRef.current.innerText = "Capture";
    }
  }; */

  const handleCapturePhoto = () => {
    console.log("working... ", isCaptured);
    if(isCaptured){
      capturedImg && setCapturedImg("");
      setIsCaptured(false)
    }else{
      setCapturedImg(webRef.current.getScreenshot());
      setIsCaptured(true)
      setUploadPhotoImg("");
    }
  }


  // toast options
  const toastOptions = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  // handleSwapNow
  const handleSwapNow = async () => {
    // api calling
    if (
      (selectedTemplate || uploadTemplateImg) &&
      (capturedImg || uploadPhotoImg)
    ) {
      // checking user is signed in or not
      if (UserDB.getUser()) {
        if (
          selector[selector.length - 1] !== 0 &&
          selector[selector.length - 1] > 0
        ) {
          setIsGeneratedImageOpen(true);
          // setIsWebcamOpen(false);
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
            .post(process.env.SERVER_BASE_URL + "/image/post", {
              userId: UserDB.getUser()._id,
              image: userImage.split(",")[1],
              choice: template.split(",")[1],
            })
            .then(function (response) {
              // console.log(response);

              setGeneratedImg({
                img: `data:image/webp;base64,${response.data.result}`,
                url: response.data.url,
              });
              UserDB.getUser().redeemCredits(1);
            })
            .catch(function (error) {
              // console.log(error);
              toast.error(error.response.data.message, toastOptions);
              setIsGeneratedImageOpen(false);
            });
        } else {
          setShowBuyCraditsModal(true);
        }
      } else {
        // toast.error("Please signin yourself...", toastOptions);
        router.push("/signin");
      }
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

  // console.log(selector[selector.length - 1]);

  const handleTemplates = () => {
    if (templatesRef) {
      scroll.scrollTo(templatesRef.current.offsetTop - 50, {
        duration: 500,
        smooth: "easeInOutQuart",
      });
    }
  };

  return (
    <div className={styles.Upload} >
      <h1 className={`grd-txt`}> Single AI Face Swap</h1>
      <div className={`flex-row-center ${styles.uploadContainer}`}>
        {/* upload template */}
        <div ref={uploadContainerRef}  onClick={handleTemplates} className={styles.uploadTemplate}>
          <div className={`flex-col-center ${styles.titleContainer}`}>
            <p className={`grd-txt ${styles.title}`}>
              Upload or Select Templates
            </p>
          </div>

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
                  width={300}
                  height={300}
                />
              </div>

              <div className={styles.uploadBtnContainer}>
                <div
                  onClick={e => {
                    e.stopPropagation();
                  }}
                  className={styles.newUploadBtn}
                >
                  <Image
                    src={uploadBtn}
                    alt="upload button"
                    onClick={handleUploadTemplate}
                  />
                  <input
                    type="file"
                    ref={uploadTemplateRef}
                    onChange={handleUploadTemplateChange}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* arrow */}
        <div>
          <Image src={arrow} alt="arrow" className={styles.arrow} />
        </div>

        {/* upload/capture your photo */}
        <div className={styles.uploadYourPhoto}>
          <div className={`flex-col-center ${styles.titleContainer}`}>
            <p className={`grd-txt ${styles.title}`}>
              {
                isCaptured ?  "Do You Like It ?" : "Upload or Capture Image"
              }
              </p>
          </div>

          <div className={styles.baap}>
            {!isWebcamOpen && (
              <div className={styles.imgBoundary2}>
                <div
                  onClick={() => {setIsWebcamOpen(true); setUploadPhotoImg("")}}
                  className={styles.imgContainer}
                >
                  <div className={styles.imgParent}>
                    <Image
                      src={uploadPhotoImg ? uploadPhotoImg : capture}
                      alt="upload photo"
                      width={300}
                      height={300}
                      className={styles.img}
                    />
                  </div>
                  <div className={`${styles.uploadBtnContainer}`}>
                    <div
                      onClick={e => {
                        e.stopPropagation();
                      }}
                      className={styles.newUploadBtn}
                    >
                      <Image
                        src={uploadBtn}
                        alt="upload button"
                        onClick={handleUploadPhoto}
                      />
                      <input
                        type="file"
                        ref={uploadPhotoRef}
                        onChange={handleUploadPhotoChange}
                        style={{ display: "none" }}
                      />
                    </div>

                    {/*  <div className={styles.btnGrandParent}>
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
                    </div> */}
                    {/*  <div className={styles.btnGrandParent}>
                      <div
                        className={styles.btnParent}
                        onClick={() => setIsWebcamOpen(true)}
                      >
                        <Image src={captureBtn} alt="capture button" />
                      </div>
                      <p className={styles.p}>Capture</p>
                    </div> */}

                  </div>
                </div>
              </div>
            )}

            {/* webcam */}
            {isWebcamOpen && (
              <div className={styles.imgBoundary2}>
                <div className={styles.webcamContainer}>
                  <div className={styles.webcamParent}>
                    {!capturedImg && (
                      <Webcam
                        ref={webRef}
                        id={styles.webcam}
                        forceScreenshotSourceSize={true}
                      />
                    )}
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
                    <div
                      onClick={handleUploadPhoto2}
                      className={styles.newUploadBtn}
                    >
                      <Image src={uploadBtn} alt="upload button" />
                      <input
                        type="file"
                        ref={uploadPhotoRef2}
                        onChange={handleUploadPhotoChange2}
                        style={{ display: "none" }}
                      />
                    </div>

                    <div
                      onClick={handleCapturePhoto}
                      className={styles.newCaptureBtn}
                    >
                      <Image src={captureBtn} alt="upload button" />
                      <p ref={textRef} className={styles.p}>
                        {
                          isCaptured ? "Retake" : "Capture"
                        }
                      </p>
                    </div>

                    {/*  <div className={styles.btnGrandParent}>
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
                    </div> */}

                    {/* <div className={styles.btnGrandParent}>
                      <div
                        onClick={handleCapturePhoto}
                        className={styles.btnParent}
                      >
                        <Image
                          src={captureBtn}
                          alt="upload button"
                          width={100}
                          height={100}
                        />
                      </div>
                      <p ref={textRef} className={styles.p}>
                        Capture
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            )}
          </div>

            {
            (isMobileView && isCaptured || uploadPhotoImg) && <button onClick={() => { 
              if (uploadContainerRef) {
                scroll.scrollTo(uploadContainerRef.current.offsetTop - 100, {
                  duration: 500,
                  smooth: "easeInOutQuart",
                });
              }
            }}  className={`btn2`}>Yes! Submit</button>
          }
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

      {showBuyCraditsModal && (
        <BuyCraditsModal setShowBuyCraditsModal={setShowBuyCraditsModal} />
      )}

      <ToastContainer />
    </div>
  );
}
