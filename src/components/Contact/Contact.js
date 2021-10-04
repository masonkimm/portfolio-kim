import React from 'react';
import './Contact.css';
import { AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__heading">
        <h1>Contact Info</h1>
      </div>
      <div className="contact__img">
        <img src="https://rb.gy/xikudy" alt="spinning logo" />
      </div>
      <div className="contact__icons">
        <div className="contact__email">
          <AiOutlineMail fontSize="1.5rem" style={{ color: '#007bff' }} />
          <p> masonkimsj@gmail.com</p>
        </div>

        <a
          href="https://www.linkedin.com/in/masonkimm"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to Linkedin"
        >
          <AiFillLinkedin fontSize="1.5rem" />
          <p> linkedin.com/in/masonkimm</p>
        </a>

        <a
          href="https://github.com/masonkimm"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to Github"
        >
          <AiOutlineGithub fontSize="1.5rem" />
          <p> github.com/masonkimm</p>
        </a>
      </div>
    </div>
  );
}
