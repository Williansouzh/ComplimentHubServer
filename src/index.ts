import express, { urlencoded } from "express"
import cors from "cors"
import dotenv from "dotenv"
import mainRoutes from "./routes/mainRoutes"
const port = process.env.PORT

const server = express()
dotenv.config()
server.use(urlencoded({ extended: true }))
server.use(cors())
server.use(mainRoutes)

server.use("/", (req, res) => {
  res.json({
    error: "Page not findsing",
  })
})
server.listen(port, () => {
  console.log("Running at port", port)
})
