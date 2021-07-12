import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name } = request.body;
      const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
      await createCategoryUseCase.execute(name);
      return response.status(201).send();
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Erro ao Cadastrar Produto" });
    }
  }
}

export { CreateCategoryController };
