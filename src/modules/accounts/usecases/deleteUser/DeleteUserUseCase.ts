import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute(userId: string): Promise<void> {
    await this.usersRepository.delete(userId);
  }
}

export { DeleteUserUseCase };
