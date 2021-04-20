// components
// import Modal from './Modal';
import React from 'react';
import './ProjectPage.css';
import Project from './Project';

// icons
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import {
  SiJavascript,
  SiNodeDotJs,
  SiReact,
  SiMaterialUi,
  SiMongodb,
  SiJquery,
  SiBootstrap,
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

// pictures
// import weatherApp__main from './img/weatherApp__main.png';
// import todoList__main from './img/todoList__main.png';
// import snippetSaver__main from './img/snippetSaver__main.png';
// import covidTracker__main from './img/covidTracker__main.png';
// import netflixClone__main from './img/netflixClone__main.png';
// import fbClone__main from './img/fbClone__main.png';

export default function ProjectPage() {
  // const [retrieveInfo, setRetrieveInfo] = useState(null)

  // const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="projectPage" id="">
      <div className="projectPage__heading">
        <h1>Projects</h1>
        <div className="projectPage__icons">
          <h2>
            <AiFillHtml5 />
          </h2>
          <h2>
            <DiCss3 />
          </h2>
          <h2>
            <SiJavascript />
          </h2>
          <h2>
            <SiNodeDotJs />
          </h2>
          <h2>
            <SiReact />
          </h2>
          <h2>
            <GrMysql />
          </h2>
          <h2>
            <SiMongodb />
          </h2>
          <h2>
            <SiJquery />
          </h2>
          <h2>
            <SiBootstrap />
          </h2>
          <h2>
            <SiMaterialUi />
          </h2>
        </div>
      </div>

      <div className="projectPage__body">
        <div className="projectPage__row">
          {/* column 1 */}
          <div className="projectPage__column">
            <Project title="Weather Checker" imgSrc="https://rb.gy/xk73kt" />
            <Project title="Todo List" imgSrc="https://rb.gy/krhasw" />
            <Project title="ReadMe Generator" imgSrc="https://rb.gy/pddl6x" />

            {/* <img
              src="https://rb.gy/wce0ju"
              alt=""
              onClick={() => setSelectedImg('https://rb.gy/wce0ju')}
            /> */}
          </div>
          {/* column 2 */}
          <div className="projectPage__column">
            <Project title="Snippet Saver" imgSrc="https://rb.gy/a3odmj" />
            <Project title="Covid-19 Tracker" imgSrc="https://rb.gy/j7ylrk" />
            <Project title="Yelp Camp" imgSrc="https://rb.gy/tq7rvd" />
          </div>
          {/* column 3 */}
          <div className="projectPage__column">
            <Project title="Facebook - Clone" imgSrc="https://rb.gy/tn8ncj" />
            <Project title="Netflix - Clone" imgSrc="https://rb.gy/xuk9su" />
            <Project title="Spotify - Clone" imgSrc="https://rb.gy/6efoyh" />
          </div>
        </div>
      </div>
    </div>
  );
}
