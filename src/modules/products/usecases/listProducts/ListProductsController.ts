import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProductsUseCase } from "./ListProductsUseCase";

class ListProductsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listProductsUseCase = container.resolve(ListProductsUseCase);
      const products = await listProductsUseCase.execute();

      return response.json(products);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}

export { ListProductsController };
