import { NextFunction, Request, Response } from "express";

import { AppError } from "../errors/AppError";

export default (
  error: Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): Response => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }
  return response
    .status(500)
    .json({ message: `Internal server Error ${error.message}` });
};
