import React, { useState } from "react";
import { formValidation } from "../Utils/formValidation";
import axios from "axios";
import "../Css/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSaveClick = async (e) => {
    e.preventDefault();
    const validOrNot = formValidation(formData);

    if (validOrNot) {
      setError(validOrNot);
    } else {
      setError({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
      try {
        const response = await axios.post(
          "https://formspree.io/f/xjvnzdjp",
          formData
        );
        if (response?.status === 200) {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const formValidation = (formData) => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First Name is required";
    if (!formData.lastName) errors.lastName = "Last Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.subject) errors.subject = "Subject is required";
    if (!formData.message) errors.message = "Message is required";
    return Object.keys(errors).length ? errors : null;
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={onSaveClick} className="contact-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={error.firstName ? "error" : ""}
          />
          {error.firstName && (
            <span className="error-text">{error.firstName}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={error.lastName ? "error" : ""}
          />
          {error.lastName && (
            <span className="error-text">{error.lastName}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={error.email ? "error" : ""}
          />
          {error.email && <span className="error-text">{error.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={error.subject ? "error" : ""}
          />
          {error.subject && <span className="error-text">{error.subject}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={error.message ? "error" : ""}
          ></textarea>
          {error.message && <span className="error-text">{error.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
