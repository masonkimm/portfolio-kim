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
        <img src="https://rb.gy/xikudy" alt="" />
      </div>
      <div className="contactPage__icons">
        <a href="https://github.com/masonkimm" target="_blank" rel="noreferrer">
          <AiOutlineMail fontSize="1.5rem" />
          <p> masonkimsj@gmail.com</p>
        </a>

        <a
          href="https://www.linkedin.com/in/masonkimm"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin fontSize="1.5rem" />
          <p> linkedin.com/in/masonkimm</p>
        </a>

        <a href="https://github.com/masonkimm" target="_blank" rel="noreferrer">
          <AiOutlineGithub fontSize="1.5rem" />
          <p> github.com/masonkimm</p>
        </a>
      </div>
    </div>
  );
}
