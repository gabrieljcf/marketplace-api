import { Router } from "express";

import { CreateCategoryController } from "../modules/category/usecases/createCategory/CreateCategoryController";
import { ListCategoriesController } from "../modules/category/usecases/listCategories/ListCategoriesController";

const categoryRouter = Router();

const listCategoriesController = new ListCategoriesController();
const createCategoryController = new CreateCategoryController();

categoryRouter.get("/", listCategoriesController.handle);
categoryRouter.post("/", createCategoryController.handle);

export { categoryRouter };
