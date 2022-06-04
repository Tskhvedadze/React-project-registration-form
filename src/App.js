import React from "react";

import classes from "./App.module.css";
import Form from "./components/Form";
import Wrap from "./components/UI/Wrap";

function App() {
  return (
    <Wrap className={classes.App}>
      <Form />
    </Wrap>
  );
}

export default App;
