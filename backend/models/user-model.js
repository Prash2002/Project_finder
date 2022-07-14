import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AuthorS = new Schema(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    githubUrl: { type: String, required: true },
    photoUrl: { type: String, required: true },
    // rating: { type: Number, required: true },
  },
  { timestamps: true }
);

const Author = mongoose.model("user", AuthorS);

export default Author;
