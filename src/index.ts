import express, { urlencoded } from "express"
import cors from "cors"
import dotenv from "dotenv"
import mainRoutes from "./routes/mainRoutes"
const port = process.env.PORT || 4000

const server = express()
dotenv.config()
server.use(urlencoded({ extended: true }))
server.use(cors())
server.use(mainRoutes)

server.use("/", (req, res) => {
  res.json({
    error: "Page not found",
  })
})
server.listen(port, () => {
  console.log("Running at port", port)
})
