import { Model, DataTypes, UUID } from 'sequelize';
import { db } from '../../../db';
// import { Berita } from '../Berita/model';
export class Catagory extends Model {
  declare id: string;
  declare name: string;
}
Catagory.init(
  {
    id: {
      type: DataTypes.CHAR(64),
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: 'Catagory',
    freezeTableName: true,
  },
);

