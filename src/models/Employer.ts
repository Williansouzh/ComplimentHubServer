import { Model, DataTypes } from "sequelize"
import { sequelize } from "../instances/mysql"

export interface EmployerInstance extends Model {
  id: number
  name: string
  email: string
  password: string
  admin: boolean
  created_at: Date
  updated_at: Date
  image: Buffer
}
export const Employer = sequelize.define<EmployerInstance>(
  "employer",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    post: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    admin: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
  },
  {
    tableName: "employers",
    timestamps: false,
  }
)
