import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);
      const categories = await listCategoriesUseCase.execute();

      return response.json(categories);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}

export { ListCategoriesController };
