import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <>
      <section className={classes.header_area}>
        <div className={classes.header}>
          <h1 className={classes.title}>Codeforces Visualizer</h1>
          <p className={classes.content}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
            accusamus nostrum deserunt praesentium, eveniet animi harum! Unde
            modi quo laudantium nobis. Alias maiores voluptatum ipsam dolorum
            deleniti nostrum architecto molestias!
          </p>
        </div>
      </section>
    </>
  );
}

export default Header;
