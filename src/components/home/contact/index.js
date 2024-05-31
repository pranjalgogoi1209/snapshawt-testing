import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HashLoader, PropagateLoader, PuffLoader } from "react-spinners";

import { ContactForm } from "@/app/redux/slice";

import contactImg from "@/../public/home/contact/contactImg.png";
import styles from "./contact.module.css";

const EMPTY_FORM = {
  fullName: "",
  phone: "",
  email: "",
  message: "",
};

const Contact = ({ setContact }) => {
  const contactRef = useRef();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(EMPTY_FORM);
  const loaderSize = 20;
  const [loading, setLoading] = useState(false);

  const override = {
    display: "block",
    borderColor: "white",
    marginRight: "5%",
  };

  useEffect(() => {
    dispatch(ContactForm(contactRef.current));
    setContact(contactRef);
  }, [contactRef]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // toast options
  const toastOptions = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    try {
      const response = await axios.post("/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("Form submitted successfully", toastOptions);
        setFormData(EMPTY_FORM);
        setLoading(false);
      } else {
        toast.error("Please try again", toastOptions);
        setLoading(false);
      }
    } catch (error) {
      console.error("An error occurred while submitting the form", error);
      toast.error("Please try after some time", toastOptions);
      setLoading(false);
    }
  };

  return (
    <div ref={contactRef} className={`flex-col-center ${styles.Contact}`}>
      <div className={`flex-row-center`}>
        <div className={styles.leftContainer}>
          <div className={styles.imgContainer}>
            <Image src={contactImg} alt="contact" />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <p className={`cursiveFont ${styles.title}`}>Lets Connect</p>
          <h2 className={styles.heading}>Fill Your Details Now</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              placeholder="Full Name*"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <div className={styles.phoneEmail}>
              <input
                className={styles.input}
                type="number"
                placeholder="Phone No.*"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                className={styles.input}
                placeholder="Email*"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              className={styles.textarea}
              placeholder="Your Message Here*"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className={`btn2 ${styles.submit}`} type="submit">
              <HashLoader
                color="#fff"
                loading={loading}
                cssOverride={override}
                size={loaderSize}
              />
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <strong className={`txt2 ${styles.strong}`}>
        Join the creative revolution today with Snapshawt's Gen AI - where your
        imagination knows no bounds, and every story becomes a stunning visual
        masterpiece.
      </strong>

      <ToastContainer />
    </div>
  );
};

export default Contact;
