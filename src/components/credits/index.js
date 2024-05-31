import React, { useEffect, useState } from "react";
import styles from "./credits.module.css";
import { FaRegCheckCircle } from "react-icons/fa";
import close from "@/../public/credits/close.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from 'axios'
import {
  onAuthStateChanged,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import UserDB from "@/utils/userdb";

export default function Credits({ user,setIsCreditsOpen }) {

  const auth = getAuth();
  var router = useRouter();

  const creditsArr = [
    {
      type: "BASIC",
      creditsCount: 50,
      description: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        " distracted by the readable content of a page when looking at its layout. The point of using Lorem",
      ],
      price: 49,
      bg1: "#054bff",
      bg2: "#52a3f6",
      popular: false,
    },
    {
      type: "PREMIUM",
      creditsCount: 110,
      description: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        "distracted by the readable content of a page when looking at its layout. The point of using Lorem",
      ],
      price: 99,
      bg1: "#590afc",
      bg2: "#bb7ee1",
      popular: true,
    },
    {
      type: "GOLDEN",
      creditsCount: 500,
      description: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        "distracted by the readable content of a page when looking at its layout. The point of using Lorem",
      ],
      price: 499,
      bg1: "#ff6f00",
      bg2: "#ffc885",
      popular: false,
    },
  ];
  return (
    <div className={styles.Credits}>
      <h1 className={`grd-txt`}>Buy Credits</h1>

      <div className={styles.allCredit}>
        {creditsArr?.map((item, index) => (
          <div className={styles.singleCraditContainer} key={index}>
            <div
              className={styles.heading}
              style={{
                background: `linear-gradient(to bottom, ${item.bg1} 20%, ${item.bg2} 80%)`,
              }}
            >
              <p className={styles.txt}>PRICE TABLE</p>
              <p className={styles.type}>{item.type}</p>
            </div>
            <div className={styles.descriptionContainer}>
              {item.description?.map((des, index) => (
                <div className={styles.description} key={index}>
                  <FaRegCheckCircle
                    className={styles.icon}
                    style={{ color: `${item.bg1}` }}
                  />
                  <p className={styles.desContent}>{des}</p>
                </div>
              ))}
            </div>
            <button onClick={()=>{
              if(user == null)
              {
                  setIsCreditsOpen(false)
                  router.push('/signin')
              }else
              {
                const data = {
                  "userId":user._id,
                  "amount":item.price,
                  "number":"9990957464",
                  "MUID": "MUID" + Date.now(),
                  "transactionId":"T" + Date.now()
              }  
          
              axios.post(UserDB.getServerURI() + "payment/post",data).then((response)=>{
                   if(response.status == 200)
                       window.open(response.data)
              })
              .catch((error)=>{
                console.log("error-")
                console.log(error)
              })
              }
              }
            }
              className={`btn2 ${styles.btn}`}
              style={{
                background: `linear-gradient(to right, ${item.bg1} 20%, ${item.bg2} 80%)`,
              }}
            >
              INR {item.price}/-
            </button>
            <div className={styles.creditCount}>
              <p className={styles.count} style={{ color: `${item.bg1}` }}>
                {item.creditsCount}
              </p>
              <p className={styles.txt} style={{ color: `${item.bg1}` }}>
                Credits
              </p>
            </div>
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

      <button className={`btn2 ${styles.buyNow}`}>BUY NOW</button>

      <div onClick={() => setIsCreditsOpen(false)} className={styles.close}>
        <Image src={close} alt="close" />
      </div>
    </div>
  );
}
