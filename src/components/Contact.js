import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__heading">
        <h1>Contact</h1>
        <h3>get in touch</h3>
      </div>
      <div className="contact__form">
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="E-mail" />
        </form>
      </div>
      <div className="contact__img">
        <img src="https://rb.gy/xikudy" alt="" />
      </div>
    </div>
  );
}
