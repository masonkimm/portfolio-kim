import React from 'react';
import './AboutNew.css';

import { Animated } from 'react-animated-css';

export default function AboutNew() {
  return (
    <div className="aboutNew">
      <div className="about__leftSide">
        <Animated animationIn="fadeIn">
          <h1>About </h1>
        </Animated>
        <div className="about__menu">
          {/* <button onClick={handleShowMain}>Main</button>
          <button onClick={handleShowEducation}>Education</button>
          <button onClick={handleShowWork}>Work Experience</button> */}
        </div>
      </div>
      <div className="about__rightSide">
        <h1>hi</h1>
      </div>
    </div>
  );
}
