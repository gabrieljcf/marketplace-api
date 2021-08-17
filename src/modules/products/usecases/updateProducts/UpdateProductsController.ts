import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProductsUseCase } from "./UpdateProductsUseCase";

class UpdateProductsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const productData = { ...request.body };
    const updateProductUseCase = container.resolve(UpdateProductsUseCase);
    await updateProductUseCase.execute(id, productData);
    return response.status(200).send();
  }
}

export { UpdateProductsController };
