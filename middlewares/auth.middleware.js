import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import { HttpStatus } from "../utils/httpStatus.js";
import blackistTokenModel from "../models/blacklistToken.model.js";

export const authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

        if(!token) {
            return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized" })
        }

        const isBlackListed = await userModel.findOne({ token: token }) 

        if(isBlackListed) {
            return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id) 

        req.user = user;
        
        return next();

    } catch (error) {
        return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized" })
    }
}