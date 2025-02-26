"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.io = exports.app = void 0;
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const helpers_1 = require("../utils/helpers");
const app = (0, express_1.default)();
exports.app = app;
const server = http_1.default.createServer(app);
exports.server = server;
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true,
    },
});
exports.io = io;
io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    const userId = socket.handshake.query.userId;
    if (userId)
        helpers_1.userSocketMap[userId] = socket.id;
    //io.emit() is used to send events to all the connected clients
    io.emit("getOnlineUsers", Object.keys(helpers_1.userSocketMap));
    // socket.on is used to listen to the events. can be used both on client and server side
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
        delete helpers_1.userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(helpers_1.userSocketMap));
    });
});
