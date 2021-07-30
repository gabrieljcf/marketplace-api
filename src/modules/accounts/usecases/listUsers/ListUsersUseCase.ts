import { inject, injectable } from "tsyringe";

import { ISaveUserDocument } from "../../interfaces/IUser";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute(): Promise<Partial<ISaveUserDocument>[] | []> {
    const users = await this.usersRepository.list();
    const usersWithoutPassword = users.map((user) => ({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    }));

    return usersWithoutPassword;
  }
}

export { ListUsersUseCase };
