import React, { useState } from "react";
import styles from "./buyCraditsModal.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";

import close from "@/../public/credits/close.png";

import UserDB from "@/utils/userdb";
import axios from "axios";
import ReactGA from "react-ga4";
import { HashLoader, PropagateLoader, PuffLoader } from "react-spinners";

export default function BuyCraditsModal({ setShowBuyCraditsModal }) {
  const loaderSize = 20;
  const [loading, setLoading] = useState(false);

  const [selectedPrice, setSelectedPrice] = useState(-1);

  const override = {
    display: "block",
    borderColor: "white",
    marginRight: "5%",
  };

  const creditsArr = [
    {
      type: "BASIC",
      creditsCount: 6,
      description: [
        "No watermark",
        "Access to all the templates",
        "Image download in 720p",
      ],
      price: 49,
      bg1: "#054bff",
      bg2: "#52a3f6",
      popular: false,
    },
    {
      type: "PREMIUM",
      creditsCount: 15,
      description: [
        "No watermark",
        "Access to all the templates",
        "Image download in 1080p",
      ],
      price: 95,
      bg1: "#590afc",
      bg2: "#bb7ee1",
      popular: false,
    },
    {
      type: "GOLDEN",
      creditsCount: 30,
      description: [
        "No watermark",
        "Access to all the template",
        "Image download in 1080p",
      ],
      price: 150,
      bg1: "#ff6f00",
      bg2: "#ffc885",
      popular: true,
    },
  ];

  return (
    <div
      onClick={() => setShowBuyCraditsModal(false)}
      className={styles.CommingSoonModal}
    >
      <div
        onClick={e => {
          e.stopPropagation();
        }}
        className={styles.Price}
      >
        <h1 className={`grd-txt`}>Buy Credits</h1>

        <div className={styles.allCredit}>
          {creditsArr?.map((item, index) => (
            <div
              key={index}
              className={`${styles.singleCraditContainer} ${
                selectedPrice === index ? "" : ""
              }`}
            >
              <div
                className={styles.heading}
                style={{
                  background: `linear-gradient(to bottom, ${item.bg1} 20%, ${item.bg2} 80%)`,
                }}
              >
                <p className={styles.type}>{item.type}</p>
              </div>

              <div className={`flex-col-center ${styles.creditCount}`}>
                <p className={styles.count} style={{ color: `${item.bg1}` }}>
                  {item.creditsCount} Credits
                </p>
                <p className={styles.txt} style={{ color: `${item.bg1}` }}>
                  INR {item.price}/-
                </p>
              </div>
              <button
                className={`btn2 ${styles.btn}`}
                style={{
                  background: `linear-gradient(to right, ${item.bg1} 20%, ${item.bg2} 80%)`,
                }}
                onClick={() => {
                  if (loading) return;

                  setLoading(true);
                  setSelectedPrice(item.price);

                  const user = UserDB.getUser();

                  if (user == null || user == undefined) {
                    router.push("/signin");
                  } else {
                    const data = {
                      userId: user._id,
                      amount: item.price,
                      name: user._id,
                      MUID: "MUID" + Date.now(),
                      transactionId: "T" + Date.now(),
                    };

                    ReactGA.event({
                      category: "price button click",
                      action: "button click",
                      label: "snapshawt pricing", // optional
                      value: item.price, // optional, must be a number
                    });

                    axios
                      .post(UserDB.getServerURI() + "/payment/post", data)
                      .then(response => {
                        if (response.status == 200)
                          //console.log(response.data)
                          setLoading(false);
                        window.open(response.data);
                      })
                      .catch(error => {
                        setLoading(false);
                        console.log("error-");
                        console.log(error);
                      });
                  }
                }}
              >
                <HashLoader
                  color="#fff"
                  loading={loading && item.price == selectedPrice}
                  cssOverride={override}
                  size={loaderSize}
                />
                BUY NOW
              </button>
              <div
                className={`${styles.popular} ${
                  item.popular ? styles.showPopular : styles.notShowPopular
                }`}
                style={{
                  background: `linear-gradient(to right, ${item.bg1} 20%, ${item.bg2} 80%)`,
                }}
              >
                Most <br /> Popular
              </div>
            </div>
          ))}
        </div>

        {/* close */}
        <div
          className={`flex-row-center ${styles.close}`}
          onClick={() => setShowBuyCraditsModal(false)}
        >
          <Image
            src={close}
            className={styles.img}
            alt="close"
            height={100}
            width={100}
          />
        </div>
      </div>
    </div>
  );
}
