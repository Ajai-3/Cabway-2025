import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      firstname: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "First name must be at least 3 characters long."],
        maxlength: [20, "First name must not exceed 20 characters."],
        match: [
          /^[a-zA-Z]+$/,
          "First name only must contain only alphabetic characters.",
        ],
        set: (val) => val.charAt(0).toUpperCase() + val.slice(1).toLowerCase(),
      },
      lastname: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Last name must be at least 3 characters long."],
        maxlength: [20, "Last name must not exceed 30 characters."],
        match: [
          /^[a-zA-Z]+$/,
          "First name only must contain only alphabetic characters.",
        ],
        set: (val) => val.charAt(0).toUpperCase() + val.slice(1).toLowerCase(),
      },
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please provide a valid email address."],
    },

    phonenumber: {
      type: String,
      required: false,
      unique: true,
      match: [/^\+?[1-9]\d{1,14}$/, "Please provide a valid phone number."],
    },

    password: {
      type: String,
      required: true,
      select: false,
      minlength: [8, "Password must be at least 8 characters long."],
      match: [
        /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
        "Password must contain alphabets and numbers.",
      ],
    },

    soketId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// ===========================================================================================================
// GENERATE AUTH TOKEN
// ===========================================================================================================
// This method generates an authentication token for the user.
// ===========================================================================================================
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

// ===========================================================================================================
// COMPARE PASSWORD
// ===========================================================================================================
// This method compares the provided password with the stored hashed password.
// ===========================================================================================================
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// ===========================================================================================================
// HASH PASSWORD
// ===========================================================================================================
// This method hashes the user's password before saving it to the database,
// ensuring the password is stored securely and cannot be retrieved directly.
// ===========================================================================================================
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);

export default userModel;
