import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProductsUseCase } from "./UpdateProductsUseCase";

class UpdateProductsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const productData = { ...request.body };
      const updateProductUseCase = container.resolve(UpdateProductsUseCase);

      await updateProductUseCase.execute(id, productData);
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { UpdateProductsController };
