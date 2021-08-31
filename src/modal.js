import React from "react";
import ReactDOM from "react-dom";
function Modal({ show, closeModal }) {
  if (!show) return null;
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="overlay" onClick={closeModal}></div>
      <div className="content">
        <h2>Simple Modal</h2>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
