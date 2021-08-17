import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, isActiveInHomePage } = request.body;
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
    await createCategoryUseCase.execute({ name, isActiveInHomePage });
    return response.status(201).send();
  }
}

export { CreateCategoryController };
