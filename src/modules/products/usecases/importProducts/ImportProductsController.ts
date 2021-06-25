import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportProductsUseCase } from "./ImportProductsUseCase";

class ImportProductsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    const importProduct = container.resolve(ImportProductsUseCase);
    await importProduct.execute(file);

    return response.status(201).send();
  }
}

export { ImportProductsController };
