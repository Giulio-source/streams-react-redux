import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router";

function Modal(props) {
  const history = useHistory();
  return ReactDOM.createPortal(
    <div className="modal-background" onClick={() => history.push("/")}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <h4>{props.header}</h4>
        </div>
        <div className="content">
          <p>{props.content}</p>
        </div>
        <div className="actions">
          <button className="action-one">{props.actionOne}</button>
          <button className="action-two">{props.actionTwo}</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
