import { Router} from "express";
import { registerUser } from "../controllers/user.controllers.js";

const Router=Router()


Router.route("/regiser").post(registerUser)

export default Router