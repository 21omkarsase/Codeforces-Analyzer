import React from "react";
import classes from "./Loader.module.css";

function Loader() {
  return (
    <div className={classes.loader}>
      <div className={classes["lds-ripple"]}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
