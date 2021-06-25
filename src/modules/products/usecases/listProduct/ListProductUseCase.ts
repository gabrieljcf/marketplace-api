import { inject, injectable } from "tsyringe";

import { ISavedProductDocument } from "../../interfaces/ISavedProductDocument";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class ListProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productRepository: IProductsRepository
  ) {}

  public async execute(id: string): Promise<ISavedProductDocument | undefined> {
    const product = await this.productRepository.findById(id);
    return product;
  }
}

export { ListProductUseCase };
