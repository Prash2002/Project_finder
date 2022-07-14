import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { deleteProjectById, getProjectById } from "../../api";
import Navbar from "../Navbar/Navbar";
import classes from "./ProjectDescription.module.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const ProjectDescription = () => {
  const history = useHistory();
  const [proj, setproj] = useState({
    createdAt: "",
    description: "",
    github: "",
    image: "",
    name: "",
    stack: [],
    updatedAt: "",
    _id: "",
  });

  const { id } = useParams();
  useEffect(() => {
    getProjectById(id).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setproj(res.data.data);
      }
    });
  }, []);

  const delProj = () => {
    deleteProjectById(id)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setproj(res.data.data);
        }
      })
      .then((res) => {
        console.log(res);
        swal({
          title: "Project deleted successfully!",
          text: "you will be redirected to Home page in 3 seconds",
          icon: "success",
          timer: 3000,
        }).then(() => {
          setTimeout(() => {
            history.push("/");
          }, 750);
        });
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div>
      <Navbar />
      <div className={classes.proj}>
        <h3>{proj.name}</h3>
        <div className={classes.proj_img_data}>
          <img src={proj.image} alt="image" />
          <div className={classes.proj_data}>
            <div className={classes.stack}>
              {proj.stack.map((x, i) => {
                return <div key={i}>{x}</div>;
              })}
            </div>
            <a className={classes.proj_gt} href={proj.github}>
              {proj.github}
            </a>
            <div className={classes.proj_ds}>{proj.description}</div>
          </div>
        </div>
        <div className={classes.buttons}>
          <Link
            to={{
              pathname: `/updateProject/${id}`,
              // state: { categoryId, categoryTitle },
            }}
            className={classes.link}
          >
            {" "}
            Update{" "}
          </Link>
          <button onClick={delProj}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
