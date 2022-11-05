import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleInfo,
  faSquarePollVertical,
  faBookmark,
  faBlog,
  faCode,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
function Header() {
  const { user } = useSelector((state) => state.userInfo);
  let username = "/user";
  let accountURL;
  if (user) {
    username = `/user/${user.handle}`;
    accountURL = `https://codeforces.com/profile/${user.handle}`;
  }
  return (
    <>
      <section className={classes.navbar}>
        <nav className={classes.nav}>
          <div className={classes.logo}>
            <div className={classes.github_logo}>
              <a
                target="_blank"
                href="https://github.com/21omkarsase/Codeforces-Visualizer/"
              >
                <FontAwesomeIcon
                  className={classes.githubLogo}
                  icon={faGithub}
                />
              </a>
            </div>
            <Link to="/">
              <span>Codeforces Visualizer</span>
            </Link>
          </div>
          <div className={classes.nav_links}>
            <Link className={classes.nav_link} to={user ? username : "/"}>
              <span>
                <FontAwesomeIcon icon={faCircleInfo} />
              </span>
              <span>User Info</span>
            </Link>
            <Link className={classes.nav_link} to={user ? "/rating" : "/"}>
              <span>
                <FontAwesomeIcon icon={faSquarePollVertical} />
              </span>
              <span>Contests</span>{" "}
            </Link>
            <Link className={classes.nav_link} to={user ? "/submissions" : "/"}>
              <span>
                <FontAwesomeIcon icon={faBookmark} />
              </span>{" "}
              <span>Submissions</span>
            </Link>
            <Link className={classes.nav_link} to={user ? "/problems" : "/"}>
              <span>
                <FontAwesomeIcon icon={faCode} />
              </span>{" "}
              <span>Problems</span>
            </Link>
            <Link className={classes.nav_link} to={user ? "blogs" : "/"}>
              <span>
                <FontAwesomeIcon icon={faBlog} />
              </span>{" "}
              <span>User Blogs</span>
            </Link>
            <div className={classes.account}>
              {user && (
                <>
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <span>
                    <a target="_blank" href={accountURL}>
                      {user.handle}
                    </a>
                  </span>
                </>
              )}
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Header;
