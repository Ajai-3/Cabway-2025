import userModel from "../models/user.model.js";
import { HttpStatus } from "../utils/httpStatus.js";
import { validationResult } from "express-validator";
import userService from "../services/user.service.js";
import blackistTokenModel from "../models/blacklistToken.model.js";

// ===========================================================================================================
// REGISTER USER
// ===========================================================================================================
// This controller is responsible for registering new users and saving their data to the database.
// ===========================================================================================================
export const registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ errors: errors.array() });
    }

    const { fullname, email, phonenumber, password } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "User alredy exist." });
    }

    const hashPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      phonenumber,
      password: hashPassword,
    });

    const token = user.generateAuthToken();

    return res.status(HttpStatus.CREATED).send({ token, user });
  } catch (error) {
    console.error("Error in registering a new user.", error);
    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .send("Internal server error.");
  }
};

// ===========================================================================================================
// LOGIN USER
// ===========================================================================================================
// This controller is used to allow the existing user to login to the system using either email or phone number.
// ===========================================================================================================
export const loginUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ errors: errors.array() });
    }

    const { identifier, password } = req.body;

    const user = await userModel
      .findOne({ $or: [{ email: identifier }, { phonenumber: identifier }] })
      .select("+password");

    if (!user) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: "Invalid email or phone number" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: "Invalid email or phone number" });
    }

    const token = user.generateAuthToken();

    res.cookie("token", token);

    return res.status(HttpStatus.OK).json({ token, user });
  } catch (error) {
    console.error("Error in loging the user.", error);
    return res
      .send(HttpStatus.INTERNAL_SERVER_ERROR)
      .send("Internal server error.");
  }
};

// ===========================================================================================================
// GET USER PROFILE
// ===========================================================================================================
// This controller is used to allow the logined user to get their profile.
// ===========================================================================================================
export const getUserProfile = async (req, res, next) => {
  try {
    return res.status(HttpStatus.OK).json(req.user);
  } catch (error) {
    console.error("Error gettign user profile", error);
    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .send("Internal server error.");
  }
};

// ===========================================================================================================
// LOGOUT USER
// ===========================================================================================================
// This controller is allow the logined user to logout from their account.
// ===========================================================================================================
export const logoutUser = async (req, res, next) => {
  try {
    res.clearCookie("token");

    const token = req.cookies.token || req.headers.authorization.split(" ")[1];

    await blackistTokenModel.create({ token });

    res.status(HttpStatus.OK).json({ message: "Logged out" });
  } catch (error) {
    console.error("Error log outing the user.", error);
    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .send("Internal server error.");
  }
};
