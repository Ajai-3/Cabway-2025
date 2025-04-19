import captainModel from "../models/captain.model.js";
// ===========================================================================================================
// CREATE CAPTAIN
// ===========================================================================================================
// This function creates a new captain and saves their information to the database.
// ===========================================================================================================
export const createCaptain = async ({
    firstname, lastname, email, password, color, plate, capacity, vehicleType 
}) => {
    console.log({ firstname, lastname, email, password, color, plate, capacity, vehicleType });  
    if(!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error ("All fields are required.")
    }
    try {

        const capatain = await captainModel.create({
           fullname: {
            firstname,
            lastname
           },
           email,
           password,
           vehicle: {
              color,
              plate,
              capacity,
              vehicleType
           }
        }) 

        return capatain;
        
    } catch (error) {
        throw new Error("Error creating captain: " + error.message);
    }
}

export default { createCaptain }