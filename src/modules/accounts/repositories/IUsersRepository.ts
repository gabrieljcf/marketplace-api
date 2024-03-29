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

  list(pagination: IPagination): Promise<ISaveUserDocument[] | []>;

  findByFilters(filters: IFiltersUsers): Promise<ISaveUserDocument[] | []>;

  findByEmail(email: string): Promise<ISaveUserDocument>;

  update(id: string, userData: Partial<ISaveUserDocument>): Promise<void>;

  delete(id: string): Promise<void>;
}

export { IUsersRepository };
