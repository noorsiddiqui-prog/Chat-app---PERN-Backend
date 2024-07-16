"use strict";
// import express, { Application, Request, Response } from "express"
// import authRoutes from "./routes/auth/auth.route.js"
// import messageRoutes from "./routes/message/message.route.js"
// import dotenv from "dotenv";
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// import cors from "cors"
// import { app, server } from "./socket/socket.js";
// import path from "path"
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
// dotenv.config()
// // const app: Application = express()
// const PORT = process.env.PORT || 5000
// const __dirname = path.resolve()
// app.use(cors({
//     origin: '*', // Replace with your frontend URL
//     credentials: true // Enable cookies and other credentials
// }));
// app.use(cookieParser()); // parse cookies from request headers
// // app.use(bodyParser.json());
// app.use(express.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/api/auth", authRoutes)
// app.use("/api/messages", messageRoutes)
// if (process.env.NODE_ENV !== 'development') {
//     app.use(express.static(path.join(__dirname, '/frontend/dist')))
//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
//     })
// }
// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// })
const express_1 = __importDefault(require("express"));
const auth_route_js_1 = __importDefault(require("./routes/auth/auth.route.js"));
const message_route_js_1 = __importDefault(require("./routes/message/message.route.js"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.app = app;
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || "*", // Replace with your frontend URL
}));
app.use((0, cookie_parser_1.default)()); // parse cookies from request headers
app.use(express_1.default.json()); // for parsing application/json
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/api/auth", auth_route_js_1.default);
app.use("/api/messages", message_route_js_1.default);
if (process.env.NODE_ENV !== 'development') {
    app.use(express_1.default.static(path_1.default.join(process.cwd(), 'frontend', 'dist')));
    app.get("*", (req, res) => {
        res.sendFile(path_1.default.resolve(process.cwd(), 'frontend', 'dist', 'index.html'));
    });
}
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.server = server;
