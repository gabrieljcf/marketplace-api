import { Router } from "express";

import { CreateCategoryController } from "../modules/category/usecases/createCategory/CreateCategoryController";
import { ListCategoriesController } from "../modules/category/usecases/listCategories/ListCategoriesController";
import { UpdateCategoryController } from "../modules/category/usecases/updateCategory/UpdateCategoryController";

const categoryRouter = Router();

const listCategoriesController = new ListCategoriesController();
const createCategoryController = new CreateCategoryController();
const updateCategoryController = new UpdateCategoryController();

categoryRouter.get("/", listCategoriesController.handle);
categoryRouter.post("/", createCategoryController.handle);
categoryRouter.put("/:id", updateCategoryController.handle);

export { categoryRouter };
