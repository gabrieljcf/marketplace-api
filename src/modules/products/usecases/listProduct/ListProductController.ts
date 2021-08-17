import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProductUseCase } from "./ListProductUseCase";

class ListProductController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id: productId } = request.params;
    const listProductUseCase = container.resolve(ListProductUseCase);
    const product = await listProductUseCase.execute(productId);

    return response.json(product);
  }
}

export { ListProductController };
