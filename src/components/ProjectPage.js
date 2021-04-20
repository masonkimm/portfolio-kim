import React, { useState } from 'react';
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
import todoList__main from './img/todoList__main.png';
import snippetSaver__main from './img/snippetSaver__main.png';
import covidTracker__main from './img/covidTracker__main.png';
import netflixClone__main from './img/netflixClone__main.png';
import fbClone__main from './img/fbClone__main.png';
import Modal from './Modal';

export default function ProjectPage() {
  const [selectedImg, setSelectedImg] = useState(null);

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
            {/* <img src="https://rb.gy/gyeptl" alt="" /> */}
            <img
              src={weatherApp__main}
              alt=""
              onClick={() => setSelectedImg(weatherApp__main)}
            />

            <img
              src={todoList__main}
              alt=""
              onClick={() => setSelectedImg(todoList__main)}
            />
            <img
              src="https://rb.gy/wce0ju"
              alt=""
              onClick={() => setSelectedImg('https://rb.gy/wce0ju')}
            />

            {/* <img src="https://rb.gy/tbxckj" alt="" /> */}
            {/* <img src="https://rb.gy/iviien" alt="" /> */}
          </div>
          {/* column 2 */}
          <div className="projectPage__column">
            <img
              src={snippetSaver__main}
              alt=""
              onClick={() => setSelectedImg(snippetSaver__main)}
            />
            <img
              src={covidTracker__main}
              alt=""
              onClick={() => setSelectedImg(covidTracker__main)}
            />
            {/* <img src="https://rb.gy/qktl9m" alt="" /> */}

            {/* <img src="https://rb.gy/zbvpzd" alt="" /> */}
            <img
              src="https://rb.gy/tq7rvd"
              alt=""
              onClick={() => setSelectedImg('https://rb.gy/tq7rvd')}
            />
          </div>
          {/* column 3 */}
          <div className="projectPage__column">
            <img
              src={fbClone__main}
              alt=""
              onClick={() => setSelectedImg(fbClone__main)}
            />
            {/* <img src="https://rb.gy/3gzmdg" alt="" /> */}

            <img
              src={netflixClone__main}
              alt=""
              onClick={() => setSelectedImg(netflixClone__main)}
            />

            <img
              src="https://rb.gy/tkwrzf"
              alt=""
              onClick={() => setSelectedImg('https://rb.gy/tkwrzf')}
            />
          </div>
          {/* column 4 */}

          {/* <div className="projectPage__column">
            <img src="https://rb.gy/tkwrzf" alt="" />
            <img src="https://rb.gy/qktl9m" alt="" />
          </div> */}

          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </div>
      </div>
    </div>
  );
}
