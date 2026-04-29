import { sequelize } from "../config/database";
import { DataTypes, Model } from "sequelize";

export class Application extends Model {
  declare id: number;
  declare uuid: string;
  declare userId: number;
  declare jobId: number;
  declare status:
    | "submitted"
    | "screening"
    | "interview_hr"
    | "interview_user"
    | "offering"
    | "hired"
    | "rejected";
  declare applied_at: Date;
  declare interview_type: "online" | "offline";
  declare interview_location: string;
  declare interview_date: Date;
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
      type: DataTypes.ENUM(
        "submitted",
        "screening",
        "interview_hr",
        "interview_user",
        "offering",
        "hired",
        "rejected",
      ),
      defaultValue: "submitted",
      allowNull: false,
    },
    applied_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    interview_type: {
      type: DataTypes.ENUM("online", "offline"),
      allowNull: true,
    },
    interview_location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    interview_date: {
      type: DataTypes.DATE,
      allowNull: true,
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
