// require('dotenv').config({path: './env'});
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()













/*
import express from "express"

const app = express();

(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (e) => {
            console.log("ERROR", e);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port $ {process.env.PORT}`);
        })
    } catch(e) {
        console.error("ERROR:", e);
        throw e
    }
})()

*/