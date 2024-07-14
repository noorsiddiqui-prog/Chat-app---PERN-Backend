import express, { Request, Response } from "express"
import { login, logout, signup, getMe } from "../../controllers/auth/auth.controller"
import protectedRoute from "../../middlewares/protectedRoute"

const router = express.Router()

router.get("/me", protectedRoute, getMe)

router.post("/login", login)

router.post("/logout", logout)

router.post("/signup", signup)


export default router