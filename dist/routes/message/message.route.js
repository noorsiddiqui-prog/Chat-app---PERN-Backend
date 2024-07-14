"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/login", (req, res) => {
    res.send("Logged in successfully");
});
router.get("/logout", (req, res) => {
    res.send("Logged out successfully");
});
router.get("/signup", (req, res) => {
    res.send("Signed up successfully");
});
exports.default = router;
