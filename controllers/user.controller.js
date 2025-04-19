import userModel from "../models/user.model.js"
import { HttpStatus } from "../utils/httpStatus.js";
import { validationResult } from "express-validator";
import userService from "../services/user.service.js";

// ===========================================================================================================
// REGISTER USER
// ===========================================================================================================
// This controller is responsible for registering new users and saving their data to the database.
// ===========================================================================================================
export const registerUser = async (req, res, next) => {
    try {
        
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(HttpStatus.BAD_REQUEST).json({ errors: errors.array() })
        }

        const { fullname, email, phonenumber,  password } = req.body

        const hashPassword = await userModel.hashPassword(password)

        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            phonenumber,
            password: hashPassword
        })

        const token = user.generateAuthToken();

        return res.status(HttpStatus.CREATED).send({ token, user })
        
    } catch (error) {
        console.error("Error in registering a new user.", error)
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send("Internal server error.")
    }
}