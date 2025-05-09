import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//test route
app.get("/", (req, res) => {
  res.json({
    message: "all good",
    status: "500",
  });
});



//connecting to database and if everything goes well, the app will listen on port 8000
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("error", error);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is running");
    });
  })
  .catch((error) => {
    console.log("connection failed", error);
  });
