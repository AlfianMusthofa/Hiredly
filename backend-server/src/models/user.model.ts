import { sequelize } from "../config/database";
import { DataTypes, Model } from "sequelize";

interface ExperienceProp {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  job_description: string;
}

interface EducationProp {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate?: Date;
  grade?: string;
}

interface SkillProp {
  name: string;
}

interface DocumentProp {
  id: number;
  name: string;
  url: string;
  type: "CV" | "Portfolio" | "Certificate" | "Other";
}

export class User extends Model {
  declare id: number;
  declare uuid: string;
  declare username: string;
  declare email: string;
  declare password: string;
  declare image?: string;
  declare bio: string;
  declare experience: ExperienceProp[];
  declare education: EducationProp[];
  declare skills: SkillProp[];
  declare documents: DocumentProp[];
  declare location?: string;
  declare role: string;
  declare companyId: number;
}

User.init(
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
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    experience: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    education: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    skills: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    documents: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM("user", "employer"),
      allowNull: false,
      defaultValue: "user",
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  },
);
