import React from 'react';
import './LandingPage.css';
import SideBar from './SideBar';
import logo from '../logo-white.svg';
import '../App.css';

import { AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';

export default function LandingPage() {
  return (
    <div className="landingPage" id="landingPage">
      <div className="landingPage__heading">
        <div className="landingPage__topRow">
          <h1>
            Mason <span>SungJin </span>Kim
          </h1>
        </div>
        {/* <img src={logo} className="landingPage-logo" alt="logo" /> */}
        <img src="https://rb.gy/xikudy" alt="" />

        <h2>Full-Stack Developer</h2>
      </div>

      <div className="landingPage__icons">
        <a href="https://github.com/masonkimm" target="_blank" rel="noreferrer">
          <AiOutlineMail />
        </a>

        <a
          href="https://www.linkedin.com/in/masonkimm"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>

        <a href="https://github.com/masonkimm" target="_blank" rel="noreferrer">
          <AiOutlineGithub />
        </a>
      </div>
      <SideBar />
    </div>
  );
}
