import React from 'react';

import './NavBar.css';
import { Link } from 'react-scroll';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar__timeline">
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Link
                to="landingPage"
                activeClass="active"
                spy={true}
                smooth={true}
                aria-label="Link to landing page"
              >
                Home
              </Link>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Link
                to="about"
                smooth={true}
                spy={true}
                aria-label="Link to about section"
              >
                About
              </Link>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Link
                to="projectPage"
                smooth={true}
                spy={true}
                aria-label="Link to project section"
              >
                Projects
              </Link>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <Link
                to="contact"
                smooth={true}
                spy={true}
                aria-label="Link to contact section"
              >
                Contact
              </Link>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}
