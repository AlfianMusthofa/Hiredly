import { ConflictError } from "../errors/AppError";
import { Company } from "../models/company.model";
import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import { slugify } from "../utils/Slugify";

export const RegisterService = async (
  username: string,
  email: string,
  password: string,
  role: string,
  companyName?: string,
) => {
  const existEmail = await User.findOne({
    where: { email },
  });

  if (existEmail) {
    throw new ConflictError("Email already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  let companyId = null;

  if (role === "employer" && companyName) {
    const slug = slugify(companyName);
    const company = await Company.create({
      name: companyName,
      slug: slug,
    });

    companyId = company.id;
  }

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    role,
    companyId: companyId,
  });

  return user;
};
