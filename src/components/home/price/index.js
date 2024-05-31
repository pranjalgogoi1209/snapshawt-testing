import React, { useState, useRef, useEffect } from "react";
import styles from "./price.module.css";
import { FaRegCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { PriceSection } from "@/app/redux/slice";
import UserDB from "@/utils/userdb";
import axios from "axios";
import ReactGA from "react-ga4";
import { HashLoader, PropagateLoader, PuffLoader } from "react-spinners";

export default function Price() {
  const loaderSize = 20;
  const [loading, setLoading] = useState(false);

  const priceRef = useRef();
  const [selectedPrice, setSelectedPrice] = useState(-1);
  const dispatch = useDispatch();
  const router = useRouter();

  const override = {
    display: "block",
    borderColor: "white",
    marginRight: "5%",
  };

  useEffect(() => {
    dispatch(PriceSection(priceRef.current));
  }, [priceRef]);

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
    <div ref={priceRef} className={styles.Price}>
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
            <div className={styles.creditCount}>
              <p className={styles.count} style={{ color: `${item.bg1}` }}>
                {item.creditsCount} Credits
              </p>
              <p className={styles.txt} style={{ color: `${item.bg1}` }}>
                INR {item.price}/-
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

      {/* <button className={`btn2 ${styles.buyNow}`} onClick={()=>{
        if(selectedPrice == -1) return;

        const price = creditsArr[selectedPrice]
        const user = UserDB.getUser();
        
        if(user == null || user == undefined)
              {
                  router.push('/signin')
              }else
              {
                const data = {
                  "userId":user._id,
                  "amount":price.price,
                  "name":user._id,
                  "MUID": "MUID" + Date.now(),
                  "transactionId":"T" + Date.now()
              }  

              console.log(data)
          
              axios.post(UserDB.getServerURI() + "/payment/post",data).then((response)=>{
                console.log(response)
                   if(response.status == 200)
                       //console.log(response.data)
                       window.open(response.data)
              })
              .catch((error)=>{
                console.log("error-")
                console.log(error)
              })
              }
              

      }}>BUY NOW</button> */}
    </div>
  );
}
