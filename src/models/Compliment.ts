import { Model, DataTypes } from "sequelize"
import { sequelize } from "../instances/mysql"
import Employer from "../models/Employer"

class Compliment extends Model {
  public id!: number
  public userSender!: number
  public userReceiver!: number
  public tagId!: string
  public message!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Compliment.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userSender: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Employer,
        key: "id",
      },
    },
    userReceiver: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Employer,
        key: "id",
      },
    },
    tagId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "compliments",
    sequelize,
  }
)

export default Compliment
