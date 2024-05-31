import React from "react";
import styles from "./commingSoonModal.module.css";
import Image from "next/image";
import Link from "next/link";

import man from "@/../public/modals/commingSoonModal/man.png";
import close from "@/../public/modals/commingSoonModal/close.png";

export default function CommingSoonModal({
  showCommingSoonModal,
  setShowCommingSoonModal,
}) {
  return (
    <div
      onClick={() => setShowCommingSoonModal(false)}
      className={styles.CommingSoonModal}
    >
      <div
        className={styles.container}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className={`flex-col-center ${styles.titleContainer}`}>
          <strong className={`txt1 ${styles.titleBaap}`}>Stay Tuned !</strong>
          <p className={`txt2 ${styles.title}`}>The new release</p>
          <p className={`txt2 ${styles.title}`}>is coming soon...</p>
        </div>

        <Link
          onClick={() => setShowCommingSoonModal(false)}
          href={"/face-swap/single-ai-face-swap"}
        >
          <button className={` btn1 ${styles.btn}`}>
            Explore Single AI Face Swap
          </button>
        </Link>

        {/* close */}
        <div
          className={`flex-row-center ${styles.close}`}
          onClick={() => setShowCommingSoonModal(false)}
        >
          <Image
            src={close}
            className={styles.img}
            alt="close"
            height={100}
            width={100}
          />
        </div>

        {/* man */}
        <div className={styles.man}>
          <Image src={man} alt="man" height={100} width={100} />
        </div>
      </div>
    </div>
  );
}
