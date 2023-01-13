import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { Types } from "mongoose";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
  isAdmin: boolean;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new AppError("Token missing", 401);

  const [, token] = authHeader.split(" ");
  try {
    const { sub: userId, isAdmin } = verify(
      token,
      process.env.SECRET_KEY
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findByFilters({
      _id: Types.ObjectId(userId),
    });

    if (!user) throw new AppError("User dows not exists!", 401);

    request.user = {
      _id: userId,
      isAdmin,
    };

    next();
  } catch (error) {
    throw new AppError("Invalid Token");
  }
}
