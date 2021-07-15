import { IPagination } from "../../../../shared/interfaces/IPagination";
import {
  ICategoryFilters,
  ISaveCategoryDocument,
} from "../../interfaces/ICategory";
import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  public async list(
    filters: ICategoryFilters,
    { page, limit, skip }: IPagination
  ): Promise<ISaveCategoryDocument[] | []> {
    const categories = await Category.find(filters)
      .skip(skip)
      .limit(limit)
      .exec();
    const count = await Category.find(filters).count();
    const totalPages = Math.ceil(count / limit);

    const categoriesData = {
      ...categories,
      currentPage: page,
      totalPages,
    };

    return categoriesData;
  }

  public async create({
    name,
    nameSearch,
  }: ISaveCategoryDocument): Promise<void> {
    const category = new Category({ name, nameSearch });
    await category.save();
  }

  public async update(
    id: string,
    categoryData: ISaveCategoryDocument
  ): Promise<ISaveCategoryDocument> {
    const category = await Category.findByIdAndUpdate(
      id,
      {
        $set: categoryData,
      },
      { new: true }
    );
    return category;
  }
}

export { CategoriesRepository };
