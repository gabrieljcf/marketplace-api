import { container, inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ISavedProductDocument } from "../../../products/interfaces/IProducts";
import { ListProductsUseCase } from "../../../products/usecases/listProducts/ListProductsUseCase";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class DeleteCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  public async execute(categoryId: string): Promise<void | Error> {
    const productUseCase = container.resolve(ListProductsUseCase);
    const productWithCategory = (await productUseCase.execute({
      category: categoryId,
    })) as ISavedProductDocument;

    const categoryExists = await this.categoriesRepository.findOne(categoryId);

    if (!categoryExists)
      throw new AppError("Categoria não encontrada, verifique!", 404);

    if (productWithCategory.totalPages > 0)
      throw new AppError(
        "Existe produtos associados a essa categoria, por favor exclua o produto antes",
        400
      );

    await this.categoriesRepository.delete(categoryId);
  }
}

export { DeleteCategoryUseCase };
