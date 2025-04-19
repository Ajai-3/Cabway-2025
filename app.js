import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import userRouter from "./routes/user.route.js"
import bodyParser from "body-parser";

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use('/users', userRouter)



export default app;
