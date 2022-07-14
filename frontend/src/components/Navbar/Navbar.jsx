import React from "react";
import classes from "./Navbar.module.css";
// import Logo from '../../assets/Logo.svg';
import { Switch, Route, Link } from "react-router-dom";
// import LogoBlack from '../../assets/LogoBlack.svg';

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.home}>
        <Link to="/">Home</Link>
      </div>
      <div className={classes.home}>
        <Link to="/projects">Project</Link>
      </div>

      <div className={classes.home}>
        <Link to="/add">Add Project</Link>
      </div>
    </nav>
  );
}

export default Navbar;
