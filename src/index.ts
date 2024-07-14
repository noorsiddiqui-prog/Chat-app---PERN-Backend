import express, { Application, Request, Response } from "express"
import authRoutes from "./routes/auth/auth.route.js"
import messageRoutes from "./routes/message/message.route.js"
import dotenv from "dotenv";
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

dotenv.config()

const app: Application = express()

app.use(cookieParser()); // parse cookies from request headers
// app.use(bodyParser.json());
app.use(express.json()); // for parsing application/json

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})