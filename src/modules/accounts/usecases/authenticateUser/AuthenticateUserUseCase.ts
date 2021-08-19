import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  userData: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByemail(email);
    if (!user) throw new AppError("Email or password incorrect!", 400);

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) throw new AppError("Email or password incorrect!", 400);

    const userId = user._id.toString();
    const token = sign(
      {
        isAdmin: user.isAdmin,
      },
      "06ac222233fd6103d28fdbb90592c06b",
      {
        subject: userId,
        expiresIn: "1d",
      }
    );

    const userData = { name: user.name, email: user.email };

    return {
      userData,
      token,
    };
  }
}

export { AuthenticateUserUseCase };
