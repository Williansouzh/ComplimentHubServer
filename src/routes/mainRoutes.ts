import { Router } from "express"
import * as employerController from "../controllers/employerController"
const router = Router()

router.get("/", employerController.getAllEmployers)

export default router
