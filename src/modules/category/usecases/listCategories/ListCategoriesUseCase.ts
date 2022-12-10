import { inject, injectable } from "tsyringe";

import { formatText } from "../../../../shared/utils/formatSearchText";
import { ISaveCategoryDocument } from "../../interfaces/ICategory";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  isActive?: boolean;
  name?: string;
  page?: number;
  limit?: number;
}

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  public async execute({
    isActive,
    name,
    page,
    limit,
  }: IRequest): Promise<ISaveCategoryDocument[] | undefined> {
    const nameSearch = name ? formatText(name) : null;
    const filters = {
      nameSearch,
      isActive,
    };

    if (!isActive) delete filters.isActive;
    if (!nameSearch) delete filters.nameSearch;

    const limitPages = limit ? limit * 1 : 10;
    const currentPage = page || 1;
    const skip = limit * (page - 1);

    const categories = await this.categoriesRepository.list(filters, {
      limit: limitPages,
      page: currentPage,
      skip,
    });
    return categories;
  }
}

export { ListCategoriesUseCase };
