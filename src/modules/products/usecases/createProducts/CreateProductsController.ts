import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductsUseCase } from "./CreateProductsUseCase";

class CreateProductsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, price } = request.body;
      const createProduct = container.resolve(CreateProductsUseCase);
      await createProduct.execute({ name, price });
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: "Erro ao Cadastrar Produto" });
    }
  }
}

export { CreateProductsController };
