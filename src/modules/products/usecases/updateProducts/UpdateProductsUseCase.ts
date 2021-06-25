import { inject, injectable } from "tsyringe";

import { ISavedProductDocument } from "../../interfaces/ISavedProductDocument";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class UpdateProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private repository: IProductsRepository
  ) {}

  public async execute(
    id: string,
    productData: ISavedProductDocument
  ): Promise<void> {
    const productExists = await this.repository.findById(id);
    if (!productExists) throw new Error("Product not found");

    await this.repository.update(id, productData);
  }
}

export { UpdateProductsUseCase };
