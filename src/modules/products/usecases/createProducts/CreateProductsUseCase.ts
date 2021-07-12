import { injectable, inject } from "tsyringe";

import { formatSearchText } from "../../../../shared/utils/formatSearchText";
import { ICreateProductDTO } from "../../interfaces/ICreateProductDTO";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class CreateProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private productRepository: IProductsRepository
  ) {}

  public async execute({
    name,
    price,
    category,
  }: ICreateProductDTO): Promise<void> {
    const nameSearch = formatSearchText(name);

    const productData = { name, price, category, nameSearch };
    await this.productRepository.create(productData);
  }
}

export { CreateProductsUseCase };
