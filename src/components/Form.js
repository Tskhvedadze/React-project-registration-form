import React, { useState } from "react";

import classes from "../App.module.css";

import OtherInfo from "./OtherInfo";
import Error from "./error/Error";
import PersonalInfo from "./PersonalInfo";
import SignUpInfo from "./SignUpInfo";
import Button from "./UI/Button";
import Wrap from "./UI/Wrap";

const Form = (props) => {
  const [error, setError] = useState();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const prevPageHandler = () => setPage((prevPage) => prevPage - 1);
  const nextPageHandler = () => setPage((prevPage) => prevPage + 1);

  const submitHandler = () => {
    for (const key in formData) {
      if (formData[key].length === 0) {
        setError({
          title: "Invalid input",
          message: "Please do not leave inputs empty",
        });
        return;
      }
    }
    if (
      formData.password.trim().toString() !==
      formData.confirmPassword.trim().toString()
    ) {
      setError({
        title: "Invalid password",
        message: "Passwords do not match, Enter same words as password",
      });
      return;
    } else {
      setError({
        title: "Form Submitted",
        message: "Thank you for registration",
      });
    }
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      username: "",
      nationality: "",
      other: "",
    });
  };

  const check = () => {
    if (page === FormTitles.length - 1) submitHandler();
    return nextPageHandler();
  };

  const formHandler = () => {
    if (page === 0)
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    if (page === 1)
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    if (page === 2)
      return <OtherInfo formData={formData} setFormData={setFormData} />;
  };

  const errorHandler = () => setError(null);

  return (
    <Wrap className={classes.form}>
      {error && (
        <Error
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Wrap className={classes.progressbar}>
        <Wrap
          style={{
            width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
          }}
        ></Wrap>
      </Wrap>
      <Wrap className={classes["form-container"]}>
        <Wrap className={classes.header}>
          <h1>{FormTitles[page]}</h1>
        </Wrap>
        <Wrap className={classes.body}>{formHandler()}</Wrap>
        <Wrap className={classes.footer}>
          <Button disabled={page === 0} onClick={prevPageHandler}>
            Prev
          </Button>
          <Button disabled={page > FormTitles.length - 1} onClick={check}>
            {page === FormTitles.length - 1
              ? "Submit"
              : "Next" && page > FormTitles.length - 1
              ? ""
              : "Next"}
          </Button>
        </Wrap>
      </Wrap>
    </Wrap>
  );
};

export default Form;
