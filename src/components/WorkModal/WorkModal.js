import React from 'react';
import './WorkModal.css';

export default function Modal({ selectedImg, setSelectedImg, caption }) {
  const handleCloseModal = (e) => {
    if (e.target.classList.contains('modal__backdrop')) {
      setSelectedImg(null);
    }
  };
  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={handleCloseModal}>
        <img src={selectedImg} alt="work" />
        {caption && <h4>caption: {caption} </h4>}
      </div>
    </div>
  );
}
