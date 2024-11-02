import { Model, DataTypes, UUID } from 'sequelize';
import { db } from '../../../db';
import { Berita } from '../Berita/model';

export class DetailBerita extends Model {
  declare id: string;
  declare isiBerita: string;
  declare author: string;
  declare editor: string;
  declare createdAt: Date;
  declare beritaId: string;
}

DetailBerita.init(
  {
    id: {
      type: DataTypes.CHAR(64),
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    isiBerita: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    author: {
      type: DataTypes.STRING, // Penulis
      allowNull: false,
    },
    editor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE, // Waktu publikasi
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    beritaId: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      references: {
        model: 'Berita',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
  {
    sequelize: db,
    modelName: 'DetailBerita',
    freezeTableName: true,
  },
);

Berita.hasOne(DetailBerita, {
  foreignKey: 'beritaId',
  as: 'detail',
});

DetailBerita.belongsTo(Berita, {
  foreignKey: 'beritaId',
  as: 'berita',
});
