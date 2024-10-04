import React from "react";
import Form from "./ContactForm";
import MessageIcon from "@mui/icons-material/Message";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import "../Css/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="contact-header">
        <MessageIcon />
        <p>Contact Me</p>
      </div>
      <div className="contact-form-container">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
