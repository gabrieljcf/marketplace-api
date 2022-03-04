import { inject, injectable } from "tsyringe";

import { mongoose } from "../../../../database";
import { formatText } from "../../../../shared/utils/formatSearchText";
import { IProductsResponse } from "../../interfaces/IProducts";
import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
  isActive?: boolean | any;
  name?: string | any;
  category?: string | any;
  page?: number;
  limit?: number;
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
    page,
    limit,
  }: IRequest): Promise<IProductsResponse | []> {
    const nameSearch = name ? formatText(name) : null;
    const filters = {
      nameSearch,
      isActive,
      category,
    };
    if (!isActive) delete filters.isActive;
    if (!nameSearch) delete filters.nameSearch;
    if (!category) delete filters.category;
    if (category) filters.category = mongoose.Types.ObjectId(category);

    const limitPages = !isNaN(limit) ? limit * 1 : 10;
    const currentPage = page || 1;
    const skip = (page - 1) * limitPages;

    const products = await this.productRepository.list(filters, {
      page: currentPage,
      limit: limitPages,
      skip,
    });

    return products;
  }
}

export { ListProductsUseCase };
