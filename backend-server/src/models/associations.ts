import { User } from "./user.model";
import { Company } from "./company.model";
import { Job } from "./job.model";
import { Application } from "./application.model";
import { Category } from "./category.model";
import { RefreshToken } from "./refreshToken.model";

User.belongsTo(Company, { foreignKey: "companyId" });
Company.hasMany(User, { foreignKey: "companyId" });

Company.hasMany(Job, { foreignKey: "companyId" });
Job.belongsTo(Company, { foreignKey: "companyId" });

User.hasMany(Job, { foreignKey: "userId" });
Job.belongsTo(User, { foreignKey: "userId" });

Job.hasMany(Application, { foreignKey: "jobId" });
Application.belongsTo(Job, { foreignKey: "jobId" });

User.hasMany(Application, { foreignKey: "userId" });
Application.belongsTo(User, { foreignKey: "userId" });

Category.hasMany(Job, { foreignKey: "categoryId" });
Job.belongsTo(Category, { foreignKey: "categoryId" });

export { User, Company, Job, Application, Category, RefreshToken };
