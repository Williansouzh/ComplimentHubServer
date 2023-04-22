import { Model, DataTypes } from "sequelize"
import { sequelize } from "../instances/mysql"
import Employer from "../models/Employer"

class Post extends Model {
  public id!: number
  public userId!: number
  public message!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Employer,
        key: "id",
      },
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "posts",
    sequelize,
  }
)

export default Post
