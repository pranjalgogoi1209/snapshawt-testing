import React, { useState, useRef } from "react";
import styles from "./faceSwapPage.module.css";
import Upload from "../../components/faceSwap/upload/Upload";
import Templates from "../../components/faceSwap/templates/Templates";

export default function FaceSwapPage() {
  const uploadContainerRef = useRef(null);
  const [uploadTemplateImg, setUploadTemplateImg] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState();

  return (
    <div className={styles.FaceSwapPage}>
      {/* upload section */}
      <Upload
        selectedTemplate={selectedTemplate}
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
