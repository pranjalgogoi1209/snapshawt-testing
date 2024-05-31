import React, { useState } from "react";

const FeedbackModal = ({ isOpen, onClose, onSubmit }) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    onSubmit(feedback);
    setFeedback("");
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modal}>
        <h2>Feedback</h2>
        <textarea
          style={styles.textarea}
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
          placeholder="Please leave your feedback here..."
        />
        <div style={styles.buttons}>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    maxWidth: "90%",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  textarea: {
    width: "100%",
    height: "100px",
    marginBottom: "10px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default FeedbackModal;
