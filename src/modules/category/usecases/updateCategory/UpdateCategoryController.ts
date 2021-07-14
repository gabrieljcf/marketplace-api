import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

class UpdateCategoryController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name } = request.body;
      const { id } = request.params;
      const updateCategoryUseCase = container.resolve(UpdateCategoryUseCase);
      const category = await updateCategoryUseCase.execute({ id, name });
      return response.status(200).json(category);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { UpdateCategoryController };
