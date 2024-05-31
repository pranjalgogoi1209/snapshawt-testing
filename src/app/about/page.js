import React from "react";
import styles from "./about.module.css";

export const metadata = {
  title: "About",
  description:
    "At Snapshawt, we're revolutionizing creative content generation through the power of Generative AI's face swap technology. Join us on our mission to redefine creativity and personalization.",
};

export default function AboutPage() {
  return (
    <div className={`flex-col-center ${styles.AboutPage}`}>
      <h1 className={`grd-txt ${styles.title}`}>About</h1>
      <p className={`txt2`}>
        At Snapshawt, we're revolutionizing creative content generation through
        the power of Generative AI's face swap technology. Our platform allows
        users to add a personal touch to every creation by seamlessly
        integrating their own faces into a wide range of content. Whether you're
        looking to create a hilarious meme, a heartwarming family portrait, or a
        stunning social media post, Snapshawt makes it easy and fun.
      </p>
      <p className={`txt2`}>
        <strong>Our mission is simple:</strong> to be the go-to platform for
        personalized content creation. We believe that everyone should have the
        opportunity to express themselves creatively, without the need for
        complicated tools or extensive training. With Snapshawt, you can unleash
        your creativity and share your unique creations with friends, family,
        and the world.
      </p>
      <p className={`txt2`}>
        Join us on our journey to redefine creativity and personalization.
        Explore Snapshawt today and start creating content that&apos;s uniquely
        you.
      </p>
    </div>
  );
}
