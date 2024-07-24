import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/users.js"

const app = express();
dotenv.config();

const connect = () =>{
    mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log("Connect to DB");
    })
    .catch((err) => {
        throw err;
    });
};

app.use("");

app.listen(8800,() => {
    connect()
    console.log("Connected to Server");
});