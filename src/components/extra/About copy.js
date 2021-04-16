import React, { useState } from 'react';
import './About.css';
import { FaBrain, FaUserGraduate } from 'react-icons/fa';
import { GiTeamIdea } from 'react-icons/gi';

export default function About() {
  const [showMain, setShowMain] = useState(true);
  const [showEducation, setShowEducation] = useState(false);

  const handleShowMain = () => {
    setShowMain(!showMain);
    if (showEducation === true) {
      setShowEducation(!true);
    }
  };
  const handleShowEducation = () => {
    setShowEducation(!showEducation);
    if (showMain === true) {
      setShowMain(!true);
    }
  };

  return (
    <div className="about" id="about">
      <div className="about__leftSide">
        <h1>About </h1>
        <div className="about__menu">
          <button onClick={handleShowMain}>Main</button>
          <button onClick={handleShowEducation}>Education</button>
        </div>
      </div>

      <div className="about__rightSide">
        {/* showMain */}
        {showMain ? (
          <div className="about__main">
            <div className="about__mainItem">
              <h2>
                <FaUserGraduate size="2em" className="about__icon" />
              </h2>
              <h3>
                Recent graduate from George Washington University's Coding Boot
                Camp.
              </h3>
            </div>

            <div className="about__mainItem">
              <h2>
                <FaBrain size="2em" />
              </h2>

              <h3>Background in Neuroscience and Research</h3>
            </div>

            <div className="about__mainItem">
              <h2>
                <GiTeamIdea size="2em" />
              </h2>
              <h3>
                Looking forward to developing fun, exciting, & creative websites
                and softwares.
              </h3>
            </div>
          </div>
        ) : null}
        {/* showEducation */}

        {showEducation ? (
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

        {/* {showTwo ? (
              <div className="about__specialties">
                Technical Skills: HTML, JavaScript, CSS, Bootstrap, jQuery, ES6,
                APIs, AJAX, Node.js, Express, Express-Handlebars, MySQL,
                MongoDB, Mongoose, GIT, GitHub, Command-Line, Heroku, React.js.
              </div>
            ) : null} */}
      </div>
    </div>
  );
}
