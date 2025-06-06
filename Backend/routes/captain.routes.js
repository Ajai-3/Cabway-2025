import express from "express";
const router = express.Router();
import { body } from "express-validator";
import { authCaptain } from "../middlewares/auth.middleware.js";
import { getUCaptainProfile, loginCaptain, logoutCaptain, registerCaptain } from "../controllers/captain.controller.js";

router.post("/register", [
    body("email").isEmail().withMessage("Invalid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters"),
    body("fullname.lastname")
      .isLength({ min: 3 })
      .withMessage("Last name must be at least 3 characters"),
    body("password")
      .matches(/^(?=.*[A-Za-z])(?=.*\d).{8,}$/)
      .withMessage("Password must contain alphabets and numbers."),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 charecters."),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be at least 3 charecters."),
    body("vehicle.capacity")
      .isLength({ min: 1 })
      .withMessage("Capacity must be at least 1."),
    body("vehicle.vehicleType").isIn(["car", "motorcycle", "auto"]).withMessage(
      "Invalid vehicle type."
    ),
], registerCaptain);

router.post('/login', [
    body('email').isEmail().withMessage("Invalid email"),
    body("password")
        .isLength({ min: 8 }).withMessage("Password must be at least 8 characters long.")
], loginCaptain)

router.get('/profile', authCaptain, getUCaptainProfile)

router.get("/logout", authCaptain, logoutCaptain)


export default router;
