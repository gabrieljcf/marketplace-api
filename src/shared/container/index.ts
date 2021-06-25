import { container } from "tsyringe";

import { ProductRepository } from "../../modules/products/repositories/implementations/ProductsRepository";
import { IProductsRepository } from "../../modules/products/repositories/IProductsRepository";

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductRepository
);
