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
      dt: "What is generative AI ?",
      dd: "Generative AI creates new content based on existing data, enabling unique creations with trained machine learning programmes. For example open AIs Chat gpt.",
    },
    {
      dt: "How does Snapshawt use generative ai for content creation",
      dd: "Snapshawt utilizes generative AI to produce innovative images and content through features like face swap and image generation.",
    },
    {
      dt: "Is generative ai & deep fake are same",
      dd: "Generative AI and deep fake are distinct; while both involve AI, deep fake specifically manipulates video or imagery to deceive. Responsible uses makes nothing as dangerous.",
    },
    {
      dt: "Is generative AI dangerous",
      dd: "Generative AI has potential risks, but Snapshawt prioritizes ethical usage and safeguards against misuse..",
    },
  ];

  return (
    <div className={`flex-col-center ${styles.SingleFaq}`}>
      <h2>Generative AI</h2>

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
