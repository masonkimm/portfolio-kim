import React from 'react';
import './Overview.css';
import { FaBrain, FaUserGraduate } from 'react-icons/fa';
import { GiTeamIdea } from 'react-icons/gi';

export default function Overiew() {
  return (
    <div className="overView">
      <div className="overView__item">
        <h2>
          <FaUserGraduate size="2em" className="about__icon" />
        </h2>
        <p>
          Recent graduate from George Washington University's Coding Boot Camp.
        </p>
      </div>

      <div className="overView__item">
        <h2>
          <FaBrain size="2em" />
        </h2>

        <p>Background in Neuroscience and Research</p>
      </div>

      <div className="overView__item">
        <h2>
          <GiTeamIdea size="2em" />
        </h2>
        <p>
          Looking forward to developing fun, exciting, & creative websites and
          softwares.
        </p>
      </div>
    </div>
  );
}
