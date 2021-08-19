import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/usecases/createUser/CreateUserController";
import { DeleteUserController } from "../modules/accounts/usecases/deleteUser/DeleteUserController";
import { FiltersUsersController } from "../modules/accounts/usecases/filterUsers/FiltersUsersController";
import { ListUsersController } from "../modules/accounts/usecases/listUsers/ListUsersController";
import { UpdateUserController } from "../modules/accounts/usecases/updateUser/UpdateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const filtersUsersController = new FiltersUsersController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();

usersRoutes.post("/", ensureAuthenticated, createUserController.handle);
usersRoutes.get("/", listUsersController.handle);
usersRoutes.get("/filter", filtersUsersController.handle);
usersRoutes.put("/:userId", ensureAuthenticated, updateUserController.handle);
usersRoutes.delete(
  "/:userId",
  ensureAuthenticated,
  deleteUserController.handle
);

export { usersRoutes };
