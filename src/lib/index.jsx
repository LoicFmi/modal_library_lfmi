import React from 'react';
import './style/style.css';

/**
 * ConfirmationModal
 *
 * @param   {boolean}  show          | display modal or not
 * @param   {boolean}  defaultStyle  | use the default styling or not
 * @param   {function} closeModal    | handle modal closing
 * @param   {string}   iconClose     | image for the close button
 * @param   {string}   title         | define the modal title
 * @param   {boolean}  hideTitle     | display modal title or not
 * @param   {string}   icon          | define the modal icon
 * @param   {boolean}  hideIcon      | display modal icon or not
 * @param   {string}   text          | define the modal text
 * @param   {boolean}  hideText      | display modal text
 *
 * @returns {DOMElement}
 *
 */

export default function ConfirmationModal({
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
  const modalStyle = defaultStyle ? 'modal-style modal-default' : 'modal-style';
  const titleStyle = defaultStyle
    ? 'title-style title-default'
    : ' title-style';
  const iconStyle = defaultStyle ? 'icon-style icon-default' : ' icon-style';
  const textStyle = defaultStyle ? 'text-style text-default' : ' text-style';
  return (
    <div className={showHide}>
      <section className={modalStyle}>
        <button className="close-modal" onClick={closeModal}>
          <img src={iconClose} alt="close icon" />
        </button>
        {hideTitle ? null : <h2 className={titleStyle}>{title}</h2>}
        {hideIcon ? null : <img className={iconStyle} src={icon} alt=""></img>}
        {hideText ? null : <p className={textStyle}>{text}</p>}
      </section>
    </div>
  );
}

module.export = { ConfirmationModal };
