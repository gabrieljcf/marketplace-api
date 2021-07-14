import { ISaveCategoryDocument } from "../../interfaces/ICategory";
import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  public async list(): Promise<ISaveCategoryDocument[]> {
    const categories = await Category.find();

    return categories;
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
