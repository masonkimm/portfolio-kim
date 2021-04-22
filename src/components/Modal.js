import React from 'react';
import './Modal.css';
// import Carousels from './Carousels';

export default function Modal({ selectedImg, setSelectedImg, caption }) {
  const handleCloseModal = (e) => {
    if (e.target.classList.contains('modal__backdrop')) {
      setSelectedImg(null);
    }
  };
  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={handleCloseModal}>
        {/* <Carousels /> */}
        <img src={selectedImg} alt="" />
        <h4>caption: {caption} </h4>
      </div>
    </div>
  );
}
