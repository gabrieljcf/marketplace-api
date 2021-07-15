import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProductsUseCase } from "./ListProductsUseCase";

class ListProductsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { isActive, name, category, page, limit } = request.query;

      const listProductsUseCase = container.resolve(ListProductsUseCase);
      const products = await listProductsUseCase.execute({
        isActive,
        name,
        category,
        page: +page,
        limit: +limit,
      });
      return response.json(products);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { ListProductsController };
