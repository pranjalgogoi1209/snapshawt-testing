import React, { useState } from "react";
import styles from "./mobileNavbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { animateScroll as scroll } from "react-scroll";
import { usePathname } from "next/navigation";

import close from "@/../public/credits/close.png";
import profile from "@/../public/profile/profile.png";

export default function MobileNavbar({
  setIsShowSidebar,
  isShowSidebar,
  setIsProfileOpen,
  isUserPresent,
  setShowCommingSoonModal,
  selector,
}) {
  const [showProductsDropDown, setShowProductsDropDown] = useState(false);
  const [showLegalDropDown, setShowLegalDropDown] = useState(false);
  const pathname = usePathname();

  const handleContactScroll = () => {
    if (selector.contact) {
      console.log("working");
      scroll.scrollTo(selector.contact.offsetTop - 100, {
        duration: 500,
        smooth: "easeInOutQuart",
      });
    }
  };

  return (
    <nav
      className={`${styles.MobileNavbar} ${
        isShowSidebar ? styles.showSidebar : ""
      }`}
    >
      <ul className={styles.navLinkContainer}>
        {/* products */}
        <span className={styles.navLinks}>
          <li
            onClick={() => setShowProductsDropDown(prev => !prev)}
            className={styles.list}
          >
            Products{" "}
            {!showProductsDropDown && (
              <RiArrowDropDownLine className={styles.dropDownIcon} />
            )}
            {showProductsDropDown && (
              <RiArrowDropUpLine className={styles.dropDownIcon} />
            )}
          </li>
        </span>

        {/* products dropdown */}
        {showProductsDropDown && (
          <ul className={styles.dropDownContainer}>
            <Link href={"/face-swap"} onClick={() => setIsShowSidebar(false)}>
              <li className={styles.list}>Face Swap</li>
            </Link>
            <div
              onClick={() => {
                setIsShowSidebar(false);
                setShowCommingSoonModal(true);
              }}
            >
              <li className={styles.list}>AI Image Inhancer</li>
            </div>
            <div
              onClick={() => {
                setIsShowSidebar(false);
                setShowCommingSoonModal(true);
              }}
            >
              <li className={styles.list}>AI Image Generator</li>
            </div>
          </ul>
        )}

        <Link
          href={"/about"}
          onClick={() => setIsShowSidebar(false)}
          className={styles.navLinks}
        >
          <li className={`${styles.list} ${styles.listX}`}>About</li>
        </Link>

        {/* legal */}
        <span className={styles.navLinks}>
          <li
            onClick={() => setShowLegalDropDown(prev => !prev)}
            className={`${styles.list} ${styles.listX}`}
          >
            Legal{" "}
            {!showLegalDropDown && (
              <RiArrowDropDownLine className={styles.dropDownIcon} />
            )}
            {showLegalDropDown && (
              <RiArrowDropUpLine className={styles.dropDownIcon} />
            )}
          </li>
        </span>

        {/* legal dropdown */}
        {showLegalDropDown && (
          <ul className={styles.dropDownContainer}>
            {pathname !== "/" && pathname !== "/#contact" && (
              <a
                href={"/#contact"}
                onClick={() => {
                  setShowLegalDropDown(false);
                  setIsShowSidebar(false);
                }}
              >
                <li onClick={handleContactScroll} className={styles.list}>
                  Contact Us
                </li>
              </a>
            )}

            {(pathname === "/" || pathname === "/#contact") && (
              <div
                onClick={() => {
                  handleContactScroll();
                  setShowLegalDropDown(false);
                  setIsShowSidebar(false);
                }}
              >
                <li onClick={handleContactScroll} className={styles.list}>
                  Contact Us
                </li>
              </div>
            )}

            {/* payments policy */}
            <Link
              href={"/refund-policy"}
              onClick={() => {
                setIsShowSidebar(false);
              }}
            >
              <li className={styles.list}>Refund Policy</li>
            </Link>

            {/* privacy policy */}
            <Link
              href={"/privacy-policy"}
              onClick={() => {
                setIsShowSidebar(false);
              }}
            >
              <li className={styles.list}>Privacy Policy</li>
            </Link>

            {/* terms and conditions */}
            <Link
              href={"/terms-conditions"}
              onClick={() => {
                setIsShowSidebar(false);
              }}
            >
              <li className={styles.list}>Terms & Conditions</li>
            </Link>
          </ul>
        )}

        {/* FAQ */}
        <Link
          href={"/faq"}
          onClick={() => setIsShowSidebar(false)}
          className={styles.navLinks}
        >
          <li className={`${styles.list} ${styles.listX}`}>FAQ</li>
        </Link>

        {/* sigin */}
        {!isUserPresent && (
          <Link
            href={"/signin"}
            onClick={() => setIsShowSidebar(false)}
            className={`${styles.navLink} ${styles.signIn} btn1`}
          >
            <li className={`${styles.list} ${styles.listX}`}>SignIn</li>
          </Link>
        )}

        {/* profile */}
        {isUserPresent && (
          <div
            className={styles.profile}
            onClick={() => setIsProfileOpen(pre => !pre)}
          >
            <img
              className={styles.userProfileImg}
              src={
                isUserPresent.photoURL == ""
                  ? profile.src
                  : isUserPresent.photoURL
              }
              alt="profile"
            />
          </div>
        )}

        {/*   <IoIosCloseCircle
          onClick={() => setIsShowSidebar(false)}
          className={styles.close}
        /> */}

        <div
          onClick={() => {
            setIsShowSidebar(false);
          }}
          className={styles.close}
        >
          <Image src={close} alt="close" />
        </div>
      </ul>
    </nav>
  );
}
