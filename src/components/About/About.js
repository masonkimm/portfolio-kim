import React, { useState } from 'react';
import './About.css';
import WorkModal from '../WorkModal/WorkModal';
// icons
import { FaBrain, FaUserGraduate, FaUniversity } from 'react-icons/fa';
import { GiTeamIdea, GiComputerFan } from 'react-icons/gi';
import { MdComputer } from 'react-icons/md';
import { Animated } from 'react-animated-css';
import 'animate.css/animate.css';
// timeline
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import Typography from '@material-ui/core/Typography';

import { AiOutlineLink } from 'react-icons/ai';

export default function About() {
  const [showMain, setShowMain] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleShowMain = (e) => {
    e.preventDefault();
    setShowMain(true);
    setShowEducation(false);
    setShowWork(false);
  };

  const handleShowEducation = (e) => {
    e.preventDefault();
    setShowMain(false);
    setShowEducation(true);
    setShowWork(false);
  };

  const handleShowWork = (e) => {
    e.preventDefault();
    setShowMain(false);
    setShowEducation(false);
    setShowWork(true);
  };

  return (
    <div className="about" id="about">
      <div className="about__leftSide">
        <Animated animationIn="fadeIn">
          <h1>About </h1>
        </Animated>
        <div className="about__menu">
          <button onClick={handleShowMain} aria-label="Main">
            Main
          </button>
          <button onClick={handleShowEducation} aria-label="Education">
            Education
          </button>
          <button onClick={handleShowWork} aria-label="Work Experience">
            Work Experience
          </button>
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
                  <FaUserGraduate size="1.5em" className="about__icon" />
                  <p>
                    Graduate from George Washington University's Coding Boot
                    Camp
                  </p>
                </div>

                <div className="about__mainItem">
                  <MdComputer size="1.5em" />
                  <p>Detailed oriented, motivated, and passionate for coding</p>
                </div>

                <div className="about__mainItem">
                  <h4>
                    <GiTeamIdea size="1.5em" />
                  </h4>
                  <p id="about__team">
                    Looking forward to joining a great team to design & develop
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
          <Animated animationIn="fadeIn">
            <div className="about__education">
              <Timeline>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent>
                    <Typography
                      variant="h6"
                      component="h1"
                      className="about__education__school"
                    >
                      George Mason University
                    </Typography>

                    <div className="about__timelineBody">
                      <img
                        src="https://rb.gy/yzahfj"
                        alt="George Mason University logo"
                        className="about__education__img"
                      />
                      <div className="about__timelineRight">
                        <div className="about__top">
                          <p>BS in Neuroscience</p>
                        </div>
                        <p>
                          {' '}
                          <i>
                            With curiosity for how the human brain works, I
                            majored in neuroscience. With interest in science
                            and passion for technology, I went onto working at
                            Howard Hughes Medical Institute - Janelia Research
                            to experience the best of both worlds.
                          </i>
                        </p>
                        <div className="about__bottom">
                          <p>Fairfax, VA | 2016 </p>
                          <p>
                            <a
                              href="https://science.gmu.edu/academics/departments-units/neuroscience"
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Link to neuroscience department"
                            >
                              <AiOutlineLink /> gmu.com/neuroscience
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      variant="h6"
                      component="h1"
                      className="about__education__school"
                    >
                      George Washington University
                    </Typography>
                    <div className="about__timelineBody">
                      <img
                        src="https://rb.gy/8gycsg"
                        alt="George Washington University"
                        className="about__education__img"
                      />
                      <div className="about__timelineRight">
                        <div className="about__top">
                          <p>Full Stack Web Development</p>
                          <p>Coding Certificate</p>
                        </div>
                        <p>
                          <i>
                            Intensive coding boot camp program focused on
                            gaining technical programming and market-driven
                            skills in HTML, CSS, Bootstrap, JavaScript, jQuery,
                            Node.js, Express.js, React.js, MongoDB, MySQL.
                          </i>
                        </p>

                        <div className="about__bottom">
                          <p>Washington, D.C. | 2020</p>
                          <p>
                            <a
                              href="https://bootcamp.cps.gwu.edu/"
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Link to George Washington University Boot Camp"
                            >
                              <AiOutlineLink /> gwu.edu/bootcamp.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent>Continuing Education</TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </Animated>
        ) : null}

        {showWork ? (
          <div className="about__work">
            <div className="about__workTop">
              <img
                src="https://www.janelia.org/sites/default/files/Design/HHMI_Janelia_Logo_Color.png"
                alt="Howard Hughes Medical Institution logo"
                className="about__hhmi__img"
              />
              <div className="about__workInfo">
                <h3>Howard Hughes Medical Institute - Janelia</h3>
                <h5>
                  <i> Connectome Annotator </i>
                </h5>
                <p>Work Date: 2017-2020</p>
              </div>
            </div>

            <div className="about__workBottom">
              <div className="about__workRow">
                <div className="about__workColumn">
                  <img
                    src="https://rb.gy/r4lbnb"
                    alt="The annotation team"
                    onClick={() => {
                      setSelectedImg('https://rb.gy/r4lbnb');
                    }}
                  />
                  <img
                    src="https://rb.gy/xljlru"
                    alt="Connectome 1"
                    onClick={() => {
                      setSelectedImg('https://rb.gy/xljlru');
                    }}
                  />
                  <img
                    src="https://rb.gy/vusnau"
                    alt="Connectome 2"
                    onClick={() => {
                      setSelectedImg('https://rb.gy/vusnau');
                    }}
                  />
                </div>
                <div className="about__workColumn">
                  <img
                    src="https://rb.gy/oaiuoo"
                    alt="Developer"
                    onClick={() => {
                      setSelectedImg('https://rb.gy/oaiuoo');
                    }}
                  />
                  <img
                    src="https://rb.gy/je8b4x"
                    alt="Connectome 3"
                    onClick={() => {
                      setSelectedImg('https://rb.gy/je8b4x');
                    }}
                  />
                  <img
                    src="https://rb.gy/e66zc5"
                    alt="Connectome 4"
                    onClick={() => {
                      setSelectedImg('https://rb.gy/e66zc5');
                    }}
                  />
                </div>
                <div className="about__workColumn">
                  <img
                    src="https://rb.gy/8hlzcv"
                    alt="Connectome 5"
                    onClick={() => {
                      setSelectedImg('https://rb.gy/8hlzcv');
                    }}
                  />
                  <img
                    src="https://rb.gy/pnnlh2"
                    alt="Connectome machine"
                    onClick={() => {
                      setSelectedImg('https://rb.gy/pnnlh2');
                    }}
                  />
                </div>
                <div className="about__workColumn">
                  <img
                    src="https://www.hhmi.org/sites/default/files/close-up_1200.gif"
                    alt="Connectome 6"
                    onClick={() => {
                      setSelectedImg(
                        'https://www.hhmi.org/sites/default/files/close-up_1200.gif'
                      );
                    }}
                  />
                  <img
                    src="https://www.hhmi.org/sites/default/files/circuit_1800_tall.gif"
                    alt="Connectome 7"
                    onClick={() => {
                      setSelectedImg(
                        'https://www.hhmi.org/sites/default/files/circuit_1800_tall.gif'
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {selectedImg && (
        <WorkModal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}
