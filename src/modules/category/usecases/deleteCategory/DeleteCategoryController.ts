import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

class DeleteCategoryController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteCategoryUseCase = container.resolve(DeleteCategoryUseCase);
    await deleteCategoryUseCase.execute(id);
    return response.status(201).send();
  }
}

export { DeleteCategoryController };
