"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./faceSwap.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga4";
// import { useSelector } from "react-redux";
/* import {
  onAuthStateChanged,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import UserDB from "@/utils/userdb"; */

import CommingSoonModal from "@/components/modals/commingSoonModal";
import Explore from "@/components/faceSwap/explore";
import Experience from "@/components/faceSwap/experience";
import Funny from "@/components/faceSwap/funny";
import SocialMedia from "@/components/faceSwap/socialMedia";
import CreativeArt from "@/components/faceSwap/creativeArt";
import OldMemories from "@/components/faceSwap/oldMemories";
import Parties from "@/components/faceSwap/parties";
import Celebrity from "@/components/faceSwap/celebrity";
import Experiment from "@/components/faceSwap/experiment";

import singleFaceSwap from "@/../public/faceSwap/singleFaceSwap.jpg";
import groupFaceSwap from "@/../public/faceSwap/groupFaceSwap.jpg";

const metadata = {
  title: "Face Swap Online | Snapshwat: The AI-Powered Face Swap App",
  description:
    "Swap faces with Snapshawt's AI-powered face swap technology. Explore single and group face swap options, funny face swaps, social media templates, and more.",
};

const siteUrl = process.env.SITE_URL;

export default function FaceSwap() {
  const router = useRouter();
  // const selector = useSelector(data => data.userData);
  const [showCommingSoonModal, setShowCommingSoonModal] = useState(false);
  const [user, setUser] = useState();
  // const auth = getAuth();
  const pathname = usePathname();
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: pathname,
      title: pathname.toUpperCase(),
    });

    const isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
    if (isUserLoggedIn) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, []);

  const handleSingleFaceSwap = () => {
    if (user) {
      router.push("/face-swap/single-ai-face-swap");
    } else {
      router.push("/signin");
    }
  };
  return (
    <div className={styles.FaceSwap}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={`${siteUrl}/face-swap`} />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/path/to/your/image.jpg" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        {/* <meta name="twitter:image" content="/path/to/your/image.jpg" /> */}
      </Head>

      <div className={`flex-col-center ${styles.top}`}>
        <h1 className={`grd-txt ${styles.title}`}>Face Swap Online</h1>

        <div className={styles.mainContainer}>
          {/* single Ai Face Swap */}
          <div className={styles.container1}>
            <div className={styles.imgContainer}>
              <Image
                src={singleFaceSwap}
                alt="singleFaceSwap"
                className={styles.img}
              />
            </div>
            <div className={styles.faceSwapContent}>
              <p className={styles.title}>Single Ai Face Swap</p>
              <div onClick={handleSingleFaceSwap} className={styles.link}>
                <button className={`btn2 ${styles.btn}`}>Swap Now</button>
              </div>
            </div>
          </div>

          {/* group Ai Face Swap */}
          <div className={styles.container1}>
            <div className={styles.imgContainer}>
              <Image
                src={groupFaceSwap}
                alt="singleFaceSwap"
                className={styles.img}
              />
            </div>
            <div className={styles.faceSwapContent}>
              <p className={styles.title}>Group Ai Face Swap</p>
              <div
                href={"/face-swap/group-ai-face-swap"}
                onClick={() => setShowCommingSoonModal(true)}
                className={styles.link}
              >
                <button className={`btn2 ${styles.btn}`}>Swap Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* explore section */}
      <Explore />

      {/* experience section */}
      <Experience />

      {/* funny section*/}
      <Funny />

      {/* social media section*/}
      <SocialMedia />

      {/* creative art section*/}
      <CreativeArt />

      {/* old memories section */}
      <OldMemories />

      {/* parties section */}
      <Parties />

      {/* celebrity section */}
      <Celebrity />

      {/* experiment section */}
      <Experiment />

      {/* comming soon modal */}
      {showCommingSoonModal && (
        <CommingSoonModal
          showCommingSoonModal={showCommingSoonModal}
          setShowCommingSoonModal={setShowCommingSoonModal}
        />
      )}
    </div>
  );
}
