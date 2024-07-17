"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
        res.sendFile(path_1.default.resolve(process.cwd(), 'frontend', 'dist'));
    });
}
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// export { app, server };
