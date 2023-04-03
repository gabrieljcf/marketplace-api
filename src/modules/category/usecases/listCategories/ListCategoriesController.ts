import { Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

type Request = {
  query: {
    isActive?: boolean;
    name?: string;
    page?: number;
    limit?: number;
  };
};
class ListCategoriesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { isActive, name, page, limit } = request.query;

    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);
    const categories = await listCategoriesUseCase.execute({
      isActive,
      name,
      page: +page,
      limit: +limit,
    });

    return response.json(categories);
  }
}

export { ListCategoriesController };
