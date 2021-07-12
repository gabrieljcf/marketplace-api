import { inject, injectable } from "tsyringe";

import { formatSearchText } from "../../../../shared/utils/formatSearchText";
import { ISavedProductDocument } from "../../interfaces/IProducts";
import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
  isActive?: boolean | any;
  name?: string | any;
  category?: string | any;
}

@injectable()
class ListProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private productRepository: IProductsRepository
  ) {}

  public async execute({
    isActive,
    name,
    category,
  }: IRequest): Promise<ISavedProductDocument[] | undefined> {
    const nameSearch = name ? formatSearchText(name) : null;
    const filters = {
      nameSearch,
      isActive,
      category,
    };

    if (!isActive) delete filters.isActive;
    if (!nameSearch) delete filters.nameSearch;
    if (!category) delete filters.category;
    const products = await this.productRepository.list(filters);
    return products;
  }
}

export { ListProductsUseCase };
