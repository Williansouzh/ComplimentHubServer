import { Router } from "express"
import * as employerController from "../controllers/employerController"
import * as complimentController from "../controllers/complimentsController"
import multer from "multer"
const router = Router()

const upload = multer({ storage: multer.memoryStorage() })

router.get("/", employerController.getAllEmployers)

router.post("/register", employerController.createNewUser)

router.post("/login", employerController.login)
//compliments

router.get("/compliments", complimentController.getAllCompliments)
router.post("/addcompliment", complimentController.addNewCompliment)
router.put("/likepost", complimentController.addLike)
export default router
