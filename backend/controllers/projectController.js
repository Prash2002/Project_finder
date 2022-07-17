import Project from "../models/project-model.js";

const getAllProjects = async (req, res) => {
  // res.status(200).json({ message: "test" });
  await Project.find({}, (err, projects) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!projects.length) {
      return res
        .status(200)
        .json({ success: true, data: "No projects present!" });
      // return res
      //   .status(404)
      //   .json({ success: false, error: `Project not found` });
    }
    return res.status(200).json({ success: true, data: projects });
  }).catch((err) => console.log(err));
};

const addProject = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a Project",
    });
  }

  const project = new Project(body);

  if (!project) {
    return res.status(400).json({ success: false, error: err });
  }

  project
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: project._id,
        message: "Project created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Project not created!",
      });
    });
};

const updateProject = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Project.findOne({ _id: req.params.id }, (err, project) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Project not found!",
      });
    }
    project.name = body.name;
    project.stack = body.stack;
    project.description = body.description;
    project.image = body.image;
    project.github = body.github;

    project
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: project._id,
          message: "Project updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Project not updated!",
        });
      });
  });
};

const deleteProject = async (req, res) => {
  await Project.findOneAndDelete({ _id: req.params.id }, (err, project) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: `Project not found` });
    }

    return res.status(200).json({ success: true, data: project });
  }).catch((err) => console.log(err));
};

const getProjectById = async (req, res) => {
  await Project.findOne({ _id: req.params.id }, (err, project) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: `project not found` });
    }
    return res.status(200).json({ success: true, data: project });
  }).catch((err) => console.log(err));
};

const getProjectByStack = async (req, res) => {
  await Project.findOne({ stack: req.params.stack }, (err, project) => {
    console.log("here");
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: `project not found` });
    }
    return res.status(200).json({ success: true, data: project });
  }).catch((err) => console.log(err));
};

export {
  addProject,
  getAllProjects,
  updateProject,
  deleteProject,
  getProjectById,
  getProjectByStack,
};
