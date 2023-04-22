import { Model, DataTypes } from "sequelize"
import { sequelize } from "../instances/mysql"

class Employer extends Model {
  public id!: number
  public name!: string
  public email!: string
  public password!: string
  public admin!: boolean

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Employer.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: "employers",
    sequelize,
  }
)

export default Employer
