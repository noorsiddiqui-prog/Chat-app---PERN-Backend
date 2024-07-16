"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReceiverSocketId = exports.userSocketMap = void 0;
exports.userSocketMap = {}; // {userId: socketId}
const getReceiverSocketId = (receiverId) => {
    return exports.userSocketMap[receiverId];
};
exports.getReceiverSocketId = getReceiverSocketId;
