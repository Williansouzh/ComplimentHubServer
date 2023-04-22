import express, { urlencoded } from "express"
import cors from "cors"
import dotenv from "dotenv"
const port = process.env.PORT || 3333

const server = express()
dotenv.config()
server.use(urlencoded({ extended: true }))
server.use(cors)
server.listen(port, () => {
  console.log("Running at port", port)
})
