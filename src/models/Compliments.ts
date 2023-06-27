import { Model, DataTypes } from "sequelize"
import { sequelize } from "../instances/mysql"

export interface ComplimentsInstance extends Model {
  id: number
  sender: string
  receiver: string
  compliment: string
  date: Date
  department: string
  deslikes: number
  likes: number
}
export const Compliments = sequelize.define<ComplimentsInstance>(
  "compliment",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    sender: {
      type: DataTypes.STRING,
    },
    receiver: {
      type: DataTypes.STRING,
    },
    compliment: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
    },
    department: {
      type: DataTypes.STRING,
    },
    likes: {
      type: DataTypes.NUMBER,
    },
    deslikes: {
      type: DataTypes.NUMBER,
    },
  },
  {
    tableName: "compliments",
    timestamps: false,
  }
)
