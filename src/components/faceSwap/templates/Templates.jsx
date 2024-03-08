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
      scroll.scrollTo(uploadContainerRef.current.offsetTop - 100, {
        duration: 500,
        smooth: "easeInOutQuart",
      });
    }
  };

  // converting selected template to base64 format
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const getImageData = img => {
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);
    return canvas.toDataURL("image/png");
  };
  return (
    <section className={styles.Templates}>
      <p className={`grd-txt ${styles.title}`}>Choose from our Templates</p>
      <div className={styles.templateContainer}>
        {templatesArr?.map((template, index) => (
          <div
            key={index}
            onClick={() => {
              var img = new Image();
              img.src = template;
              img.onload = () => {
                // console.log("template=>", template);
                setSelectedTemplate(getImageData(img));
              };
              handleSelectTemplate(template);
            }}
            className={styles.imgContainer}
          >
            <img src={template} alt="template" />
          </div>
        ))}
      </div>
    </section>
  );
}
