import { v4 as uuid } from "uuid";

import { AppError } from "../../../../errors/AppError";
import {
  ICategoryFilters,
  ISaveCategoryDocument,
} from "../../interfaces/ICategory";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoryRepositoryInMemory implements ICategoriesRepository {
  categories: ISaveCategoryDocument[] = [];

  async list(): Promise<ISaveCategoryDocument[] | []> {
    // filters: ICategoryFilters
    return this.categories;
  }

  async findOne(id: string): Promise<ISaveCategoryDocument> {
    const category = this.categories.find((category) => category.id === id);
    return category;
  }

  async findByName(name: string): Promise<ISaveCategoryDocument> {
    const category = this.categories.find((category) => category.name === name);
    if (!category) throw new AppError("Category not found");

    return category;
  }

  async create({
    name,
    nameSearch,
    isActiveInHomePage,
  }: ISaveCategoryDocument): Promise<void> {
    const category = { id: uuid(), name, nameSearch, isActiveInHomePage };
    this.categories.push(category);
  }

  async update(
    id: string,
    categoryData: ISaveCategoryDocument
  ): Promise<ISaveCategoryDocument> {
    const categoryIndex = this.categories.findIndex(
      (category) => category.id === id
    );
    if (!categoryIndex) throw new AppError("category does not exists", 404);
    this.categories[categoryIndex] = categoryData;

    return this.categories[categoryIndex];
  }

  async delete(categoryId: string): Promise<void> {
    const categoryIndex = this.categories.findIndex(
      (category) => category.id === categoryId
    );

    if (!categoryIndex) throw new AppError("category does not exists", 404);

    const categories = this.categories.filter(
      (category) => category.id !== categoryId
    );

    this.categories = categories;
  }
}

export { CategoryRepositoryInMemory };
