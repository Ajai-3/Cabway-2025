import { HttpStatus } from "../utils/httpStatus.js";
import { validationResult } from "express-validator";
import captainModel from "../models/captain.model.js";
import captainService from "../services/captain.service.js";
import blackistTokenModel from "../models/blacklistToken.model.js";

// ===========================================================================================================
// REGISTER CAPTAIN
// ===========================================================================================================
// This controller is responsible for registering new captains and saving their data to the database.
// ===========================================================================================================
export const registerCaptain = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatus.BAD_GATEWAY)
        .json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const existingCaptain = await captainModel.findOne({ email });
    if (existingCaptain) {
      return res
        .status(HttpStatus.BAD_GATEWAY)
        .json({ message: "Captain alredy exists." });
    }

    const hashPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken();

    return res.status(HttpStatus.CREATED).json({ token, captain });
  } catch (error) {
    console.error("Error in registering new captain.", error);
    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .send("Internal server error");
  }
};

// ===========================================================================================================
// LOGIN CAPTAIN
// ===========================================================================================================
// This controller is used to allow the existing captain to login to the system using their email.
// ===========================================================================================================
export const loginCaptain = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel
      .findOne({ email })
      .select("+password");

    if (!captain) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: "Invalid email or password." });
    }

    const isMatch = await captain.comparePassword(password);

    if (!isMatch) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: "Invalid email or password." });
    }

    const token = captain.generateAuthToken();

    res.cookie("token", token);

    return res.status(HttpStatus.OK).json({ token, captain });
  } catch (error) {
    console.error("Error in logging captain", error);
    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .send("Internal server error");
  }
};

// ===========================================================================================================
// GET CAPTAIN PROFILE
// ===========================================================================================================
// This controller is used to allow the logined captain to see their profile.
// ===========================================================================================================
export const getUCaptainProfile = async (req, res, next) => {
    try {
      return res.status(HttpStatus.OK).json({ captain: req.captain });
    } catch (error) {
      console.error("Error gettign captain profile", error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send("Internal server error.");
    }
  };

// ===========================================================================================================
// LOGOUT CAPTAIN
// ===========================================================================================================
// This controller is allow the logined captain to logout from their account.
// ===========================================================================================================
export const logoutCaptain = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    await blackistTokenModel.create({ token });

    res.clearCookie("token");

    return res.status(HttpStatus.OK).json({ message: "Logged out" });
  } catch (error) {
    console.error("Error in logging out captain.", error);
    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .send("Internal server error");
  }
};
