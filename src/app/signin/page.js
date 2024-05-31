"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./signin.module.css";
import axios from "axios";
import googleIcon from "@/../public/signinPage/googleIcon.png";
import phoneIcon from "@/../public/signinPage/phoneIcon.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { app } from "../../firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";

import {
  onAuthStateChanged,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { HashLoader, PropagateLoader, PuffLoader } from "react-spinners";

const siteUrl = process.env.SITE_URL;

const metadata = {
  title: "Sign In | Snapshwat: The AI-Powered Face Swap App",
  description:
    "Sign in to your Snapshawt account to access personalized content and use our AI-powered face swap technology.",
};

const EMPTY_CONTACT = {
  phone: "",
  password: "",
};

export default function Signin() {
  var user;
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loaderSize, setLoaderSize] = useState(25);

  // loader css
  const override = {
    display: "block",
    borderColor: "white",
  };

  useEffect(() => {
    function updateLoaderSize() {
      const windowWidth = window.innerWidth;
      if (windowWidth < 480) {
        setLoaderSize(15);
      } else {
        setLoaderSize(25);
      }
    }
    updateLoaderSize();

    window.addEventListener("resize", updateLoaderSize);

    return () => {
      window.removeEventListener("resize", updateLoaderSize);
    };
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged(function (userr) {
      if (userr != null && user == undefined) {
        user = userr;

        router.push("/");
      } else {
        // No user is signed in.
      }
    });
  }, [user == undefined]);

  function onCaptchVerify() {
    //  auth.settings.appVerificationDisabledForTesting = true;

    if (!window.RecaptchaVerifier) {
      window.RecaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: response => {
            this.onSignupWithPhoneNumber();
          },
          "expired-callback": () => {},
        }
      );
    }
  }

  function onSignupWithPhoneNumber() {
    if (phoneNumber.length == 10) {
      window.RecaptchaVerifier = undefined;
      setLoading(true);
      onCaptchVerify();
      const appVerifier = window.RecaptchaVerifier;

      signInWithPhoneNumber(auth, "+91" + phoneNumber, appVerifier)
        .then(confirmationResult => {
          window.confirmationResult = confirmationResult;

          // router.push('/signin/otp')

          toast.success(
            "OTP has been sent successfully to your mobile number.",
            {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );

          setTimeout(() => {
            setLoading(false);
            router.push("/signin/otp");
          }, 1000);
        })
        .catch(error => {
          // ...
        });
    } else {
      toast.error("Please enter a valid 10 digit phone number.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const onInputChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        // this.user = result.user
        // ...
      })
      .catch(error => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        console.log(error);
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className={styles.Signin}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={`${siteUrl}/signin`} />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/path/to/your/image.jpg" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        {/* <meta name="twitter:image" content="/path/to/your/image.jpg" /> */}
      </Head>

      <div id="recaptcha-container"></div>
      <h1 className="grd-txt">Welcome back</h1>

      {/* signin with google */}
      <div className={styles.google} onClick={signInWithGoogle}>
        <div className={styles.googleIconContainer}>
          <Image src={googleIcon} alt="google-icon" />
        </div>
        <p className={styles.title}>Sign in with Google</p>
      </div>

      {/* or */}
      <p className={styles.or}>Or</p>

      {/* phone number */}
      <div className={styles.phone}>
        <div className={styles.googleIconContainer}>
          <Image src={phoneIcon} alt="phone-icon" />
        </div>
        <input
          type="text"
          className={styles.input}
          maxLength={10}
          placeholder="Enter your phone number"
          onInput={e => {
            e.target.value = e.target.value
              .replace(/[^0-9.]/g, "")
              .replace(/(\..*)\./g, "$1");
            setPhoneNumber(e.target.value);
          }}
        />
      </div>

      {/* terms and conditions */}
      <p className={styles.terms}>
        By signing up, you automatically agree to Snapshwat&apos;s
        <strong className={styles.strong}>
          <br /> <Link href={"./terms-conditions"}>Terms of Use</Link>{" "}
        </strong>{" "}
        and{" "}
        <strong className={styles.strong}>
          <Link href={"./privacy-policy"}>Privacy Notice</Link>
        </strong>
      </p>

      {/* submit btn */}
      <ToastContainer></ToastContainer>
      <button
        className={`btn2 ${styles.btn}`}
        onClick={onSignupWithPhoneNumber}
      >
        <HashLoader
          color="#fff"
          loading={loading}
          cssOverride={override}
          size={loaderSize}
        />
        Submit
      </button>
    </div>
  );
}
