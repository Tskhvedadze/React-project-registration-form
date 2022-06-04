import React from "react";

import classes from "../App.module.css";
import Wrap from "./UI/Wrap";

const OtherInfo = (props) => {
  const nationCHangeHandler = (e) => {
    props.setFormData({
      ...props.formData,
      nationality: e.target.value,
    });
  };

  const otherChangehandler = (e) => {
    props.setFormData({
      ...props.formData,
      other: e.target.value,
    });
  };

  return (
    <Wrap className={classes["other-info-container"]}>
      <input
        type="text"
        placeholder="Nationality..."
        value={props.formData.nationality}
        onChange={nationCHangeHandler}
      />
      <input
        type="text"
        placeholder="Other..."
        value={props.formData.other}
        onChange={otherChangehandler}
      />
    </Wrap>
  );
};

export default OtherInfo;
