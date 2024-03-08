import React, { useEffect, useState, useRef } from "react";
import styles from "./generatedImage.module.css";
import close from "./../../../../assets/faceSwap/generatedImage/close.png";
import { animateScroll as scroll } from "react-scroll";
import Loading from "../../../loading/Loading";
import download from "./../../../../assets/faceSwap/generatedImage/download.png";
import share from "./../../../../assets/faceSwap/generatedImage/share.png";
import exportAsImage from "../../../../utils/exportAsImage";

export default function GeneratedImage({
  setIsGeneratedImageOpen,
  uploadContainerRef,
  generatedImg,
  setGeneratedImg,
  uploadPhotoImg,
  capturedImg,
}) {
  const downloadRef = useRef(null);
  const swapImgRef = useRef(null);
  const [output, setOutput] = useState();
  const [isSwapped, setIsSwapped] = useState(false);

  // handleTryAgain
  const handleTryAgain = () => {
    setIsGeneratedImageOpen(false);
    if (uploadContainerRef) {
      scroll.scrollTo(uploadContainerRef.current.offsetTop, {
        duration: 500,
        smooth: "easeInOutQuart",
      });
    }
    setGeneratedImg("");
  };

  // handleSwapImage
  const handleSwapImage = e => {
    if (!isSwapped) {
      uploadPhotoImg ? setOutput(uploadPhotoImg) : setOutput(capturedImg);
      swapImgRef.current.src = generatedImg;
      console.dir(swapImgRef.current.src);
      setIsSwapped(true);
    } else {
      setOutput("");
      uploadPhotoImg
        ? (swapImgRef.current.src = uploadPhotoImg)
        : (swapImgRef.current.src = capturedImg);
      setIsSwapped(false);
    }
  };

  return (
    <section className={styles.GeneratedImage}>
      {generatedImg ? (
        <div className={styles.GeneratedImage}>
          <p className={`grd-txt ${styles.title}`}>
            Hurry! Your Snapshawt <br /> Is Ready To Share
          </p>
          {/* image container */}
          <div className={styles.imgContainer}>
            <div className={styles.parent}>
              {generatedImg && (
                <div className={styles.imgParent} ref={downloadRef}>
                  <img
                    src={output ? output : generatedImg}
                    alt="generated-image"
                  />
                </div>
              )}

              <div className={styles.container}>
                {/* image swap */}
                {(uploadPhotoImg || capturedImg) && (
                  <div className={styles.imgSwap}>
                    <img
                      ref={swapImgRef}
                      src={uploadPhotoImg ? uploadPhotoImg : capturedImg}
                      alt="img-swap"
                      onClick={e => handleSwapImage(e)}
                    />
                  </div>
                )}

                {/* share option */}
                <div className={styles.shareOptions}>
                  {/* download */}
                  <div
                    onClick={() =>
                      exportAsImage(downloadRef.current, "snapshawt-techkilla")
                    }
                    className={styles.download}
                  >
                    <img src={download} alt="download" />
                  </div>
                  {/* share */}
                  <div className={styles.share}>
                    <img src={share} alt="share" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* try again */}
          <button
            onClick={handleTryAgain}
            className={`btn2 ${styles.tryAgain}`}
          >
            Try Again
          </button>

          {/* close icon */}
          <div
            onClick={() => {
              setIsGeneratedImageOpen(false);
              setGeneratedImg("");
            }}
            className={styles.close}
          >
            <img src={close} alt="close" />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
}
