import { inject, injectable } from "tsyringe";

import { formatSearchText } from "../../../../shared/utils/formatSearchText";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}

  public async execute(name: string): Promise<void> {
    const nameSearch = formatSearchText(name);
    const categoryData = { name, nameSearch };
    await this.categoryRepository.create(categoryData);
  }
}

export { CreateCategoryUseCase };
