"use client";
import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { UserData, AvalableCredits } from "@/app/redux/slice";
import { animateScroll as scroll } from "react-scroll";
import { usePathname } from "next/navigation";

import CommingSoonModal from "../modals/commingSoonModal";
import DesktopNavbar from "./desktopNavbar";
import logoHeader from "@/../public/header/logoHeader.png";
import Profile from "../profile";
import MobileNavbar from "./mobileNavbar";
import Credits from "../credits";
import app from "../../firebase-config";
import { FaBarsStaggered } from "react-icons/fa6";
import axios from "axios";

import BuyCraditsModal from "@/components/modals/buyCraditsModal";

import {
  onAuthStateChanged,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import bar from "@/../public/header/bar.svg";
// import bar from "@/../public/header/bar.png";
import UserDB from "@/utils/userdb";

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // const [isCreditsOpen, setIsCreditsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [credits, setCredits] = useState(0);
  const auth = getAuth();
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [showCommingSoonModal, setShowCommingSoonModal] = useState(false);
  const selector = useSelector(data => data.contactRef);
  const selector2 = useSelector(data => data.priceRef);
  const pathname = usePathname();
  const dispatch = useDispatch();
  const [showBuyCraditsModal, setShowBuyCraditsModal] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async function (_user) {
      if (_user != null) {
        const response = await UserDB.insertUser(
          _user.uid,
          _user.email,
          _user.phoneNumber,
          _user.displayName,
          _user.photoURL
        );
        response.data.redeemCredits = redeemCredits;

        if (response.data.phoneNumber.length > 0)
          response.data.photoURL =
            UserDB.getServerURI() + "/" + response.data.photoURL;

        setUser(response.data);
        setCredits(response.data.credits);

        UserDB.setUser(response.data);
        UserDB.setCredits(response.data.credits);
        localStorage.setItem("isUserLoggedIn", "true");

        if (response.data.credits === 0 || response.data.credits < 0) {
          setShowBuyCraditsModal(true);
        }
      } else {
        setUser(null);
        UserDB.setUser(null);
        setIsProfileOpen(false);
        // setIsCreditsOpen(false);
        // No user is signed in.
      }
    });
  }, []);

  function redeemCredits(_credits) {
    if (UserDB.getUser() && UserDB.getCredits() > 0) {
      var newCredits = UserDB.getCredits() - _credits;
      setCredits(newCredits);
      UserDB.setCredits(newCredits);
    }
  }

  // sending available credits
  useEffect(() => {
    dispatch(AvalableCredits(credits));
  }, [credits]);

  const handlePriceScroll = () => {
    if (selector2.price) {
      console.log("working");
      scroll.scrollTo(selector2.price.offsetTop, {
        duration: 500,
        smooth: "easeInOutQuart",
      });
    }
  };

  return (
    <header className={styles.Header}>
      <Link href={"/"}>
        <div className={styles.logoContainer}>
          <Image src={logoHeader} alt="logo" />
        </div>
      </Link>
      <div className={styles.rightContainer}>
        {/* price */}
        {pathname !== "/" && pathname !== "/#price" && (
          <a href="/#price">
            <button
              /* onClick={() => {
                // setIsCreditsOpen(pre => !pre);
              }} */
              onClick={handlePriceScroll}
              className={`btn1 ${styles.price}`}
            >
              Price
            </button>
          </a>
        )}

        {(pathname === "/" || pathname === "/#price") && (
          <button
            onClick={handlePriceScroll}
            className={`btn1 ${styles.price}`}
          >
            Price
          </button>
        )}

        {/* credit */}
        {/* <button className={`btn3 ${styles.credit}`}>
          Credit {user == null ? "00" : String(credits)}
        </button> */}

        {user && (
          <p className={styles.newCredit}>
            Credit {user == null ? "0" : String(credits)}
          </p>
        )}

        {/* profile-section */}
        <div className={styles.profile}>
          {isProfileOpen && (
            <Profile user={user} setIsProfileOpen={setIsProfileOpen} />
          )}
        </div>

        {/* credits-section */}
        {/* <div className={styles.credits}>
          {isCreditsOpen && <Credits user={user} setIsCreditsOpen={setIsCreditsOpen} />}
        </div> */}

        {/* desktop navbar */}
        <div className={styles.desktopNavbar}>
          <DesktopNavbar
            setIsProfileOpen={setIsProfileOpen}
            isUserPresent={user}
            selector={selector}
          />
        </div>

        {/* <FaBarsStaggered
          className={styles.bar}
          onClick={() => setIsShowSidebar(true)}
        /> */}

        <div onClick={() => setIsShowSidebar(true)} className={styles.bar}>
          <Image src={bar} alt="bar" />
        </div>

        {/* mobile navbar */}
        <div className={styles.mobileNavbar}>
          <MobileNavbar
            isShowSidebar={isShowSidebar}
            setIsShowSidebar={setIsShowSidebar}
            setIsProfileOpen={setIsProfileOpen}
            isUserPresent={user}
            setShowCommingSoonModal={setShowCommingSoonModal}
            selector={selector}
          />
        </div>
      </div>

      {/* comming soon modal */}
      {showCommingSoonModal && (
        <CommingSoonModal
          showCommingSoonModal={showCommingSoonModal}
          setShowCommingSoonModal={setShowCommingSoonModal}
        />
      )}

      {showBuyCraditsModal && (
        <BuyCraditsModal setShowBuyCraditsModal={setShowBuyCraditsModal} />
      )}
    </header>
  );
}
