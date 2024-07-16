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
const cors_1 = __importDefault(require("cors"));
const socket_js_1 = require("./socket/socket.js");
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
// const app: Application = express()
const PORT = process.env.PORT || 5000;
const __dirname = path_1.default.resolve();
socket_js_1.app.use((0, cors_1.default)({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true // Enable cookies and other credentials
}));
socket_js_1.app.use(cookieParser()); // parse cookies from request headers
// app.use(bodyParser.json());
socket_js_1.app.use(express_1.default.json()); // for parsing application/json
socket_js_1.app.use(bodyParser.urlencoded({ extended: true }));
socket_js_1.app.use("/api/auth", auth_route_js_1.default);
socket_js_1.app.use("/api/messages", message_route_js_1.default);
if (process.env.NODE_ENV !== 'development') {
    socket_js_1.app.use(express_1.default.static(path_1.default.join(__dirname, '/frontend/dist')));
    socket_js_1.app.get("*", (req, res) => {
        res.sendFile(path_1.default.join(__dirname, "frontend", "dist", "index.html"));
    });
}
socket_js_1.server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
