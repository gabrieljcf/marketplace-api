import { IPagination } from "../../../shared/interfaces/IPagination";
import {
  ICategoryFilters,
  ISaveCategoryDocument,
  IResponseCategories,
} from "../interfaces/ICategory";

interface ICategoriesRepository {
  list(
    filters: ICategoryFilters,
    pagination: IPagination
  ): Promise<IResponseCategories>;

  findOne(id: string): Promise<ISaveCategoryDocument | []>;

  create({
    name,
    nameSearch,
    isActiveInHomePage,
  }: ISaveCategoryDocument): Promise<void>;

  update(
    id: string,
    categoryData: ISaveCategoryDocument
  ): Promise<ISaveCategoryDocument>;

  delete(categoryId: string): Promise<void>;
}

export { ICategoriesRepository };
