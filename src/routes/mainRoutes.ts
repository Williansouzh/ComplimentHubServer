import { Router } from "express"
import * as employerController from "../controllers/employerController"
const router = Router()

router.get("/", employerController.getAllEmployers)

router.post("/register", employerController.createNewUser)

router.post("/login", employerController.login)

export default router
