import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;
    const deleteUserUseCase = container.resolve(DeleteUserUseCase);
    await deleteUserUseCase.execute(userId);
    return response.status(200).send();
  }
}

export { DeleteUserController };
