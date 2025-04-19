import mongoose from "mongoose";

const blackistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 68400
    }
})

const blackistTokenModel = mongoose.model('BlacklistToken', blackistTokenSchema);

export default blackistTokenModel