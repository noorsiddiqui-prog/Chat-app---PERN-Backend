import express, { Request, Response } from "express";
import authRoutes from "./routes/auth/auth.route.js";
import messageRoutes from "./routes/message/message.route.js";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.FRONTEND_URL || "*", // Replace with your frontend URL
}));

app.use(cookieParser()); // parse cookies from request headers
app.use(express.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV !== 'development') {
    app.use(express.static(path.join(process.cwd(), 'frontend', 'dist')));
    app.get("*", (req: Request, res: Response) => {
        res.sendFile(path.resolve(process.cwd(), 'frontend', 'dist', 'index.html'));
    });
}

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// export { app, server };
