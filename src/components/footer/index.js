"use client";

import React, { useState } from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga4";

import CommingSoonModal from "@/components/modals/commingSoonModal";

import footerLogo from "@/../public/footer/footerLogo.png";
import fb from "@/../public/footer/fb.png";
import sc from "@/../public/footer/sc.png";
import ig from "@/../public/footer/ig.png";
import tw from "@/../public/footer/tw.png";
import pi from "@/../public/footer/pi.png";

export default function Footer() {
  const [showCommingSoonModal, setShowCommingSoonModal] = useState(false);
  const selector = useSelector(data => data.contactRef);
  const pathname = usePathname();

  const contactUsClickHandler = () => {
    ReactGA.event({
      category: "footer button click",
      action: "button click",
      label: "contact-us", // optional
    });
  };

  const handleContactScroll = () => {
    contactUsClickHandler();
    if (selector.contact) {
      scroll.scrollTo(selector.contact.offsetTop, {
        duration: 500,
        smooth: "easeInOutQuart",
      });
    }
  };
  return (
    <div className={styles.footer}>
      {/* left footer */}
      <div className={styles.leftFooter}>
        <div className={styles.footerLogo}>
          <Image src={footerLogo} alt="logo" />
        </div>
        <div className={styles.leftFooterSecondRow}>
          <p className={`txt2`}>
            Instantly switch looks, become anyone with SnapShawt AI! Your go-to
            for easy, fun face swaps in a snap
          </p>
          <ul className={styles.socialIconBox}>
            {/* facebook */}
            <Link
              href="https://www.facebook.com/profile.php?id=61557027670734&mibextid=ZbWKwL"
              target="_blank"
            >
              <li>
                <Image src={fb} className={styles.socialIcon} alt="img" />
              </li>
            </Link>

            {/* instagram */}
            <Link
              href="https://www.instagram.com/snapshawt?utm_source=qr&igsh=dGtud3RlNjk5b3gz"
              target="_blank"
            >
              <li>
                <Image src={ig} className={styles.socialIcon} alt="img" />
              </li>
            </Link>

            {/* twitter */}
            <Link
              href="https://x.com/snapshawtai?t=-7uhXGlTjRy-DucKKv5yZQ&s=09"
              target="_blank"
            >
              <li>
                <Image src={tw} className={styles.socialIcon} alt="img" />
              </li>
            </Link>

            {/* pinterest */}
            <Link href="https://www.pinterest.com/snapshawt" target="_blank">
              <li>
                <Image src={pi} className={styles.socialIcon} alt="img" />
              </li>
            </Link>

            {/* snap chat */}
            <Link
              href="https://www.snapchat.com/add/snapshawtai?share_id=j9j1NDafnyg&locale=en-IN"
              target="_blank"
            >
              <li>
                <Image src={sc} className={styles.socialIcon} alt="img" />
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* right footer */}
      <div className={styles.rightFooter}>
        <ul className={`${styles.rightFooterColumn} ${styles.f1}`}>
          <Link href={"/"}>
            <li>Home</li>
          </Link>

          <Link href={"/about"}>
            <li>About</li>
          </Link>

          {pathname !== "/" && pathname !== "/#contact" && (
            <Link href={"/#contact"}>
              <li>Contact us</li>
            </Link>
          )}

          {(pathname === "/" || pathname === "/#contact") && (
            <div onClick={handleContactScroll} style={{ cursor: "pointer" }}>
              <li>Contact us</li>
            </div>
          )}

          <Link href={"/faq"}>
            <li>FAQ</li>
          </Link>

          <Link href={"/refund-policy"}>
            <li>Refund Policy</li>
          </Link>
          <Link href={"/privacy-policy"}>
            <li>Privacy Policy</li>
          </Link>
          <Link href={"/terms-conditions"}>
            <li>Terms & Conditions</li>
          </Link>
        </ul>
        <ul className={`${styles.rightFooterColumn} ${styles.f2}`}>
          <Link href={"/face-swap"}>
            <li>AI FaceSwap</li>
          </Link>

          <div
            onClick={() => setShowCommingSoonModal(true)}
            style={{ cursor: "pointer" }}
          >
            <li>AI Image Enhancer</li>
          </div>

          <div
            onClick={() => setShowCommingSoonModal(true)}
            style={{ cursor: "pointer" }}
          >
            <li>AI Image Generator</li>
          </div>
        </ul>
      </div>

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
