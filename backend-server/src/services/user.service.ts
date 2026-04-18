import { ConflictError } from "../errors/AppError";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";

export const RegisterService = async (
  username: string,
  email: string,
  password: string,
) => {
  const existEmail = await User.findOne({
    where: { email },
  });

  if (existEmail) {
    throw new ConflictError("Email already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  return user;
};
