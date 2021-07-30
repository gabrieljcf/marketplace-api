import { Request, Response } from "express";
import { container } from "tsyringe";

import { FiltersUsersUseCase } from "./FiltersUsersUseCase";

class FiltersUsersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, id, email, isActive } = request.query;
    try {
      const filterUsersUseCase = container.resolve(FiltersUsersUseCase);
      const users = await filterUsersUseCase.execute({
        name,
        id,
        email,
        isActive,
      });

      return response.json(users);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}

export { FiltersUsersController };
