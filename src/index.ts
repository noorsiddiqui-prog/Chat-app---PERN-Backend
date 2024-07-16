import express, { Application, Request, Response } from "express"
import authRoutes from "./routes/auth/auth.route.js"
import messageRoutes from "./routes/message/message.route.js"
import dotenv from "dotenv";
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
import cors from "cors"
import { app, server } from "./socket/socket.js";
import path from "path"

dotenv.config()

// const app: Application = express()
const PORT = process.env.PORT || 5000
const __dirname = path.resolve()
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true // Enable cookies and other credentials
}));

app.use(cookieParser()); // parse cookies from request headers
// app.use(bodyParser.json());
app.use(express.json()); // for parsing application/json

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

if (process.env.NODE_ENV !== 'development') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
    })
}

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})