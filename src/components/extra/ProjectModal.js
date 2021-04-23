import React from 'react';
import './ProjectModal.css';

export default function Modal({ title, imgOne }) {
  // const handleCloseModal = (e) => {
  //   if (e.target.classList.contains('modal__backdrop')) {
  //     setSelectedImg(null);
  //   }
  // };
  return (
    <div className="modal">
      <div className="modal__backdrop">
        <img src={imgOne} alt="" />
        <h4>caption: {title} </h4>
      </div>
    </div>
  );
}
