import { inject, injectable } from "tsyringe";

import { ISaveUserDocument } from "../../interfaces/IUser";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  isActive?: boolean | any;
  name?: string | any;
  page?: number;
  limit?: number;
}

@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute({
    page,
    limit,
  }: IRequest): Promise<Partial<ISaveUserDocument>[] | []> {
    const limitPages = limit ? limit * 1 : 10;
    const currentPage = page || 1;
    const skip = limit * (page - 1);

    const users = await this.usersRepository.list({
      limit: limitPages,
      page: currentPage,
      skip,
    });

    return users;
  }
}

export { ListUsersUseCase };
