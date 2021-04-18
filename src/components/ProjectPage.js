import React from 'react';
import './ProjectPage.css';
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

import weatherApp__main from './img/weatherApp__main.png';

export default function ProjectPage() {
  return (
    <div className="projectPage" id="projects">
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
            <img src="https://rb.gy/tbxckj" alt="" />
            <img src="https://rb.gy/iviien" alt="" />
          </div>
          {/* column 2 */}
          <div className="projectPage__column">
            <img src="https://rb.gy/zbvpzd" alt="" />
            <img src="https://rb.gy/tq7rvd" alt="" />
            <img src="https://rb.gy/qktl9m" alt="" />
          </div>
          {/* column 3 */}
          <div className="projectPage__column">
            <img src="https://rb.gy/3gzmdg" alt="" />
            <img src="https://rb.gy/wce0ju" alt="" />
            <img src="https://rb.gy/tkwrzf" alt="" />
          </div>
          {/* column 4 */}

          {/* <div className="projectPage__column">
            <img src="https://rb.gy/tkwrzf" alt="" />
            <img src="https://rb.gy/qktl9m" alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
