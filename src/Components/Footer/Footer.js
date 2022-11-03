import React from "react";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <footer>
      <div className={classes.footer}>
        <h3 className={classes.name}>| Omkar Sase |</h3>
        <div className={classes.social_links}>
          <div className={classes.social_link}>
            {" "}
            <FontAwesomeIcon icon={faGithub} />
            <span>Github</span>
          </div>
          <div className={classes.social_link}>
            <FontAwesomeIcon icon={faLinkedin} /> <span>Linkedin</span>
          </div>
          <div className={classes.social_link}>
            <FontAwesomeIcon icon={faInstagram} /> <span>Instagram</span>
          </div>
          <div className={classes.social_link}>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <span>
              <a href="mailto:saseomkar214@gmail.com">Mail</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
