import {
  ICategoryFilters,
  ISaveCategoryDocument,
} from "../../interfaces/ICategory";
import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  public async list(
    filters: ICategoryFilters
  ): Promise<ISaveCategoryDocument[] | []> {
    const categories = await Category.find(filters, {
      id: true,
      name: true,
      nameSearch: true,
    })
      .collation({ locale: "en" })
      .sort({ name: 1 })
      .exec();

    return categories;
  }

  public async findOne(categoryId: string): Promise<ISaveCategoryDocument> {
    const category = await Category.findById(categoryId);
    return category;
  }

  public async create({
    name,
    nameSearch,
    isActiveInHomePage,
  }: ISaveCategoryDocument): Promise<void> {
    const category = new Category({ name, nameSearch, isActiveInHomePage });
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

  public async delete(categoryId: string): Promise<void> {
    await Category.deleteOne({ _id: categoryId });
  }
}

export { CategoriesRepository };
