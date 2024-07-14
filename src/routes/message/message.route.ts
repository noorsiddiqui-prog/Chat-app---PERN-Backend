import express, {Request, Response} from "express"

const router = express.Router()

router.get("/login", (req: Request, res: Response) => {
    res.send("Logged in successfully")
})

router.get("/logout", (req: Request, res: Response) => {
    res.send("Logged out successfully")
})

router.get("/signup", (req: Request, res: Response) => {
    res.send("Signed up successfully")
})

export default router