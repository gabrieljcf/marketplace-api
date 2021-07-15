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

  create({ name, nameSearch }: ISaveCategoryDocument): Promise<void>;

  update(
    id: string,
    categoryData: ISaveCategoryDocument
  ): Promise<ISaveCategoryDocument>;
}

export { ICategoriesRepository };
