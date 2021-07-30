import { Router } from "express";

import { CreateUserController } from "../modules/accounts/usecases/createUser/CreateUserController";
import { FiltersUsersController } from "../modules/accounts/usecases/filterUsers/FiltersUsersController";
import { ListUsersController } from "../modules/accounts/usecases/listUsers/ListUsersController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const filtersUsersController = new FiltersUsersController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUsersController.handle);
usersRoutes.get("/filter", filtersUsersController.handle);

export { usersRoutes };
