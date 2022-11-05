import React from "react";
import classes from "./PageNotFound.module.css";
function PageNotFound() {
  return (
    <div className={classes.pageNotFound}>
      PageNotFound
      <h1>
        Return To <a href="/">Home Page</a>
      </h1>
    </div>
  );
}

export default PageNotFound;
