import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductsUseCase } from "./CreateProductsUseCase";

class CreateProductsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, price, category, description, images } = request.body;
    const createProduct = container.resolve(CreateProductsUseCase);
    await createProduct.execute({
      name,
      price,
      category,
      description,
      images,
    });
    return response.status(201).send();
  }
}

export { CreateProductsController };
