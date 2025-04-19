import express from "express";
import { body } from "express-validator";
import { authUser } from "../middlewares/auth.middleware.js";
import { getUserProfile, loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";



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

router.post("/login", [
    body("identifier")
        .custom((value) => {
            const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            const isPhone = /^[6-9]\d{9}$/.test(value);
            
            if (!isEmail && !isPhone) {
                throw new Error("Please provide a valid email or phone number.");
            }
            return true;
        }),

    body("password")
        .isLength({ min: 8 }).withMessage("Password must be at least 8 characters long.")
], loginUser);

router.get("/profile", authUser, getUserProfile)

router.get("/logout", authUser, logoutUser)

export default router;
