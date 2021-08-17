import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;
    const { name, isAdmin, isActive } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    const userData = {
      name,
      isAdmin,
      isActive,
    };

    await updateUserUseCase.execute(userId, userData);
    return response.status(200).send();
  }
}

export { UpdateUserController };
