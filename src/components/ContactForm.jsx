import React, { useState } from "react";
import { formValidation } from "../Utils/formValidation";
import axios from "axios";

function ContactForm() {
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

export default ContactForm;
