import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { userId } = request.params;
      const deleteUserUseCase = container.resolve(DeleteUserUseCase);
      await deleteUserUseCase.execute(userId);
      return response.status(200).send();
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}

export { DeleteUserController };
