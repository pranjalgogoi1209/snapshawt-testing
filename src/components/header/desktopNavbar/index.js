import React, { useState, useEffect } from "react";
import styles from "./desktopNavbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { animateScroll as scroll } from "react-scroll";

import CommingSoonModal from "@/components/modals/commingSoonModal";

import profile from "@/../public/profile/profile.png";

export default function DesktopNavbar({
  setIsProfileOpen,
  isUserPresent,
  selector,
}) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showCommingSoonModal, setShowCommingSoonModal] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
          
  }, []);

  const handleContactScroll = () => {
    if (selector.contact) {
      console.log("fjdjsfd working", selector.contact);
      scroll.scrollTo(selector.contact.offsetTop - 20, {
        duration: 500,
        smooth: "easeInOutQuart",
      });
    }
  };
  return (
    <nav className={styles.DesktopNavbar}>
      {/* products */}
      <div className={`${styles.navLink} ${styles.products}`}>
        <Link href={"/"} className={`${styles.navLink}`}>
          <span className={styles.span}>Products</span>
        </Link>

        <ul className={styles.productsHoverContainer}>
          <Link href={"/face-swap"}>
            <li className={styles.list}>Face Swap</li>
          </Link>

          <div onClick={() => setShowCommingSoonModal(true)}>
            <li className={styles.list}>Ai Image Enhancer</li>
          </div>

          <div onClick={() => setShowCommingSoonModal(true)}>
            <li className={styles.list}>Ai Image Generator</li>
          </div>
        </ul>
      </div>

      {/* chat with us */}
      {/*  <Link href={"/"} className={`${styles.navLink} ${styles.span}`}>
        Chat with Us
      </Link> */}

      {/* about*/}
      {/* <div className={`${styles.navLink} ${styles.products}`}>
        <Link href={"/about"} className={`${styles.navLink}`}>
          <span className={styles.span}>About</span>
        </Link>

        <ul className={styles.productsHoverContainer}>
          <div className={`flex-col-center ${styles.parent}`}>
            <div onClick={() => setShowDropDown(prev => !prev)}>
              <li className={`flex-row-center ${styles.list}`}>
                Legal{" "}
                {!showDropDown && (
                  <RiArrowDropDownLine className={styles.dropDownIcon} />
                )}
                {showDropDown && (
                  <RiArrowDropUpLine className={styles.dropDownIcon} />
                )}
              </li>
            </div>

            // comment down please
            // href={{
              // pathname: "/", query: {
                      // isScrollToContact: true,
                    // },
                // }} 

            {showDropDown && (
              <ul className={`flex-col-center ${styles.dropDownContainer}`}>
                {pathname !== "/" && pathname !== "/#contact" && (
                  <a href="/#contact">
                    <li className={styles.list}>Contact Us</li>
                  </a>
                )}

                // comment down please
                // <div onClick={handleContactScroll}>
                   // <li className={styles.list}>Contact Us</li>
                // </div>

                {(pathname === "/" || pathname === "/#contact") && (
                  <div onClick={handleContactScroll}>
                    <li className={styles.list}>Contact Us</li>
                  </div>
                )}

                <Link href={"/privacy-policy"}>
                  <li className={styles.list}>Privacy Policy</li>
                </Link>
              </ul>
            )}
          </div>

          <Link href={"/faq"}>
            <li className={styles.list}>FAQ</li>
          </Link>
        </ul>
      </div> */}

      {/* signin */}
      {!isUserPresent && (
        <Link
          href={"/signin"}
          className={`${styles.navLink} ${styles.signIn} btn1`}
        >
          Sign in
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

      {/* comming soon modal */}
      {showCommingSoonModal && (
        <CommingSoonModal
          showCommingSoonModal={showCommingSoonModal}
          setShowCommingSoonModal={setShowCommingSoonModal}
        />
      )}
    </nav>
  );
}
