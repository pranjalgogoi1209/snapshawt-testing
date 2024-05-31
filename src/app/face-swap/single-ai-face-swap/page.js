"use client";

import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import styles from "./singleAiFaceSwap.module.css";

import Upload from "@/components/faceSwap/singleAiFaceSwap/upload";
import Templates from "@/components/faceSwap/singleAiFaceSwap/templates";
import ReactGA from "react-ga4";
import { usePathname } from "next/navigation";

const siteUrl = process.env.SITE_URL;

const metadata = {
  title: "Single AI Face Swap | Snapshwat: The AI-Powered Face Swap App",
  description:
    "Swap faces with Snapshawt's AI-powered face swap technology. Create hilarious memes and stunning photos effortlessly.",
};

export default function SingleAiFaceSwap() {
  const pathname = usePathname();
  const uploadContainerRef = useRef(null);
  const [uploadTemplateImg, setUploadTemplateImg] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState();
  const [templatesRef, setTemplatesRef] = useState();

  useEffect(() => {
    // console.log(pathname)
    ReactGA.send({
      hitType: "pageview",
      page: pathname,
      title: pathname.toUpperCase(),
    });
  }, []);

  return (
    <div className={styles.SingleAiFaceSwap}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:url"
          content={`${siteUrl}/face-swap/single-ai-face-swap`}
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/path/to/your/image.jpg" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        {/* <meta name="twitter:image" content="/path/to/your/image.jpg" /> */}
      </Head>

      {/* upload section */}
      <Upload
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
        setUploadTemplateImg={setUploadTemplateImg}
        uploadTemplateImg={uploadTemplateImg}
        uploadContainerRef={uploadContainerRef}
        templatesRef={templatesRef}
      />

      {/* templates section */}
      <Templates
        setSelectedTemplate={setSelectedTemplate}
        setUploadTemplateImg={setUploadTemplateImg}
        uploadContainerRef={uploadContainerRef}
        setTemplatesRef={setTemplatesRef}
      />
    </div>
  );
}
