import React from "react";

import Button from "../UI/Button";
import "./Error.css";

const Error = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm} />
      <div className="modal card">
        <header className="title">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <h3>{props.message}</h3>
        </div>
        <footer className="actions">
          <Button onClick={props.onConfirm}>
            Ok
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default Error;
