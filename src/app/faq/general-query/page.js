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
      dt: "How can I apply for a job ?",
      dd: "To apply for a job, visit our Careers page and submit your application online.",
    },
    {
      dt: "How to signup for the partner program",
      dd: "Sign up for our Partner Program through the dedicated section on our website or email us to career@snapshawt.com",
    },
    {
      dt: "How can i earn through snapshawt.com",
      dd: "Earn through Snapshawt.com by referring friends, participating in promotions, or contributing content. For more info email us at partner@snapshawt.com",
    },
    {
      dt: "Can i get discount on my subscription plan",
      dd: "Special discounts may be available periodically; check our promotions page for current offers or email at contact@snapshawt.com",
    },
    {
      dt: "Is snapshawt.com free to use",
      dd: "Snapshawt.com offers both free and paid features for users. Based on the needs and requirements you can switch your plan anytime.",
    },
    {
      dt: "Is snapshawt.com safe to use",
      dd: "Your safety is our priority. Snapshawt.com employs advanced security measures to protect user data and transactions.",
    },
  ];

  return (
    <div className={`flex-col-center ${styles.SingleFaq}`}>
      <h2>General Query</h2>

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
