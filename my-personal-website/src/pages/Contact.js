// src/pages/Contact.js

import React, { useState } from 'react';
import ContactSection from '../components/sections/ContactSection';
import emailService from '../services/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailService.sendEmail(formData);
      alert('Your message has been sent successfully!');
    } catch (error) {
      alert('There was an error sending your message.');
    }
  };

  return (
    <div>
      <ContactSection />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
