import mongoose from "mongoose";

const DB =
  "mongodb+srv://admin:17072002@cluster0.j0qqivc.mongodb.net/project_finder?retryWrites=true&w=majority";
const connectDB = () => {
  mongoose
    .connect(process.env.DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //   useCreateIndex: true,
    })
    .then((data) => {
      console.log(`mongo db connected ${data.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};

export default connectDB;
