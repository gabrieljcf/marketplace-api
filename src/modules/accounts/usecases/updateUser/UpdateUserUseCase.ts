import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { formatSearchText } from "../../../../shared/utils/formatSearchText";
import { ISaveUserDocument } from "../../interfaces/IUser";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  _id: string;
  isAdmin: boolean;
}

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute(
    id: string,
    { name, isActive, isAdmin }: Partial<ISaveUserDocument>,
    loggedUser: IRequest
  ): Promise<void> {
    if (!loggedUser.isAdmin) {
      throw new AppError("Unauthorized user", 401);
    }

    const nameSearch = formatSearchText(name);
    const userData = { name, nameSearch, isActive, isAdmin };

    if (!isActive) delete userData.isActive;
    if (!name) delete userData.name;
    if (!isAdmin) delete userData.isAdmin;

    await this.usersRepository.update(id, userData);
  }
}

export { UpdateUserUseCase };
