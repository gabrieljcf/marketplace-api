import { Router } from "express";

import { CreateCategoryController } from "../modules/category/usecases/createCategory/CreateCategoryController";
import { DeleteCategoryController } from "../modules/category/usecases/deleteCategory/DeleteCategoryController";
import { ListCategoriesController } from "../modules/category/usecases/listCategories/ListCategoriesController";
import { UpdateCategoryController } from "../modules/category/usecases/updateCategory/UpdateCategoryController";

const categoryRouter = Router();

const listCategoriesController = new ListCategoriesController();
const createCategoryController = new CreateCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

categoryRouter.get("/", listCategoriesController.handle);
categoryRouter.post("/", createCategoryController.handle);
categoryRouter.put("/:id", updateCategoryController.handle);
categoryRouter.delete("/:categoryId", deleteCategoryController.handle);

export { categoryRouter };
