import userModel from "../models/user.model.js"
// ===========================================================================================================
// CREATE USER
// ===========================================================================================================
// This function creates a new user and saves their information to the database.
// ===========================================================================================================
const createUser = async ({
  firstname,
  lastname,
  email,
  phonenumber,
  password
}) => {
  if (!firstname || !lastname || !email || !phonenumber  || !password) {
    throw new Error("All fields are required");
  }

  try {
    const user = await userModel.create({
      fullname: {
        firstname,
        lastname
      },
      email,
      phonenumber,
      password
    });
    return user;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

export default { createUser };
