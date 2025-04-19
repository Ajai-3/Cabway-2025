import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT)
            console.log("Database connected")

    } catch (error) {
        console.error("Error connecting with database.", error)
        process.exit(1)
    }
}