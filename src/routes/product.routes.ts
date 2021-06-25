import { Router } from "express";
import multer from "multer";

import { CreateProductsController } from "../modules/products/usecases/createProducts/CreateProductsController";
import { DeleteProductController } from "../modules/products/usecases/deleteProducts/DeleteProductController";
import { ImportProductsController } from "../modules/products/usecases/importProducts/ImportProductsController";
import { ListProductController } from "../modules/products/usecases/listProduct/ListProductController";
import { ListProductsController } from "../modules/products/usecases/listProducts/ListProductsController";
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

productRoutes.get("/", listProductsController.handle);
productRoutes.get("/:id", listProductController.handle);
productRoutes.post("/", createProductsController.handle);
productRoutes.post(
  "/import",
  upload.single("file"),
  importProductsController.handle
);
productRoutes.put("/:id", updateProductsController.handle);
productRoutes.delete("/:id", deleteProductController.handle);

export { productRoutes };
