import React from 'react';
import './Contact.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-text" data-aos="flip-down">
        <h2>Contact</h2>
        <h3>
          I'm always interested in hearing about new projects, so if you'd like
          to chat please get in touch.
        </h3>
        <ul className="icon-list">
          <li>
            <a
              href="https://www.linkedin.com/in/diego-yon/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="icons" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/diegoyon"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="icons" />
            </a>
          </li>
          <li>
            <a
              href="mailto: diegoyon@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              <GoMail className="icons" />
            </a>
          </li>
        </ul>
      </div>
      <form
        action="https://formspree.io/f/mnqwwwwq"
        method="post"
        id="form"
        data-aos="flip-up"
      >
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
