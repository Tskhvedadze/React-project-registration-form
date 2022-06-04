import React from "react";

import classes from "../App.module.css";
import Wrap from "./UI/Wrap";

const PersonalInfo = (props) => {
  const firstNameChangeHandler = (e) => {
    props.setFormData({
      ...props.formData,
      firstName: e.target.value,
    });
  };

  const lastNameChangeHandler = (e) => {
    props.setFormData({
      ...props.formData,
      lastName: e.target.value,
    });
  };

  const userNameChangeHandler = (e) => {
    props.setFormData({
      ...props.formData,
      username: e.target.value,
    });
  };

  return (
    <Wrap className={classes["personal-info-container"]}>
      <input
        type="text"
        placeholder="First name"
        value={props.formData.firstName}
        onChange={firstNameChangeHandler}
      />
      <input
        type="text"
        placeholder="Last name"
        value={props.formData.lastName}
        onChange={lastNameChangeHandler}
      />
      <input
        type="text"
        placeholder="Username"
        value={props.formData.username}
        onChange={userNameChangeHandler}
      />
    </Wrap>
  );

};

export default PersonalInfo;
