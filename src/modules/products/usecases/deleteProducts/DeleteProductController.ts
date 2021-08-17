import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteProductUseCase } from "./DeleteProductUseCase";

class DeleteProductController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteProductUseCase = container.resolve(DeleteProductUseCase);
    await deleteProductUseCase.execute(id);

    return response.status(201).send();
  }
}

export { DeleteProductController };
