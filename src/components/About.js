import React, { useState } from 'react';
import './About.css';
import { FaBrain, FaUserGraduate } from 'react-icons/fa';
import { GiTeamIdea } from 'react-icons/gi';
import { Animated } from 'react-animated-css';
import 'animate.css/animate.css';

export default function About() {
  const [showMain, setShowMain] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showWork, setShowWork] = useState(false);

  const handleShowMain = () => {
    setShowMain(!showMain);
    if (showEducation === true) {
      setShowEducation(!true);
    }
    if (showWork === true) {
      setShowWork(!true);
    }
  };
  const handleShowEducation = () => {
    setShowEducation(!showEducation);
    if (showMain === true) {
      setShowMain(!true);
    }
    if (showWork === true) {
      setShowWork(!true);
    }
  };
  const handleShowWork = () => {
    setShowWork(!showWork);
    if (showMain === true) {
      setShowMain(!true);
    }
    if (showEducation === true) {
      setShowEducation(!true);
    }
  };

  return (
    <div className="about" id="about">
      <div className="about__leftSide">
        <Animated animationIn="fadeIn">
          <h1>About </h1>
        </Animated>
        <div className="about__menu">
          <button onClick={handleShowMain}>Main</button>
          <button onClick={handleShowEducation}>Education</button>
          <button onClick={handleShowWork}>Work Experience</button>
        </div>
      </div>

      <div className="about__rightSide">
        {/* showMain */}
        {showMain ? (
          <div className="about__main">
            <div className="about__mainItem">
              <h4>
                <FaUserGraduate size="2em" className="about__icon" />
              </h4>
              <p>
                Recent graduate from George Washington University's Coding Boot
                Camp.
              </p>
            </div>

            <div className="about__mainItem">
              <h4>
                <FaBrain size="2em" />
              </h4>

              <p>Background in Neuroscience and Research</p>
            </div>

            <div className="about__mainItem">
              <h4>
                <GiTeamIdea size="2em" />
              </h4>
              <p>
                Looking forward to developing fun, exciting, & creative websites
                and softwares.
              </p>
            </div>
          </div>
        ) : null}
        {/* showEducation */}

        {showEducation ? (
          <div className="about__education">
            <Animated animationIn="fadeIn">
              <div className="about__school">
                <div className="about__school__leftSide">
                  <img
                    src="https://rb.gy/yzahfj"
                    alt="gmu logo"
                    className="about__gmu__img"
                  />
                </div>

                <div className="about__school__rightSide">
                  <h2>George Mason University</h2>

                  <h4>BS in Neuroscience</h4>
                  <p>Graudation date: June 2016</p>
                </div>
              </div>
            </Animated>

            <Animated animationIn="fadeIn">
              <div className="about__school">
                <div className="about__school__leftSide">
                  <img
                    src="https://rb.gy/8gycsg"
                    alt="gwu logo"
                    className="about__gwu__img"
                  />
                </div>
                <div className="about__school__rightSide">
                  <h2>George Washington University</h2>
                  <h4>Full Stack Web Development Certification</h4>
                  <p>Graduation Date: June 2020</p>
                </div>
              </div>
            </Animated>
          </div>
        ) : null}

        {showWork ? (
          <div className="about__work">
            <div className="about__work__leftSide">
              <img
                src="https://rb.gy/yhcmzq"
                alt="hhmi logo"
                className="about__hhmi__img"
              />
            </div>
            <div className="about__work__rightSide">
              <h2>HHMI-Janelia Research</h2>

              <h4>Connectome Annotator</h4>
              <p>Work Date: 2017-2020</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
