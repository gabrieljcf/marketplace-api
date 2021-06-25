import { inject, injectable } from "tsyringe";

import { ISavedProductDocument } from "../../interfaces/ISavedProductDocument";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class ListProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private productRepository: IProductsRepository
  ) {}

  public async execute(): Promise<ISavedProductDocument[] | undefined> {
    const products = await this.productRepository.list();
    return products;
  }
}

export { ListProductsUseCase };
