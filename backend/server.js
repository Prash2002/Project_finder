import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

dotenv.config({ path: "backend/config/config.env" });

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server running  on port ${process.env.PORT}`);
});
