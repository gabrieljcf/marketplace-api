import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

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

  if (!authHeader) throw new AppError("Token missing", 404);

  const [, token] = authHeader.split(" ");
  try {
    const { sub: userId, isAdmin } = verify(
      token,
      "06ac222233fd6103d28fdbb90592c06b"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findByFilters({ _id: userId });

    if (!user) throw new AppError("User dows not exists!", 404);

    next();
  } catch (error) {
    throw new AppError("Invalid Token");
  }
}
