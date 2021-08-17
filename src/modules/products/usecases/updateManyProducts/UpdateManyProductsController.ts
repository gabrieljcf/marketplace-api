import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateManyProductsUseCase } from "./UpdateManyProductsUseCase";

class UpdateManyProductsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { productsIds, categoryId } = request.body;
    const updateManyProductsUseCase = container.resolve(
      UpdateManyProductsUseCase
    );

    const products = await updateManyProductsUseCase.execute(
      productsIds,
      categoryId
    );
    return response.status(200).json(products);
  }
}

export { UpdateManyProductsController };
