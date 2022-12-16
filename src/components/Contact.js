import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <h3>
        I'm always interested in hearing about new projects, so if you'd like to
        chat please get in touch.
      </h3>
      <form action="https://formspree.io/f/mnqwwwwq" method="post" id="form">
        <input
          type="text"
          name="name"
          required
          maxLength="30"
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email address"
        />
        <textarea
          name="message"
          cols="30"
          rows="7"
          maxLength="500"
          required
          placeholder="Enter text here"
        ></textarea>
        <small></small>
        <button type="submit">Get in touch</button>
      </form>
    </section>
  );
};

export default Contact;
