import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProjectS = new Schema(
  {
    // authorId: { type: String, required: true },
    name: { type: String, required: true },
    stack: { type: [String], required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    github: { type: String, required: true },

    // rating: { type: Number, required: true },
  },
  { timestamps: true }
);

const Project = mongoose.model("projects", ProjectS, "projects");

export default Project;
