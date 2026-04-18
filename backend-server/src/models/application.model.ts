import { sequelize } from "../config/database";
import { DataTypes, Model } from "sequelize";

export class Application extends Model {
  declare id: number;
  declare uuid: string;
  declare userId: number;
  declare jobId: number;
  declare status: "applied" | "reviewed" | "rejected" | "accepted";
  declare cover_letter: string;
}

Application.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("applied", "reviewed", "rejected", "accepted"),
      defaultValue: "applied",
      allowNull: false,
    },
    cover_letter: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "applications",
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ["uuid"],
      },
      {
        fields: ["userId"],
      },
      {
        fields: ["jobId"],
      },
    ],
  },
);
