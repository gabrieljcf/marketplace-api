import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

class DeleteCategoryController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { categoryId } = request.params;
      const deleteCategoryUseCase = container.resolve(DeleteCategoryUseCase);
      await deleteCategoryUseCase.execute(categoryId);
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { DeleteCategoryController };
