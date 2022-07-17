import express from "express";
import {
  getAllProjects,
  addProject,
  updateProject,
  deleteProject,
  getProjectById,
  getProjectByStack,
} from "../controllers/projectController.js";

const router = express.Router();

router.route("/projects").get(getAllProjects);
router.route("/addproject").post(addProject);
router.route("/project/:id").put(updateProject);
router.route("/project/:id").delete(deleteProject);
router.route("/project/:id").get(getProjectById);
router.route("/projects/:stack").get(getProjectByStack);

export default router;
