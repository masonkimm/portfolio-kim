import React from 'react';
import './Modal.css';
import Carousels from './Carousels';

export default function Modal({ selectedImg, setSelectedImg }) {
  const handleCloseModal = (e) => {
    if (e.target.classList.contains('modal')) {
      setSelectedImg(null);
    }
  };
  return (
    <div className="modal" onClick={handleCloseModal}>
      <div className="modal__backdrop">
        <div className="modal__body">
          <h1>Project Title</h1>
          <h2>Tech Used</h2>
        </div>
        <div className="modal__pic">
          <Carousels />
          {/* <img src={selectedImg} alt="" /> */}
        </div>
      </div>
    </div>
  );
}
