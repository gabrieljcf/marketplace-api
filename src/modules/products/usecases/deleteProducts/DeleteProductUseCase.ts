import { inject, injectable } from "tsyringe";

import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class DeleteProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private repository: IProductsRepository
  ) {}

  public async execute(id: string): Promise<void> {
    const productsExists = await this.repository.findById(id);
    if (!productsExists) throw new Error("Product not found");
    await this.repository.delete(id);
  }
}

export { DeleteProductUseCase };
