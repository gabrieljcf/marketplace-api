import { ISaveCategoryDocument } from "../interfaces/ICategory";

interface ICategoriesRepository {
  list(): Promise<ISaveCategoryDocument[] | undefined>;
  create({ name, nameSearch }: ISaveCategoryDocument): Promise<void>;
  update(
    id: string,
    categoryData: ISaveCategoryDocument
  ): Promise<ISaveCategoryDocument>;
}

export { ICategoriesRepository };
