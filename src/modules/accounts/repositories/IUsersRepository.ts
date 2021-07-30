import { ISaveUserDocument } from "../interfaces/IUser";

interface IUsersRepository {
  create({
    name,
    nameSearch,
    email,
    password,
    isAdmin,
  }: ISaveUserDocument): Promise<void>;

  list(): Promise<ISaveUserDocument[]>;

  findByFilters(filters): Promise<ISaveUserDocument[] | ISaveUserDocument | []>;
}

export { IUsersRepository };
