import { sequelize } from "../config/database";
import { DataTypes, Model } from "sequelize";

export class Job extends Model {
  declare id: number;
  declare uuid: string;
  declare title: string;
  declare salary: string;
  declare description: string;
  declare location: string;
  declare province: string;
  declare employmentType:
    | "Full-time"
    | "Part-time"
    | "Contract"
    | "Internship"
    | "Freelance";
  declare work_arrangement: "Onsite" | "Hybrid" | "Remote";
  declare status: "pending" | "active" | "rejected" | "closed" | "archived";
  declare slug: string;
  declare views: number;
  declare rejection_reason: string;
  declare userId: number;
  declare companyId: number;
  declare categoryId: number;
}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    employmentType: {
      type: DataTypes.ENUM(
        "full-time",
        "part-time",
        "contract",
        "internship",
        "freelance",
      ),
      allowNull: false,
    },
    work_arrangement: {
      type: DataTypes.ENUM("Onsite", "Hybrid", "Remote"),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(
        "pending",
        "active",
        "rejected",
        "closed",
        "archived",
      ),
      allowNull: false,
      defaultValue: "pending",
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rejection_reason: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    companyId: {
      type: DataTypes.INTEGER,
    },
    categoryId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: "jobs",
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
