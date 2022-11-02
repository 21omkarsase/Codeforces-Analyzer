import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const { user } = useSelector((state) => state.userInfo);
  let username = "/user";
  if (user) {
    username = `/user/${user.handle}`;
  }
  return (
    <>
      <section className={classes.navbar}>
        <nav className={classes.nav}>
          <div className={classes.logo}>
            <Link to="/">
              <span>Codeforces Visualizer</span>
            </Link>
          </div>
          <div className={classes.nav_links}>
            {user ? (
              <Link to={username}>
                <span>User Info</span>
              </Link>
            ) : (
              <Link to="/user">
                <span>User Info</span>
              </Link>
            )}
            <Link to="/rating">
              <span>Ratings</span>
            </Link>
            <Link to="/submissions">
              <span>Submissions</span>
            </Link>
            <Link to="blogs">
              <span>User Blogs</span>
            </Link>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Header;
