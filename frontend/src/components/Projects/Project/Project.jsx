import React, { useEffect, useRef } from "react";
import classes from "./Project.module.css";
import { Link } from "react-router-dom";

function Project({ project }) {
  return (
    <div className={classes.quantCard}>
      <div className={classes.image_container}>
        <Link
          to={{
            pathname: `/project/${project._id}`,
            // state: { categoryId, categoryTitle },
          }}
        >
          <img src={project.image} alt="" />
        </Link>
      </div>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <h5>{project.stack[0]}</h5>
    </div>
  );
}

export default Project;
