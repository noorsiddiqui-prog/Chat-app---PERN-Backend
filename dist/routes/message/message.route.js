"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const protectedRoute_1 = __importDefault(require("../../middlewares/protectedRoute"));
const message_controller_1 = require("../../controllers/message/message.controller");
const router = express_1.default.Router();
router.get("/conversations", protectedRoute_1.default, message_controller_1.getUsersForSidebar);
router.post("/send/:id", protectedRoute_1.default, message_controller_1.sendMessage);
router.get("/:id", protectedRoute_1.default, message_controller_1.getMessages);
exports.default = router;
