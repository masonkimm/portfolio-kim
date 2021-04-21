import React from 'react';
import './NavBar.css';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function NavBar() {
  const handleScroll = () => {
    //   $('html, body').animate(
    //     {
    //       scrollTop: $($(this).attr('href')).offset().top - 100,
    //     },
    //     2000
    //   );
  };
  return (
    <div className="navBar">
      <Link
        to="landingPage"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Home
      </Link>
      <Link to="about" smooth={true}>
        About
      </Link>
      <Link to="experience" smooth={true}>
        Experience
      </Link>
      <Link to="project" smooth={true}>
        Project
      </Link>
      <Link to="contact" smooth={true}>
        Contact
      </Link>
    </div>
  );
}
