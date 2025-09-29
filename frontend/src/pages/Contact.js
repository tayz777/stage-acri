import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  return (
    <div className="contact">
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;