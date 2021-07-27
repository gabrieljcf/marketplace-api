import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { formatSearchText } from "../../../../shared/utils/formatSearchText";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequestDTO {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute({
    name,
    email,
    password,
    isAdmin,
  }: IRequestDTO): Promise<void> {
    const nameSearch = formatSearchText(name);
    const passwordHash = await hash(password, 8);
    const userData = {
      name,
      nameSearch,
      email,
      password: passwordHash,
      isAdmin,
    };

    await this.usersRepository.create(userData);
  }
}

export { CreateUserUseCase };
