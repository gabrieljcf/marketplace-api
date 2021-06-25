import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProductUseCase } from "./ListProductUseCase";

class ListProductController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id: productId } = request.params;
      const listProductUseCase = container.resolve(ListProductUseCase);
      const product = await listProductUseCase.execute(productId);

      return response.json(product);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}

export { ListProductController };
