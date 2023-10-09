import React from 'react';
import { createPortal } from 'react-dom';

export default function Modal({
  closeModal,
  iconClose,
  title,
  hideTitle,
  text,
  hideText,
}) {
  return createPortal(
    <div className="modal">
      <button className="close-modal" onClick={closeModal}>
        <img src={iconClose} alt="close icon" />
      </button>
      {hideTitle ? null : <h2 className="modal-title">{title}</h2>}
      {hideText ? null : <p className="modal-text">{text}</p>}
    </div>
  );
}

module.export = { Modal };
