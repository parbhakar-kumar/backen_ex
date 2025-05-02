import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";

const router = Router(); 

router.route("/register").post(registerUser);

router.route("/test").get((req, res) => {
    res.status(200).json({ message: "Test route is working" });
});

export default router;
