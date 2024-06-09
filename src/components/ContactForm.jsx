import React, { useState } from "react";
import { formValidation } from "../Utils/formValidation";
import axios from "axios";
import "../Css/ContactForm.css";

function ContactFormaa() {
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
    console.log(name, value);
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

  return (
    <form className="max-w-md mx-auto w-full">
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700">
          First Name
        </label>
        <input
          // type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
        />
        {error.firstName && <p className="text-rose-700">{error.firstName}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700">
          Last Name
        </label>
        <input
          // type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
        />
        {error.lastName && <p className="text-rose-700">{error.lastName}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email
        </label>
        <input
          // type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
        />
        {error.email && <p className="text-rose-700">{error.email}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700">
          Subject
        </label>
        <input
          // type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
        />
        {error.subject && <p className="text-rose-700">{error.subject}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
        />
        {error.message && <p className="text-rose-700">{error.message}</p>}
      </div>
      <button
        // type="submit"
        onClick={onSaveClick}
        className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
      >
        SEND
      </button>
    </form>
  );
}

const Contact = () => {
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
      <h2>Contact Us</h2>
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

export default Contact;

// export default ContactForm;
