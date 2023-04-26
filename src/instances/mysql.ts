import { Sequelize } from "sequelize"
import dotenv from "dotenv"

dotenv.config()

export const sequelize = new Sequelize(
  process.env.MYSQL_DATABASECLOUD as string,
  {
    dialect: "mysql",
  }
)

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.")
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error)
  })
