import React, { useEffect, useState, useRef } from "react";
import styles from "./generatedImage.module.css";
import { animateScroll as scroll } from "react-scroll";
import Image from "next/image";

import exportAsImage from "@/utils/exportAsImage";
import Loading from "@/components/loading/Loading";
import ShareOptions from "./shareOptions";

import close from "@/../public/faceSwap/singleAiFaceSwap/generatedImage/close.png";
import download from "@/../public/faceSwap/singleAiFaceSwap/generatedImage/download.png";
import share from "@/../public/faceSwap/singleAiFaceSwap/generatedImage/share.png";

export default function GeneratedImage({
  setIsGeneratedImageOpen,
  uploadContainerRef,
  generatedImg,
  setGeneratedImg,
  uploadPhotoImg,
  capturedImg,
}) {
  var imageURL = "";
  const downloadRef = useRef(null);
  const swapImgRef = useRef(null);
  const [output, setOutput] = useState();
  const [isSwapped, setIsSwapped] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  // handleTryAgain
  const handleTryAgain = () => {
    setIsGeneratedImageOpen(false);
    if (uploadContainerRef) {
      scroll.scrollTo(uploadContainerRef.current.offsetTop-1000, {
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
      swapImgRef.current.src = generatedImg.img;
      //console.dir(swapImgRef.current.src);
      setIsSwapped(true);
    } else {
      setOutput("");
      uploadPhotoImg
        ? (swapImgRef.current.src = uploadPhotoImg)
        : (swapImgRef.current.src = capturedImg);
      setIsSwapped(false);
    }
  };


  useEffect(() => {
     
    // console.log(generatedImg);
  }, [generatedImg]);

  return (
    <section className={styles.GeneratedImage}>
      {generatedImg ? (
        <div className={styles.parentAll}>
          <p className={`grd-txt ${styles.title}`}>
            Hurry! Your Snapshawt <br /> Is Ready To Share
          </p>
          {/* image container */}
          <div className={styles.imgContainer}>
            <div className={styles.parent}>
              {generatedImg && (
                <div className={styles.imgParent}>
                  <Image
                    ref={downloadRef}
                    src={output ? output : generatedImg.img}
                    alt="generated-image"
                    className={styles.img}
                    width={150}
                    height={150}
                  />
                </div>
              )}

              <div className={styles.container}>
                {/* image swap */}
                {(uploadPhotoImg || capturedImg) && (
                  <div className={styles.imgSwap}>
                    <Image
                      ref={swapImgRef}
                      src={uploadPhotoImg ? uploadPhotoImg : capturedImg}
                      alt="img-swap"
                      onClick={e => handleSwapImage(e)}
                      className={styles.img}
                      width={150}
                      height={150}
                    />
                  </div>
                )}

                {/* share option */}
                <div className={styles.shareOptions}>
                  {/* download */}
                  <div
                    onClick={() =>{
                      const today = new Date();

                      const year = today.getFullYear();
                      const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
                      const day = String(today.getDate()).padStart(2, '0');
                      const hours = String(today.getHours()).padStart(2, '0');
                      const minutes = String(today.getMinutes()).padStart(2, '0');
                      const seconds = String(today.getSeconds()).padStart(2, '0');
                      const fullDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
                      exportAsImage(downloadRef.current, `snapshawt-image ${fullDateTime}`)
                      }}
                     className={styles.download}
                  >
                    <Image
                      src={download}
                      alt="download"
                      width={100}
                      height={100}
                    />
                  </div>
                  {/* share */}
                  <div
                    onClick={() => setShowShareOptions(true)}
                    className={styles.share}
                  >
                    <Image src={share} alt="share" width={100} height={100} />
                  </div>
                </div>
              </div>
            </div>

            {/* close icon */}
            <div
              onClick={() => {
                setIsGeneratedImageOpen(false);
                setGeneratedImg("");
              }}
              className={styles.close}
            >
              <Image src={close} alt="close" />
            </div>
          </div>

          {/* try again */}
          <button
            onClick={handleTryAgain}
            className={`btn2 ${styles.tryAgain}`}
          >
            Try Again
          </button>

          {/* share options */}
          {showShareOptions && (
            <ShareOptions
              imageURL={generatedImg.url}
              setShowShareOptions={setShowShareOptions}
            />
          )}
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
}
