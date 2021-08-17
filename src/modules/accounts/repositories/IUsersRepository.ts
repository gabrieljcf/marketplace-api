import { IPagination } from "../../../shared/interfaces/IPagination";
import { IFiltersUsers } from "../interfaces/IFiltersUsers";
import { ISaveUserDocument } from "../interfaces/IUser";

interface IUsersRepository {
  create({
    name,
    nameSearch,
    email,
    password,
    isAdmin,
  }: ISaveUserDocument): Promise<void>;

  list(pagination: IPagination): Promise<Partial<ISaveUserDocument>[] | []>;

  findByFilters(filters: IFiltersUsers): Promise<ISaveUserDocument[] | []>;

  delete(id: string): Promise<void>;
}

export { IUsersRepository };
