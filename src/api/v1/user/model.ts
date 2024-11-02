import { Model, DataTypes } from 'sequelize';
import { db } from '../../../db';

export class User extends Model {
  declare id: string;
  declare email: string;
  declare password: string;
  declare role: 'admin' | 'user';
}
User.init(
  {
    id: {
      type: DataTypes.CHAR(64),
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true,
      validate:{
        isEmail:{
          msg:"Email harus dalam format yang valid"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      defaultValue: 'user',
    },
  },
  {
    sequelize: db,
    modelName: 'User',
    freezeTableName: true,
  },
);
