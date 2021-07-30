import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listUsersUseCase = container.resolve(ListUsersUseCase);

      const users = await listUsersUseCase.execute();
      return response.status(200).json(users);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}

export { ListUsersController };
