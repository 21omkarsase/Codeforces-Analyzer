import React from "react";
import classes from "./Error.module.css";

function Error({ error }) {
  console.log(error);
  return (
    <div className={classes.error}>
      <h1>{error.comment}</h1>
    </div>
  );
}

export default Error;
