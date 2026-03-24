import React, { useState } from "react";
import axios from "axios";
import "../Css/ContactForm.css";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", subject: "", message: "",
  });
  const [error, setError] = useState({
    firstName: "", lastName: "", email: "", subject: "", message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (data) => {
    const errors = {};
    if (!data.firstName) errors.firstName = "First name is required";
    if (!data.lastName) errors.lastName = "Last name is required";
    if (!data.email) errors.email = "Email is required";
    if (!data.subject) errors.subject = "Subject is required";
    if (!data.message) errors.message = "Message is required";
    return Object.keys(errors).length ? errors : null;
  };

  const onSaveClick = async (e) => {
    e.preventDefault();
    const validOrNot = validate(formData);
    if (validOrNot) {
      setError(validOrNot);
      return;
    }
    setError({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    setSending(true);
    try {
      const response = await axios.post("https://formspree.io/f/xjvnzdjp", formData);
      if (response?.status === 200) {
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
        setSuccessMessage("✅ Message sent successfully! I'll get back to you soon.");
      }
    } catch {
      setSuccessMessage("❌ Error sending message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-container">
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Contact Me</h2>
        <p className="contact-subtitle">Got a project in mind? Let's talk! 🚀</p>
      </motion.div>

      <motion.form
        onSubmit={onSaveClick}
        className="contact-form"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className={error.firstName ? "error" : ""}
            />
            {error.firstName && <span className="error-text">{error.firstName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className={error.lastName ? "error" : ""}
            />
            {error.lastName && <span className="error-text">{error.lastName}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={error.email ? "error" : ""}
          />
          {error.email && <span className="error-text">{error.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project idea, collaboration..."
            className={error.subject ? "error" : ""}
          />
          {error.subject && <span className="error-text">{error.subject}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            className={error.message ? "error" : ""}
          />
          {error.message && <span className="error-text">{error.message}</span>}
        </div>

        <button type="submit" className="submit-btn" disabled={sending}>
          {sending ? "⏳ Sending..." : "✉️ Send Message"}
        </button>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </motion.form>
    </div>
  );
};

export default ContactForm;
