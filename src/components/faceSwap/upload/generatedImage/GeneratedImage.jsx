import React from "react";
import styles from "./generatedImage.module.css";
import close from "./../../../../assets/faceSwap/generatedImage/close.png";
import { animateScroll as scroll } from "react-scroll";
import Loading from "../../../loading/Loading";

export default function GeneratedImage({
  setIsGeneratedImageOpen,
  uploadContainerRef,
  generatedImg,
  setGeneratedImg,
  uploadPhotoImg,
  capturedImg,
}) {
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
                <div className={styles.imgParent}>
                  <img src={generatedImg} alt="generated-image" />
                </div>
              )}

              <div className={styles.container}>
                {/* image swap */}
                {(uploadPhotoImg || capturedImg) && (
                  <div className={styles.imgSwap}>
                    <img
                      src={uploadPhotoImg ? uploadPhotoImg : capturedImg}
                      alt="img-swap"
                    />
                  </div>
                )}

                {/* share option */}
                <div className={styles.shareOptions}>
                  {/* download */}
                  <button>download</button>
                  {/* share */}
                  <button>share</button>
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
