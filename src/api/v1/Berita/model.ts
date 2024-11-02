import { Model, DataTypes, UUID } from 'sequelize';
import { db } from '../../../db';
import { Catagory } from '../categoryBerita/model';

export class Berita extends Model {
  declare id: string;
  declare FileName: string;
  declare title: string;
  declare desc: string;
  declare catagoryId: string;
  declare status: string;
  // declare isiBerita: string;

}

Berita.init(
  {
    id: {
      type: DataTypes.CHAR(64),
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    FileName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('Publish', 'Draf Redaksi'),
      defaultValue: 'Draf Redaksi',
    },
    catagoryId: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      references: {
        model: 'Catagory',
        key: 'id',
      },
    },
  },
  {
    sequelize: db,
    modelName: 'Berita',
    freezeTableName: true,
  },
);
Catagory.hasMany(Berita, { foreignKey: 'catagoryId' });
Berita.belongsTo(Catagory, { foreignKey: 'catagoryId' });
