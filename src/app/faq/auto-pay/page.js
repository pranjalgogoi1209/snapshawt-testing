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
      dt: "How to cancel autopay",
      dd: "To cancel autopay, go to your account settings and select the option to disable autopay.",
    },
  ];

  return (
    <div className={`flex-col-center ${styles.SingleFaq}`}>
      <h2>Auto Pay</h2>

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
