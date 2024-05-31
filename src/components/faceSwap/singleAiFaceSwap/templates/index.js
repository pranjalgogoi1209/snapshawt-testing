import React, { useState, useEffect, useRef } from "react";
import styles from "./templates.module.css";
import { animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';

import { templatesObj } from "@/data/faceSwap/singleAiFaceSwap/templates";
import { base64 } from "@/utils/base64";

export default function Templates({
  setSelectedTemplate,
  setUploadTemplateImg,
  uploadContainerRef,
  setTemplatesRef,
}) {
  // const [templatesArr, setTemplatesArr] = useState([]);
  const templatesRef = useRef(null);
  const [categoryIdx, setCategoryIdx] = useState();
  const [dropDownValue, setDropDownValue] = useState("");
  const [cardsArr, setCardsArr] = useState([]);
  const [originalImagesArr, setOriginalImagesArr] = useState([]);
  const [clearFilter, setClearFilter] = useState(false);

  const [isMobileView, setIsMobileView] = useState(false);


  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  useEffect(() => {
    setIsMobileView(isMobile);
  }, [isMobile]);

  /* useEffect(() => {
    const { caricature, cartoon } = templatesObj;
    const mixedCards = caricature[0]
      .map((card, index) => ({
        card,
        originalImage: caricature[1][index],
      }))
      .concat(
        cartoon[0].map((card, index) => ({
          card,
          originalImage: cartoon[1][index],
        }))
      );

    // Fisher-Yates shuffle algorithm
    for (let i = mixedCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mixedCards[i], mixedCards[j]] = [mixedCards[j], mixedCards[i]];
    }

    setCardsArr(mixedCards.map(item => item.card));
    setOriginalImagesArr(mixedCards.map(item => item.originalImage));
  }, []); */

  /* const handleSelectTemplate = template => {
    base64(template.src, base64Data => {
      // console.log("Base64 data:", base64Data);
      setSelectedTemplate(base64Data);
    });
    setUploadTemplateImg("");
    if (uploadContainerRef) {
      scroll.scrollTo(uploadContainerRef.current.offsetTop - 100, {
        duration: 500,
        smooth: "easeInOutQuart",
      });
    }
  }; */

  useEffect(() => {
    /*  const {
      caricature,
      cartoon,
      detective,
      indianTraditional,
      fashion,
      freedomFighter,
      hairStyle,
      hipHopFashion,
      magicWorld,
      professional,
      siFi,
      superHero,
      techSavvy,
      // electionCampaign,
      // indiaVote,
      dailyWishes,
    } = templatesObj; */

    /*  const mixedCards = [
      ...dailyWishes[0].map((card, index) => ({
        card,
        originalImage: dailyWishes[1][index],
      })),
      ...superHero[0].map((card, index) => ({
        card,
        originalImage: superHero[1][index],
      })),
      ...caricature[0].map((card, index) => ({
        card,
        originalImage: caricature[1][index],
      })),
      ...professional[0].map((card, index) => ({
        card,
        originalImage: professional[1][index],
      })),
      ...indianTraditional[0].map((card, index) => ({
        card,
        originalImage: indianTraditional[1][index],
      })),
      ...cartoon[0].map((card, index) => ({
        card,
        originalImage: cartoon[1][index],
      })),
      ...detective[0].map((card, index) => ({
        card,
        originalImage: detective[1][index],
      })),
      ...fashion[0].map((card, index) => ({
        card,
        originalImage: fashion[1][index],
      })),
      ...freedomFighter[0].map((card, index) => ({
        card,
        originalImage: freedomFighter[1][index],
      })),
      ...hairStyle[0].map((card, index) => ({
        card,
        originalImage: hairStyle[1][index],
      })),
      ...hipHopFashion[0].map((card, index) => ({
        card,
        originalImage: hipHopFashion[1][index],
      })),
      ...magicWorld[0].map((card, index) => ({
        card,
        originalImage: magicWorld[1][index],
      })),

      ...siFi[0].map((card, index) => ({
        card,
        originalImage: siFi[1][index],
      })),

      ...techSavvy[0].map((card, index) => ({
        card,
        originalImage: techSavvy[1][index],
      })),
        ...electionCampaign[0].map((card, index) => ({
        card,
        originalImage: electionCampaign[1][index],
      })),
       ...indiaVote[0].map((card, index) => ({
        card,
        originalImage: indiaVote[1][index],
      })),
    ]; */

    const mixedCards = Object.values(templatesObj).flatMap(
      ([cards, originals]) =>
        cards.map((card, index) => ({ card, original: originals[index] }))
    );

    // Fisher-Yates shuffle algorithm
    for (let i = mixedCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mixedCards[i], mixedCards[j]] = [mixedCards[j], mixedCards[i]];
    }

    const cards = mixedCards.map(item => item.card);
    const originals = mixedCards.map(item => item.original);

    // testing => local storage's cards has new updated cards
    const oldCards = JSON.parse(localStorage.getItem("cardsArr"));
    const oldOriginals = JSON.parse(localStorage.getItem("originalImagesArr"));
    
    // checking templatesUpdateStatus
    const status = JSON.parse(localStorage.getItem("templatesUpdateStatus"))
    const templatesUpdateStatus  = "1";
    


   /*  let oldCardsHasNewCards = false;
    let isSameLength = false;
    if (oldCards) {
      oldCardsHasNewCards = oldCards.some(card => card.src.includes("bikini"));
      console.log(oldCardsHasNewCards);

      // checking length
      if (oldCards.length === mixedCards.length) {
        isSameLength = true;
      }
      console.log(isSameLength);
      oldCards && console.log(oldCards.length);
      mixedCards && console.log(mixedCards.length);
    } */

   
    const oldCardsHasNewCards = oldCards && oldCards.some(card => card.src.includes("bikini"));
    const isSameLength = oldCards && oldCards.length === mixedCards.length;
   
    

    if (!oldCards || !oldOriginals || !oldCardsHasNewCards || !isSameLength || status !== templatesUpdateStatus) {
      localStorage.setItem("cardsArr", JSON.stringify(cards));
      localStorage.setItem("originalImagesArr", JSON.stringify(originals));
      localStorage.setItem("templatesUpdateStatus", JSON.stringify(templatesUpdateStatus));
    }

    /*  const storedCards = JSON.parse(localStorage.getItem("cardsArr"));
    const storedOriginals = JSON.parse(
      localStorage.getItem("originalImagesArr")
    );
    if (!storedCards || !storedOriginals) {
      localStorage.setItem("cardsArr", JSON.stringify(cards));
      localStorage.setItem("originalImagesArr", JSON.stringify(originals));
    } */
  }, []);

  // Retrieve array from local storage
  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem("cardsArr"));
    const originals = JSON.parse(localStorage.getItem("originalImagesArr"));
    if (cards) setCardsArr(cards);
    if (originals) setOriginalImagesArr(originals);
  }, [clearFilter]);

  // handle select template
  const handleSelectTemplate = templateIndex => {
    const selectedImage = originalImagesArr[templateIndex];
    // console.log("selectedImg", selectedImage);
    base64(selectedImage.src, base64Data => {
      setSelectedTemplate(base64Data);
    });
    setUploadTemplateImg("");
    if (uploadContainerRef) {
      console.log(isMobileView);
      const distance = isMobileView ? 100 : 300;
      scroll.scrollTo(uploadContainerRef.current.offsetTop - distance, {
        duration: 500,
        smooth: "easeInOutQuart",
      });
    }
  };

  useEffect(() => {
    setTemplatesRef(templatesRef);
  }, []);

  return (
    <section ref={templatesRef} className={styles.Templates}>
      <p className={`grd-txt ${styles.title}`}>Choose from our Gallery</p>

      <div className={`flex-row-center ${styles.categoriesContainer}`}>
        {/* {templatesObj &&
          Object.keys(templatesObj)
            .slice(0, 5)
            .map((key, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCategoryIdx(idx);
                  setTemplatesArr(Object.values(templatesObj[key]));
                  setDropDownValue("");
                }}
                className={` ${styles.singleCategory} ${
                  categoryIdx === idx ? "btn2" : "btn3"
                }`}
              >
                {key}
              </button>
            ))} */}

        {Object.keys(templatesObj)
          .slice(0, 6)
          .map((key, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCategoryIdx(idx);
                const [cardsArr, originalImagesArr] = templatesObj[key];
                setCardsArr(cardsArr);
                setOriginalImagesArr(originalImagesArr);
                setDropDownValue("");
              }}
              className={` ${styles.singleCategory} ${
                categoryIdx === idx ? styles.selectedCategory : ""
              }`}
            >
              {key}
            </button>
          ))}

        {/* drop down */}
        <select
          value={dropDownValue}
          onChange={e => {
            /*   setTemplatesArr(Object.values(templatesObj[e.target.value])); */
            const [cardsArr, originalImagesArr] = templatesObj[e.target.value];
            setCardsArr(cardsArr);
            setOriginalImagesArr(originalImagesArr);
            setCategoryIdx("");
            setDropDownValue(e.target.value);
          }}
          className={`${styles.singleCategory} ${styles.selectedCategory}`}
        >
          <option style={{ display: "none" }}>Choose a Category</option>
          {Object.keys(templatesObj).map((key, idx) => (
            <option key={idx} className={styles.option}>
              {key}
            </option>
          ))}
        </select>

        {/*  <strong
          onClick={() => {
            setCategoryIdx("");
            setTemplatesArr(Object.values(templatesObj).flat());
          }}
          className={`txt2 ${styles.clearFilter}`}
        >
          Clear Filters
        </strong> */}

        <strong
          onClick={() => {
            setCategoryIdx("");
            setClearFilter(prev => !prev);
          }}
          className={`${styles.clearFilter}`}
        >
          Clear Filters
        </strong>
      </div>

      <div className={styles.templateContainer}>
        {cardsArr &&
          cardsArr.map((template, index) => (
            <div
              key={index}
              onClick={() => {
                handleSelectTemplate(index);
                setSelectedTemplate(template);
              }}
              className={`${styles.imgContainer} `}
            >
              <Image
                src={template}
                alt={`template-${index}`}
                className={styles.img}
              />
            </div>
          ))}
      </div>
    </section>
  );
}
