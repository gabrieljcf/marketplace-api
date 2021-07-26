import { inject, injectable } from "tsyringe";

import { formatSearchText } from "../../../../shared/utils/formatSearchText";
import { ISaveCategoryDocument } from "../../interfaces/ICategory";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  id: string;
  name: string;
  isActiveInHomePage: boolean;
}

@injectable()
class UpdateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}

  public async execute({
    id,
    name,
    isActiveInHomePage,
  }: IRequest): Promise<ISaveCategoryDocument> {
    const nameSearch = formatSearchText(name);
    const categoryData = {
      name,
      nameSearch,
      isActiveInHomePage,
    };

    const category = await this.categoryRepository.update(id, categoryData);
    return category;
  }
}

export { UpdateCategoryUseCase };
