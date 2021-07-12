import { inject, injectable } from "tsyringe";

import { ISaveCategoryDocument } from "../../interfaces/ICategory";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  public async execute(): Promise<ISaveCategoryDocument[] | undefined> {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}

export { ListCategoriesUseCase };
