import React from "react";
import classes from "./PageNotFound.module.css";
function PageNotFound() {
  return (
    <div className={classes.pageNotFound}>
      <h3>Page Not Found</h3>
      <h1>
        Return To <a href="/Codeforces-Visualizer">Home Page</a>
      </h1>
    </div>
  );
}

export default PageNotFound;
