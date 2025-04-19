import mongoose  from "mongoose";

const userShcema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: false
        }
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phonenumber: {
        type: Number,
        required: false,
        unique: true
    },

    password: {
        type: String,
        required: true,
        select: flase
    }
}, {
    timestamps: true
})