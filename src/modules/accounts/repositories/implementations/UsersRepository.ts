import { IFiltersUsers } from "../../interfaces/IFiltersUsers";
import { ISaveUserDocument } from "../../interfaces/IUser";
import { User } from "../../models/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  public async create({
    name,
    nameSearch,
    email,
    password,
    isAdmin,
  }: ISaveUserDocument): Promise<void> {
    const user = new User({ name, nameSearch, email, password, isAdmin });

    await user.save();
  }

  public async list(): Promise<ISaveUserDocument[]> {
    const users = await User.find({ isActive: true });
    return users;
  }

  public async findByFilters(
    filters: IFiltersUsers
  ): Promise<ISaveUserDocument[] | []> {
    const users = await User.find(filters);
    return users;
  }
}

export { UsersRepository };
