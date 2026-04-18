import type { Context } from "hono";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import { signRefreshToken, signToken, verifyRefreshToken } from "../utils/jwt";
import crypto from "crypto";
import { RefreshToken } from "../models/refreshToken.model";

export const login = async (c: Context) => {
  const body = await c.req.json();
  const email = body.email;
  const password = body.password;

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    return c.json({ message: "Email or Password is invalid" }, 401);
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return c.json({ message: "Email or Password is invalid" }, 401);
  }

  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  const accessToken = signToken(payload);
  const refreshToken = signRefreshToken(payload);

  const tokenHash = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  await RefreshToken.create({
    userId: user.id,
    tokenHash,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  return c.json({
    message: "Login Success",
    user: {
      id: user.id,
      uuid: user.uuid,
      username: user.username,
      email: user.email,
      image: user.image,
      bio: user.bio,
      location: user.location,
      experience: user.experience,
      education: user.education,
      skills: user.skills,
      documents: user.documents,
      companyId: user.companyId,
      role: user.role,
    },
    accessToken: accessToken,
    refreshToken: refreshToken,
  });
};

export const refresh = async (c: Context) => {
  const { refreshToken } = await c.req.json();

  if (!refreshToken) {
    return c.json({ message: "Refresh token required" }, 401);
  }

  const payload = verifyRefreshToken(refreshToken);

  const tokenHash = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  const stored = await RefreshToken.findOne({
    where: {
      userId: payload.id,
      tokenHash,
    },
  });

  if (!stored) {
    return c.json({ message: "Invalid refresh token" }, 401);
  }

  if (stored.expiresAt < new Date()) {
    await stored.destroy();
    return c.json({ message: "Refresh token expired" }, 401);
  }

  const newAccessToken = signToken({
    id: payload.id,
    email: payload.email,
    role: payload.role,
  });

  return c.json({ accessToken: newAccessToken });
};

export const logout = async (c: Context) => {
  const authUser = c.get("user") as { id: number };
  const { refreshToken } = await c.req.json();

  const tokenHash = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  await RefreshToken.destroy({
    where: {
      userId: authUser.id,
      tokenHash,
    },
  });

  return c.json({ message: "Logout success" });
};

export const me = async (c: Context) => {
  const authUser = c.get("user") as { id: number };

  if (!authUser?.id) {
    return c.json({ message: "Unauthorized" }, 401);
  }

  const user = await User.findByPk(authUser.id, {
    attributes: [
      "id",
      "uuid",
      "username",
      "email",
      "image",
      "bio",
      "location",
      "experience",
      "education",
      "skills",
      "documents",
      "role",
      "companyId",
    ],
  });

  if (!user) {
    return c.json({ message: "User not found" }, 404);
  }

  return c.json(user);
};
