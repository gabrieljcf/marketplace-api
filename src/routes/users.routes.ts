import { Router } from "express";

import { CreateUserController } from "../modules/accounts/usecases/createUser/CreateUserController";
import { DeleteUserController } from "../modules/accounts/usecases/deleteUser/DeleteUserController";
import { FiltersUsersController } from "../modules/accounts/usecases/filterUsers/FiltersUsersController";
import { ListUsersController } from "../modules/accounts/usecases/listUsers/ListUsersController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const filtersUsersController = new FiltersUsersController();
const deleteUserController = new DeleteUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUsersController.handle);
usersRoutes.get("/filter", filtersUsersController.handle);
usersRoutes.delete("/:userId", deleteUserController.handle);

export { usersRoutes };
