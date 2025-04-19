import express from "express";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js"
import captainRouter from "./routes/captain.routes.js"



app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use('/users', userRouter)
app.use('/captain', captainRouter)



export default app;
