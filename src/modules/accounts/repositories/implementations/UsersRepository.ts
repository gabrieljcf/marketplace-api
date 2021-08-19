import { IPagination } from "../../../../shared/interfaces/IPagination";
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

  public async list({
    page,
    limit,
    skip,
  }: IPagination): Promise<Partial<ISaveUserDocument>[] | []> {
    const users = await User.find({ isActive: true })
      .skip(skip)
      .limit(limit)
      .collation({ locale: "en" })
      .sort({ name: 1 })
      .exec();
    const count = await User.find({ isActive: true }).countDocuments();
    const totalPages = Math.ceil(count / limit);

    // const usersWithoutPassword = users.map((user) => ({
    //   id: user._id,
    //   name: user.name,
    //   email: user.email,
    //   isAdmin: user.isAdmin,
    // }));

    const usersData = {
      ...users,
      currentPage: page,
      totalPages,
    };

    return usersData;
  }

  public async findByFilters(
    filters: IFiltersUsers
  ): Promise<ISaveUserDocument[] | []> {
    const users = await User.find(filters);
    return users;
  }

  public async findByemail(email: string): Promise<ISaveUserDocument> {
    const user = await User.findOne({ email });
    return user;
  }

  public async delete(id: string): Promise<void> {
    await User.deleteOne({ _id: id });
  }

  public async update(
    id: string,
    userData: Partial<ISaveUserDocument>
  ): Promise<void> {
    await User.findByIdAndUpdate(
      id,
      {
        $set: userData,
      },
      { new: true }
    );
  }
}

export { UsersRepository };
