import React, { useEffect, useState } from "react";
import apis from "../../api";
import Project from "./Project/Project";

const Projects = () => {
  const [projects, setprojects] = useState([]);
  // console.log(apis.getAllProjects());
  // apis.getAllProjects().then((res) => {
  //   console.log(res);
  // });

  useEffect(() => {
    apis.getAllProjects().then((res) => {
      console.log(res);
      if (res.status === 200) {
        setprojects(res.data.data);
      }
    });
  }, []);

  return (
    <div>
      {/* <h5 style={{ textAlign: "start", padding: "20px 50px" }}> Projects </h5> */}
      <div style={{ display: "flex", flexWrap: "wrap", paddingTop: "50px" }}>
        {projects.map((x, i) => {
          return <Project project={x} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
