"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (userId, res) => {
    const token = jsonwebtoken_1.default.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: "15d" });
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // MS milliseconds
        httpOnly: true, // prevent XSS cross site scripting
        sameSite: "strict", // CSRF attacks cross site request forgery protection
        secure: process.env.NODE_ENV !== "development", // HTTPs
    });
    return token;
};
exports.default = generateToken;
