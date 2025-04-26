// const express = require("express")
import dotenv from "dotenv"
import express from "express"
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import cookieParse from "cookie-parser";
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParse());
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }
))
app.get("/",(req, res)=>{
    res.send(`it is working`);
 })
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
    connectDB()
})