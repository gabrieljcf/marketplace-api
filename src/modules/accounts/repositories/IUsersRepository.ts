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

  list(): Promise<ISaveUserDocument[] | []>;

  findByFilters(filters: IFiltersUsers): Promise<ISaveUserDocument[] | []>;
}

export { IUsersRepository };
