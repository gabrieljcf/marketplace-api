import { injectable, inject } from "tsyringe";

import { ICreateProductDTO } from "../../interfaces/ICreateProductDTO";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class CreateProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private productRepository: IProductsRepository
  ) {}

  public async execute({ name, price }: ICreateProductDTO): Promise<void> {
    const productData = { name, price };
    await this.productRepository.create(productData);
  }
}

export { CreateProductsUseCase };
