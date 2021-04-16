import React from 'react';
import './School.css';

export default function School({ date, img, major }) {
  return (
    <div className="school">
      <div className="school__left">
        <img src={img} alt="school logo" className="school__logo" />
      </div>
      <div className="school__right">
        <h4>{major}</h4>
        <p>Graduation Date: {date}</p>
      </div>
    </div>
  );
}
