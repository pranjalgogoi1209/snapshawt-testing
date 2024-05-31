import React from "react";
import styles from "./faq.module.css";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const metadata = {
  title: "FAQ ",
  description:
    "Find answers to frequently asked questions about Snapshawt. Learn how to use our AI-powered face swap technology, troubleshoot common issues, and more.",
};

export default function Faq() {
  return (
    <div className={`flex-col-center ${styles.Faq}`}>
      <header className={`${styles.header}`}>
        <h1 className={`grd-txt`}>FAQs</h1>
      </header>

      <main className={`${styles.main}`}>
        <ul className={`flex-col-center ${styles.ul}`}>
          <Link href={"/faq/paid-subscription"} className={styles.a}>
            <li className={`txt1 flex-row-center ${styles.li}`}>
              Paid Subscription <MdKeyboardDoubleArrowRight />
            </li>
          </Link>

          <Link href={"/faq/bug-report"} className={styles.a}>
            <li className={`txt1 flex-row-center ${styles.li}`}>
              Bug Report <MdKeyboardDoubleArrowRight />
            </li>
          </Link>

          <Link href={"/faq/refund-policy"} className={styles.a}>
            <li className={`txt1 flex-row-center ${styles.li}`}>
              Refund Policy <MdKeyboardDoubleArrowRight />
            </li>
          </Link>

          <Link href={"/faq/auto-pay"} className={styles.a}>
            <li className={`txt1 flex-row-center ${styles.li}`}>
              Auto Pay <MdKeyboardDoubleArrowRight />
            </li>
          </Link>

          <Link href={"/faq/products-features"} className={styles.a}>
            <li className={`txt1 flex-row-center ${styles.li}`}>
              Products & Features <MdKeyboardDoubleArrowRight />
            </li>
          </Link>

          <Link href={"/faq/generative-ai"} className={styles.a}>
            <li className={`txt1 flex-row-center ${styles.li}`}>
              Generative AI <MdKeyboardDoubleArrowRight />
            </li>
          </Link>

          <Link href={"/faq/general-query"} className={styles.a}>
            <li className={`txt1 flex-row-center ${styles.li}`}>
              General Query <MdKeyboardDoubleArrowRight />
            </li>
          </Link>
        </ul>
      </main>
    </div>
  );
}
