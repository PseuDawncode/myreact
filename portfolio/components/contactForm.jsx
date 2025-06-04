import React, { useState } from 'react';
import 'bootswatch/dist/solar/bootstrap.min.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact request submitted:', formData);
    setSubmitted(true);
  };

  return (
<div className="container mt-5">
      <div className="card border-light mb-4">
        <div className="card-header">Work With Me</div>
        <div className="card-body">
          <p className="mb-1"><strong>Phone:</strong> +46702501166</p>
          <p className="mb-1"><strong>Location:</strong> Andra Gatan 21, Landskrona, Sweden</p>
          <p className="mb-1"><strong>Email:</strong> dawnmarymalida@gmail.com</p>
          <p className="mb-1"><strong>LinkedIn:</strong> https://www.linkedin.com/in/mary-dawn-malida</p>
          <p className="mb-1"><strong>Github:</strong> https://github.com/PseuDawncode</p>
        </div>
      </div>

      <div className="card border-light mb-3">
        <div className="card-header">Contact Me</div>
        <div className="card-body">
          {submitted ? (
            <div className="alert alert-success" role="alert">
              Thank you for reaching out! I'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};


export default ContactForm;
