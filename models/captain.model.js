import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const captainSchema = new mongoose.Schema(
  {
    fullname: {
      firstname: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "First name must be at least 3 characters long."],
        maxlength: [20, "First name must not exceed 20 characters"],
        match: [
          /^[a-zA-Z]+$/,
          "First name only must contain only alphabetic characters.",
        ],
        set: (val) => val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()
      },

      lastname: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Last name must be at least 3 characters long."],
        maxlength: [20, "Last name must not exceed 20 characters"],
        match: [
          /^[a-zA-Z]+$/,
          "Last name only must contain only alphabetic characters.",
        ],
        set: (val) => val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()

      },
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please provide a valid email address."],
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

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },

    vehicle: {
      color: {
        type: String,
        required: true,
        minlength: [3, "Color must be at least 3 characters."],
      },

      plate: {
        type: String,
        required: true,
        minlength: [3, "Color must be at least 3 characters."],
      },

      capacity: {
        type: Number,
        required: true,
        min: [1, "Capacity must be at least 1."],
      },

      vehicleType: {
        type: String,
        required: true,
        enum: ["car", "motorcycle", "auto"],
      },
    },

    location: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
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
// This method generates an authentication token for the captain.
// ===========================================================================================================
captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });
    return token;
  };
  
// ===========================================================================================================
// COMPARE PASSWORD
// ===========================================================================================================
// This method compares the provided password with the stored hashed password.
// ===========================================================================================================
captainSchema.methods.comparePassword = async function() {
    return await bcrypt.compare(password, this.password)
}

// ===========================================================================================================
// HASH PASSWORD
// ===========================================================================================================
// This method hashes the captain's password before saving it to the database,
// ensuring the password is stored securely and cannot be retrieved directly.
// ===========================================================================================================
captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10)
}

const captainModel = mongoose.model("captain", captainSchema);

export default captainModel;
