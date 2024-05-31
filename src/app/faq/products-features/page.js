"use client";

import React, { useState } from "react";
import styles from "./../paid-subscription/paidSubscription.module.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function PaidSubscription() {
  const [idx, setIdx] = useState();
  const [showDd, setShowDd] = useState(true);
  const content = [
    {
      dt: "What are the products Snapshawt offers",
      dd: "Snapshawt offers AI-powered features including face swap, image generation, and enhancement tools.",
    },
    {
      dt: "What are the upcoming features on Snapshawt.com",
      dd: "Stay tuned for upcoming features aimed at enhancing user experience and creativity on Snapshawt.com.",
    },
    {
      dt: "How can i benefit from the content generated using Snapshawt.com",
      dd: "Benefit from generated content for social media, entertainment, or personal projects, adding fun and creativity to your digital content.",
    },
  ];

  return (
    <div className={`flex-col-center ${styles.SingleFaq}`}>
      <h2>Products & Features</h2>

      <div className={`flex-col-center ${styles.container}`}>
        {content?.map((item, index) => (
          <dl
            onClick={() => {
              setIdx(index);
              setShowDd(true);
            }}
            className={`flex-col-center ${styles.dl} ${
              idx === index || !showDd ? styles.showDl : ""
            }`}
          >
            <dt className={`txt1 flex-row-center ${styles.dt}`}>
              {item.dt}
              {(idx !== index || !showDd) && (
                <div className={`flex-row-center ${styles.svg}`}>
                  <MdKeyboardDoubleArrowRight />
                </div>
              )}
              {idx === index && showDd && (
                <div
                  onClick={e => {
                    e.stopPropagation();
                    setShowDd(false);
                  }}
                  className={`flex-row-center ${styles.svg}`}
                >
                  <IoMdCloseCircleOutline />
                </div>
              )}
            </dt>

            <dd
              className={`txt2 ${styles.dd} ${
                idx === index && showDd ? styles.showDd : ""
              }`}
            >
              {item.dd}
            </dd>
          </dl>
        ))}
      </div>
    </div>
  );
}
