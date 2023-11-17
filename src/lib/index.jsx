import React from 'react';
// import './style/style.css';

export default function Modal({
  show,
  defaultStyle,
  closeModal,
  iconClose,
  title,
  hideTitle,
  icon,
  hideIcon,
  text,
  hideText,
}) {
  const showHide = show ? 'modal display-block' : 'modal display-none';
  const modalStyle = defaultStyle ? 'modal-main default-style' : ' modal-main';
  return (
    <div className={showHide}>
      <section className={modalStyle}>
        <button className="close-modal" onClick={closeModal}>
          <img src={iconClose} alt="close icon" />
        </button>
        {hideTitle ? null : <h2 className="modal-title">{title}</h2>}
        {hideIcon ? null : <img className="modal-img" src={icon} alt=""></img>}
        {hideText ? null : <p className="modal-text">{text}</p>}
      </section>
    </div>
  );
}

module.export = { Modal };
