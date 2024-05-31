"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactGA from "react-ga4";

// import FeedbackModal from "@/components/modals/feedbackModal";

const App = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // console.log("isModal =>>", isModalOpen);

  useEffect(() => {
    // AOS.init({
    //   duration: 800,
    // });
    ReactGA.initialize("G-JDZXMJWM2P");

    /*  // Function to handle the beforeunload event
    const handleBeforeUnload = event => {
      event.preventDefault();
      setIsModalOpen(true);
      // event.returnValue = "";
    };

    // Add the event listener
    window.addEventListener("beforeunload", handleBeforeUnload); */

    /*  return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    }; */
  }, []);

  /* const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitFeedback = feedback => {
    console.log("User feedback:", feedback);
    setIsModalOpen(false);
  }; */

  return (
    <>
      {/* <FeedbackModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitFeedback}
      /> */}
    </>
  );
};

export default App;
