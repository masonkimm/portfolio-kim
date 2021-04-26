import React, { useState } from 'react';
import './Project.css';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
// import ProjectModal from './ProjectModal';

export default function Project(props) {
  // const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="project">
      <button onClick={() => setShow(true)}>
        <h3>{props.title}</h3>
        <img src={props.imgSrc} alt="" />
      </button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm-centered">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>About</h5>
          <p>{props.about}</p>
          <div className="project__modalImg">
            <img src={props.imgOne} alt="" />
          </div>

          <h5>Tech Used </h5>
          <ul>
            <li>{props.techUsed}</li>
          </ul>

          <div className="project__link">
            <p>
              <span className="project__icon">
                <AiOutlineGithub />
              </span>
              <a href={props.gitHubLink} target="_blank" rel="noreferrer">
                Project Code
              </a>
            </p>
            <p>
              <span className="project__icon">
                <AiOutlineLink />
              </span>
              <a href={props.link} target="_blank" rel="noreferrer">
                Project Link
              </a>
            </p>
          </div>

          <p id="project__date">Date: {props.date}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
