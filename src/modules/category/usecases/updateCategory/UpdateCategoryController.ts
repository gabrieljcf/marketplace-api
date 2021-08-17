import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

class UpdateCategoryController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, isActiveInHomePage } = request.body;
    const { id } = request.params;
    const updateCategoryUseCase = container.resolve(UpdateCategoryUseCase);
    const category = await updateCategoryUseCase.execute({
      id,
      name,
      isActiveInHomePage,
    });
    return response.status(200).json(category);
  }
}

export { UpdateCategoryController };
