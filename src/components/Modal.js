import React from 'react';
import './Modal.css';

export default function Modal({ selectedImg, setSelectedImg }) {
  const handleCloseModal = (e) => {
    if (e.target.classList.contains('modal__backdrop')) {
      setSelectedImg(null);
    }
  };
  return (
    <div className="modal" onClick={handleCloseModal}>
      <div className="modal__backdrop">
        <img src={selectedImg} alt="" />
      </div>
    </div>
  );
}
