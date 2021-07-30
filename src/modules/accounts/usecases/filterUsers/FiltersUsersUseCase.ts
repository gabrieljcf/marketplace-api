import { Types } from "mongoose";
import { inject, injectable } from "tsyringe";

import { formatSearchText } from "../../../../shared/utils/formatSearchText";
import { ISaveUserDocument } from "../../interfaces/IUser";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name?: string | any;
  id?: string | any;
  isActive?: boolean | any;
  email?: string | any;
}

@injectable()
class FiltersUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute({
    name,
    id,
    email,
    isActive,
  }: IRequest): Promise<ISaveUserDocument[] | ISaveUserDocument | []> {
    const nameSearch = name ? formatSearchText(name) : null;
    const filters = {
      nameSearch,
      _id: Types.ObjectId(id),
      email,
      isActive,
    };
    if (!id) delete filters._id;
    if (!nameSearch) delete filters.nameSearch;
    if (!email) delete filters.email;
    if (!isActive) delete filters.isActive;

    const users = await this.usersRepository.findByFilters(filters);

    return users;
  }
}

export { FiltersUsersUseCase };
