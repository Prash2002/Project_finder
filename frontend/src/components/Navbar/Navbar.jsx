import React from "react";
import classes from "./Navbar.module.css";
// import Logo from '../../assets/Logo.svg';
import { Switch, Route, Link } from "react-router-dom";
// import LogoBlack from '../../assets/LogoBlack.svg';

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <h3>Project Finder</h3>
      <div className={classes.links}>
        <div className={classes.home}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </div>
        <div className={classes.home}>
          <Link to="/projects" className={classes.link}>
            Project
          </Link>
        </div>

        <div className={classes.home}>
          <Link to="/add" className={classes.link}>
            Add Project
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
