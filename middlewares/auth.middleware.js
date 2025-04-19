import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import { HttpStatus } from "../utils/httpStatus.js";
import captainModel from "../models/captain.model.js";
import blackistTokenModel from "../models/blacklistToken.model.js";

// ===========================================================================================================
// AUTH USER
// ===========================================================================================================
// This middleware authenticates the user by verifying the JWT token from cookies or headers.
// It also checks if the token is blacklisted and sets the authenticated user in the request object.
// ===========================================================================================================
export const authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: "Unauthorized" });
    }

    const isBlackListed = await blackistTokenModel.findOne({ token: token });

    if (isBlackListed) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);

    req.user = user;

    return next();
  } catch (error) {
    return res
      .status(HttpStatus.UNAUTHORIZED)
      .json({ message: "Unauthorized" });
  }
};

// ===========================================================================================================
// AUTH CAPTAIN
// ===========================================================================================================
// This middleware authenticates the captain by verifying the JWT token from cookies or headers.
// It checks if the token is valid and retrieves the captain's data, attaching it to the request object.
// ===========================================================================================================
export const authCaptain = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    
        if (!token) {
          return res
            .status(HttpStatus.UNAUTHORIZED)
            .json({ message: "Unauthorized" });
        }
    
        const isBlackListed = await blackistTokenModel.findOne({ token: token });
    
        if (isBlackListed) {
          return res
            .status(HttpStatus.UNAUTHORIZED)
            .json({ message: "Unauthorized" });
        }
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
    
        req.captain = captain;
    
        return next();
      } catch (error) {
        return res
          .status(HttpStatus.UNAUTHORIZED)
          .json({ message: "Unauthorized" });
      }
}