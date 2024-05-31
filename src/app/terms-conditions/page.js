import styles from "./termsConditions.module.css";
import ReactGA from "react-ga4";

export const metadata = {
  title: "Terms&Conditions",
  description:
    "Review Snapshawt's Terms & Conditions to understand the rules, regulations, and legal agreements associated with using our AI-powered face swap services.",
};

export default function TermsConditions() {
  return (
    <div className={`flex-col-center ${styles.TermsConditions}`}>
      <h1 className={`grd-txt`} style={{ alignSelf: "center" }}>
        Terms & Conditions
      </h1>
      <p className={`txt2`}>
        Welcome to Snapshawt.com, a creative content generation platform
        provided by <strong>Techkilla Technologies Pvt. Ltd.</strong> By using
        our website, you agree to comply with and be bound by the following
        terms and conditions of use. Please read these terms carefully before
        using our website.
      </p>

      <p className={`txt2`}>
        <strong>1. Use of Templates:</strong> Snapshawt.com offers users access
        to templates crafted for creative content generation. Users are
        permitted to use these templates for personal or commercial purposes
        within the scope of our platform&apos;s intended use.
      </p>
      <p className={`txt2`}>
        <strong>2. Misuse Disclaimer:</strong> Snapshawt.com is not responsible
        for any misuse of the templates or content generated through our
        platform. Users are solely responsible for ensuring that the content
        created using our platform complies with all applicable laws and
        regulations.
      </p>
      <p className={`txt2`}>
        <strong>3. Keyword Policy:</strong> Snapshawt.com has implemented
        technical measures to prevent the use of non-accepting keywords, such as
        "nude," "naked," etc., that violate our policies. However, users are
        advised to use our platform responsibly and refrain from creating
        content that is offensive, harmful, or inappropriate.
      </p>
      <p className={`txt2`}>
        <strong>4. Modification of Terms:</strong> Snapsahwt.com reserves the
        right to modify these terms and conditions at any time without prior
        notice. Users are bound by the latest version of the terms and
        conditions and are encouraged to review them periodically.
      </p>
      <p className={`txt2`}>
        <strong>5. Acceptance of Terms:</strong> By using Snapshawt.com, you
        acknowledge that you have read, understood, and agree to be bound by
        these terms and conditions. If you do not agree with any part of these
        terms, please do not use our website.
      </p>
      <p className={`txt2`}>
        <strong>6. Contact Us:</strong> If you have any questions or concerns
        about these terms and conditions, don&apos;t hesitate to contact us at
        &nbsp;
        <strong>
          <a href="mailto:support@snapshawt.com">support@snapshawt.com</a>
        </strong>
        .
      </p>

      <p className={`txt2`}>
        Thank you for using Snapshawt.com. We hope you enjoy creating with our
        platform !
      </p>
    </div>
  );
}
