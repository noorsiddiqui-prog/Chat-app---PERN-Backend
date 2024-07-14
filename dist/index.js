"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_js_1 = __importDefault(require("./routes/auth/auth.route.js"));
const message_route_js_1 = __importDefault(require("./routes/message/message.route.js"));
const dotenv_1 = __importDefault(require("dotenv"));
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(cookieParser()); // parse cookies from request headers
// app.use(bodyParser.json());
app.use(express_1.default.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/auth", auth_route_js_1.default);
app.use("/api/messages", message_route_js_1.default);
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
