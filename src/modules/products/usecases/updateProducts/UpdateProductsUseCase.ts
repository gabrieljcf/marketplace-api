import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { formatSearchText } from "../../../../shared/utils/formatSearchText";
import { ISavedProductDocument } from "../../interfaces/IProducts";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class UpdateProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private repository: IProductsRepository
  ) {}

  public async execute(id: string, data: ISavedProductDocument): Promise<void> {
    const productExists = await this.repository.findById(id);
    if (!productExists) throw new AppError("Product not found", 404);

    const nameSearch = formatSearchText(data.name);
    const productData = {
      ...data,
      nameSearch,
    };

    await this.repository.update(id, productData);
  }
}

export { UpdateProductsUseCase };
