import React, { useState } from 'react';
import './About.css';
import { FaBrain, FaUserGraduate } from 'react-icons/fa';
import { GiTeamIdea } from 'react-icons/gi';

export default function About() {
  const [show, setShow] = useState(true);
  const [showTwo, setShowTwo] = useState(true);

  const handleShow = () => {
    setShow(!show);
    if (showTwo === true) {
      setShowTwo(!true);
    }
  };
  const handleShowTwo = () => {
    setShowTwo(!showTwo);
    if (show === true) {
      setShow(!true);
    }
  };

  return (
    <div className="about" id="about">
      <div className="about__leftSide">
        <h1>About </h1>
      </div>

      <div className="about__rightSide">
        <div className="about__top">
          <div className="about__overView">
            <h2>
              <FaUserGraduate size="2em" className="about__icon" />
            </h2>
            <h3>
              Recent graduate from George Washington University's Coding Boot
              Camp.
            </h3>
          </div>

          <div className="about__overView">
            <h2>
              <FaBrain size="2em" />
            </h2>

            <h3>Background in Neuroscience and Research</h3>
          </div>

          <div className="about__overView">
            <h2>
              <GiTeamIdea size="2em" />
            </h2>
            <h3>
              Looking forward to developing fun, exciting, & creative websites
              and softwares.
            </h3>
          </div>
        </div>
        <div className="about__bottom">
          <div className="about__menu">
            <button onClick={handleShow}>Education</button>
            <button onClick={handleShowTwo}>Specialties</button>
          </div>
          <div className="about__hidden">
            {show ? (
              <div className="about__education">
                <div className="about__gwu">
                  <h2>George Washington University</h2>
                  <img
                    src="https://rb.gy/8gycsg"
                    alt="gwu logo"
                    className="about__gwu__img"
                  />
                  <h4>Full Stack Web Development Certification</h4>
                  <p>Graduation Date: June 2020</p>
                </div>
                <div className="about__gmu">
                  <h2>George Mason University</h2>
                  <img
                    src="https://rb.gy/yzahfj"
                    alt="gmu logo"
                    className="about__gmu__img"
                  />
                  <h4>BS in Neuroscience</h4>
                  <p>Graudation date: June 2016</p>
                </div>
              </div>
            ) : null}
            {showTwo ? (
              <div className="about__specialties">
                Technical Skills: HTML, JavaScript, CSS, Bootstrap, jQuery, ES6,
                APIs, AJAX, Node.js, Express, Express-Handlebars, MySQL,
                MongoDB, Mongoose, GIT, GitHub, Command-Line, Heroku, React.js.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
