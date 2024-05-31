"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { animateScroll as scroll } from "react-scroll";

import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import EnhanceImage from "@/components/home/enhanceImage";
import AiFaceSwap from "@/components/home/aiFaceSwap";
import AiImageGenerator from "@/components/home/aiImageGenerator";
import InstantFaceSwap from "@/components/home/instantFaceSwap";
import Price from "@/components/home/price";

export default function HomePage() {
  const [contact, setContact] = useState();

  // console.log(searchParams.isScrollToContact);

  /*  const handleNavigate = () => {
    if (contact.current && searchParams.isScrollToContact) {
      console.log("working");
      scroll.scrollTo(contact.current.offsetTop - 100, {
        duration: 500,
        smooth: "easeInOutQuart",
      });
    }
  }; */

  /*  useEffect(() => {
    if (contact && searchParams.isScrollToContact) {
      console.log("working");
      scroll.scrollTo(contact.current.offsetTop - 100, {
        duration: 500,
        smooth: "easeInOutQuart",
      });
    }
  }, [searchParams.isScrollToContact]); */

  /* if (searchParams.isScrollToContact) {
    console.log("scrolling");
    scroll.scrollTo(contactRef.current, {
      duration: 500,
      smooth: "easeInOutQuart",
    });
  } */

  return (
    <div className={styles.HomePage}>
      {/* hero */}
      <Hero />

      {/* ai-face-swap*/}
      <AiFaceSwap />

      {/* enhance-image */}
      <EnhanceImage />

      {/* ai-image-generator */}
      <AiImageGenerator />

      {/* instant-face-swap */}
      <InstantFaceSwap />

      {/* price */}
      <div id="price">
        <Price />
      </div>

      {/* contact */}
      <div id="contact">
        <Contact setContact={setContact} />
      </div>

      {/*   <div
        data-aos="fade-up"
        data-aos-delay={200}
        style={{
          height: "20vw",
          opacity: 1,
        }}
      >
        Hi how are you ?
      </div> */}
    </div>
  );
}
