"use client";

import React, { useState } from "react";
import styles from "./paidSubscription.module.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function PaidSubscription() {
  const [idx, setIdx] = useState();
  const [showDd, setShowDd] = useState(true);
  const content = [
    {
      dt: "How to buy subscription for more credits & features?",
      dd: "To purchase a subscription for additional credits and features, simply navigate to the “price” section in the navigation bar.",
    },
    {
      dt: "Benefits of paid subscription",
      dd: "Paid subscriptions offer access to premium features like unlimited photo uploads, advanced AI enhancements, and exclusive content.",
    },
    {
      dt: "Unable to access premium features",
      dd: "If you're having trouble accessing premium features, ensure your subscription is active and try refreshing the page. Or drop an email to support@snapshawt.com",
    },
    {
      dt: "Payment modes to buy subscription",
      dd: "Snapshawt.com accepts various payment modes including UPI, credit cards, and e-wallets for purchasing subscriptions.",
    },
    {
      dt: "How many devices can be accessed after buying subscription",
      dd: "A single subscription allows access on multiple devices for seamless usage across platforms.",
    },
    {
      dt: "How to check subscription validity",
      dd: "To check your subscription validity, go to your account settings and view the subscription details section.",
    },
  ];

  console.log(showDd);
  return (
    <div className={`flex-col-center ${styles.SingleFaq}`}>
      <h2>Paid Subscription</h2>

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
