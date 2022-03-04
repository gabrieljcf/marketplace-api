import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, isAdmin, isActive } = request.body;
    const { user } = request;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    const userData = {
      name,
      isAdmin,
      isActive,
    };

    const loggedUser = user;
    await updateUserUseCase.execute(id, userData, loggedUser);
    return response.status(200).send();
  }
}

export { UpdateUserController };
