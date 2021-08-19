import { Router } from "express";
import multer from "multer";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateProductsController } from "../modules/products/usecases/createProducts/CreateProductsController";
import { DeleteProductController } from "../modules/products/usecases/deleteProducts/DeleteProductController";
import { ImportProductsController } from "../modules/products/usecases/importProducts/ImportProductsController";
import { ListProductController } from "../modules/products/usecases/listProduct/ListProductController";
import { ListProductsController } from "../modules/products/usecases/listProducts/ListProductsController";
import { UpdateManyProductsController } from "../modules/products/usecases/updateManyProducts/UpdateManyProductsController";
import { UpdateProductsController } from "../modules/products/usecases/updateProducts/UpdateProductsController";

const productRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const listProductsController = new ListProductsController();
const listProductController = new ListProductController();
const createProductsController = new CreateProductsController();
const importProductsController = new ImportProductsController();
const updateProductsController = new UpdateProductsController();
const deleteProductController = new DeleteProductController();
const updateManyProductsController = new UpdateManyProductsController();

productRoutes.get("/", listProductsController.handle);
productRoutes.get("/:id", listProductController.handle);
productRoutes.post("/", ensureAuthenticated, createProductsController.handle);
productRoutes.post(
  "/import",
  upload.single("file"),
  ensureAuthenticated,
  importProductsController.handle
);
productRoutes.put("/:id", ensureAuthenticated, updateProductsController.handle);
productRoutes.delete(
  "/:id",
  ensureAuthenticated,
  deleteProductController.handle
);
productRoutes.patch(
  "/many",
  ensureAuthenticated,
  updateManyProductsController.handle
);

export { productRoutes };
