"use client";

import React, { useState, useRef } from "react";
import styles from "./groupAiFaceSwap.module.css";

import Upload from "@/components/faceSwap/groupAiFaceSwap/upload";
import Templates from "@/components/faceSwap/groupAiFaceSwap/templates";

export default function GroupAiFaceSwap() {
  const uploadContainerRef = useRef(null);
  const [uploadTemplateImg, setUploadTemplateImg] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState();

  return (
    <div className={styles.GroupAiFaceSwap}>
      {/* upload section */}
      <Upload
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
        setUploadTemplateImg={setUploadTemplateImg}
        uploadTemplateImg={uploadTemplateImg}
        uploadContainerRef={uploadContainerRef}
      />

      {/* templates section */}
      <Templates
        setSelectedTemplate={setSelectedTemplate}
        setUploadTemplateImg={setUploadTemplateImg}
        uploadContainerRef={uploadContainerRef}
      />
    </div>
  );
}
