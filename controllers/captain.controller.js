import { HttpStatus } from "../utils/httpStatus.js";
import { validationResult } from "express-validator";
import captainModel from "../models/captain.model.js";
import captainService from "../services/captain.service.js";

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
