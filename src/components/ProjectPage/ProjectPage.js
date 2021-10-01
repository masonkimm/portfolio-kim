// components
import React from 'react';
import './ProjectPage.css';
import Project from '../Project/Project';

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
import weatherApp from '../../img/weatherApp.png';
import todoList from '../../img/todoList.png';
import employeeDirectory from '../../img/employeeDirectory.png';
import superMario from '../../img/superMario.png';
import covidTracker from '../../img/covid19__tracker.png';
import snippetSaver from '../../img/snippetSaver.png';
import triviaApp from '../../img/triviaApp.png';
import readMeGen from '../../img/readMeGen.png';
import golfYelp from '../../img/golfYelp.png';
import blogApp from '../../img/blogApp.png';
import facebookClone from '../../img/facebookClone.png';
import netflixClone from '../../img/netflixClone.png';
import amazonClone from '../../img/amazonClone.png';

export default function ProjectPage() {
  return (
    <div className="projectPage" id="">
      <div className="projectPage__heading">
        <h1>Projects</h1>
        <div className="projectPage__icons">
          <AiFillHtml5 className="icon" />
          <DiCss3 className="icon" />
          <SiJavascript className="icon" />
          <SiNodeDotJs className="icon" />
          <SiReact className="icon" />
          <GrMysql className="icon" />
          <SiMongodb className="icon" />
          <SiJquery className="icon" />
          <SiBootstrap className="icon" />
          <SiMaterialUi className="icon" />
        </div>
      </div>

      <div className="projectPage__body">
        <div className="projectPage__row">
          {/* column 1 */}
          <div className="projectPage__column">
            <Project
              title="Weather Checker"
              imgSrc="https://rb.gy/xk73kt"
              imgOne={weatherApp}
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
              imgOne={todoList}
              about="Simple Todo list to keep track of daily tasks"
              techUsed="HTML, CSS, Bootstrap, JavaScript, jQuery, Localhost, Git-Hub"
              date="July, 2020"
              gitHubLink="https://github.com/masonkimm/todo-list"
              link="https://masonkimm.github.io/todo-list/"
            />
            <Project
              title="Employee-Directory"
              imgSrc="https://tinyurl.com/wh4f49hc"
              imgOne={employeeDirectory}
              about="Directory of Employees."
              techUsed="React, JSX, Github"
              date="July, 2021"
              gitHubLink="https://github.com/masonkimm/employee-directory"
              link="https://masonkimm.github.io/employee-directory/"
            />
          </div>
          {/* column 2 */}
          <div className="projectPage__column">
            <Project
              title="Super Mario"
              imgSrc="https://tinyurl.com/t8hm3yvf"
              imgOne={superMario}
              about="Classic Super Mario game."
              techUsed="HTML, CSS, JavaScript, Kaboom.js"
              date="August, 2021"
              gitHubLink="https://github.com/masonkimm/snippet-saver"
              link="https://masonkimm.github.io/super-mario/"
            />
            <Project
              title="Covid-19 Tracker"
              imgSrc="https://rb.gy/j7ylrk"
              imgOne={covidTracker}
              about="React based application to check worldwide, real-time COVID-19 data."
              techUsed="React.js, JSX, Material-UI, Numeral, Firebase"
              date="August, 2020"
              gitHubLink="https://github.com/masonkimm/covid-19-tracker"
              link="https://covid-19-tracker-94838.web.app/"
            />
            <Project
              title="Snippet Saver"
              imgSrc="https://rb.gy/a3odmj"
              imgOne={snippetSaver}
              about="Digital library for storing useful code snippets"
              techUsed="HTML, CSS, Bootstrap, JavaScript, MySQL, NPM Packages [Express, Express-Handlebars, MySQL], & Heroku"
              date="July, 2020"
              gitHubLink="https://github.com/masonkimm/snippet-saver"
              link="https://sjk-snippetsaver.herokuapp.com/"
            />
          </div>
          {/* column 3 */}
          <div className="projectPage__column">
            <Project
              title="Trivia-App"
              imgSrc="https://tinyurl.com/27ya36da"
              imgOne={triviaApp}
              about="Trivia App with random questions to freshen up your game skills."
              techUsed="React.js, TypeScript, Github Pages"
              date="August, 2021"
              gitHubLink="https://github.com/masonkimm/trivia-app"
              link="https://masonkimm.github.io/trivia-app"
            />

            <Project
              title="ReadMe Generator"
              imgSrc="https://rb.gy/pddl6x"
              imgOne={readMeGen}
              about="Backend tool for quickly generating a ReadMe.md file for a new project"
              techUsed="JavaScript, NPM, & Github"
              date="June, 2020"
              gitHubLink="https://github.com/masonkimm/readme-gen"
            />

            <Project
              title="Golf Yelp"
              imgSrc="https://images.unsplash.com/photo-1514480573427-1f96cbed6a27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1946&q=80"
              imgOne={golfYelp}
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
              title="Blog - App"
              imgSrc="https://bit.ly/3l61mIY"
              imgOne={blogApp}
              about="Blog to post and share the lastest news."
              techUsed="JavaScript, Express, EJS, MongoDB, Mongoose, Heroku"
              date="September, 2021"
              gitHubLink="https://github.com/masonkimm/blog-app"
              link="https://blog-app-msjk.herokuapp.com/"
            />
            <Project
              title="Facebook - Clone"
              imgSrc="https://rb.gy/tn8ncj"
              imgOne={facebookClone}
              about="Clone App of Facebook focused on front-end development."
              techUsed="React, Material UI, Random User API, Unsplash API "
              date="September, 2021"
              gitHubLink="https://github.com/masonkimm/facebook-clone"
              link="https://masonkimm.github.io/facebook-clone/"
              className="projectPage__project"
            />
            <Project
              title="Netflix - Clone"
              imgSrc="https://rb.gy/xuk9su"
              imgOne={netflixClone}
              about="Clone App of Netflix with dynamic banner, up-to-date lists of popular shows."
              techUsed="React, JSX, Netflix API, React Context API, GitHub, Firebase"
              date="August, 2020"
              gitHubLink="https://github.com/masonkimm/netflix-clone"
              link="https://netflix-clone-2d7bd.web.app/"
            />
            <Project
              title="Amazon - Clone"
              imgSrc="https://bit.ly/2YdH6h6"
              imgOne={amazonClone}
              about="Clone App of Amazon with cart functionality."
              techUsed="React, JSX, React Context API, GitHub, Github Pages"
              date="September, 2021"
              gitHubLink="https://github.com/masonkimm/amazon"
              link="https://masonkimm.github.io/amazon-clone/"
            />
            {/* <Project title="Spotify - Clone" imgSrc="https://rb.gy/6efoyh" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
