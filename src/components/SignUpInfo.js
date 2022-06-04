import React from "react";

import classes from '../App.module.css';
import Wrap from "./UI/Wrap";

const SignUpInfo = (props) => {
  const emailChangeHandler = (e) => {
    props.setFormData({ ...props.formData, email: e.target.value });
  };
  const passwordChangeHandler = (e) => {
    props.setFormData({ ...props.formData, password: e.target.value });
  };
  const conPassCHangeHandler = (e) => {
    props.setFormData({ ...props.formData, confirmPassword: e.target.value });
  };
  return (
    <Wrap className={classes["sign-up-container"]}>
      <input
        type="text"
        placeholder="Email..."
        value={props.formData.email}
        onChange={emailChangeHandler}
      />
      <input
        type="text"
        placeholder="Password"
        value={props.formData.password}
        onChange={passwordChangeHandler}
      />
      <input
        type="text"
        placeholder="Confirm password"
        value={props.formData.confirmPassword}
        onChange={conPassCHangeHandler}
      />
    </Wrap>
  );
};

export default SignUpInfo;
