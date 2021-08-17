import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { page, limit } = request.query;
    const listUsersUseCase = container.resolve(ListUsersUseCase);

    const users = await listUsersUseCase.execute({
      page: +page,
      limit: +limit,
    });
    return response.status(200).json(users);
  }
}

export { ListUsersController };
