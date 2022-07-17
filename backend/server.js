import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import express from "express";
// const path = require("path");
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

dotenv.config({ path: "backend/config/config.env" });

connectDB();

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running  on port ${process.env.PORT}`);
});

//server frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}
