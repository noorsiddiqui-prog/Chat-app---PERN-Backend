import jwt from 'jsonwebtoken';
import { Response } from 'express';

const generateToken = (userId: String, res: Response) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY!, { expiresIn: "15d" })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // MS milliseconds
        httpOnly: true, // prevent XSS cross site scripting
        sameSite: "strict", // CSRF attacks cross site request forgery protection
        secure: process.env.NODE_ENV !== "development", // HTTPs
    })

    return token;
}

export default generateToken;
