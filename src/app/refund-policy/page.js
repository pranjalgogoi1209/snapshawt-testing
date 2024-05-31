import styles from "./paymentsPolicy.module.css";
import ReactGA from "react-ga4";

export const metadata = {
  title: "Refund Policy",
  description:
    "Read Snapshawt's Refund Policy to understand the conditions under which refunds are issued and the process for requesting a refund.",
};

export default function PaymentsPolicy() {
  return (
    <div className={`flex-col-center ${styles.PaymentsPolicy}`}>
      <h1 className={`grd-txt`} style={{ alignSelf: "center" }}>
        Payments & Refund policy
      </h1>
      <p className={`txt2`}>
        At Snapshawt, we strive to provide a seamless and enjoyable experience
        for all our users. Our platform operates on a one-time payment basis,
        ensuring transparency and simplicity in our pricing. We do not hold any
        refunds on subscription purchases.
      </p>
      <p className={`txt2`}>
        However, if you have any concerns or are not satisfied with your
        subscription, please don&apos;t hesitate to reach out to our support
        team at{" "}
        <strong>
          <a href="mailto:support@snapshawt.com">support@snapshawt.com</a>
        </strong>
        . We are committed to addressing your queries and ensuring your
        satisfaction with our service.
      </p>
      <p className={`txt2`}>
        Your feedback is valuable to us, and we are always looking for ways to
        improve our platform and services. Thank you for choosing Snapshawt.com
      </p>
      <p className={`txt2`}>
        All the accounts are here managed by{" "}
        <strong>Techkilla Technologies Pvt. Ltd.</strong>
      </p>
    </div>
  );
}
