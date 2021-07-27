import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password, isAdmin } = request.body;
      const createUserUseCase = container.resolve(CreateUserUseCase);
      await createUserUseCase.execute({ name, email, password, isAdmin });

      return response.status(201).send();
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}

export { CreateUserController };
