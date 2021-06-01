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

// images
import weatherApp__main from './img/weatherApp__main.png';
import todoList__main from './img/todoList__main.png';
import snippetSaver__main from './img/snippetSaver__main.png';
import covidTracker__main from './img/covidTracker__main.png';
import netflixClone__main from './img/netflixClone__main.png';
import fbClone__main from './img/fbClone__main.png';
import readMeGen__main from './img/readMeGen__main.png';
import golfYelp__modal from './img/golfYelp__modal.jpeg';

export default function ProjectPage() {
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
            <Project
              title="Weather Checker"
              imgSrc="https://rb.gy/xk73kt"
              imgOne={weatherApp__main}
              about="Weather App to check Current & Five-day forecase for anywhere in USA"
              techUsed="HTML, CSS, Bootstrap, JavaScript, jQuery, Weather - API, AJAX, Localhost, Git-Hub"
              date="June, 2020"
              gitHubLink="https://github.com/masonkimm/weather-app"
              link="https://masonkimm.github.io/weather-app/"
              className="projectPage__project"
            />
            <Project
              title="Todo List"
              imgSrc="https://rb.gy/krhasw"
              imgOne={todoList__main}
              about="Simple Todo list to keep track of daily tasks"
              techUsed="HTML, CSS, Bootstrap, JavaScript, jQuery, Localhost, Git-Hub"
              date="July, 2020"
              gitHubLink="https://github.com/masonkimm/todo-list"
              link="https://masonkimm.github.io/todo-list/"
            />
          </div>
          {/* column 2 */}
          <div className="projectPage__column">
            <Project
              title="Snippet Saver"
              imgSrc="https://rb.gy/a3odmj"
              imgOne={snippetSaver__main}
              about="Digital library for storing useful code snippets"
              techUsed="HTML, CSS, Bootstrap, JavaScript, MySQL, NPM Packages [Express, Express-Handlebars, MySQL], & Heroku"
              date="July, 2020"
              gitHubLink="https://github.com/masonkimm/snippet-saver"
              link="https://sjk-snippetsaver.herokuapp.com/"
            />
            <Project
              title="Covid-19 Tracker"
              imgSrc="https://rb.gy/j7ylrk"
              imgOne={covidTracker__main}
              about="React based application to check worldwide, real-time COVID-19 data."
              techUsed="React.js, JSX, Material-UI, React-ChartJs-2, Chart.js, Leaftlet, Numeral, Firebase"
              date="August, 2020"
              gitHubLink="https://github.com/masonkimm/covid-tracker"
              link="https://covid-tracker-4fa84.web.app/"
            />
          </div>
          {/* column 3 */}
          <div className="projectPage__column">
            <Project
              title="ReadMe Generator"
              imgSrc="https://rb.gy/pddl6x"
              imgOne={readMeGen__main}
              about="Backend tool for quickly generating a ReadMe.md file for a new project"
              techUsed="JavaScript, NPM, & Github"
              date="June, 2020"
              gitHubLink="https://github.com/masonkimm/readme-gen"
            />
            <Project
              title="Golf Yelp"
              imgSrc="https://images.unsplash.com/photo-1514480573427-1f96cbed6a27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1946&q=80"
              imgOne={golfYelp__modal}
              about="Yelp for Golf! Post, review, and rate your favorite golf courses!"
              techUsed="Tech: HTML, CSS, JavaScript, Bootstrap, Express, EJS, Mongo, Mongoose, Map Box, Cloudinary, Passport & etc."
              date="June, 2021"
              gitHubLink="https://github.com/masonkimm/golf-yelp"
              link="https://golf-yelp.herokuapp.com/"
            />
          </div>
          {/* column 4 */}

          <div className="projectPage__column">
            <Project
              title="Facebook - Clone"
              imgSrc="https://rb.gy/tn8ncj"
              imgOne={fbClone__main}
              about="Clone App of Netflix with dynamic banner, up-to-date lists of popular shows."
              techUsed="React, React Hooks, React Context API, React flip move, Material UI, Flexbox, Firebase Firestore realtime Database, Firebase Hosting, Firebase Google Auth"
              date="August, 2020"
              gitHubLink="https://github.com/masonkimm/facebook-clone"
              link="https://facebook-clone-35fee.web.app/"
              className="projectPage__project"
            />
            <Project
              title="Netflix - Clone"
              imgSrc="https://rb.gy/xuk9su"
              imgOne={netflixClone__main}
              about="Clone App of Netflix with dynamic banner, up-to-date lists of popular shows."
              techUsed="React, JSX, Netflix API, React Context API, GitHub, Firebase"
              date="August, 2020"
              gitHubLink="https://github.com/masonkimm/netflix-clone"
              link="https://netflix-clone-2d7bd.web.app/"
            />
            <Project title="Spotify - Clone" imgSrc="https://rb.gy/6efoyh" />
          </div>
        </div>
      </div>
    </div>
  );
}
