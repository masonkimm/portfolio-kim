import React, { useRef, useState } from 'react';
import './LandingPage.css';
import SideBar from '../SideBar/SideBar';

import { AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';

import { Overlay, Tooltip } from 'react-bootstrap';

export default function LandingPage() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <div className="landingPage" id="landingPage">
      <div className="landingPage__heading">
        <div className="landingPage__topRow">
          <h1>
            Mason <span>SungJin </span>Kim
          </h1>
        </div>

        <img src="https://rb.gy/xikudy" alt="spinning logo" />

        <h2>Full-Stack Developer</h2>
      </div>

      <div className="landingPage__icons">
        {/* eslint-disable-next-line */}
        <a
          ref={target}
          onClick={() => setShow(!show)}
          aria-label="Show email button"
        >
          <AiOutlineMail />
        </a>
        <Overlay target={target.current} show={show} placement="bottom">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              masonkimsj@gmail.com
            </Tooltip>
          )}
        </Overlay>
        <a
          href="https://www.linkedin.com/in/masonkimm"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to Linkedin"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/masonkimm"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to Github"
        >
          <AiOutlineGithub />
        </a>
      </div>
      <SideBar />
    </div>
  );
}
