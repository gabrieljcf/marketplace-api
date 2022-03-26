import { IPagination } from "../../../shared/interfaces/IPagination";
import {
  ICategoryFilters,
  ISaveCategoryDocument,
} from "../interfaces/ICategory";

interface ICategoriesRepository {
  list(
    filters: ICategoryFilters,
    pagination: IPagination
  ): Promise<ISaveCategoryDocument[] | []>;

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
