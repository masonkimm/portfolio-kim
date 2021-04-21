import React, { useState } from 'react';
import './About.css';
import { FaBrain, FaUserGraduate, FaUniversity } from 'react-icons/fa';
import { GiTeamIdea, GiComputerFan } from 'react-icons/gi';
import { MdComputer } from 'react-icons/md';
import { Animated } from 'react-animated-css';
import 'animate.css/animate.css';

export default function About() {
  const [showMain, setShowMain] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showWork, setShowWork] = useState(false);

  const handleShowMain = () => {
    setShowMain(!showMain);
    if (showMain === true) {
      setShowMain(true);
    }
    if (showEducation === true) {
      setShowEducation(!true);
    }
    if (showWork === true) {
      setShowWork(!true);
    }
  };
  const handleShowEducation = () => {
    setShowEducation(!showEducation);

    if (showEducation === true) {
      setShowEducation(true);
    }

    if (showMain === true) {
      setShowMain(!true);
    }
    if (showWork === true) {
      setShowWork(!true);
    }
  };
  const handleShowWork = () => {
    setShowWork(!showWork);
    if (showWork === true) {
      setShowWork(true);
    }

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
        {showMain ? (
          <Animated animationIn="fadeIn">
            <div className="about__overView">
              <div className="about__heading">
                <blockquote>
                  <h4>
                    "Developer with simple and minimalistic design approach."
                  </h4>
                  <p> - A quote by me. </p>
                </blockquote>
              </div>

              <div className="about__main">
                <div className="about__mainItem">
                  <h4>
                    <FaUserGraduate size="1.5em" className="about__icon" />
                  </h4>
                  <p>
                    Graduate from George Washington University's Coding Boot
                    Camp
                  </p>
                </div>

                <div className="about__mainItem">
                  <h4>
                    <MdComputer size="1.5em" />
                  </h4>

                  <p>Detailed oriented, motivated, and passionate for coding</p>
                </div>

                <div className="about__mainItem">
                  <h4>
                    <GiTeamIdea size="1.5em" />
                  </h4>
                  <p>
                    Looking forward to joining a greeat team to design & develop
                    creative websites and softwares.
                  </p>
                </div>
              </div>

              <div className="about__main">
                <div className="about__mainItem">
                  <h4>
                    <FaUniversity size="1.5em" className="about__icon" />
                  </h4>
                  <p>Bachelors of Science in Neuroscience</p>
                </div>

                <div className="about__mainItem">
                  <h4>
                    <FaBrain size="1.5em" />
                  </h4>

                  <p>
                    Background in research, large data analysis, programming,
                    and developing
                  </p>
                </div>

                <div className="about__mainItem">
                  <h4>
                    <GiComputerFan size="1.5em" />
                  </h4>
                  <p>PC builder, components enthusiast, and a gamer </p>
                </div>
              </div>
            </div>
          </Animated>
        ) : null}

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
