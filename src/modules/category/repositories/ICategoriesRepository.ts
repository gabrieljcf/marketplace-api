import { ISaveCategoryDocument } from "../interfaces/ICategory";

interface ICategoriesRepository {
  list(): Promise<ISaveCategoryDocument[] | undefined>;
  create({ name, nameSearch }: ISaveCategoryDocument): Promise<void>;
}

export { ICategoriesRepository };
