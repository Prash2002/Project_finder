import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URL, {
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
