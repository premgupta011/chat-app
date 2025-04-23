// const express = require("express")
import dotenv from "dotenv"
import express from "express"
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js"
import cookieParse from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParse());
app.get("/",(req, res)=>{
    res.send(`it is working`);
 })
app.use("/api/auth", authRoutes);
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
    connectDB()
})