import { sequelize } from "../config/database";
import { DataTypes, Model } from "sequelize";

export class Company extends Model {
  declare id: number;
  declare uuid: string;
  declare name: string;
  declare location: string;
  declare office_address: string;
  declare category: string;
  declare about: string;
  declare total_employees: string;
  declare image: string;
  declare slug: string;
}

Company.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    office_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    total_employees: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "companies",
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ["uuid"],
      },
      {
        unique: true,
        fields: ["slug"],
      },
    ],
  },
);
