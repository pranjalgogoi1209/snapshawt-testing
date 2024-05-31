import styles from "./privacyPolicy.module.css";
import ReactGA from "react-ga4";

export const metadata = {
  title: "Privacy Policy ",
  description:
    "Read Snapshawt's Privacy Policy to understand how we collect, use, and protect your personal information when you use our website and services.",
};

export default function PrivacyPolicy() {
  return (
    <div className={`flex-col-center ${styles.PrivacyPolicy}`}>
      <header className={`flex-col-center ${styles.header}`}>
        <h1 className={`grd-txt`}>Privacy Policy for Snapshawt.com</h1>
        <p className={`txt2 ${styles.des}`}>
          At Snapshawt.com, we prioritize the privacy and security of our users'
          personal information. This Privacy Policy outlines how we collect,
          use, and safeguard your data when you interact with our website and
          platform. By using Snapshawt.com, you consent to the terms outlined in
          this policy.
        </p>
      </header>

      <main className={`flex-col-center ${styles.main}`}>
        <dl className={`flex-col-center ${styles.dl}`}>
          <dt className={`txt1 ${styles.dt}`}>Information We Collect:</dt>
          <dd className={`flex-col-center txt2 ${styles.dd}`}>
            <div className={` ${styles.subHeading}`}>
              <strong className={styles.head}>Personal Information:</strong>
              &nbsp; When you register or use our platform, we may collect
              personal information such as your name, email address, and payment
              details (when applicable).
            </div>
            <div className={` ${styles.subHeading}`}>
              <strong className={styles.head}> Uploaded Content:</strong>
              &nbsp; We collect photos and other media files uploaded to our
              platform for processing through our AI-based features, including
              face swap, prompt-based image generation, and image enhancement.
            </div>
            <div className={` ${styles.subHeading}`}>
              <strong className={styles.head}> Cookies and Cache Data:</strong>
              &nbsp; Like many websites, we utilize cookies and cache data to
              enhance user experience, track usage patterns, and gather
              information about preferences. This data may include IP addresses,
              browser types, operating systems, and timestamps.
            </div>
            <div className={` ${styles.subHeading}`}>
              <strong className={styles.head}> Payment Information:</strong>
              &nbsp; When making payments on our platform, we collect payment
              details such as billing address, credit card information, UPI
              details, or e-wallet details, depending on the chosen payment
              method.
            </div>
          </dd>
        </dl>

        <dl className={`flex-col-center ${styles.dl}`}>
          <dt className={`txt1 ${styles.dt}`}>How We Use Your Information:</dt>
          <dd className={`flex-col-center txt2 ${styles.dd}`}>
            <div className={` ${styles.subHeading}`}>
              <strong className={styles.head}>Improving Services:</strong>&nbsp;
              We use the information collected to enhance and personalize user
              experience, develop new features, and improve the performance of
              our platform.
            </div>
            <div className={`${styles.subHeading}`}>
              <strong className={styles.head}>Communication:</strong>&nbsp; We
              may use your email address to send important updates, newsletters,
              promotional offers, and other relevant communications related to
              our services. You can opt-out of marketing communications at any
              time.
            </div>
            <div className={`${styles.subHeading}`}>
              <strong className={styles.head}>Processing User Content:</strong>
              &nbsp; The photos and media files uploaded to our platform are
              processed using AI algorithms to provide the intended features
              such as face swapping, image generation, and enhancement. We do
              not share this content with third parties unless required by law
              or necessary for providing our services.
            </div>
            <div className={`${styles.subHeading}`}>
              <strong className={styles.head}>Payment Processing:</strong>&nbsp;
              Your payment information is used solely for processing
              transactions and preventing fraudulent activities. We do not store
              credit card details on our servers after the transaction is
              complete.
            </div>
          </dd>
        </dl>

        <dl className={`flex-col-center ${styles.dl}`}>
          <dt className={`txt1 ${styles.dt}`}>Data Security:</dt>
          <dd className={`txt2 ${styles.dd}`}>
            We employ industry-standard security measures to protect your
            personal information from unauthorized access, alteration,
            disclosure, or destruction. However, no method of transmission over
            the internet or electronic storage is completely secure, and we
            cannot guarantee absolute security.
          </dd>
        </dl>

        <dl className={`flex-col-center ${styles.dl}`}>
          <dt className={`txt1 ${styles.dt}`}>Third-Party Services:</dt>
          <dd className={`txt2 ${styles.dd}`}>
            Snapshawt.com may utilize third-party services such as payment
            gateways and analytics providers. These services may have their own
            privacy policies governing the use of your information. We encourage
            you to review the privacy policies of these third-party services.
          </dd>
        </dl>

        <dl className={`flex-col-center ${styles.dl}`}>
          <dt className={`txt1 ${styles.dt}`}>Children's Privacy:</dt>
          <dd className={`txt2 ${styles.dd}`}>
            Snapshawt.com is not intended for use by individuals under the age
            of 13. We do not knowingly collect personal information from
            children under 13. If you believe that we have inadvertently
            collected information from a child under 13, please contact us
            immediately, and we will take appropriate steps to remove such
            information.
          </dd>
        </dl>

        <dl className={`flex-col-center ${styles.dl}`}>
          <dt className={`txt1 ${styles.dt}`}>Changes to Privacy Policy:</dt>
          <dd className={`txt2 ${styles.dd}`}>
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be effective immediately upon posting on this
            page. Your continued use of Snapshawt.com after the posting of
            changes constitutes your acceptance of such changes.
          </dd>
        </dl>
      </main>
    </div>
  );
}
