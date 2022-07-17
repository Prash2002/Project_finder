import express from "express";
import project from "./routes/project.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", project);

// app.get("/", (req, res) => {
//   res.send("HELLO!");
// });

export default app;
