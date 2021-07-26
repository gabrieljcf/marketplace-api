import { inject, injectable } from "tsyringe";

import { formatSearchText } from "../../../../shared/utils/formatSearchText";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  isActiveInHomePage: boolean;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}

  public async execute({ name, isActiveInHomePage }: IRequest): Promise<void> {
    const nameSearch = formatSearchText(name);
    const categoryData = { name, nameSearch, isActiveInHomePage };
    await this.categoryRepository.create(categoryData);
  }
}

export { CreateCategoryUseCase };
