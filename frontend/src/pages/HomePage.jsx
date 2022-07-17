import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import StackFind from "../components/StackFind/StackFind";
import ProjectsPage from "./ProjectsPage";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <StackFind />
      <Projects />
    </div>
  );
};

export default HomePage;
