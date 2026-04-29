import { sequelize } from "../config/database";
import { DataTypes, Model } from "sequelize";

interface ExperienceProp {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  job_description: string;
  location: string;
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
  declare phone: string;
  declare position: string;
  declare image?: string;
  declare bio: string;
  declare age: number;
  declare sex: "male" | "female";
  declare job_experience: ExperienceProp[];
  declare total_years_experience: string;
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
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sex: {
      type: DataTypes.ENUM("male", "female"),
      allowNull: true,
    },
    job_experience: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    total_years_experience: {
      type: DataTypes.STRING,
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
