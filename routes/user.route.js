import express from "express";
import { body } from "express-validator";
import { registerUser } from "../controllers/user.controller.js";


const router = express.Router();

router.post("/register", [
  body("email")
    .isEmail()
    .withMessage("Invalid email"),
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("First name must be at least 3 characters."),
  body("fullname.lastname")
    .isLength({ min: 3 })
    .withMessage("Last name must be at least 3 characters."),
  body("phonenumber")
    .matches(/^[6-9]\d{9}$/)
    .withMessage("Phone number must be a valid 10-digit Indian mobile number"),
  body("password")
    .matches(/^(?=.*[A-Za-z])(?=.*\d).{8,}$/)
    .withMessage("Password must contain alphabets and numbers."),
], registerUser);

export default router;
