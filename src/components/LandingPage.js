import React from 'react';
import './LandingPage.css';
import SideBar from './SideBar';

export default function LandingPage() {
  return (
    <div className="landingPage" id="landingPage">
      <h1>
        Mason <span>SungJin </span>Kim
      </h1>
      <h2>Full Stack Developer</h2>

      <SideBar />
    </div>
  );
}
