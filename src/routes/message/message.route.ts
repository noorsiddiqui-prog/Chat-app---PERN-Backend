import express, { Request, Response } from "express"
import protectedRoute from "../../middlewares/protectedRoute"
import { sendMessage, getMessages, getUsersForSidebar } from "../../controllers/message/message.controller"

const router = express.Router()

router.get("/conversations", protectedRoute, getUsersForSidebar)
router.post("/send/:id", protectedRoute, sendMessage)
router.get("/:id", protectedRoute, getMessages)



export default router