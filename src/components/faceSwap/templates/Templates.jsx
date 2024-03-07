import React, { useState } from "react";
import styles from "./templates.module.css";
import { templatesArr } from "../../../data/faceswap/templates";
import { animateScroll as scroll } from "react-scroll";

export default function Templates({
  setSelectedTemplate,
  setUploadTemplateImg,
  uploadContainerRef,
}) {
  const handleSelectTemplate = template => {
    setSelectedTemplate(template);
    setUploadTemplateImg("");
    if (uploadContainerRef) {
      scroll.scrollTo(uploadContainerRef.current.offsetTop, {
        duration: 500,
        smooth: "easeInOutQuart",
      });
    }
  };
  return (
    <section className={styles.Templates}>
      <p className={`grd-txt ${styles.title}`}>Choose from our Templates</p>
      <div className={styles.templateContainer}>
        {templatesArr?.map((template, index) => (
          <div
            key={index}
            onClick={() => handleSelectTemplate(template)}
            className={styles.imgContainer}
          >
            <img src={template} alt="template" />
          </div>
        ))}
      </div>
    </section>
  );
}
