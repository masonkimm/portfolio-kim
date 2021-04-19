import React from 'react';
import './LandingPage.css';
import NavBar from './NavBar';
import SideBar from './SideBar';

import { AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';

export default function LandingPage() {
  return (
    <div className="landingPage" id="landingPage">
      <div className="landingPage__heading">
        <h1>
          Mason <span>SungJin </span>Kim
        </h1>
        <h2>Full Stack Developer</h2>
      </div>

      <div className="landingPage__icons">
        <h2>
          <AiOutlineMail />
        </h2>
        <h2>
          <AiFillLinkedin />
        </h2>
        <h2>
          <AiOutlineGithub />
        </h2>
      </div>
      <SideBar />
    </div>
  );
}
